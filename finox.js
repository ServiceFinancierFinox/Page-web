/* ═══════════════════════════════════════════════════════════════
   FINOX CRM — JavaScript Complet
   Cursor · Canvas · Scroll Reveal · Dashboard · Counters · Forms
═══════════════════════════════════════════════════════════════ */

'use strict';

/* ──────────────────────────────────────────────────────────────
   DATA
────────────────────────────────────────────────────────────── */
const DATA = {

  hero: {
    eyebrow: 'Construit au Québec · Pour les conseillers en assurance et placement',
    line1: ["L'OS", ' complet'],
    line2: ["de l'assurance."],
    line3: ['ABF · Signatures · IA · Conformité AMF · Tout intégré.'],
    sub: 'FINOX CRM est la première plateforme exclusive aux conseillers québécois qui automatise <strong>80% du travail administratif</strong> — de l\'analyse des besoins financiers au préavis de remplacement — pour que vous passiez votre temps à <strong>bâtir des relations</strong>, pas à cliquer.',
    stats: [
      { target: 70,  suffix: '%',  label: 'Admin éliminé' },
      { target: 3,   suffix: '×',  label: 'Plus de ventes' },
      { target: 85,  prefix: '$',  label: 'Économisé/lead' },
      { target: 8,   suffix: 'h',  label: 'Récupérées/semaine' },
    ],
    ctaNote: 'Accès bêta gratuit · Aucune carte requise · AMF-compatible · Google Workspace inclus',
  },

  marquee1: [
    'ABF complet & conforme AMF',
    'Signature OneSpan & Adobe Sign',
    'IA — 80% de l\'admin automatisé',
    'Hub communication SMS · Email · Appels',
    'Pulse Vital — santé du client en temps réel',
    'Calculateur multi-compagnies QC & Canada',
    'RingCentral téléphonie intégrée',
    'Calendrier intégré · Sync Google Calendar',
    'Google Workspace fourni',
    'Module REEE + subventions gouvernementales',
    'Pipeline assurances kanban',
    'Import clientèle existante',
  ],
  marquee2: [
    'Préavis remplacement auto-rempli & signé',
    'Lettre explicative automatisée AMF',
    'Module gestion corporations',
    'Timeline complète par client',
    'Opportunités futures automatisées',
    'Calculateur MG — propriété partagée',
    'Budget personnel + recommandations IA',
    'Assurance hypothécaire Desjardins vs marché',
    'Profil investisseur conforme AMF',
    'Documents sécurisés avec mot de passe',
    'Calculateur impôt au décès',
    'Workflows automatisés sans code',
  ],

  dashboard: {
    kpis: [
      { icon: '💰', value: '$84 240', label: 'Primes ce mois',      change: '↑ +23.4%', dir: 'up', cls: 'gold' },
      { icon: '💓', value: '82/100',  label: 'Pulse Vital moyen',   change: '↑ +6 pts',  dir: 'up', cls: 'gn'   },
      { icon: '✍️', value: '18',      label: 'Signatures en attente',change: '↓ -3 auj.', dir: 'dn', cls: 'bl'   },
      { icon: '🤖', value: '34',      label: 'Actions IA complétées',change: '↑ +12 auj.',dir: 'up', cls: 'pu'   },
    ],
    pipeline: [
      { label: 'Prospects',   color: '#4A8ED4', width: '90%', count: 47 },
      { label: 'Analyse ABF', color: '#C4A24A', width: '66%', count: 31 },
      { label: 'Tarification',color: '#8A6AE4', width: '50%', count: 24 },
      { label: 'Signature',   color: '#E08040', width: '33%', count: 15 },
      { label: 'En vigueur',  color: '#3EC89A', width: '22%', count: 11 },
    ],
    activity: [
      { color: '#3EC89A', title: 'IA — Dossier mis à jour',   text: 'Email Agenz reçu · Police MT-4821 approuvée · Statut mis à jour automatiquement', time: 'maintenant' },
      { color: '#C4A24A', title: 'Signature reçue — AMF ✓',    text: 'Préavis de remplacement signé — Jacques Bergeron · OneSpan confirmé', time: '2 min' },
      { color: '#4A8ED4', title: 'Suivi automatique envoyé',   text: 'Séquence J+3 · 12 prospects · SMS RingCentral déclenchés via workflow', time: '8 min' },
      { color: '#8A6AE4', title: 'ABF complété — Pierre Gagné',text: 'Valeur nette $1.1M · Besoin vie $600k · MG plan Tranquillité recommandé', time: '22 min' },
      { color: '#C44A4A', title: 'Alerte Pulse Vital',         text: 'Sophie Roy : score 72 → 58 · Aucun contact depuis 18 jours · Relance suggérée', time: '1h' },
    ],
    clients: [
      { initials: 'MT', name: 'Marie Tremblay',   meta: 'Vie entière · Laval',           pulse: '💓 94/100 — Excellent', value: '$412k', badgeCls: 'badge-gn', badgeTxt: 'Actif'     },
      { initials: 'JB', name: 'Jacques Bergeron', meta: 'Invalidité + Corp · Montréal',  pulse: '💛 75/100 — Stable',    value: '$2.1M', badgeCls: 'badge-or', badgeTxt: 'En cours'  },
      { initials: 'SR', name: 'Sophie Roy',        meta: 'Hypothèque + REEE · Québec',   pulse: '🔵 58/100 — À relancer', value: '$680k', badgeCls: 'badge-bl', badgeTxt: 'Prospect'  },
    ],
    chartPoints: [62, 55, 58, 60, 42, 30, 36, 40, 22, 8, 14, 18, 4],
  },

  pulseVital: {
    client: 'Jacques Bergeron',
    score: 75,
    scoreMax: 100,
    status: '💛 Stable — Dernier contact il y a 2 jours',
    statusPts: '+20 pts actifs',
    breakdown: [
      { icon: '✅', text: 'Analyse des besoins financiers complétée', pts: '+20', neg: false },
      { icon: '📞', text: 'Contact récent — interaction il y a 2 jours',  pts: '+15', neg: false },
      { icon: '🛡️', text: '2 produits actifs sous gestion',               pts: '+10', neg: false },
      { icon: '📅', text: 'Aucun rendez-vous planifié (manque)',          pts: '-5',  neg: true  },
      { icon: '🎯', text: 'Opportunités futures non complétées',          pts: '-5',  neg: true  },
    ],
    suggestions: [
      { icon: '📅', text: 'Planifier un rendez-vous — démontre une relation active avec le client', pts: '+10' },
      { icon: '📈', text: 'Proposer un placement — renforce le lien et la confiance',               pts: '+10' },
      { icon: '🎯', text: 'Créer une opportunité — identifier un nouveau besoin identifié',         pts: '+5'  },
      { icon: '🗓️', text: 'Planifier des opportunités futures — 2+ avec dates cibles',             pts: '+5'  },
      { icon: '✅', text: 'Compléter les tâches en cours — taux > 75% sur 30 jours',               pts: '+5'  },
      { icon: '🤝', text: 'Obtenir une référence — client satisfait, demandez-la',                 pts: '+3'  },
    ],
  },

  abfCards: [
    { n:'01', icon:'🗺️', name:'Adresse automatique via Google Maps',         desc:'L\'adresse du client est trouvée et vérifiée automatiquement via l\'intégration Google Maps. Fini la saisie manuelle et les erreurs sur les contrats — l\'information se propage dans tout l\'ABF.',                                     tag:'Google Maps intégré'         },
    { n:'02', icon:'💰', name:'Salaire brut → mensuel net automatique',       desc:'Entrez le salaire annuel brut une seule fois. FINOX le convertit en mensuel net et calcule automatiquement le besoin en invalidité et en assurance vie. Zéro répétition, zéro erreur.',                                                  tag:'Calculs en cascade'          },
    { n:'03', icon:'⚖️', name:'Actifs & passifs interactifs + valeur nette',  desc:'Un calculateur visuellement beau et interactif pour le client. La valeur nette est calculée automatiquement et réutilisée pour justifier les montants d\'assurance vie nécessaires — données sauvegardées pour tous les modules.',   tag:'Interactif & visuel'         },
    { n:'04', icon:'🛡️', name:'Besoins vie, invalidité & MG — séparés',       desc:'Calculs automatisés séparément pour le client et sa conjointe. Visuellement clairs, détaillés, faciles à comprendre. Les données de l\'ABF alimentent automatiquement sans jamais ressaisir.',                                        tag:'Client + Conjoint(e)'        },
    { n:'04b',icon:'👨‍👩‍👧‍👦', name:'Fiche familiale complète — Conjoint(e) & enfants', desc:'Ajoutez les enfants au profil du client pour justifier les besoins avec précision. Conjoint(e), enfants et contrats respectifs restent dans la même fiche. L\'ABF est parfaitement précise pour toute la famille.',             tag:'Fiche familiale unifiée'     },
    { n:'05', icon:'🏢', name:'Module Corporations complet',                  desc:'Gestion des corporations avec analyse des besoins financiers de l\'entreprise, outils de calculs dédiés pour donner un visuel clair à l\'entrepreneur. Opportunités reliées générées automatiquement.',                               tag:'ABF corporatif'              },
    { n:'06', icon:'📋', name:'Module assurances en vigueur',                 desc:'Intégration complète des polices existantes dans l\'ABF. Le système identifie automatiquement les lacunes dans la couverture actuelle et les opportunités de consolidation ou de remplacement.',                                         tag:'Polices existantes'          },
    { n:'07', icon:'💡', name:'Projets d\'épargne & placements',              desc:'Calculateurs intégrés pour justifier les placements avec des projets d\'épargne simplifiés. Liquidité disponible calculée automatiquement, recommandations de budget d\'investissement selon le profil.',                             tag:'Épargne & placements'        },
    { n:'08', icon:'🧮', name:'Calculateur d\'impôt au décès',               desc:'Calcul automatisé de l\'impôt au décès directement dans l\'ABF pour justifier précisément le montant d\'assurance vie nécessaire. Données fiscales appliquées selon les règles québécoises et canadiennes.',                           tag:'Fiscalité intégrée'          },
    { n:'09', icon:'🔒', name:'Module conformité & recommandations AMF',      desc:'Assure la conformité complète selon les exigences de l\'AMF. La plateforme prend automatiquement les bonnes notes au dossier sans jamais demander au conseiller d\'y consacrer du temps. Toujours en règle.',                           tag:'AMF-compatible'              },
  ],

  mgPlans: [
    {
      badge: 'Plan 1 — Répit temporaire', badgeCls: 'blue', name: 'Protection essentielle',
      duration: '6', durationSub: 'mois de revenus + frais immédiats', featured: false,
      features: [
        '6 mois de revenus nets remplacés',
        'Frais immédiats couverts (médical, transport)',
        'Protection minimale pour traverser la période aiguë',
        'Prime la plus abordable — idéal pour les budgets serrés',
        'Seuil d\'entrée pour tous les clients',
      ],
    },
    {
      badge: 'Plan 2 — Recommandé ⭐', badgeCls: 'gold', name: 'Tranquillité d\'esprit',
      duration: '12', durationSub: 'mois de revenus + soins + médicaments', featured: true,
      features: [
        '12 mois de revenus nets remplacés',
        'Frais immédiats + soins spécialisés',
        'Médicaments non couverts par la RAMQ inclus',
        'Soins souvent négligés dans les calculs standards',
        'Équilibre optimal protection / prime',
        'Recommandé pour la majorité des clients',
      ],
    },
    {
      badge: 'Plan 3 — Confort complet', badgeCls: 'purple', name: 'Protection totale',
      duration: '24', durationSub: 'mois de revenus + couverture complète imprévus', featured: false,
      features: [
        '24 mois de revenus nets remplacés',
        'Couverture complète de tous les imprévus',
        'Soins, médicaments, convalescence longue durée',
        'Zéro compromis sur la protection',
        'Idéal pour les travailleurs autonomes & entrepreneurs',
      ],
    },
  ],

  bentoTools: [
    {
      cls: 'bento-1', n: '01', icon: '💡',
      name: 'Calculateur d\'assurance multi-compagnies QC & Canada',
      desc: 'Connecté à toutes les compagnies d\'assurance au Québec et au Canada. Plus besoin de Compulife, LifeGuide ou WinQuote. Visuellement beaucoup plus attractif — l\'interface ressemble à 2025, pas à Windows XP. Le temporaire décroissant est sélectionnable (rare), le conjoint premier et dernier décès aussi. Les données de l\'ABF — âge le plus proche calculé auto, sexe, statut fumeur — sont importées automatiquement sans jamais ressaisir.',
      tag: 'Remplace Compulife · WinQuote · LifeGuide',
      widget: 'quotes',
    },
    {
      cls: 'bento-2', n: '02', icon: '🏠',
      name: 'Assurance hypothécaire — Vrai coût Desjardins vs marché',
      desc: 'Calculateur qui montre au client le vrai coût de l\'assurance hypothécaire bancaire vs l\'avoir au personnel avec l\'assurance privée individuelle. Facilite radicalement la vente avec des graphiques et données claires sur 25 ans. Le client comprend instantanément pourquoi une police individuelle lui coûte moins cher et lui offre une meilleure protection — capital fixe vs décroissant, cessibilité, conversion.',
      tag: 'Graphiques comparatifs · Vente simplifiée',
      widget: 'hypoth',
    },
    {
      cls: 'bento-3', n: '03', icon: '💼',
      name: 'Budget personnel + recommandations auto',
      desc: 'Budget personnel détaillé pour calculer la liquidité disponible du client. Visuellement beau avec des recommandations automatiques sur les habitudes de dépenses et une suggestion de budget d\'investissement personnalisée selon le profil.',
      tag: 'Liquidité disponible · Recommandations IA',
      widget: null,
    },
    {
      cls: 'bento-4', n: '04', icon: '🎓',
      name: 'Calculateur REEE complet + subventions',
      desc: 'Rendements potentiels incluant toutes les subventions gouvernementales détaillées par source (SCEE, IQEE, BEC) en tenant compte du revenu familial net pour calculer précisément les subventions auxquelles le client a droit.',
      tag: 'SCEE · IQEE · BEC par revenu familial',
      widget: 'reee',
    },
    {
      cls: 'bento-5', n: '05', icon: '📊',
      name: 'Profil investisseur conforme AMF',
      desc: 'Profil investisseur visuellement attractif pour assurer la conformité de toutes les transactions de placements. Intégré directement dans le dossier client pour une traçabilité complète.',
      tag: 'Conformité placements · AMF',
      widget: null,
    },
    {
      cls: 'bento-6', n: '06', icon: '🏗️',
      name: 'Calculateur MG — Propriété partagée pour entreprises',
      desc: 'Outil exclusif qui permet de justifier visuellement le remboursement de primes dans le cadre d\'une stratégie de propriété partagée (Insurance-Backed Loan / IBL). Démontre clairement qu\'il est plus avantageux pour l\'entrepreneur de financer sa prime via la corporation plutôt que via un placement à l\'intérieur de la corp — avec graphiques comparatifs et données chiffrées. Simplifie radicalement la vente de produits permanents aux entrepreneurs québécois.',
      tag: 'Propriété partagée · IBL · Entrepreneurs',
      widget: null,
    },
    {
      cls: 'bento-7', n: '07', icon: '🎯',
      name: 'Pipeline des assurances — Réinventé',
      desc: 'Gestion complète des contrats en cours, en vigueur, annulés ou fermés — réinventée pour être simple, visuelle et efficace. Vue kanban drag-and-drop, filtres par conseiller, compagnie, type de produit. Chaque contrat lié directement au dossier client avec toute l\'historique accessible en 1 clic.',
      tag: 'Kanban · En vigueur · Annulés · Fermés',
      widget: null,
    },
  ],

  aiMessages: [
    { role: 'ai',   text: '<strong>IA — Mise à jour automatique</strong>J\'ai reçu un email d\'Agenz concernant Jacques Bergeron. Sa police #MT-4821 a été approuvée standard. J\'ai mis à jour son dossier, changé le statut pipeline de "Tarification" à "En vigueur" et créé un rappel de suivi dans 3 mois automatiquement.' },
    { role: 'user', text: 'Parfait. Envoie-lui un message de félicitations et prépare le prochain rendez-vous dans 6 mois.' },
    { role: 'ai',   text: '<strong>IA — 4 actions complétées</strong>✓ SMS envoyé via RingCentral — "Félicitations Jacques, votre police est maintenant en vigueur..."<br>✓ Rendez-vous de suivi créé — 21 août 2025, 10h00<br>✓ Opportunité future ajoutée — Renouvellement hypothécaire mars 2027<br>✓ Pulse Vital mis à jour — 75 → 84 (+9 pts)' },
    { role: 'ai',   text: '<strong>IA — Analyse proactive de votre portefeuille</strong>Sophie Roy n\'a pas été contactée depuis 18 jours. Son Pulse Vital est passé de 72 à 58. Je suggère un appel cette semaine — elle a une hypothèque à renouveler en mars 2025 et n\'a toujours pas de couverture invalidité.' },
  ],

  commItems: [
    { initials: 'AG', from: 'Agenz — Compagnie A', time: 'maintenant', prev: 'Police #MT-4821 — Approuvée standard · Émission prévue 25 fév 2025', badge: 'gn', badgeTxt: '✓ IA mis à jour dossier JB automatiquement', unread: true  },
    { initials: 'MT', from: 'Marie Tremblay',      time: '14:22',      prev: 'Bonjour, j\'aimerais avoir plus d\'information sur la maladie grave pour mon conjoint aussi', badge: 'bl', badgeTxt: 'IA — Réponse préparée · En attente approbation', unread: false },
    { initials: 'SR', from: 'Sophie Roy',           time: 'hier',       prev: 'Mon hypothèque arrive à terme en mars, j\'aimerais qu\'on se rencontre', badge: 'or', badgeTxt: 'IA — Opportunité créée · Renouvellement mars 2025', unread: false },
    { initials: 'PG', from: 'Pierre Gagné',         time: 'lundi',      prev: 'Suite à notre rencontre, je confirme que je veux procéder avec le plan 2', badge: 'gn', badgeTxt: '✓ ABF complété · Prêt pour soumission', unread: false },
  ],

  timelineEvents: [
    { iconCls: 'sign',   icon: '✍️',  title: 'Signature reçue — Préavis de remplacement AMF', tag: 'Conformité', tagCls: 'opp', desc: 'Préavis de remplacement et lettre explicative signés via OneSpan. Police vie entière $750k approuvée. Dossier AMF 100% conforme.', time: 'Aujourd\'hui · 14:32 · OneSpan' },
    { iconCls: 'email',  icon: '✉️',  title: 'Email Agenz reçu — Police approuvée', tag: 'IA mis à jour auto', tagCls: 'opp', desc: 'Police MT-4821 approuvée standard. IA a mis à jour le dossier, changé le statut pipeline et créé les tâches de suivi automatiquement.', time: 'Aujourd\'hui · 13:15 · Gmail IA' },
    { iconCls: 'call',   icon: '📞',  title: 'Appel — Présentation ABF finale', tag: null, tagCls: null, desc: 'Rencontre de 45 min — Présentation ABF complète, besoins vie $750k, invalidité $5 400/mois acceptés. Client enthousiaste, prêt à procéder. Transcript IA disponible.', time: '19 fév · 10:00 · RingCentral · 45 min' },
    { iconCls: 'note',   icon: '📝',  title: 'ABF complété — Analyse des besoins financiers', tag: null, tagCls: null, desc: 'ABF rempli complet. Valeur nette $1.2M. Besoin vie $750k, invalidité $5 400/mois, MG plan Tranquillité d\'esprit. Corporation analysée — proposition MG propriété partagée à préparer.', time: '17 fév · Dany Lévesque' },
    { iconCls: 'future', icon: '🏠',  title: 'Opportunité future — Renouvellement hypothécaire', tag: 'Automatisé dans 24 mois', tagCls: 'fut', desc: 'Hypothèque $450k arrive à terme mars 2027. Rappel automatique créé — contact prévu 3 mois avant l\'échéance pour préparer l\'analyse.', time: 'Mars 2027 · Rappel auto · IA FINOX' },
    { iconCls: 'opport', icon: '💼',  title: 'Opportunité future — Corporation · MG propriété partagée', tag: 'Q3 2025', tagCls: 'fut', desc: 'Proposition MG propriété partagée pour la corporation de Jacques à préparer. Rencontre planifiée avec son comptable pour Q3 2025.', time: 'Sep 2025 · Rencontre planifiée · Comptable confirmé' },
  ],

  opportunities: [
    { icon: '🏠', name: 'Renouvellements hypothécaires',     desc: 'Rappel automatique 3–6 mois avant la date de renouvellement pour préparer l\'analyse et proposer la bonne couverture hypothécaire privée.',                                                           tag: 'Auto · 3 mois avant'         },
    { icon: '🚗', name: 'Assurances auto & habitation',       desc: 'Suivi des renouvellements annuels et opportunités de consolidation. Ne laissez plus vos clients renouveler sans vous.',                                                                                   tag: 'Auto · Annuel'               },
    { icon: '📈', name: 'Rencontres de placement',            desc: 'Planification automatique des rencontres de révision de portefeuille selon la fréquence configurée et les changements de marché significatifs.',                                                           tag: 'Selon fréquence'             },
    { icon: '👶', name: 'Naissance d\'un enfant',             desc: 'Détection et rappel pour ajouter l\'enfant au REEE, ajuster l\'assurance vie et revoir les besoins familiaux complets lors d\'un événement de vie.',                                                       tag: 'Événement de vie'            },
    { icon: '📋', name: 'Contrats délayés (qualifiabilité)',  desc: 'Suivi automatique des clients qui attendent d\'être qualifiables pour l\'assurance. Rappel à la date cible avec toutes les informations du dossier précédent.',                                            tag: 'Date cible auto'             },
    { icon: '🤝', name: 'Références & recommandations',       desc: 'Rappels stratégiques pour demander une référence aux clients avec un Pulse Vital élevé. Gestion complète du cycle de référence jusqu\'à la conversion.',                                                  tag: 'Pulse > 80'                  },
    { icon: '⚖️', name: 'Testament & planification successorale', desc: 'Opportunités de planification successorale créées automatiquement selon l\'âge, les actifs et les événements familiaux. Rappels coordonnés avec notaires.',                                           tag: 'Événement successoral'       },
    { icon: '🏢', name: 'Opportunités corporatives',          desc: 'Analyse des besoins de la corporation mise à jour automatiquement selon les changements de revenus, actifs et structure. Propositions MG et propriété partagée suggérées.',                               tag: 'Corporation auto'            },
    { icon: '🔄', name: 'Relances & retours de leads froids', desc: 'Séquences de réengagement automatisées pour les leads qui n\'ont pas converti. L\'IA suggère le meilleur moment et le bon message basé sur l\'historique du dossier.',                                    tag: 'IA prédictif'                },
  ],

  conformite: [
    { icon: '📁', name: 'Centre de documentation par client',      desc: 'Tous les documents du client centralisés dans son dossier, renommés automatiquement selon les normes AMF. Plus jamais de fichiers nommés "scan_001.pdf" dans votre Drive.' },
    { icon: '📨', name: 'Demande de documents sécurisée',          desc: 'Envoyez une demande de documents directement au client. Il uploade ses fichiers via un portail sécurisé — sans email, sans risque de confidentialité, avec confirmation de réception automatique.' },
    { icon: '🔒', name: 'Envoi sécurisé avec mot de passe',        desc: 'Partagez des documents confidentiels avec un lien protégé par mot de passe. Traçabilité complète — qui a accédé, quand, depuis quel appareil.' },
    { icon: '📜', name: 'Politique de confidentialité de cabinet', desc: 'Politique de confidentialité prête à l\'emploi, conforme à la Loi 25 et aux exigences de l\'AMF. Envoyée automatiquement à chaque nouveau client avec confirmation de lecture électronique.' },
    { icon: '✍️', name: 'Signature électronique OneSpan & Adobe',  desc: 'Intégration complète avec OneSpan Sign et Adobe Sign. Toutes les signatures liées directement au dossier — traçabilité parfaite pour les audits AMF. Temps moyen de signature : 4 minutes.' },
    { icon: '🗂️', name: 'Renommage automatique conforme AMF',      desc: 'Chaque document est renommé automatiquement selon la nomenclature AMF — [Client]_[Date]_[Type]. Fini le chaos dans Google Drive, tout est trouvable en 3 secondes.' },
  ],

  numbers: [
    { num: '70', suffix: '%', label: 'Réduction du temps administratif', sub: 'Mesuré chez nos conseillers bêta' },
    { num: '147', suffix: '',  label: 'Clients gérés par conseiller en moyenne', sub: 'Sans adjoint supplémentaire' },
    { num: '8',   suffix: 'h',  label: 'Récupérées chaque semaine', sub: 'Consacrées aux ventes & relations' },
    { num: '3',   suffix: '×',  label: 'Plus de propositions émises', sub: 'Grâce à l\'automatisation des ABF' },
  ],

  testimonials: [
    { quote: 'FINOX a transformé ma pratique. Je fais maintenant 3 ABF complets par jour au lieu d\'un seul. Le Pulse Vital m\'a permis de récupérer 8 clients que j\'aurais perdus sans le savoir.', name: 'Mathieu Perreault', role: 'Conseiller senior · 200+ clients · Montréal' },
    { quote: 'Enfin un CRM fait par quelqu\'un qui comprend l\'assurance québécoise. Le préavis de remplacement automatique seul vaut le prix — ça me sauvait 45 minutes par dossier.', name: 'Caroline Beauchamp', role: 'Directrice de cabinet · 12 conseillers · Laval' },
    { quote: 'J\'ai abandonné Salesforce après 3 ans. FINOX fait en 1 clic ce qui me prenait 10 clics. Le calculateur hypothécaire Desjardins vs marché est un outil de vente incroyable.', name: 'François Lamontagne', role: 'Entrepreneur · Agence indépendante · Québec' },
  ],

  finalCTA: {
    eyebrow: 'Accès anticipé — Places limitées',
    title: 'Rejoignez les',
    titleEm: 'premiers.',
    sub: '50 conseillers sélectionnés bénéficieront d\'un accès bêta gratuit complet et d\'une formation personnalisée pour maximiser leur impact dès le premier mois.',
    spots: '34 / 50 places prises',
    trust: [
      'Accès bêta gratuit',
      'Formation 1:1 incluse',
      'AMF-compatible',
      'Google Workspace fourni',
      'Aucune carte requise',
    ],
  },
};

