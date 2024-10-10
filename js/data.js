// data.js
window.data = {
    sections: [
        /****************/
        /* Introduction */
        /****************/
        {
            id: "introduction",
            title: "Introduction",
            label: "Aller à la section Introduction",
            content: {
                description: "Ce site présente une compilation de ressources sur l'accessibilité numérique, destinée à faciliter l'accès aux personnes en situation de handicap, notamment celles ayant une déficience visuelle. Vous trouverez ici des liens vers des articles, des ressources sur les directives WCAG, ainsi que des idées d'articles vulgarisés sur les nouvelles technologies."
            }
        },
        /*****************************/        
        /* Articles, presse, décrets */
        /*****************************/
        {
            id: "articles",
            title: "Articles & Ressources sur l'Accessibilité Numérique",
            label: "Aller à la section Articles et Ressources",
            description: "Cette section contient des liens utiles, des articles de presse et des informations sur les directives européennes pour améliorer l'accessibilité numérique.",
            numbered: true,
            content: [
                /***********************************************************************************************/
                /* Exemple de lien:                                                                            */
                /* { category: "link", title: "un titre", url: "#", description: "une description", note: 3 }  */
                /***********************************************************************************************/
                { category: "link", title: "Règles pour l’accessibilité des contenus Web (WCAG) 2 – Vue d’ensemble [FR]", url: "https://www.w3.org/WAI/standards-guidelines/wcag/fr", description: "Cette page présente les Règles pour l’accessibilité des contenus Web (WCAG), un standard international, notamment WCAG 2.0, WCAG 2.1 et WCAG 2.2. Les documents des WCAG expliquent comment rendre les contenus Web plus accessibles aux personnes en situation de handicap.", note: 3 },
                { category: "link", title: "WCAG 2 en bref [FR]", url: "https://www.w3.org/WAI/standards-guidelines/wcag/glance/fr", description: "<p>Cette page propose un résumé paraphrasé des Règles pour l’accessibilité des contenus Web (WCAG) 2.1 et 2.2.</p>" },                
                { category: "link", title: "La plus belle pour aller danser :-)", url: "https://www.w3.org/WAI/standards-guidelines/wcag/glance/fr", description: "<p>Cette page propose un résumé paraphrasé des Règles pour l’accessibilité des contenus Web (WCAG) 2.1 et 2.2.</p>", note:5 },                                
                { category: "link", title: "Comment satisfaire aux WCAG 2 (référence rapide) [EN]", url: "https://www.w3.org/WAI/WCAG22/quickref/", description: "<p>Un guide de référence rapide et personnalisable des exigences (critères de succès) et techniques des Directives pour l'accessibilité du contenu Web (WCAG) 2.</p>" },                   
                { category: "link", title: "Digital Wallonia: Les sites Web des organismes publics accessibles à tous", url: "https://www.digitalwallonia.be/fr/publications/accessibilite-sites-web-publics/", description: "<p>Depuis le 23 septembre 2020, tous les sites Web des organismes publics doivent être accessibles à tous. L'Agence du Numérique est chargée d'effectuer un état des lieux de ces sites. Cette initiative s'inscrit dans la cadre du programme \"Wallonie As a Service\" de Digital Wallonia.</p>" },

                { category: "link", title: "Guide d'accessibilité numérique de la Web Accessibility Initiative (WAI) du W3C", url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/fr", description: "<p>Ce guide complet offre une introduction à l'accessibilité numérique, couvrant les principes fondamentaux, les normes et les meilleures pratiques pour rendre le web accessible à tous.</p>" },
                { category: "link", title: "Référentiel Général d'Amélioration de l'Accessibilité (RGAA)", url: "https://www.numerique.gouv.fr/publications/rgaa-accessibilite/", description: "<p>Le RGAA est un référentiel français qui fournit des critères et des tests pour évaluer la conformité d'un site web aux normes d'accessibilité.</p>" },
                { category: "link", title: "Web Content Accessibility Guidelines (WCAG) 2.1", url: "https://www.w3.org/Translations/WCAG21-fr/", description: "<p>Les WCAG 2.1 sont des recommandations internationales pour améliorer l'accessibilité des contenus web, couvrant un large éventail de recommandations pour rendre le contenu web plus accessible.</p>" },
                { category: "link", title: "Outils et techniques d'évaluation de l'accessibilité web", url: "https://www.w3.org/WAI/test-evaluate/", description: "<p>Cette ressource propose une variété d'outils et de méthodes pour évaluer l'accessibilité des sites web, aidant les développeurs et les designers à identifier et à résoudre les problèmes d'accessibilité.</p>" },
                { category: "link", title: "Introduction à l'accessibilité web par Mozilla", url: "https://developer.mozilla.org/fr/docs/Learn/Accessibility/What_is_accessibility", description: "<p>Mozilla offre une introduction complète à l'accessibilité web, expliquant son importance et fournissant des conseils pratiques pour la mise en œuvre.</p>" },
                { category: "link", title: "Guide d'accessibilité mobile par Google", url: "https://developer.android.com/guide/topics/ui/accessibility", description: "<p>Ce guide de Google se concentre sur l'accessibilité des applications mobiles Android, offrant des conseils détaillés pour les développeurs.</p>" },
                { category: "link", title: "Ressources sur l'accessibilité numérique par Microsoft", url: "https://www.microsoft.com/fr-fr/accessibility", description: "<p>Microsoft propose une collection de ressources sur l'accessibilité, couvrant leurs produits et offrant des conseils généraux pour rendre la technologie plus inclusive.</p>" },
                { category: "link", title: "Checklist d'accessibilité web par WebAIM", url: "https://webaim.org/standards/wcag/checklist", description: "<p>WebAIM fournit une checklist pratique basée sur les WCAG, permettant aux développeurs de vérifier rapidement la conformité de leurs sites web.</p>" },
                { category: "link", title: "Techniques WCAG 2.1", url: "https://www.w3.org/WAI/WCAG21/Techniques/", description: "<p>Cette ressource détaille les techniques spécifiques pour mettre en œuvre les recommandations WCAG 2.1, offrant des exemples concrets et des explications détaillées.</p>" },
                { category: "link", title: "Guide d'accessibilité iOS par Apple", url: "https://developer.apple.com/accessibility/", description: "<p>Apple propose un guide complet sur l'accessibilité pour les développeurs iOS, couvrant les fonctionnalités d'accessibilité intégrées et les meilleures pratiques de développement.</p>" },
                { category: "link", title: "Outils d'accessibilité web par W3C", url: "https://www.w3.org/WAI/ER/tools/", description: "<p>Le W3C fournit une liste d'outils d'évaluation de l'accessibilité web, aidant les développeurs à choisir les outils appropriés pour leurs projets.</p>" },
                { category: "link", title: "Ressources sur l'accessibilité par l'association BrailleNet", url: "https://www.braillenet.org/ressources/", description: "<p>BrailleNet offre une variété de ressources sur l'accessibilité numérique, avec un accent particulier sur l'accessibilité pour les personnes malvoyantes.</p>" },
                { category: "link", title: "Guide d'accessibilité pour les développeurs web", url: "https://www.bbc.co.uk/accessibility/forproducts/guides/mobile/", description: "<p>La BBC propose un guide pratique pour les développeurs web, couvrant les aspects essentiels de l'accessibilité dans le développement web et mobile.</p>" },
                { category: "link", title: "Accessibilité numérique : bonnes pratiques éditoriales", url: "https://www.accede-web.com/notices/editoriale/", description: "<p>Ce guide se concentre sur les bonnes pratiques éditoriales pour créer du contenu web accessible, offrant des conseils précieux pour les rédacteurs et les gestionnaires de contenu.</p>" },
                { category: "link", title: "Ressources sur l'accessibilité par l'UNAPEI", url: "https://www.unapei.org/article/accessibilite-numerique/", description: "<p>L'UNAPEI fournit des ressources sur l'accessibilité numérique, avec un accent particulier sur l'inclusion des personnes en situation de handicap mental.</p>"
                },
                /************************************************************************************************/
                /* Exemple de lien pour la presse:                                                              */
                /* { category: "press", title: "un titre", url: "#", description: "une description", note: 3 }  */
                /************************************************************************************************/
                { category: "press", title: "Election 2024, programme LES ENGAGEES : Accessibilité numérique [Mai 2024]", url: "https://www.autonomia.org/article/election-2024-programme-les-engagees-accessibilite-numerique", description: "<p>Les Engagées proposent un programme pour l'élection 2024 visant à améliorer l'accessibilité numérique en Belgique, en mettant l'accent sur la conformité aux directives européennes, la formation du personnel public, le maintien de permanences physiques et l'adaptation des outils numériques pour tous, notamment les personnes en situation de handicap.</p>" },
                { category: "press", title: "Une Europe digitale pas accessible [Août 2024]", url: "https://informations.handicap.fr/a-une-europe-digitale-pas-accessible-37073.php", description: "<p>Le 28 juin 2024 paraissait un rapport sur l'accessibilité numérique des sites web européens. C'est un coup dur : 94 % d'entre eux ne sont pas conformes aux réglementations de l'Union Européenne. Explications.</p>" },

                { category: "press", title: "Digital Accessibility is crucial for an inclusive customer experience yet only 39% of global companies are on track for EU Compliance [Septembre 2024]", url: "https://cyprusshippingnews.com/2024/09/17/digital-accessibility-is-crucial-for-an-inclusive-customer-experience-yet-only-39-of-global-companies-are-on-track-for-eu-compliance/", description: "<p>Une étude de Software Advice montre que seules 39% des entreprises mondiales sont prêtes à se conformer à la réglementation européenne sur l'accessibilité numérique avant la date limite de juin 2025.</p>" },

                { category: "press", title: "Political party websites freezing out voters with disabilities - report [Avril 2024]", url: "https://www.euronews.com/health/2024/04/11/political-party-websites-freezing-out-voters-with-disabilities-report", description: "<p>Une étude met en évidence les graves lacunes en matière d'accessibilité des sites web des principaux partis politiques européens, compromettant la participation des électeurs en situation de handicap.</p>" },
                
                { category: "press", title: "Accessibilité numérique : le Gouvernement entérine l'ordonnance visant à contrôler l'accessibilité des sites des administrations publiques à compter 2024 [Novembre 2023]", url: "https://www.numerique.gouv.fr/espace-presse/accessibilite-numerique-le-gouvernement-enterine-lordonnance-visant-a-controler-laccessibilite-des-sites-des-administrations-publiques-a-compter-2024/", description: "<p>Le gouvernement français ratifie une ordonnance renforçant les sanctions pour non-respect des obligations d'accessibilité numérique des sites publics, avec des amendes pouvant atteindre 50 000€.</p>" },
                
                { category: "press", title: "Etat des lieux de l'accessibilité numérique en Belgique [2023]", url: "https://cawab.be/Etat-des-lieux-de-l-accessibilite-numerique-en-Belgique", description: "<p>Un rapport du BOSA révèle que la majorité des sites web publics belges ne respectent pas les normes d'accessibilité requises par la directive européenne, avec seulement 18% des sites ayant publié une déclaration d'accessibilité en 2021.</p>" },
                
                { category: "press", title: "Le Parlement adopte les cartes d'invalidité et de stationnement européennes [Avril 2024]", url: "https://www.europarl.europa.eu/news/fr/press-room/20240419IPR20572/le-parlement-adopte-les-cartes-d-invalidite-et-de-stationnement-europeennes", description: "<p>Le Parlement européen approuve la mise en place d'une carte d'invalidité à l'échelle européenne pour garantir aux personnes handicapées un accès égal à des conditions préférentielles lors de leurs déplacements dans l'UE.</p>" },
                
                { category: "press", title: "Accessibilité Numérique : les enjeux européens [2023]", url: "https://blog.ipedis.com/accessibilite-numerique-enjeux-europeens", description: "<p>Un article détaillant les implications de la loi européenne sur l'Accessibilité (European Accessibility Law) adoptée en 2019, qui oblige de nombreux secteurs à se conformer aux exigences d'accessibilité numérique d'ici 2025.</p>" },
                
                { category: "press", title: "Accessibilité numérique pour les personnes illettrées : la loi ne garantit pas l'égalité [2023]", url: "https://lire-et-ecrire.be/Accessibilite-numerique-pour-les-personnes-illettrees", description: "<p>Une analyse critique de la mise en œuvre de la directive européenne sur l'accessibilité numérique en Belgique, soulignant les lacunes dans la prise en compte des besoins des personnes illettrées.</p>" },
                
                { category: "press", title: "Inclusion numérique - Appel à projets 2023 [2023]", url: "https://economie.fgov.be/fr/themes/line/inclusion-numerique/appel-projets/inclusion-numerique-appel", description: "<p>Le SPF Economie belge lance un appel à projets visant à promouvoir l'inclusion numérique, en particulier pour les consommateurs, les PME et les indépendants, dans le cadre des objectifs numériques européens 2030.</p>" },
                
                { category: "press", title: "Le Parlement adopte la directive sur le travail des plateformes [Avril 2024]", url: "https://www.europarl.europa.eu/news/fr/press-room/20240419IPR20584/le-parlement-adopte-la-directive-sur-le-travail-des-plateformes", description: "<p>Le Parlement européen approuve de nouvelles règles visant à améliorer les conditions d'emploi des travailleurs des plateformes numériques, incluant des dispositions sur la gestion algorithmique et la protection des données.</p>" },
                
                { category: "press", title: "Numérique : que sont le DMA et le DSA, les règlements européens qui visent à réguler internet ? [2024]", url: "https://www.touteleurope.eu/societe/numerique-que-sont-le-dma-et-le-dsa-les-reglements-europeens-qui-visent-a-reguler-internet/", description: "<p>Une explication détaillée des règlements européens Digital Markets Act (DMA) et Digital Services Act (DSA), qui visent à réguler les grandes plateformes numériques et à améliorer la sécurité en ligne.</p>" },
                
                { category: "press", title: "Qu'est-ce que la stratégie européenne d'accès aux droits des personnes handicapées 2021-2030 ? [2023]", url: "https://www.touteleurope.eu/societe/qu-est-ce-que-la-strategie-europeenne-d-acces-aux-droits-des-handicapes-2021-2030/", description: "<p>Un aperçu de la stratégie européenne visant à améliorer l'inclusion des personnes handicapées, y compris des mesures pour favoriser l'accessibilité numérique.</p>" },
                
                { category: "press", title: "Accessibilité Web : la directive sur l'accessibilité du web [2023]", url: "https://digital-strategy.ec.europa.eu/fr/policies/web-accessibility", description: "<p>Une présentation de la directive européenne sur l'accessibilité des sites internet, qui vise à améliorer l'accès aux sites web et applications mobiles des services publics pour les personnes handicapées.</p>" },
                
                { category: "press", title: "Accessibilité web : top 10 des questions les plus souvent posées [2023]", url: "https://blog.ipedis.com/accessibilite-web-top-10-des-questions-les-plus-souvent-posees", description: "<p>Un article répondant aux questions fréquentes sur l'accessibilité web, incluant des informations sur les réglementations européennes et françaises en la matière.</p>" },
                
                { category: "press", title: "Revue de presse | Handicap et numérique [2023]", url: "https://dubasque.org/revue-de-presse-quest-ce-que-la-maltraitance-institutionnelle-handicap-et-numerique-lase-et-la-prostitution-des-mineurs/", description: "<p>Une revue de presse abordant divers sujets liés au handicap, dont les recommandations d'Emmaüs Connect et la Croix Rouge pour favoriser l'inclusion numérique des personnes en situation de handicap.</p>" },                
                /************************************************************************************************/
                /* Exemple de lien de décret:                                                                   */
                /* { category: "decree", title: "un titre", url: "#", description: "une description", note: 3 } */
                /************************************************************************************************/
                { category: "decree", title: "Transposition belge de la Directive (UE) 2016/2102", url: "https://www.anysurfer.be/fr/documentation/articles/detail/la-directive-europeenne-relative-a-laccessibilite-des-sites-web", description: "<p>Cette directive concerne l'accessibilité des sites internet et des applications mobiles des organismes du secteur public. Elle impose que ces sites et applications soient \"plus accessibles\", en particulier pour les personnes handicapées, en les rendant \"perceptibles, utilisables, compréhensibles et robustes\".</p><ol><li><a href=\"http://www.ejustice.just.fgov.be/eli/loi/2018/07/19/2018040577/justel\">Loi fédérale du 19 juillet 2018</a></li><li><a href=\"https://codex.vlaanderen.be/Portals/Codex/documenten/1030009.html\">Décret flamand du 7 décembre 2018</a></li><li><a href=\"http://www.ejustice.just.fgov.be/eli/ordonnance/2018/10/04/2018031943/justel\">Ordonnance bruxelloise du 14 octobre 2018</a></li><li><a href=\"http://www.ejustice.just.fgov.be/eli/decret/2018/10/15/2018205673/justel\">Décret de la Communauté germanophone du 15 octobre 2018</a></li><li><a href=\"https://www.ejustice.just.fgov.be/eli/decret/2019/05/09/2019013261/justel\">Décret de la COCOF du 9 mai 2019</a></li><li><a href=\"https://wallex.wallonie.be/eli/loi-decret/2019/05/02/2019203962\">Décret wallon du 2 mai 2019</a></li><li><a href=\"https://www.gallilex.cfwb.be/document/pdf/47101_000.pdf\">Décret de la Fédération Wallonie-Bruxelles du 3 mai 2019</a></li></ol><p>Ces liens vous permettront d'accéder aux textes officiels de chacune de ces législations relatives à l'accessibilité numérique dans les différentes entités belges.</p>", note: 2
                    },
                { category: "decree", title: "Directive (UE) 2016/2102 du 26 octobre 2016", url: "hhttps://eur-lex.europa.eu/FR/legal-content/summary/accessibility-of-public-sector-websites-and-mobile-apps.html", description: "<p>Cette directive concerne l'accessibilité des sites internet et des applications mobiles des organismes du secteur public. Elle impose que ces sites et applications soient \"plus accessibles\", en particulier pour les personnes handicapées, en les rendant \"perceptibles, utilisables, compréhensibles et robustes\".</p>", note: 3              
                }
            ]
        },
        /******************************/
        /* Accessibilité des Chatbots */
        /******************************/
        {
            id: "chatbots",
            title: "Accessibilité des Chatbots",
            label: "Aller à la section Accessibilité des Chatbots",
            description: "Analyse de l'accessibilité des différents chatbots disponibles sur le marché.",
            content: [
                { title: "ChatGPT", url: "https://chat.openai.com/", result: "négatif", description: "Accessible avec quelques limitations mineures.", note:0 },
                { title: "Bard", url: "https://bard.google.com/", result: "négatif", description: "Manque de compatibilité avec les lecteurs d'écran.", note:0 },
                { title: "Claude", url: "https://bard.google.com/", result: "négatif", description: "Manque de compatibilité avec les lecteurs d'écran.", note:0 }
            ]
        },
        /*******************************/
        /* Idées d'Articles Vulgarisés */
        /*******************************/
        {
            id: "vulgarisation",
            title: "Idées d'Articles Vulgarisés sur les Nouvelles Technologies",
            label: "Aller à la section Idées d'Articles Vulgarisés",
            description: "Idées d'articles simplifiés pour expliquer les technologies émergentes au grand public.",
            numbered: true,
            content: [
                { title: "L'Intelligence Artificielle et l'Accessibilité", description: "Comment l'IA aide à rendre le contenu numérique plus accessible." },
                { title: "La Réalité Virtuelle pour les Personnes Handicapées", description: "Exploration des innovations en réalité virtuelle pour l'accessibilité." }
            ]
        }
    ]
};
