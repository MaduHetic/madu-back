'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">madu-back documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-0b4929c834b2f92fe8bd726ae62261d6"' : 'data-target="#xs-controllers-links-module-AppModule-0b4929c834b2f92fe8bd726ae62261d6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-0b4929c834b2f92fe8bd726ae62261d6"' :
                                            'id="xs-controllers-links-module-AppModule-0b4929c834b2f92fe8bd726ae62261d6"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-0b4929c834b2f92fe8bd726ae62261d6"' : 'data-target="#xs-injectables-links-module-AppModule-0b4929c834b2f92fe8bd726ae62261d6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-0b4929c834b2f92fe8bd726ae62261d6"' :
                                        'id="xs-injectables-links-module-AppModule-0b4929c834b2f92fe8bd726ae62261d6"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-f074069c4994547a77cea02e16237439"' : 'data-target="#xs-injectables-links-module-AuthModule-f074069c4994547a77cea02e16237439"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-f074069c4994547a77cea02e16237439"' :
                                        'id="xs-injectables-links-module-AuthModule-f074069c4994547a77cea02e16237439"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompanyModule.html" data-type="entity-link">CompanyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CompanyModule-4b0e2be557e74ff943d468a2a2688fe0"' : 'data-target="#xs-controllers-links-module-CompanyModule-4b0e2be557e74ff943d468a2a2688fe0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CompanyModule-4b0e2be557e74ff943d468a2a2688fe0"' :
                                            'id="xs-controllers-links-module-CompanyModule-4b0e2be557e74ff943d468a2a2688fe0"' }>
                                            <li class="link">
                                                <a href="controllers/CompanyController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CompanyController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CompanyModule-4b0e2be557e74ff943d468a2a2688fe0"' : 'data-target="#xs-injectables-links-module-CompanyModule-4b0e2be557e74ff943d468a2a2688fe0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CompanyModule-4b0e2be557e74ff943d468a2a2688fe0"' :
                                        'id="xs-injectables-links-module-CompanyModule-4b0e2be557e74ff943d468a2a2688fe0"' }>
                                        <li class="link">
                                            <a href="injectables/CompanyService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CompanyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GreenScoreModule.html" data-type="entity-link">GreenScoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GreenScoreModule-6e189e7f56d528285f225a8d69c1e41a"' : 'data-target="#xs-controllers-links-module-GreenScoreModule-6e189e7f56d528285f225a8d69c1e41a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GreenScoreModule-6e189e7f56d528285f225a8d69c1e41a"' :
                                            'id="xs-controllers-links-module-GreenScoreModule-6e189e7f56d528285f225a8d69c1e41a"' }>
                                            <li class="link">
                                                <a href="controllers/GreenScoreController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GreenScoreController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GreenScoreModule-6e189e7f56d528285f225a8d69c1e41a"' : 'data-target="#xs-injectables-links-module-GreenScoreModule-6e189e7f56d528285f225a8d69c1e41a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GreenScoreModule-6e189e7f56d528285f225a8d69c1e41a"' :
                                        'id="xs-injectables-links-module-GreenScoreModule-6e189e7f56d528285f225a8d69c1e41a"' }>
                                        <li class="link">
                                            <a href="injectables/GreenScoreService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GreenScoreService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JoinTagPoiModule.html" data-type="entity-link">JoinTagPoiModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-JoinTagPoiModule-c5ee729666a844c647835e7df8bd5c38"' : 'data-target="#xs-injectables-links-module-JoinTagPoiModule-c5ee729666a844c647835e7df8bd5c38"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JoinTagPoiModule-c5ee729666a844c647835e7df8bd5c38"' :
                                        'id="xs-injectables-links-module-JoinTagPoiModule-c5ee729666a844c647835e7df8bd5c38"' }>
                                        <li class="link">
                                            <a href="injectables/JoinTagPoiService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JoinTagPoiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JoinTypePoiModule.html" data-type="entity-link">JoinTypePoiModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-JoinTypePoiModule-6db28a62c22b6c5c9b28259ae7d133a9"' : 'data-target="#xs-injectables-links-module-JoinTypePoiModule-6db28a62c22b6c5c9b28259ae7d133a9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JoinTypePoiModule-6db28a62c22b6c5c9b28259ae7d133a9"' :
                                        'id="xs-injectables-links-module-JoinTypePoiModule-6db28a62c22b6c5c9b28259ae7d133a9"' }>
                                        <li class="link">
                                            <a href="injectables/JoinTypePoiService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JoinTypePoiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PercentTypeGreenScoreAndPoiModule.html" data-type="entity-link">PercentTypeGreenScoreAndPoiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PercentTypeGreenScoreAndPoiModule-15aff3dde0270b5440e991a54349d110"' : 'data-target="#xs-controllers-links-module-PercentTypeGreenScoreAndPoiModule-15aff3dde0270b5440e991a54349d110"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PercentTypeGreenScoreAndPoiModule-15aff3dde0270b5440e991a54349d110"' :
                                            'id="xs-controllers-links-module-PercentTypeGreenScoreAndPoiModule-15aff3dde0270b5440e991a54349d110"' }>
                                            <li class="link">
                                                <a href="controllers/PercentTypeGreenScoreAndPoiController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PercentTypeGreenScoreAndPoiController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PercentTypeGreenScoreAndPoiModule-15aff3dde0270b5440e991a54349d110"' : 'data-target="#xs-injectables-links-module-PercentTypeGreenScoreAndPoiModule-15aff3dde0270b5440e991a54349d110"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PercentTypeGreenScoreAndPoiModule-15aff3dde0270b5440e991a54349d110"' :
                                        'id="xs-injectables-links-module-PercentTypeGreenScoreAndPoiModule-15aff3dde0270b5440e991a54349d110"' }>
                                        <li class="link">
                                            <a href="injectables/PercentTypeGreenScoreAndPoiService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PercentTypeGreenScoreAndPoiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PoiModule.html" data-type="entity-link">PoiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PoiModule-a0bd83c190af8c99a37863a0df0ee734"' : 'data-target="#xs-controllers-links-module-PoiModule-a0bd83c190af8c99a37863a0df0ee734"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PoiModule-a0bd83c190af8c99a37863a0df0ee734"' :
                                            'id="xs-controllers-links-module-PoiModule-a0bd83c190af8c99a37863a0df0ee734"' }>
                                            <li class="link">
                                                <a href="controllers/PoiController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PoiController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PoiModule-a0bd83c190af8c99a37863a0df0ee734"' : 'data-target="#xs-injectables-links-module-PoiModule-a0bd83c190af8c99a37863a0df0ee734"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PoiModule-a0bd83c190af8c99a37863a0df0ee734"' :
                                        'id="xs-injectables-links-module-PoiModule-a0bd83c190af8c99a37863a0df0ee734"' }>
                                        <li class="link">
                                            <a href="injectables/PoiService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PoiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoleModule.html" data-type="entity-link">RoleModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RoleModule-8c6062e36637a014aedb4736b4655e55"' : 'data-target="#xs-injectables-links-module-RoleModule-8c6062e36637a014aedb4736b4655e55"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RoleModule-8c6062e36637a014aedb4736b4655e55"' :
                                        'id="xs-injectables-links-module-RoleModule-8c6062e36637a014aedb4736b4655e55"' }>
                                        <li class="link">
                                            <a href="injectables/RoleService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>RoleService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagsModule.html" data-type="entity-link">TagsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TagsModule-ef87291d961e9af84f8d4dc4d364c586"' : 'data-target="#xs-controllers-links-module-TagsModule-ef87291d961e9af84f8d4dc4d364c586"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagsModule-ef87291d961e9af84f8d4dc4d364c586"' :
                                            'id="xs-controllers-links-module-TagsModule-ef87291d961e9af84f8d4dc4d364c586"' }>
                                            <li class="link">
                                                <a href="controllers/TagsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TagsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TagsModule-ef87291d961e9af84f8d4dc4d364c586"' : 'data-target="#xs-injectables-links-module-TagsModule-ef87291d961e9af84f8d4dc4d364c586"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TagsModule-ef87291d961e9af84f8d4dc4d364c586"' :
                                        'id="xs-injectables-links-module-TagsModule-ef87291d961e9af84f8d4dc4d364c586"' }>
                                        <li class="link">
                                            <a href="injectables/TagsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TagsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TypeGreenScoreModule.html" data-type="entity-link">TypeGreenScoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TypeGreenScoreModule-27417a521816336b67641f1998d886d3"' : 'data-target="#xs-controllers-links-module-TypeGreenScoreModule-27417a521816336b67641f1998d886d3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TypeGreenScoreModule-27417a521816336b67641f1998d886d3"' :
                                            'id="xs-controllers-links-module-TypeGreenScoreModule-27417a521816336b67641f1998d886d3"' }>
                                            <li class="link">
                                                <a href="controllers/TypeGreenScoreController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TypeGreenScoreController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TypeGreenScoreModule-27417a521816336b67641f1998d886d3"' : 'data-target="#xs-injectables-links-module-TypeGreenScoreModule-27417a521816336b67641f1998d886d3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TypeGreenScoreModule-27417a521816336b67641f1998d886d3"' :
                                        'id="xs-injectables-links-module-TypeGreenScoreModule-27417a521816336b67641f1998d886d3"' }>
                                        <li class="link">
                                            <a href="injectables/TypeGreenScoreService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TypeGreenScoreService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TypeModule.html" data-type="entity-link">TypeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TypeModule-624cd2248950e3e2a2d5c024230ddcce"' : 'data-target="#xs-controllers-links-module-TypeModule-624cd2248950e3e2a2d5c024230ddcce"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TypeModule-624cd2248950e3e2a2d5c024230ddcce"' :
                                            'id="xs-controllers-links-module-TypeModule-624cd2248950e3e2a2d5c024230ddcce"' }>
                                            <li class="link">
                                                <a href="controllers/TypeController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TypeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TypeModule-624cd2248950e3e2a2d5c024230ddcce"' : 'data-target="#xs-injectables-links-module-TypeModule-624cd2248950e3e2a2d5c024230ddcce"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TypeModule-624cd2248950e3e2a2d5c024230ddcce"' :
                                        'id="xs-injectables-links-module-TypeModule-624cd2248950e3e2a2d5c024230ddcce"' }>
                                        <li class="link">
                                            <a href="injectables/TypeService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TypeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserAppModule.html" data-type="entity-link">UserAppModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserAppModule-df4cfd45c1d5138b0f823b32df5e165a"' : 'data-target="#xs-injectables-links-module-UserAppModule-df4cfd45c1d5138b0f823b32df5e165a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserAppModule-df4cfd45c1d5138b0f823b32df5e165a"' :
                                        'id="xs-injectables-links-module-UserAppModule-df4cfd45c1d5138b0f823b32df5e165a"' }>
                                        <li class="link">
                                            <a href="injectables/UserAppService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserAppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-20101219616dab7dfebcf17e879a2a5e"' : 'data-target="#xs-controllers-links-module-UserModule-20101219616dab7dfebcf17e879a2a5e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-20101219616dab7dfebcf17e879a2a5e"' :
                                            'id="xs-controllers-links-module-UserModule-20101219616dab7dfebcf17e879a2a5e"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-20101219616dab7dfebcf17e879a2a5e"' : 'data-target="#xs-injectables-links-module-UserModule-20101219616dab7dfebcf17e879a2a5e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-20101219616dab7dfebcf17e879a2a5e"' :
                                        'id="xs-injectables-links-module-UserModule-20101219616dab7dfebcf17e879a2a5e"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AccessToken.html" data-type="entity-link">AccessToken</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company.html" data-type="entity-link">Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/JoinTagPoiEntity.html" data-type="entity-link">JoinTagPoiEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/JoinTypePoi.html" data-type="entity-link">JoinTypePoi</a>
                            </li>
                            <li class="link">
                                <a href="classes/PercentTypeGreenScoreAndPoi.html" data-type="entity-link">PercentTypeGreenScoreAndPoi</a>
                            </li>
                            <li class="link">
                                <a href="classes/PercentTypeGreenScoreAndPoiDto.html" data-type="entity-link">PercentTypeGreenScoreAndPoiDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Poi.html" data-type="entity-link">Poi</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link">Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/Tag.html" data-type="entity-link">Tag</a>
                            </li>
                            <li class="link">
                                <a href="classes/TagsDto.html" data-type="entity-link">TagsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Type.html" data-type="entity-link">Type</a>
                            </li>
                            <li class="link">
                                <a href="classes/TypeDto.html" data-type="entity-link">TypeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TypeGreenScore.html" data-type="entity-link">TypeGreenScore</a>
                            </li>
                            <li class="link">
                                <a href="classes/TypeGreenScoreDto.html" data-type="entity-link">TypeGreenScoreDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDto.html" data-type="entity-link">UserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CompanyDto.html" data-type="entity-link">CompanyDto</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PoiDto.html" data-type="entity-link">PoiDto</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PoiTransformationPipe.html" data-type="entity-link">PoiTransformationPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RoleGuard.html" data-type="entity-link">RoleGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AccessTokenInterfaces.html" data-type="entity-link">AccessTokenInterfaces</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CompanyInterface.html" data-type="entity-link">CompanyInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PercentTypeGreenScoreAndPoiInterface.html" data-type="entity-link">PercentTypeGreenScoreAndPoiInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PoiInterface.html" data-type="entity-link">PoiInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TagsInterface.html" data-type="entity-link">TagsInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TypeGreenScoreInterface.html" data-type="entity-link">TypeGreenScoreInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TypeInterface.html" data-type="entity-link">TypeInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserInterface.html" data-type="entity-link">UserInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});