/* ──────────────────────────────────────────────────────────────
   CANVAS PARTICLES
────────────────────────────────────────────────────────────── */
class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: -9999, y: -9999 };
    this.raf = null;
    this.resize();
    this.init();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', e => { this.mouse.x = e.clientX; this.mouse.y = e.clientY; });
  }

  resize() {
    // Cap canvas resolution to avoid massive canvas when zoomed out
    this.canvas.width = Math.min(window.innerWidth, 1920);
    this.canvas.height = Math.min(window.innerHeight, 1080);
  }

  init() {
    this.particles = [];
    const area = Math.min(window.innerWidth, 1920) * Math.min(window.innerHeight, 1080);
    const count = Math.min(Math.floor(area / 18000), 90);
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - .5) * .28,
        vy: (Math.random() - .5) * .28,
        r: Math.random() * 1.4 + .4,
        alpha: Math.random() * .4 + .1,
        baseAlpha: Math.random() * .4 + .1,
      });
    }
    this.lastFrame = 0;
    this.animate();
  }

  animate(timestamp) {
    this.raf = requestAnimationFrame((t) => this.animate(t));

    // Limit to ~30 FPS instead of 60
    if (timestamp - this.lastFrame < 33) return;
    this.lastFrame = timestamp;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const mx = this.mouse.x, my = this.mouse.y;
    const influenceSq = 130 * 130;

    for (const p of this.particles) {
      const dx = mx - p.x, dy = my - p.y;
      const distSq = dx * dx + dy * dy;

      if (distSq < influenceSq) {
        const dist = Math.sqrt(distSq);
        const force = (130 - dist) / 130;
        p.vx -= (dx / dist) * force * .018;
        p.vy -= (dy / dist) * force * .018;
        p.alpha = Math.min(p.baseAlpha + force * .5, .75);
      } else {
        p.alpha += (p.baseAlpha - p.alpha) * .04;
      }

      p.vx *= .985;
      p.vy *= .985;
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = this.canvas.width;
      if (p.x > this.canvas.width) p.x = 0;
      if (p.y < 0) p.y = this.canvas.height;
      if (p.y > this.canvas.height) p.y = 0;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(196,162,74,${p.alpha})`;
      this.ctx.fill();
    }

    // Connections — use squared distance to avoid sqrt
    const connSq = 88 * 88;
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const a = this.particles[i], b = this.particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dSq = dx * dx + dy * dy;
        if (dSq < connSq) {
          const d = Math.sqrt(dSq);
          this.ctx.beginPath();
          this.ctx.moveTo(a.x, a.y);
          this.ctx.lineTo(b.x, b.y);
          this.ctx.strokeStyle = `rgba(196,162,74,${(1 - d / 88) * .12})`;
          this.ctx.lineWidth = .5;
          this.ctx.stroke();
        }
      }
    }
  }
}

/* ──────────────────────────────────────────────────────────────
   CURSOR
────────────────────────────────────────────────────────────── */
class Cursor {
  constructor() {
    this.dot = document.getElementById('cursor-dot');
    this.ring = document.getElementById('cursor-ring');
    this.px = window.innerWidth / 2;
    this.py = window.innerHeight / 2;
    this.rx = this.px;
    this.ry = this.py;
    this.bindEvents();
    this.loop();
  }

  bindEvents() {
    document.addEventListener('mousemove', e => {
      this.px = e.clientX;
      this.py = e.clientY;
      if (this.dot) {
        this.dot.style.left = this.px + 'px';
        this.dot.style.top = this.py + 'px';
      }
    });
    document.addEventListener('mouseover', e => {
      const t = e.target.closest('a,button,[class*="btn"],[class*="item"],[class*="card"],[class*="plan"],[class*="tab"],[class*="row"],[class*="sug"],[class*="score-line"],.cursor-hover-target');
      document.body.classList.toggle('cursor-hover', !!t);
    });
    document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
    document.addEventListener('mouseup', () => document.body.classList.remove('cursor-click'));
    document.addEventListener('click', e => {
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.left = e.clientX + 'px';
      ripple.style.top = e.clientY + 'px';
      document.body.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  }

  loop() {
    this.rx += (this.px - this.rx) * .11;
    this.ry += (this.py - this.ry) * .11;
    if (this.ring) {
      this.ring.style.left = this.rx + 'px';
      this.ring.style.top = this.ry + 'px';
    }
    requestAnimationFrame(() => this.loop());
  }
}

/* ──────────────────────────────────────────────────────────────
   SCROLL REVEAL
────────────────────────────────────────────────────────────── */
class ScrollReveal {
  constructor() {
    this.els = document.querySelectorAll('.rx,.rxl,.rxr,.rxs');
    this.observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => entry.target.classList.add('in'), delay);
          this.observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12 });
    this.els.forEach(el => this.observer.observe(el));
  }
}

/* ──────────────────────────────────────────────────────────────
   COUNTER ANIMATION
────────────────────────────────────────────────────────────── */
function animateCounter(el, target, prefix = '', suffix = '', duration = 1800) {
  const start = performance.now();
  const update = now => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const val = Math.round(ease * target);
    el.textContent = prefix + val + suffix;
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = prefix + target + suffix;
  };
  requestAnimationFrame(update);
}

/* ──────────────────────────────────────────────────────────────
   CHART SVG
────────────────────────────────────────────────────────────── */
function buildChart() {
  const pts = DATA.dashboard.chartPoints;
  const svgEl = document.getElementById('chart-svg');
  if (!svgEl) return;
  const w = 400, h = 80;
  const maxV = Math.max(...pts);
  const minV = Math.min(...pts);
  const pad = 4;
  const xs = pts.map((_, i) => (i / (pts.length - 1)) * w);
  const ys = pts.map(v => h - pad - ((v - minV) / (maxV - minV + 0.001)) * (h - pad * 2));

  let d = `M ${xs[0]} ${ys[0]}`;
  for (let i = 1; i < pts.length; i++) {
    const cx = (xs[i - 1] + xs[i]) / 2;
    d += ` C ${cx} ${ys[i - 1]}, ${cx} ${ys[i]}, ${xs[i]} ${ys[i]}`;
  }
  const fill = d + ` L ${xs[xs.length - 1]} ${h} L ${xs[0]} ${h} Z`;
  const totalLength = 520;

  svgEl.innerHTML = `
    <defs>
      <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#F0D070" stop-opacity=".28"/>
        <stop offset="100%" stop-color="#F0D070" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <path id="chart-fill" d="${fill}" fill="url(#cg)" opacity="0"/>
    <path id="chart-line" d="${d}" fill="none" stroke="#C4A24A" stroke-width="2" stroke-linecap="round"
          stroke-dasharray="${totalLength}" stroke-dashoffset="${totalLength}"/>
    <text x="0" y="${h}" fill="#5A5548" font-size="7" font-family="monospace">Sep</text>
    <text x="66" y="${h}" fill="#5A5548" font-size="7" font-family="monospace">Oct</text>
    <text x="133" y="${h}" fill="#5A5548" font-size="7" font-family="monospace">Nov</text>
    <text x="200" y="${h}" fill="#5A5548" font-size="7" font-family="monospace">Déc</text>
    <text x="266" y="${h}" fill="#5A5548" font-size="7" font-family="monospace">Jan</text>
    <text x="332" y="${h}" fill="#5A5548" font-size="7" font-family="monospace">Fév</text>`;
}

function animateChart() {
  const line = document.getElementById('chart-line');
  const fill = document.getElementById('chart-fill');
  if (!line) return;
  const totalLength = 520;
  let start = null;
  const dur = 2000;
  const step = ts => {
    if (!start) start = ts;
    const p = Math.min((ts - start) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    line.style.strokeDashoffset = totalLength * (1 - ease);
    if (fill) fill.style.opacity = ease * 1;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ──────────────────────────────────────────────────────────────
   ACTIVITY FEED
────────────────────────────────────────────────────────────── */
let activityIndex = 0;
let activityTimer = null;

function buildActivityFeed() {
  const feed = document.getElementById('activity-feed');
  if (!feed) return;
  feed.innerHTML = '';
  const items = DATA.dashboard.activity.slice(0, 3);
  items.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'activity-item';
    el.innerHTML = `
      <div class="activity-dot" style="background:${item.color}"></div>
      <div class="activity-text"><strong>${item.title}</strong>${item.text}</div>
      <div class="activity-time">${item.time}</div>`;
    feed.appendChild(el);
    setTimeout(() => el.classList.add('show'), i * 140);
  });
}

function rotateFeed() {
  const feed = document.getElementById('activity-feed');
  if (!feed) return;
  const items = feed.querySelectorAll('.activity-item');
  items.forEach(el => { el.classList.remove('show'); });
  setTimeout(() => {
    activityIndex = (activityIndex + 1) % DATA.dashboard.activity.length;
    feed.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const item = DATA.dashboard.activity[(activityIndex + i) % DATA.dashboard.activity.length];
      const el = document.createElement('div');
      el.className = 'activity-item';
      el.innerHTML = `
        <div class="activity-dot" style="background:${item.color}"></div>
        <div class="activity-text"><strong>${item.title}</strong>${item.text}</div>
        <div class="activity-time">${item.time}</div>`;
      feed.appendChild(el);
      setTimeout(() => el.classList.add('show'), i * 120);
    }
  }, 300);
}

/* ──────────────────────────────────────────────────────────────
   LIVE TIMESTAMP
────────────────────────────────────────────────────────────── */
function updateTimestamp() {
  const el = document.getElementById('live-ts');
  if (!el) return;
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  el.textContent = `${h}:${m}:${s}`;
}

/* ──────────────────────────────────────────────────────────────
   PIPELINE BARS ANIMATION
────────────────────────────────────────────────────────────── */
function animatePipelineBars() {
  document.querySelectorAll('.pipeline-bar').forEach(bar => bar.classList.add('animate'));
}

/* ──────────────────────────────────────────────────────────────
   SCORE RING ANIMATION
────────────────────────────────────────────────────────────── */
function animateScoreRing() {
  const ring = document.querySelector('.score-circle');
  if (ring) ring.classList.add('animated');
  const sigLine = document.querySelector('.sig-animated-line');
  if (sigLine) setTimeout(() => sigLine.classList.add('an'), 600);
}

/* ──────────────────────────────────────────────────────────────
   DASHBOARD 3D PARALLAX
────────────────────────────────────────────────────────────── */
function init3DParallax() {
  const frame = document.querySelector('.db-3d-wrap');
  if (!frame) return;

  let levitateTriggered = false;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !levitateTriggered) {
        levitateTriggered = true;
        setTimeout(() => frame.classList.add('levitate'), 300);
        setTimeout(() => {
          animateChart();
          animatePipelineBars();
          buildActivityFeed();
          activityTimer = setInterval(rotateFeed, 3800);
        }, 800);
        setTimeout(() => {
          document.querySelectorAll('[data-counter]').forEach(el => {
            animateCounter(el, parseInt(el.dataset.counter), el.dataset.prefix || '', el.dataset.suffix || '');
          });
        }, 400);
      }
    });
  }, { threshold: .15 });

  observer.observe(document.querySelector('.showcase'));

  const section = document.querySelector('.showcase');
  if (!section) return;
  section.addEventListener('mousemove', e => {
    if (!levitateTriggered) return;
    const rect = frame.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rx = ((e.clientY - cy) / rect.height) * 7;
    const ry = ((e.clientX - cx) / rect.width) * -7;
    frame.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.01)`;
    frame.style.transition = 'transform .15s ease';
  });
  section.addEventListener('mouseleave', () => {
    frame.style.transform = 'rotateX(4deg) scale(.97)';
    frame.style.transition = 'transform 1.2s cubic-bezier(0.16,1,0.3,1)';
  });
}

