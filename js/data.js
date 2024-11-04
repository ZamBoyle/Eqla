// data.js
window.data = {
    "sections": [
        /****************/
        /* Introduction */
        /****************/
        {
            "id": "introduction",
            "title": "Introduction",
            "label": "Aller à la section Introduction",
            "description": "Ce site présente une compilation de ressources sur l'accessibilité numérique. Vous trouverez ici des liens vers des articles, des ressources sur les directives EU, les WCAG, ainsi que des idées d'articles à vulgariser sur les nouvelles technologies."
        },
        /*****************************/        
        /* Articles, presse, décrets */
        /*****************************/
        {
            "id": "articles",
            "title": "Articles & Ressources sur l'Accessibilité Numérique",
            "label": "Aller à la section Articles et Ressources",
            "description": "Cette section contient des liens utiles, des articles de presse et des informations sur les directives européennes pour améliorer l'accessibilité numérique.",
            "numbered": true,
            "table": false,
            "content": [
                /***********************************************************************************************/
                /* Exemple de lien:                                                                            */
                /* { "category": "link", "title": "un titre", "url": "#", "description": "une description", "note": 3 }  */
                /***********************************************************************************************/
                { "category": "link", "title": "Règles pour l'accessibilité des contenus Web (WCAG) 2 – Vue d'ensemble", "url": "https://www.w3.org/WAI/standards-guidelines/wcag/fr", "description": "Cette page présente les Règles pour l'accessibilité des contenus Web (WCAG), un standard international, notamment WCAG 2.0, WCAG 2.1 et WCAG 2.2. Les documents des WCAG expliquent comment rendre les contenus Web plus accessibles aux personnes en situation de handicap.", "note": 5 },
                
                { "category": "link", "title": "WCAG 2 en bref [FR]", "url": "https://www.w3.org/WAI/standards-guidelines/wcag/glance/fr", "description": "<p>Cette page propose un résumé paraphrasé des Règles pour l'accessibilité des contenus Web (WCAG) 2.1 et 2.2.</p>", "note": 4.5 },
                
                { "category": "link", "title": "Comment satisfaire aux WCAG 2 (référence rapide) [EN]", "url": "https://www.w3.org/WAI/WCAG22/quickref/", "description": "<p>Un guide de référence rapide et personnalisable des exigences (critères de succès) et techniques des Directives pour l'accessibilité du contenu Web (WCAG) 2.</p>", "note": 4.5 },
                
                { "category": "link", "title": "Digital Wallonia: Les sites Web des organismes publics accessibles à tous", "url": "https://www.digitalwallonia.be/fr/publications/accessibilite-sites-web-publics/", "description": "<p>Depuis le 23 septembre 2020, tous les sites Web des organismes publics doivent être accessibles à tous. L'Agence du Numérique est chargée d'effectuer un état des lieux de ces sites. Cette initiative s'inscrit dans la cadre du programme \"Wallonie As a Service\" de Digital Wallonia.</p>", "note": 4 },
                
                { "category": "link", "title": "Guide d'accessibilité numérique de la Web Accessibility Initiative (WAI) du W3C", "url": "https://www.w3.org/WAI/fundamentals/accessibility-intro/fr", "description": "<p>Ce guide complet offre une introduction à l'accessibilité numérique, couvrant les principes fondamentaux, les normes et les meilleures pratiques pour rendre le web accessible à tous.</p>", "note": 5 },
                
                { "category": "link", "title": "Référentiel Général d'Amélioration de l'Accessibilité (RGAA)", "url": "https://www.numerique.gouv.fr/publications/rgaa-accessibilite/", "description": "<p>Le RGAA est un référentiel français qui fournit des critères et des tests pour évaluer la conformité d'un site web aux normes d'accessibilité.</p>", "note": 4.5 },
                
                { "category": "link", "title": "Outils et techniques d'évaluation de l'accessibilité web [EN]", "url": "https://www.w3.org/WAI/test-evaluate/", "description": "<p>Cette ressource propose une variété d'outils et de méthodes pour évaluer l'accessibilité des sites web, aidant les développeurs et les designers à identifier et à résoudre les problèmes d'accessibilité.</p>", "note": 4.5 },
                
                { "category": "link", "title": "Introduction à l'accessibilité web par Mozilla", "url": "https://developer.mozilla.org/fr/docs/Learn/Accessibility/What_is_accessibility", "description": "<p>Mozilla offre une introduction complète à l'accessibilité web, expliquant son importance et fournissant des conseils pratiques pour la mise en œuvre.</p>", "note": 4 },
                
                { "category": "link", "title": "Guide d'accessibilité mobile par Google", "url": "https://developer.android.com/guide/topics/ui/accessibility", "description": "<p>Ce guide de Google se concentre sur l'accessibilité des applications mobiles Android, offrant des conseils détaillés pour les développeurs.</p>", "note": 4.5 },
                
                { "category": "link", "title": "Ressources sur l'accessibilité numérique par Microsoft", "url": "https://www.microsoft.com/fr-fr/accessibility", "description": "<p>Microsoft propose une collection de ressources sur l'accessibilité, couvrant leurs produits et offrant des conseils généraux pour rendre la technologie plus inclusive.</p>", "note": 4 },
                
                { "category": "link", "title": "Checklist d'accessibilité web par WebAIM [EN]", "url": "https://webaim.org/standards/wcag/checklist", "description": "<p>WebAIM fournit une checklist pratique basée sur les WCAG, permettant aux développeurs de vérifier rapidement la conformité de leurs sites web.</p>", "note": 4.5 },
                
                { "category": "link", "title": "Techniques WCAG 2.1 [EN]", "url": "https://www.w3.org/WAI/WCAG21/Techniques/", "description": "<p>Cette ressource détaille les techniques spécifiques pour mettre en œuvre les recommandations WCAG 2.1, offrant des exemples concrets et des explications détaillées.</p>", "note": 5 },
                
                { "category": "link", "title": "Guide d'accessibilité iOS par Apple [EN]", "url": "https://developer.apple.com/accessibility/", "description": "<p>Apple propose un guide complet sur l'accessibilité pour les développeurs iOS, couvrant les fonctionnalités d'accessibilité intégrées et les meilleures pratiques de développement.</p>", "note": 4.5 },
                
                { "category": "link", "title": "Outils d'accessibilité web par W3C [EN]", "url": "https://www.w3.org/WAI/ER/tools/", "description": "<p>Le W3C fournit une liste d'outils d'évaluation de l'accessibilité web, aidant les développeurs à choisir les outils appropriés pour leurs projets.</p>", "note": 4.5 },
                
                { "category": "link", "title": "BBC - Guide d'accessibilité pour les développeurs web [EN]", "url": "https://www.bbc.co.uk/accessibility/forproducts/guides/mobile/", "description": "<p>La BBC propose un guide pratique pour les développeurs web, couvrant les aspects essentiels de l'accessibilité dans le développement web et mobile.</p>", "note": 4 },
                
                { "category": "link", "title": "Accessibilité numérique : bonnes pratiques éditoriales", "url": "https://www.accede-web.com/notices/editoriale/", "description": "<p>Ce guide se concentre sur les bonnes pratiques éditoriales pour créer du contenu web accessible, offrant des conseils précieux pour les rédacteurs et les gestionnaires de contenu.</p>", "note": 4 },
                
                { "category": "link", "title": "Guide d'accessibilité numérique de l'Union européenne", "url": "https://ec.europa.eu/social/main.jsp?catId=1202&langId=fr", "description": "Ce guide officiel de l'UE présente les directives et les normes européennes en matière d'accessibilité numérique, ainsi que des ressources pour leur mise en œuvre.", "note": 5 },

                { "category": "link", "title": "Accessibilité numérique : Guide pratique de conception universelle", "url": "https://www.nngroup.com/articles/accessible-design-for-users-with-disabilities/", "description": "Le Nielsen Norman Group propose un guide complet sur la conception universelle pour l'accessibilité numérique, couvrant divers types de handicaps.", "note": 4.5 },
                { "category": "link", "title": "Outils d'accessibilité web par Deque Systems", "url": "https://www.deque.com/axe/", "description": "Deque Systems offre une suite d'outils d'accessibilité web, dont axe, pour aider les développeurs à identifier et résoudre les problèmes d'accessibilité.", "note": 4 },
                { "category": "link", "title": "Guide d'accessibilité pour les concepteurs UX", "url": "https://www.interaction-design.org/literature/article/accessibility-usability-for-all", "description": "Ce guide de l'Interaction Design Foundation se concentre sur l'intégration de l'accessibilité dans le processus de conception UX.", "note": 4 },
                { "category": "link", "title": "Accessibilité des documents PDF", "url": "https://www.adobe.com/fr/accessibility/products/acrobat.html", "description": "Adobe fournit des ressources et des guides pour créer des documents PDF accessibles, essentiels pour de nombreux contenus numériques.", "note": 4.5 },
                { "category": "link", "title": "Accessibilité des jeux vidéo", "url": "https://gameaccessibilityguidelines.com/fr/", "description": "Ce site propose des directives complètes pour rendre les jeux vidéo plus accessibles, couvrant divers aspects du design et du développement.", "note": 4 },
                { "category": "link", "title": "Accessibilité des médias sociaux", "url": "https://www.socialmediatoday.com/news/8-tips-to-make-your-social-media-content-more-accessible/574802/", "description": "Ce guide offre des conseils pratiques pour rendre le contenu des médias sociaux plus accessible à tous les utilisateurs.", "note": 3.5 },
                { "category": "link", "title": "Accessibilité des e-mails", "url": "https://www.emailonacid.com/blog/article/email-development/email-accessibility-best-practices/", "description": "Ce guide détaille les meilleures pratiques pour créer des e-mails accessibles, un aspect souvent négligé de l'accessibilité numérique.", "note": 4 },
                { "category": "link", "title": "Accessibilité des présentations PowerPoint", "url": "https://support.microsoft.com/fr-fr/office/rendre-vos-présentations-powerpoint-accessibles-aux-personnes-atteintes-de-handicaps-6f7772b2-2f33-4bd2-8ca7-dae3b2b3ef25", "description": "Microsoft fournit un guide détaillé pour rendre les présentations PowerPoint accessibles, couvrant divers aspects de la création de contenu.", "note": 4 },
                { "category": "link", "title": "Accessibilité des applications mobiles", "url": "https://developer.apple.com/accessibility/ios/", "description": "Apple propose un guide complet sur l'accessibilité pour les développeurs d'applications iOS, couvrant les fonctionnalités d'accessibilité intégrées et les meilleures pratiques.", "note": 4.5 },
                { "category": "link", "title": "Accessibilité des chatbots et assistants virtuels", "url": "https://www.w3.org/WAI/APA/task-forces/research-questions/wiki/Chatbots_and_Conversational_UI_Accessibility", "description": "Ce document du W3C explore les questions d'accessibilité liées aux chatbots et aux interfaces conversationnelles.", "note": 3.5 },
                { "category": "link", "title": "Accessibilité des formulaires web", "url": "https://webaim.org/techniques/forms/", "description": "WebAIM fournit un guide détaillé sur la création de formulaires web accessibles, un élément crucial de nombreux sites web.", "note": 4 },
                { "category": "link", "title": "Accessibilité des contenus multimédias", "url": "https://www.w3.org/WAI/media/av/", "description": "Le W3C offre des ressources complètes sur l'accessibilité des contenus audio et vidéo, y compris des conseils sur les sous-titres et les descriptions audio.", "note": 4.5 },
                { "category": "link", "title": "Accessibilité des cartes et données géographiques", "url": "https://www.w3.org/WAI/RD/wiki/Accessible_Maps", "description": "Ce wiki du W3C explore les défis et les solutions pour rendre les cartes et les données géographiques accessibles.", "note": 3.5 },
                { "category": "link", "title": "Accessibilité des tableaux de données", "url": "https://www.w3.org/WAI/tutorials/tables/", "description": "Ce tutoriel du W3C explique comment créer des tableaux de données accessibles, un aspect important pour de nombreux types de contenu web.", "note": 4 },
                { "category": "link", "title": "Accessibilité des SVG", "url": "https://css-tricks.com/accessible-svgs/", "description": "Ce guide de CSS-Tricks explore les techniques pour rendre les graphiques SVG accessibles, un aspect important du design web moderne.", "note": 3.5 },
                { "category": "link", "title": "Accessibilité des animations web", "url": "https://css-tricks.com/accessible-web-animation-the-wcag-on-animation-explained/", "description": "Ce guide explique comment créer des animations web accessibles, en tenant compte des directives WCAG.", "note": 4 },
                { "category": "link", "title": "Accessibilité des applications web progressives (PWA)", "url": "https://developer.mozilla.org/fr/docs/Web/Progressive_web_apps/Accessibilité", "description": "Mozilla fournit des conseils sur la création d'applications web progressives accessibles, combinant les meilleures pratiques du web et des applications mobiles.", "note": 4 },
                { "category": "link", "title": "Accessibilité des interfaces de réalité virtuelle et augmentée", "url": "https://www.w3.org/WAI/APA/task-forces/research-questions/wiki/Accessibility_of_Virtual_and_Augmented_Reality", "description": "Ce document du W3C explore les défis et les opportunités en matière d'accessibilité dans les interfaces de réalité virtuelle et augmentée.", "note": 3.5 },
                { "category": "link", "title": "Accessibilité des systèmes de gestion de contenu (CMS)", "url": "https://make.wordpress.org/accessibility/", "description": "WordPress, l'un des CMS les plus populaires, fournit des ressources et des directives pour créer des sites web accessibles avec leur plateforme.", "note": 4 },

                /************************************************************************************************/
                /* Exemple de lien pour la presse:                                                              */
                /* { "category": "press", "title": "un titre", "url": "#", "description": "une description", "note": 3 }  */
                /************************************************************************************************/
                { "category": "press", "title": "Election 2024, programme LES ENGAGEES : Accessibilité numérique [Mai 2024]", "url": "https://www.autonomia.org/article/election-2024-programme-les-engagees-accessibilite-numerique", "description": "<p>Les Engagées proposent un programme pour l'élection 2024 visant à améliorer l'accessibilité numérique en Belgique, en mettant l'accent sur la conformité aux directives européennes, la formation du personnel public, le maintien de permanences physiques et l'adaptation des outils numériques pour tous, notamment les personnes en situation de handicap.</p>" },
                { "category": "press", "title": "Une Europe digitale pas accessible [Août 2024]", "url": "https://informations.handicap.fr/a-une-europe-digitale-pas-accessible-37073.php", "description": "<p>Le 28 juin 2024 paraissait un rapport sur l'accessibilité numérique des sites web européens. C'est un coup dur : 94 % d'entre eux ne sont pas conformes aux réglementations de l'Union Européenne. Explications.</p>" },

                { "category": "press", "title": "Digital Accessibility is crucial for an inclusive customer experience yet only 39% of global companies are on track for EU Compliance [Septembre 2024]", "url": "https://cyprusshippingnews.com/2024/09/17/digital-accessibility-is-crucial-for-an-inclusive-customer-experience-yet-only-39-of-global-companies-are-on-track-for-eu-compliance/", "description": "<p>Une étude de Software Advice montre que seules 39% des entreprises mondiales sont prêtes à se conformer à la réglementation européenne sur l'accessibilité numérique avant la date limite de juin 2025.</p>" },

                { "category": "press", "title": "Political party websites freezing out voters with disabilities - report [Avril 2024]", "url": "https://www.euronews.com/health/2024/04/11/political-party-websites-freezing-out-voters-with-disabilities-report", "description": "<p>Une étude met en évidence les graves lacunes en matière d'accessibilité des sites web des principaux partis politiques européens, compromettant la participation des électeurs en situation de handicap.</p>" },
                
                { "category": "press", "title": "Accessibilité numérique : le Gouvernement entérine l'ordonnance visant à contrôler l'accessibilité des sites des administrations publiques à compter 2024 [Novembre 2023]", "url": "https://www.numerique.gouv.fr/espace-presse/accessibilite-numerique-le-gouvernement-enterine-lordonnance-visant-a-controler-laccessibilite-des-sites-des-administrations-publiques-a-compter-2024/", "description": "<p>Le gouvernement français ratifie une ordonnance renforçant les sanctions pour non-respect des obligations d'accessibilité numérique des sites publics, avec des amendes pouvant atteindre 50 000€.</p>" },
                
                { "category": "press", "title": "Etat des lieux de l'accessibilité numérique en Belgique [2023]", "url": "https://cawab.be/Etat-des-lieux-de-l-accessibilite-numerique-en-Belgique", "description": "<p>Un rapport du BOSA révèle que la majorité des sites web publics belges ne respectent pas les normes d'accessibilité requises par la directive européenne, avec seulement 18% des sites ayant publié une déclaration d'accessibilité en 2021.</p>" },
                
                { "category": "press", "title": "Accessibilité Numérique : les enjeux européens [2023]", "url": "https://blog.ipedis.com/accessibilite-numerique-enjeux-europeens", "description": "<p>Un article détaillant les implications de la loi européenne sur l'Accessibilité (European Accessibility Law) adoptée en 2019, qui oblige de nombreux secteurs à se conformer aux exigences d'accessibilité numérique d'ici 2025.</p>" },
                
                { "category": "press", "title": "Accessibilité numérique pour les personnes illettrées : la loi ne garantit pas l'égalité [2023]", "url": "https://lire-et-ecrire.be/Accessibilite-numerique-pour-les-personnes-illettrees", "description": "<p>Une analyse critique de la mise en œuvre de la directive européenne sur l'accessibilité numérique en Belgique, soulignant les lacunes dans la prise en compte des besoins des personnes illettrées.</p>" },
                
                { "category": "press", "title": "Inclusion numérique - Appel à projets 2023 [2023]", "url": "https://economie.fgov.be/fr/themes/line/inclusion-numerique/appel-projets/inclusion-numerique-appel", "description": "<p>Le SPF Economie belge lance un appel à projets visant à promouvoir l'inclusion numérique, en particulier pour les consommateurs, les PME et les indépendants, dans le cadre des objectifs numériques européens 2030.</p>" },
                
                { "category": "press", "title": "Qu'est-ce que la stratégie européenne d'accès aux droits des personnes handicapées 2021-2030 ? [2023]", "url": "https://www.touteleurope.eu/societe/qu-est-ce-que-la-strategie-europeenne-d-acces-aux-droits-des-handicapes-2021-2030/", "description": "<p>Un aperçu de la stratégie européenne visant à améliorer l'inclusion des personnes handicapées, y compris des mesures pour favoriser l'accessibilité numérique.</p>" },
                
                { "category": "press", "title": "Accessibilité Web : la directive sur l'accessibilité du web [2023]", "url": "https://digital-strategy.ec.europa.eu/fr/policies/web-accessibility", "description": "<p>Une présentation de la directive européenne sur l'accessibilité des sites internet, qui vise à améliorer l'accès aux sites web et applications mobiles des services publics pour les personnes handicapées.</p>" },
                
                { "category": "press", "title": "Accessibilité web : top 10 des questions les plus souvent posées [2023]", "url": "https://blog.ipedis.com/accessibilite-web-top-10-des-questions-les-plus-souvent-posees", "description": "<p>Un article répondant aux questions fréquentes sur l'accessibilité web, incluant des informations sur les réglementations européennes et françaises en la matière.</p>" },
                
                { "category": "press", "title": "Revue de presse | Handicap et numérique [2023]", "url": "https://dubasque.org/revue-de-presse-quest-ce-que-la-maltraitance-institutionnelle-handicap-et-numerique-lase-et-la-prostitution-des-mineurs/", "description": "<p>Une revue de presse abordant divers sujets liés au handicap, dont les recommandations d'Emmaüs Connect et la Croix Rouge pour favoriser l'inclusion numérique des personnes en situation de handicap.</p>" },                
                /************************************************************************************************/
                /* Exemple de lien de décret:                                                                   */
                /* { "category": "decree", "title": "un titre", "url": "#", "description": "une description", "note": 3 } */
                /************************************************************************************************/
                
                { "category": "decree", "title": "Transposition belge de la Directive (UE) 2016/2102", "url": "", "description": "<ol><li><a href=\"http://www.ejustice.just.fgov.be/eli/loi/2018/07/19/2018040577/justel\">Loi fédérale du 19 juillet 2018</a></li><li><a href=\"https://codex.vlaanderen.be/Portals/Codex/documenten/1030009.html\">Décret flamand du 7 décembre 2018</a></li><li><a href=\"https://etaamb.openjustice.be/fr/ordonnance-du-04-octobre-2018_n2018031954.html\">Ordonnance bruxelloise du 4 octobre 2018</a></li><li><a href=\"https://etaamb.openjustice.be/fr/decret-du-15-octobre-2018_n2018205558.html\">Décret de la Communauté germanophone du 15 octobre 2018</a></li><li><a href=\"https://www.ejustice.just.fgov.be/eli/decret/2019/05/09/2019012800/moniteur\">Décret relatif à l'accessibilité des sites internet et des applications mobiles des institutions publiques de la Commission communautaire française</a></li><li><a href=\"https://wallex.wallonie.be/eli/loi-decret/2019/05/02/2019203962\">Décret wallon du 2 mai 2019</a></li><li><a href=\"https://www.gallilex.cfwb.be/document/pdf/47101_000.pdf\">Décret de la Fédération Wallonie-Bruxelles du 3 mai 2019</a></li></ol>", "note": 4
                    },
                { "category": "decree", "title": "Directive (UE) 2016/2102 du 26 octobre 2016", "url": "https://eur-lex.europa.eu/FR/legal-content/summary/accessibility-of-public-sector-websites-and-mobile-apps.html", "description": "<p>Cette directive concerne l'accessibilité des sites internet et des applications mobiles des organismes du secteur public. Elle impose que ces sites et applications soient \"plus accessibles\", en particulier pour les personnes handicapées, en les rendant \"perceptibles, utilisables, compréhensibles et robustes\".</p>", "note": 5              
                }
            ]
        },
        /******************************/
        /* Accessibilité des Chatbots */
        /******************************/
        {
          "id": "chatbots",
          "title": "Accessibilité des Chatbots Interactifs",
          "label": "Aller à la section Accessibilité des Chatbots Interactifs",
          "description": "Analyse de l'accessibilité des différents chatbots interactifs disponibles pour le grand public.",
          "table": true,
          "hiddenColumns": ["url"],          
          "numbered": true,
          "content": [
            {
              "title": "ChatGPT",
              "url": "https://chat.openai.com/",
              "result": "négatif",
              "description": "L'interface n'est souvent pas entièrement conforme aux normes d'accessibilité, ce qui pose des difficultés aux utilisateurs de lecteurs d'écran.",
              "note": 1
            },
            {
              "title": "Claude",
              "url": "https://www.anthropic.com/",
              "result": "positif",
              "description": "Il intègre des fonctionnalités comme la reconnaissance vocale et la synthèse vocale pour améliorer l'accessibilité. Claude a fait l'objet de tests approfondis pour répondre aux normes d'accessibilité.",
              "note": 4
            },
            {
              "title": "Gemini",
              "url": "https://gemini.google.com/",
              "result": "positif",
              "description": "Il s'intègre avec TalkBack pour fournir de meilleures descriptions d'images aux utilisateurs malvoyants.",
              "note": 4
            },
            {
              "title": "Pi",
              "url": "https://pi.ai/",
              "result": "?",
              "description": "<i>Pas d'information.</i>",
              "note": 0
            },
            {
              "title": "Grok",
              "url": "https://grok.x.ai/",
              "result": "?",
              "description": "<i>Pas d'information.</i>",
              "note": 0
            },
            {
              "title": "Groq (différent de Grok)",
              "url": "https://groq.com/",
              "result": "?",
              "description": "<i>Pas d'information.</i>",
              "note": 0
            },
            {
              "title": "Copilot (Microsoft)",
              "url": "https://copilot.microsoft.com/",
              "result": "positif",
              "description": "Compatible avec les lecteurs d'écran.",
              "note": 4
            },
            {
              "title": "Alexa",
              "url": "https://alexa.amazon.com/",
              "result": "positif",
              "description": "Elle offre diverses fonctionnalités d'accessibilité, notamment le lecteur d'écran VoiceView qui aide les utilisateurs malvoyants.",
              "note": 4
            }
          ]
        },
        /*******************************/
        /* Idées d'Articles Vulgarisés */
        /*******************************/
        {
            "id": "vulgarisation",
            "title": "Idées d'Articles Vulgarisés sur les Nouvelles Technologies",
            "label": "Aller à la section Idées d'Articles Vulgarisés",
            "description": "Idées d'articles à vulgariser sur les Nouvelles Technologies.",
            "numbered": true,
            "content": [
                { "title": "Les lunettes intelligentes Ray-Ban Meta : une révolution pour l'accessibilité des malvoyants ?", "description": "Les lunettes intelligentes Ray-Ban Meta, fruit d'une collaboration entre Meta et Ray-Ban, suscitent un grand intérêt dans le domaine de l'accessibilité pour les personnes malvoyantes. Bien que n'étant pas spécifiquement conçues pour cette utilisation, ces lunettes offrent des fonctionnalités prometteuses qui pourraient grandement améliorer l'autonomie et la qualité de vie des déficients visuels. <br><u>Selon FrAndroid</u>:\"<i>Les utilisateurs aveugles et malvoyants pourront quant à eux bénéficier directement des services de Be My Eyes, permettant d’entrer en contact avec des volontaires qui pourront leur décrire une scène ou un objet.</i>\"" },
                { "title": "Chat vocal de ChatGPT: Une aide pour les déficients visuels ?", "description": "OpenAI fournit le chat vocal permettant de dialoguer avec le chatbot comme si c'était un humain. Cette manière d'interagir est nettement plus facile pour les personnes déficientes visuelles. Elle permet de se libérer d'écrire et d'interagir avec une interface peu accessible." }
            ]
        }
    ]
};
