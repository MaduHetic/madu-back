provider "aws" {
  profile    = "default"
  region     = var.region
}

resource "aws_key_pair" "admin_madu" {
  key_name   = var.key_name
  public_key = file("~/.ssh/${var.admin_madu}.pub")
}

resource "aws_instance" "server" {
  ami           = var.ami
  instance_type = var.instance_type
  key_name      =  var.key_name

  security_groups = [
    aws_security_group.Madu.name
  ]
}

resource "aws_security_group" "Madu" {
  name = "Madu"

  ingress {
    # TLS (change to whatever ports you need)
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    # Please restrict your ingress to only necessary IPs and ports.
    # Opening to 0.0.0.0/0 can lead to security vulnerabilities.
    cidr_blocks     = ["0.0.0.0/0"]
  }

  ingress {
    from_port = 443
    to_port = 443
    protocol = "tcp"
    cidr_blocks     = ["0.0.0.0/0"]
  }

  ingress {
    from_port = 80
    to_port = 80
    protocol = "tcp"
    cidr_blocks     = ["0.0.0.0/0"]
  }

  ingress {
    from_port = 0
    to_port = 65535
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port       = 0
    to_port         = 0
    protocol        = "-1"
    cidr_blocks     = ["0.0.0.0/0"]
  }
}