/* ──────────────────────────────────────────────────────────────
   PULSE VITAL OBSERVER
────────────────────────────────────────────────────────────── */
function initPulseObserver() {
  const card = document.querySelector('.pulse-card');
  if (!card) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(animateScoreRing, 400);
        observer.disconnect();
      }
    });
  }, { threshold: .3 });
  observer.observe(card);
}

/* ──────────────────────────────────────────────────────────────
   SIGNATURE LINE OBSERVER
────────────────────────────────────────────────────────────── */
function initSigObserver() {
  const line = document.querySelector('.sig-animated-line');
  if (!line) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => line.classList.add('an'), 300);
        observer.disconnect();
      }
    });
  }, { threshold: .5 });
  observer.observe(line);
}

/* ──────────────────────────────────────────────────────────────
   NUMBERS SECTION COUNTER
────────────────────────────────────────────────────────────── */
function initNumberCounters() {
  const nums = document.querySelectorAll('.big-num');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const val = parseInt(el.dataset.val);
        const suf = el.dataset.suf || '';
        animateCounter(el, val, '', suf, 2000);
        observer.unobserve(el);
      }
    });
  }, { threshold: .4 });
  nums.forEach(n => observer.observe(n));
}

/* ──────────────────────────────────────────────────────────────
   PARTNERSHIP DIAGRAM — scroll-triggered line animation
────────────────────────────────────────────────────────────── */
function initPartnershipDiagram() {
  const diagram = document.getElementById('partnership-diagram');
  if (!diagram) return;
  const lines = diagram.querySelectorAll('.pline');
  /* Compute each line length from coordinates and hide via dashoffset */
  lines.forEach(line => {
    const x1 = +line.getAttribute('x1'), y1 = +line.getAttribute('y1');
    const x2 = +line.getAttribute('x2'), y2 = +line.getAttribute('y2');
    const len = Math.hypot(x2 - x1, y2 - y1);
    line.setAttribute('stroke-dasharray', len);
    line.setAttribute('stroke-dashoffset', len);
  });
  function drawLine(line, duration) {
    const x1 = +line.getAttribute('x1'), y1 = +line.getAttribute('y1');
    const x2 = +line.getAttribute('x2'), y2 = +line.getAttribute('y2');
    const len = Math.hypot(x2 - x1, y2 - y1);
    const start = performance.now();
    (function step(now) {
      const t = Math.min((now - start) / duration, 1);
      const ease = t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      line.setAttribute('stroke-dashoffset', len * (1 - ease));
      if (t < 1) requestAnimationFrame(step);
    })(performance.now());
  }
  const delays = [0, 350, 700];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        lines.forEach((l, i) => setTimeout(() => drawLine(l, 2000), delays[i]));
        observer.unobserve(diagram);
      }
    });
  }, { threshold: .1 });
  observer.observe(diagram);
}

