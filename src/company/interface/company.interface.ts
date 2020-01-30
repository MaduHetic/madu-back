export interface CompanyInterface {
  readonly address: string;
  readonly name: string;
  readonly postalCode: string;
  readonly city: string;
  readonly domainMail?: string;
  readonly type: string;
  readonly nbWorker?: number;
  readonly beginDeal: string;
  readonly endDeal: string;
}