/* ──────────────────────────────────────────────────────────────
   ABF CAROUSEL
────────────────────────────────────────────────────────────── */
function abfMockup(n) {
  switch (n) {
    case '01': return `
      <div class="sv-search"><span>📍</span> 1455 Rue Peel, Montréal, QC H3A</div>
      <div class="sv-suggest on"><strong>1455 Rue Peel</strong>, Montréal, QC H3A 1T5</div>
      <div class="sv-suggest">1455 Rue Peel, Suite 200, Montréal, QC</div>
      <div class="sv-suggest">1455 Peel Street, Montréal, Québec</div>
      <div class="sv-flow">&#8594; Propagé dans ABF · Contrats · Polices</div>`;
    case '02': return `
      <div class="sv-calc"><div class="sv-big">$85 000</div><div class="sv-lbl">Salaire brut annuel</div></div>
      <div class="sv-calc"><div class="sv-arr">&#8595;</div></div>
      <div class="sv-calc"><div class="sv-big gd">$4 892</div><div class="sv-lbl">Mensuel net</div></div>
      <div class="sv-divider"></div>
      <div class="sv-flow">&#8594; Invalidité · Assurance vie · Budget</div>`;
    case '03': return `
      <div class="sv-row"><span>Actifs totaux</span><span class="sv-val gd">$487 200</span></div>
      <div class="sv-row"><span>Passifs totaux</span><span class="sv-val">$312 800</span></div>
      <div class="sv-divider"></div>
      <div class="sv-row hl"><span>Valeur nette</span><span class="sv-val gd">$174 400</span></div>
      <div class="sv-flow">&#8594; Montant assurance vie justifié auto</div>`;
    case '04': return `
      <div class="sv-cols"><div class="sv-col">
        <div class="sv-col-h">Client</div>
        <div class="sv-mini"><span>Vie</span><strong>$750 000</strong></div>
        <div class="sv-mini"><span>Invalidité</span><strong>$4 200/m</strong></div>
        <div class="sv-mini"><span>Mal. graves</span><strong>$100 000</strong></div>
      </div><div class="sv-col">
        <div class="sv-col-h">Conjoint(e)</div>
        <div class="sv-mini"><span>Vie</span><strong>$500 000</strong></div>
        <div class="sv-mini"><span>Invalidité</span><strong>$3 100/m</strong></div>
        <div class="sv-mini"><span>Mal. graves</span><strong>$75 000</strong></div>
      </div></div>`;
    case '04b': return `
      <div class="sv-member"><em>👤</em> Jacques Bergeron, 45 ans</div>
      <div class="sv-member"><em>👤</em> Marie Tremblay, 42 ans</div>
      <div class="sv-member child"><em>👦</em> Thomas, 12 ans — 1 contrat</div>
      <div class="sv-member child"><em>👧</em> Sophie, 8 ans — 0 contrat</div>
      <div class="sv-flow">Contrats attribués par profil familial</div>`;
    case '05': return `
      <div class="sv-row"><span>Corporation</span><span class="sv-val">ABC Inc.</span></div>
      <div class="sv-row"><span>Actionnaires</span><span class="sv-val">2</span></div>
      <div class="sv-divider"></div>
      <div class="sv-row"><span>Convention entre actionnaires</span><span class="sv-pill">Opportunité</span></div>
      <div class="sv-row"><span>Personne clé</span><span class="sv-pill">Opportunité</span></div>
      <div class="sv-row"><span>Rachat d'actions</span><span class="sv-pill">Opportunité</span></div>`;
    case '06': return `
      <div class="sv-policy"><span class="sv-dot green"></span> T-20 · $500K · SSQ <span class="sv-val">$62/m</span></div>
      <div class="sv-policy"><span class="sv-dot gold"></span> MG · $250K · Manuvie <span class="sv-val">$89/m</span></div>
      <div class="sv-policy"><span class="sv-dot red"></span> Invalidité · Industrielle <span class="sv-val">$45/m</span></div>
      <div class="sv-divider"></div>
      <div class="sv-row hl"><span>Lacunes identifiées</span><span class="sv-val gd">2</span></div>`;
    case '07': return `
      <div class="sv-row"><span>Liquidité disponible</span><span class="sv-val gd">$1 240/m</span></div>
      <div class="sv-row"><span>Budget recommandé</span><span class="sv-val">$800/m</span></div>
      <div class="sv-bars">
        <div class="sv-bar-item" style="height:30%"></div>
        <div class="sv-bar-item" style="height:45%"></div>
        <div class="sv-bar-item" style="height:58%"></div>
        <div class="sv-bar-item" style="height:74%"></div>
        <div class="sv-bar-item" style="height:100%"></div>
      </div>
      <div class="sv-flow">Projection 5 ans · rendement estimé 6.2%</div>`;
    case '08': return `
      <div class="sv-row"><span>REER au décès</span><span class="sv-val">$185 000</span></div>
      <div class="sv-row"><span>Gain en capital</span><span class="sv-val">$92 000</span></div>
      <div class="sv-row"><span>Taux marginal QC+CA</span><span class="sv-val">53.31%</span></div>
      <div class="sv-divider"></div>
      <div class="sv-row hl"><span>Impôt estimé au décès</span><span class="sv-val gd">$147 650</span></div>`;
    case '09': return `
      <div class="sv-check"><span class="sv-tick">&#10003;</span> Profil investisseur complété</div>
      <div class="sv-check"><span class="sv-tick">&#10003;</span> Notes au dossier automatiques</div>
      <div class="sv-check"><span class="sv-tick">&#10003;</span> Convenance vérifiée</div>
      <div class="sv-check"><span class="sv-tick">&#10003;</span> Préavis de remplacement</div>
      <div class="sv-check"><span class="sv-tick">&#10003;</span> Lettre explicative signée</div>`;
    default: return '';
  }
}

function initAbfCarousel() {
  const el = document.getElementById('abf-carousel');
  if (!el) return;
  const cards = DATA.abfCards;
  const total = cards.length;
  let cur = 0, timer;

  /* ── Build HTML ── */
  let h = '<div class="carousel-track">';
  cards.forEach((c, i) => {
    h += `<div class="carousel-slide${i === 0 ? ' active' : ''}" data-i="${i}">
      <div class="slide-info">
        <div class="slide-counter">${String(i + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}</div>
        <div class="card-icon">${c.icon}</div>
        <h3 class="slide-title">${c.name}</h3>
        <p class="slide-desc">${c.desc}</p>
        <span class="slide-tag">${c.tag}</span>
      </div>
      <div class="slide-visual"><div class="sv-window">
        <div class="sv-dots"><i></i><i></i><i></i></div>
        <div class="sv-body">${abfMockup(c.n)}</div>
      </div></div>
    </div>`;
  });
  h += '</div>';

  /* Controls */
  h += '<div class="carousel-controls">';
  h += '<button class="carousel-arrow carousel-prev" aria-label="Précédent"><svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 4l-6 6 6 6" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></button>';
  h += '<div class="carousel-dots">';
  cards.forEach((_, i) => { h += `<button class="cdot${i === 0 ? ' active' : ''}" data-i="${i}"></button>`; });
  h += '</div>';
  h += '<button class="carousel-arrow carousel-next" aria-label="Suivant"><svg width="20" height="20" viewBox="0 0 20 20"><path d="M7 4l6 6-6 6" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></button>';
  h += '</div>';
  h += '<div class="carousel-progress"><div class="carousel-progress-fill"></div></div>';

  el.innerHTML = h;

  /* ── References ── */
  const slides = el.querySelectorAll('.carousel-slide');
  const dots   = el.querySelectorAll('.cdot');
  const fill   = el.querySelector('.carousel-progress-fill');

  function goTo(idx) {
    slides[cur].classList.remove('active');
    dots[cur].classList.remove('active');
    cur = ((idx % total) + total) % total;
    slides[cur].classList.add('active');
    dots[cur].classList.add('active');
    fill.style.width = ((cur + 1) / total * 100) + '%';
  }

  /* Navigation */
  el.querySelector('.carousel-prev').addEventListener('click', () => goTo(cur - 1));
  el.querySelector('.carousel-next').addEventListener('click', () => goTo(cur + 1));
  dots.forEach(d => d.addEventListener('click', () => goTo(+d.dataset.i)));

  /* Keyboard */
  el.setAttribute('tabindex', '0');
  el.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  goTo(cur - 1);
    if (e.key === 'ArrowRight') goTo(cur + 1);
  });

  /* Autoplay */
  function startAuto() { timer = setInterval(() => goTo(cur + 1), 5500); }
  function stopAuto()  { clearInterval(timer); }
  el.addEventListener('mouseenter', stopAuto);
  el.addEventListener('mouseleave', startAuto);
  startAuto();

  /* Touch swipe */
  let tx = 0;
  el.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  el.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50) { goTo(cur + (dx < 0 ? 1 : -1)); stopAuto(); startAuto(); }
  }, { passive: true });

  /* Initial progress */
  fill.style.width = (1 / total * 100) + '%';
}

/* ──────────────────────────────────────────────────────────────
   NAV SCROLL
────────────────────────────────────────────────────────────── */
function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ──────────────────────────────────────────────────────────────
   CRM NAV — Scroll tracking, active states, progress line
────────────────────────────────────────────────────────────── */
function initCrmNav() {
  const track = document.getElementById('crm-nav-track');
  const lineFill = document.getElementById('crm-nav-line-fill');
  const arrowL = document.getElementById('crm-arrow-left');
  const arrowR = document.getElementById('crm-arrow-right');
  if (!track) return;

  const navItems = Array.from(track.querySelectorAll('.crm-nav-item'));
  const navGroups = Array.from(track.querySelectorAll('.crm-nav-group'));

  // Arrow scroll buttons
  const scrollAmount = 200;
  if (arrowL) arrowL.addEventListener('click', () => track.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
  if (arrowR) arrowR.addEventListener('click', () => track.scrollBy({ left: scrollAmount, behavior: 'smooth' }));

  // Update arrow visibility
  function updateArrows() {
    if (!arrowL || !arrowR) return;
    arrowL.classList.toggle('hidden', track.scrollLeft <= 5);
    arrowR.classList.toggle('hidden', track.scrollLeft >= track.scrollWidth - track.clientWidth - 5);
  }
  track.addEventListener('scroll', updateArrows, { passive: true });
  updateArrows();

  // Calculate the center X of each nav circle relative to the track
  function getCircleCenters() {
    const trackRect = track.getBoundingClientRect();
    const trackScrollLeft = track.scrollLeft;
    return navItems.map(item => {
      const circle = item.querySelector('.crm-nav-circle');
      const circleRect = circle.getBoundingClientRect();
      // Position relative to track's content (accounting for scroll)
      return (circleRect.left - trackRect.left + trackScrollLeft) + circleRect.width / 2;
    });
  }

  // Scroll spy — detect which section is active + update progress line
  let ticking = false;
  let lastActiveIndex = -1;
  function updateActiveSection() {
    const scrollY = window.scrollY;
    const viewH = window.innerHeight;
    const triggerPoint = scrollY + viewH * 0.35;
    let activeIndex = -1;

    navItems.forEach((item, i) => {
      const sectionId = item.dataset.section;
      const section = document.getElementById(sectionId);
      if (!section) return;

      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (triggerPoint >= top && triggerPoint < bottom) {
        activeIndex = i;
      }
    });

    // If between sections (no match), find the last nav-section we scrolled past
    if (activeIndex === -1) {
      let lastPassed = -1;
      navItems.forEach((item, i) => {
        const sectionId = item.dataset.section;
        const section = document.getElementById(sectionId);
        if (!section) return;
        if (triggerPoint >= section.offsetTop + section.offsetHeight) {
          lastPassed = i;
        }
      });
      if (lastPassed >= 0) activeIndex = lastPassed;
    }

    lastActiveIndex = activeIndex;

    // Update item states
    navItems.forEach((item, i) => {
      item.classList.remove('active', 'passed');
      if (i === activeIndex) {
        item.classList.add('active');
      } else if (activeIndex > -1 && i < activeIndex) {
        item.classList.add('passed');
      }
    });

    // Update group states — active if contains active, passed if all items passed
    navGroups.forEach(group => {
      const items = Array.from(group.querySelectorAll('.crm-nav-item'));
      const hasActive = items.some(item => item.classList.contains('active'));
      const allPassed = items.every(item => item.classList.contains('passed'));
      group.classList.remove('active', 'passed');
      if (hasActive) group.classList.add('active');
      else if (allPassed) group.classList.add('passed');
    });

    // Update progress line fill — gold line advances to the active circle
    if (lineFill && activeIndex >= 0) {
      const centers = getCircleCenters();
      // Fill line from start to the center of the active circle
      const fillTo = centers[activeIndex];
      lineFill.style.width = fillTo + 'px';
    } else if (lineFill) {
      lineFill.style.width = '0px';
    }

    // Auto-scroll track to keep active item visible
    const activeEl = track.querySelector('.crm-nav-item.active');
    if (activeEl) {
      const elRect = activeEl.getBoundingClientRect();
      const trackRect = track.getBoundingClientRect();
      const elCenter = elRect.left + elRect.width / 2;
      const trackCenter = trackRect.left + trackRect.width / 2;
      const diff = elCenter - trackCenter;
      if (Math.abs(diff) > trackRect.width * 0.3) {
        track.scrollBy({ left: diff, behavior: 'smooth' });
      }
    }

    updateArrows();
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateActiveSection);
      ticking = true;
    }
  }, { passive: true });

  // Recalc on resize
  window.addEventListener('resize', () => {
    if (!ticking) {
      requestAnimationFrame(updateActiveSection);
      ticking = true;
    }
  });

  // Initial update
  updateActiveSection();
}

/* ──────────────────────────────────────────────────────────────
   HERO WORD ANIMATION
────────────────────────────────────────────────────────────── */
function initHeroWords() {
  document.querySelectorAll('.hero-word').forEach((el, i) => {
    const delay = 0.5 + i * 0.12;
    el.style.animationDelay = delay + 's';
    el.classList.add('animate');
  });
}

/* ──────────────────────────────────────────────────────────────
   HERO STATS COUNTER — triggered by intersection
────────────────────────────────────────────────────────────── */
function initHeroStats() {
  const statsEl = document.querySelector('.hero-stats');
  if (!statsEl) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll('.hero-stat-num').forEach(el => {
          const target = parseInt(el.dataset.target);
          const prefix = el.dataset.prefix || '';
          const suffix = el.dataset.suffix || '';
          animateCounter(el, target, prefix, suffix, 1600);
        });
        observer.disconnect();
      }
    });
  }, { threshold: .5 });
  observer.observe(statsEl);
}

/* ──────────────────────────────────────────────────────────────
   FORM HANDLERS
────────────────────────────────────────────────────────────── */
function openWaitlistModal(e) {
  if (e) e.preventDefault();
  const overlay = document.getElementById('wl-overlay');
  if (overlay) {
    overlay.style.display = 'flex';
    requestAnimationFrame(() => overlay.classList.add('open'));
    document.body.style.overflow = 'hidden';
  }
}
function closeWaitlistModal(e) {
  if (e && e.target && e.target !== document.getElementById('wl-overlay')) return;
  const overlay = document.getElementById('wl-overlay');
  if (overlay) {
    overlay.classList.remove('open');
    setTimeout(() => { overlay.style.display = 'none'; }, 350);
    document.body.style.overflow = '';
  }
}
function submitWaitlist() {
  const name = document.getElementById('wl-name');
  const email = document.getElementById('wl-email');
  const form = document.getElementById('wl-form');
  const suc = document.getElementById('wl-success');
  let valid = true;
  [name, email].forEach(el => {
    el.classList.remove('error');
    if (!el.value.trim() || (el.type === 'email' && !el.value.includes('@'))) {
      el.classList.add('error');
      setTimeout(() => el.classList.remove('error'), 2500);
      valid = false;
    }
  });
  if (!valid) return;
  if (form) form.style.display = 'none';
  if (suc) suc.classList.add('show');
}

function ctaSubmit() {
  const name   = document.getElementById('cta-name');
  const email  = document.getElementById('cta-email');
  const phone  = document.getElementById('cta-phone');
  const form   = document.getElementById('cta-form-inner');
  const suc    = document.getElementById('cta-success');
  const spotFill = document.getElementById('spots-fill');

  if (!name || !email) return;
  if (!name.value.trim() || !email.value.trim() || !email.value.includes('@')) {
    [name, email, phone].forEach(el => {
      if (el && !el.value.trim()) {
        el.style.outline = '1px solid var(--red)';
        setTimeout(() => { if (el) el.style.outline = ''; }, 2000);
      }
    });
    return;
  }

  if (form)  form.style.display  = 'none';
  if (suc)   suc.classList.add('show');
  if (spotFill) {
    let w = 68;
    const t = setInterval(() => {
      w = Math.min(w + 1, 74);
      spotFill.style.width = w + '%';
      const counter = document.querySelector('.spots-text');
      if (counter) counter.textContent = '35 / 50 places prises';
      if (w >= 74) clearInterval(t);
    }, 50);
  }
}

/* ──────────────────────────────────────────────────────────────
   COMM TABS
────────────────────────────────────────────────────────────── */
function initCommTabs() {
  document.querySelectorAll('.comm-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.comm-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

/* ──────────────────────────────────────────────────────────────
   EXPOSE TO HTML (onclick)
────────────────────────────────────────────────────────────── */
window.openWaitlistModal  = openWaitlistModal;
window.closeWaitlistModal = closeWaitlistModal;
window.submitWaitlist     = submitWaitlist;
window.ctaSubmit          = ctaSubmit;

/* ──────────────────────────────────────────────────────────────
   BOOT
────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Canvas particles
  const canvas = document.getElementById('particle-canvas');
  if (canvas) new ParticleSystem(canvas);

  // Cursor
  new Cursor();

  // Nav
  initNav();
  initCrmNav();

  // Hero
  initHeroWords();
  initHeroStats();

  // Scroll reveal
  new ScrollReveal();

  // Dashboard
  buildChart();
  init3DParallax();

  // Pulse
  initPulseObserver();

  // Sig line
  initSigObserver();

  // Numbers
  initNumberCounters();

  // Partnership diagram
  initPartnershipDiagram();

  // ABF Carousel
  initAbfCarousel();

  // Comm tabs
  initCommTabs();

  // Live timestamp
  updateTimestamp();
  setInterval(updateTimestamp, 1000);

  // Stagger delay hints for repeated grid children
  document.querySelectorAll('.mg-grid .mg-plan').forEach((el, i)    => el.dataset.delay = i * 80);
  document.querySelectorAll('.opps-grid .opp-card').forEach((el, i)  => el.dataset.delay = i * 55);
  document.querySelectorAll('.proof-grid .proof-card').forEach((el, i) => el.dataset.delay = i * 90);
  document.querySelectorAll('.bento-card').forEach((el, i)           => el.dataset.delay = i * 70);
});
