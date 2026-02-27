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
    'Signature Finox Sign & DocuSign',
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
    'Calculateur MG — propriété partagée entreprises',
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
      { color: '#C4A24A', title: 'Signature reçue — AMF ✓',    text: 'Préavis de remplacement signé — Jacques Bergeron · DocuSign confirmé', time: '2 min' },
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
    prospect: {
      name: 'Sophie Roy', score: 42, scoreColor: 'var(--blue)',
      status: 'Prospect chaud — Intéressée assurance vie + hypothèque', statusIcon: '🔵',
      stage: { current: 1, steps: ['Découverte', 'ABF', 'Tarification', 'Signature'] },
      infos: [
        { lbl: 'Source', val: 'Référence Pierre Gagné' },
        { lbl: 'Intérêt', val: 'Vie + Invalidité + Hypothèque' },
        { lbl: 'Budget estimé', val: '$200–300/mois' },
        { lbl: 'Dernier contact', val: 'Il y a 4 jours' },
      ],
      breakdown: [
        { icon: '📞', text: 'Première rencontre complétée', pts: '+10', neg: false },
        { icon: '💬', text: 'Intérêt confirmé par SMS', pts: '+10', neg: false },
        { icon: '📅', text: 'Pas de suivi J+3 planifié', pts: '-5', neg: true },
        { icon: '📋', text: 'Aucune ABF démarrée', pts: '-8', neg: true },
      ],
      nextStep: { icon: '📋', text: 'Planifier l\'ABF cette semaine', pts: '+15' },
    },
    client: {
      name: 'Jacques Bergeron', score: 75, scoreColor: 'var(--green)',
      status: 'Stable — 2 produits actifs sous gestion', statusIcon: '💛',
      stage: null,
      infos: [
        { lbl: 'Produits', val: 'T-20 $500K + MG $100K' },
        { lbl: 'Primes', val: '$151/mois' },
        { lbl: 'Dernière interaction', val: 'Il y a 2 jours' },
        { lbl: 'Prochaine échéance', val: 'Renouvellement mars 2026' },
      ],
      breakdown: [
        { icon: '✅', text: 'ABF complétée et à jour', pts: '+20', neg: false },
        { icon: '📞', text: 'Contact récent — il y a 2 jours', pts: '+15', neg: false },
        { icon: '🛡️', text: '2 produits actifs sous gestion', pts: '+10', neg: false },
        { icon: '📅', text: 'Aucun rendez-vous planifié', pts: '-5', neg: true },
        { icon: '🎯', text: 'Opportunités futures non complétées', pts: '-5', neg: true },
      ],
      nextStep: { icon: '📅', text: 'Planifier un rendez-vous de révision annuelle', pts: '+10' },
    },
    corpo: {
      name: 'ABC Solutions Inc.', score: 58, scoreColor: 'var(--purple)',
      status: 'Corporation — Analyse en cours', statusIcon: '🏢',
      stage: null,
      infos: [
        { lbl: 'NEQ', val: '1174856231' },
        { lbl: 'Actionnaires', val: '2 (importés du REQ)' },
        { lbl: 'Revenus annuels', val: '$2.4M' },
        { lbl: 'Administrateur', val: 'Jacques Bergeron' },
      ],
      breakdown: [
        { icon: '🏢', text: 'Données REQ importées', pts: '+10', neg: false },
        { icon: '📋', text: 'ABF corporative démarrée', pts: '+15', neg: false },
        { icon: '⚖️', text: 'Convention actionnaires non réglée', pts: '-10', neg: true },
        { icon: '👤', text: 'Personne clé non analysée', pts: '-8', neg: true },
      ],
      nextStep: { icon: '⚖️', text: 'Compléter l\'analyse personne clé', pts: '+12' },
    },
  },

  abfCards: [
    { n:'conf', icon:'🔒', name:'Conformité AMF — automatisée de A à Z',
      desc:'Recommandations automatiques générées par l\'IA selon le profil du client. Lettre explicative automatisée et jointe à chaque préavis. Signature de l\'ABF intégrée et réglée en 30 secondes — envoyée par courriel ou texto, sécurisée par mot de passe. Zéro paperasse, zéro oubli.',
      tag:'AMF · Signature 30 sec · Lettre auto' },
    { n:'fam', icon:'👨‍👩‍👧‍👦', name:'Fiche familiale complète — Conjoint(e) & enfants',
      desc:'Conjoint(e), enfants et tous leurs contrats respectifs dans la même fiche. Si un contrat est fait pour un enfant, il est attribué directement à son profil. L\'ABF est parfaitement précise pour toute la famille — besoins calculés individuellement.',
      tag:'Fiche familiale unifiée' },
    { n:'corpo', icon:'🏢', name:'ABF Corporations — Import REQ automatique',
      desc:'Importez automatiquement les données du Registraire des entreprises du Québec (REQ) : nom légal, NEQ, adresse, administrateurs, actionnaires. Outils de calculs dédiés pour l\'entrepreneur — convention entre actionnaires, personne clé, rachat d\'actions. Opportunités générées automatiquement.',
      tag:'Import REQ · ABF corporatif' },
    { n:'sync', icon:'🔄', name:'Synchronisation des données — Zéro saisie en double',
      desc:'Entrez une donnée une seule fois — elle se propage automatiquement dans tous les modules. Adresse via Google Maps, salaire brut converti en net, actifs et passifs réutilisés partout. Le calculateur d\'impôt au décès, les besoins en assurance, le budget — tout s\'alimente automatiquement.',
      tag:'Propagation automatique' },
    { n:'opps', icon:'🎯', name:'Opportunités futures — Générées automatiquement',
      desc:'FINOX détecte et planifie automatiquement vos opportunités : renouvellements hypothécaires 3-6 mois avant terme, révisions de portefeuille périodiques, naissance d\'un enfant, contrats différés, opportunités corporatives selon les changements de revenus et d\'actifs. L\'IA suggère même quand relancer un lead froid.',
      tag:'Auto-détection · 9 types d\'opportunités' },
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
      cls: 'bento-5', n: '05', icon: '🏗️',
      name: 'Calculateur MG — Propriété partagée pour entreprises',
      desc: 'Outil exclusif qui permet de justifier visuellement le remboursement de primes dans le cadre d\'une stratégie de propriété partagée MG. Démontre clairement qu\'il est plus avantageux pour l\'entrepreneur de financer sa prime via la corporation plutôt que via un placement à l\'intérieur de la corp — avec graphiques comparatifs et données chiffrées. Simplifie radicalement la vente de produits permanents aux entrepreneurs québécois.',
      tag: 'Propriété partagée · MG · Entrepreneurs',
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
    { iconCls: 'sign',   icon: '✍️',  title: 'Signature reçue — Préavis de remplacement AMF', tag: 'Conformité', tagCls: 'opp', desc: 'Préavis de remplacement signé via DocuSign et lettre explicative signée via Finox Sign. Police vie entière $750k approuvée. Dossier AMF 100% conforme.', time: 'Aujourd\'hui · 14:32 · Finox Sign' },
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
    { icon: '✍️', name: 'Signature électronique Finox Sign & DocuSign',  desc: 'Finox Sign pour les ABF et lettres explicatives, DocuSign pour les préavis de remplacement. Toutes les signatures liées directement au dossier — traçabilité parfaite pour les audits AMF.' },
    { icon: '🗂️', name: 'Renommage automatique conforme AMF',      desc: 'Chaque document est renommé automatiquement selon la nomenclature AMF — [Client]_[Date]_[Type]. Fini le chaos dans Google Drive, tout est trouvable en 3 secondes.' },
  ],

  numbers: [
    { num: '70', suffix: '%', label: 'Réduction du temps administratif', sub: 'Mesuré chez nos conseillers bêta' },
    { num: '147', suffix: '',  label: 'Clients gérés par conseiller en moyenne', sub: 'Sans adjoint supplémentaire' },
    { num: '8',   suffix: 'h',  label: 'Récupérées chaque semaine', sub: 'Consacrées aux ventes & relations' },
    { num: '3',   suffix: '×',  label: 'Plus de propositions émises', sub: 'Grâce à l\'automatisation des ABF' },
  ],

  _testimonials_removed: true, /* Section témoignages supprimée */

  finalCTA: {
    eyebrow: 'Accès anticipé — Places limitées',
    title: 'Rejoignez les',
    titleEm: 'premiers.',
    sub: '50 conseillers sélectionnés bénéficieront d\'un accès bêta gratuit complet et d\'une formation personnalisée pour maximiser leur impact dès le premier mois.',
    spots: '152 / 250 places remplies',
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
function animateScoreRing(scoreVal, scoreColor) {
  const ring = document.querySelector('.score-circle');
  if (ring) {
    const offset = 283 - (283 * (scoreVal || 75) / 100);
    ring.style.stroke = scoreColor || 'var(--green)';
    ring.style.transition = 'stroke-dashoffset 2.2s var(--ease-out), stroke .4s';
    ring.style.strokeDashoffset = offset;
  }
  const sigLine = document.querySelector('.sig-animated-line');
  if (sigLine) setTimeout(() => sigLine.classList.add('an'), 600);
}

/* ──────────────────────────────────────────────────────────────
   PULSE VITAL CARD BUILDER
────────────────────────────────────────────────────────────── */
let currentPulseType = 'prospect';

function buildPulseCard(type) {
  const card = document.getElementById('pulse-card');
  if (!card) return;
  const p = DATA.pulseVital[type];
  if (!p) return;
  currentPulseType = type;

  let h = '';
  /* Toggle */
  h += '<div class="pulse-toggle">';
  h += `<button class="ptab${type === 'prospect' ? ' active' : ''}" data-type="prospect">Prospect</button>`;
  h += `<button class="ptab${type === 'client' ? ' active' : ''}" data-type="client">Client</button>`;
  h += `<button class="ptab${type === 'corpo' ? ' active' : ''}" data-type="corpo">Corporation</button>`;
  h += '</div>';
  /* Header */
  h += '<div class="pulse-card-header">';
  h += '<div class="pulse-title-group"><span class="pulse-heart">💓</span>';
  h += `<div><div class="pulse-name">Pulse Vital™</div><div class="pulse-client">${p.name}</div></div></div>`;
  h += '<div class="score-ring-wrap"><svg class="score-svg" width="106" height="106" viewBox="0 0 106 106">';
  h += '<circle class="score-track" cx="53" cy="53" r="47"/>';
  h += '<circle class="score-circle" cx="53" cy="53" r="47" style="stroke-dashoffset:283"/>';
  h += `</svg><div class="score-inner"><div class="score-number" style="color:${p.scoreColor}">${p.score}</div><div class="score-max">/100</div></div></div></div>`;
  /* Status */
  h += '<div class="pulse-status-bar">';
  h += `<div class="status-dot" style="background:${p.scoreColor}"></div>`;
  h += `<div class="status-text">${p.statusIcon} ${p.status}</div></div>`;
  /* Stage pipeline (prospects only) */
  if (p.stage) {
    h += '<div class="pulse-stage">';
    p.stage.steps.forEach((step, i) => {
      if (i > 0) h += '<span class="stage-arrow">→</span>';
      h += `<span class="stage-step${i === p.stage.current ? ' active' : i < p.stage.current ? ' done' : ''}">${step}</span>`;
    });
    h += '</div>';
  }
  /* Infos */
  h += '<div class="pulse-infos">';
  h += '<div class="suggestions-title">Informations</div>';
  p.infos.forEach(info => {
    h += `<div class="pulse-info-row"><span class="pulse-info-lbl">${info.lbl}</span><span class="pulse-info-val">${info.val}</span></div>`;
  });
  h += '</div>';
  /* Breakdown */
  h += '<div class="score-breakdown">';
  h += '<div class="suggestions-title">Facteurs de score</div>';
  p.breakdown.forEach(b => {
    h += `<div class="score-line"><div class="score-line-icon">${b.icon}</div><div class="score-line-text">${b.text}</div><div class="score-line-pts${b.neg ? ' neg' : ''}">${b.pts}</div></div>`;
  });
  h += '</div>';
  /* Next step */
  h += '<div class="pulse-next">';
  h += `<div class="suggestions-title">⚡ Prochaine étape suggérée</div>`;
  h += `<div class="suggestion-item"><div class="sug-icon">${p.nextStep.icon}</div><div class="sug-text">${p.nextStep.text}</div><div class="sug-pts">${p.nextStep.pts}</div></div>`;
  h += '</div>';

  card.innerHTML = h;

  /* Bind toggle */
  card.querySelectorAll('.ptab').forEach(btn => {
    btn.addEventListener('click', () => {
      buildPulseCard(btn.dataset.type);
      setTimeout(() => animateScoreRing(DATA.pulseVital[btn.dataset.type].score, DATA.pulseVital[btn.dataset.type].scoreColor), 50);
    });
  });
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
  buildPulseCard('prospect');
  const card = document.querySelector('.pulse-card');
  if (!card) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const p = DATA.pulseVital[currentPulseType];
        setTimeout(() => animateScoreRing(p.score, p.scoreColor), 400);
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
  /* Use pathLength for reliable cross-browser dash animation */
  lines.forEach(line => {
    line.setAttribute('pathLength', '1');
    line.style.strokeDasharray = '1';
    line.style.strokeDashoffset = '1';
  });
  /* Use CSS transitions — force reflow before animating */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        /* Force reflow so initial state is committed */
        diagram.getBoundingClientRect();
        lines.forEach((l, i) => {
          setTimeout(() => {
            l.style.transition = 'stroke-dashoffset 1.8s cubic-bezier(.4,0,.2,1)';
            l.style.strokeDashoffset = '0';
          }, i * 300);
        });
        observer.unobserve(diagram);
      }
    });
  }, { threshold: .15 });
  observer.observe(diagram);
}

/* ──────────────────────────────────────────────────────────────
   ABF CAROUSEL
────────────────────────────────────────────────────────────── */
function abfMockup(n) {
  switch (n) {
    case 'conf': return `
      <div class="sv-check"><span class="sv-tick">&#10003;</span> Recommandations IA selon le profil</div>
      <div class="sv-check"><span class="sv-tick">&#10003;</span> Lettre explicative auto-générée</div>
      <div class="sv-check"><span class="sv-tick">&#10003;</span> Préavis de remplacement auto-rempli</div>
      <div class="sv-check"><span class="sv-tick">&#10003;</span> Signature ABF — 30 secondes</div>
      <div class="sv-divider"></div>
      <div class="sv-row"><span>Envoi signature</span><span class="sv-val">Courriel ou Texto</span></div>
      <div class="sv-row hl"><span>Sécurité</span><span class="sv-val gd">Mot de passe</span></div>`;
    case 'fam': return `
      <div class="sv-member"><em>👤</em> Jacques Bergeron, 45 ans</div>
      <div class="sv-member"><em>👤</em> Marie Tremblay, 42 ans</div>
      <div class="sv-member child"><em>👦</em> Thomas, 12 ans — 1 contrat</div>
      <div class="sv-member child"><em>👧</em> Sophie, 8 ans — 0 contrat</div>
      <div class="sv-divider"></div>
      <div class="sv-row hl"><span>Besoins calculés</span><span class="sv-val gd">Par membre</span></div>`;
    case 'corpo': return `
      <div class="sv-search"><span>🏢</span> Recherche REQ : 1234567890</div>
      <div class="sv-divider"></div>
      <div class="sv-row"><span>Entreprise</span><span class="sv-val">ABC Solutions Inc.</span></div>
      <div class="sv-row"><span>NEQ</span><span class="sv-val gd">1174856231</span></div>
      <div class="sv-row"><span>Administrateurs</span><span class="sv-val">2 importés</span></div>
      <div class="sv-row"><span>Actionnaires</span><span class="sv-val">2 importés</span></div>
      <div class="sv-divider"></div>
      <div class="sv-row"><span>Convention actionnaires</span><span class="sv-pill">Opportunité</span></div>
      <div class="sv-row"><span>Personne clé</span><span class="sv-pill">Opportunité</span></div>
      <div class="sv-flow">&#8594; Données REQ importées automatiquement</div>`;
    case 'sync': return `
      <div class="sv-row"><span>📍 Adresse Google Maps</span><span class="sv-val gd">&#10003;</span></div>
      <div class="sv-row"><span>💰 Salaire brut &#8594; net</span><span class="sv-val gd">&#10003;</span></div>
      <div class="sv-row"><span>⚖️ Actifs &amp; passifs</span><span class="sv-val gd">&#10003;</span></div>
      <div class="sv-row"><span>🧮 Impôt au décès</span><span class="sv-val gd">&#10003;</span></div>
      <div class="sv-row"><span>🛡️ Besoins assurance</span><span class="sv-val gd">&#10003;</span></div>
      <div class="sv-divider"></div>
      <div class="sv-flow">1 saisie &#8594; propagée dans tous les modules</div>`;
    case 'mg': return `
      <div class="sv-cols sv-cols-3"><div class="sv-col">
        <div class="sv-col-h" style="color:var(--blue)">Essentiel</div>
        <div class="sv-mini"><span>Durée</span><strong>6 mois</strong></div>
        <div class="sv-mini"><span>Revenus</span><strong>&#10003;</strong></div>
        <div class="sv-mini"><span>Soins</span><strong>&#8212;</strong></div>
      </div><div class="sv-col" style="border-color:rgba(196,162,74,.25)">
        <div class="sv-col-h">Recommandé ⭐</div>
        <div class="sv-mini"><span>Durée</span><strong>12 mois</strong></div>
        <div class="sv-mini"><span>Revenus</span><strong>&#10003;</strong></div>
        <div class="sv-mini"><span>Soins</span><strong>&#10003;</strong></div>
      </div><div class="sv-col" style="border-color:rgba(138,106,228,.25)">
        <div class="sv-col-h" style="color:var(--purple)">Complet</div>
        <div class="sv-mini"><span>Durée</span><strong>24 mois</strong></div>
        <div class="sv-mini"><span>Revenus</span><strong>&#10003;</strong></div>
        <div class="sv-mini"><span>Soins</span><strong>&#10003;</strong></div>
      </div></div>`;
    case 'opps': return `
      <div class="sv-policy"><span class="sv-dot green"></span> Renouvellement hypothèque <span class="sv-val">Mars 2026</span></div>
      <div class="sv-policy"><span class="sv-dot gold"></span> Révision portefeuille annuelle <span class="sv-val">Juin 2026</span></div>
      <div class="sv-policy"><span class="sv-dot gold"></span> Naissance — REEE + ajust. vie <span class="sv-val">Auto</span></div>
      <div class="sv-policy"><span class="sv-dot red"></span> Lead froid — Sophie Roy <span class="sv-val">IA suggère</span></div>
      <div class="sv-divider"></div>
      <div class="sv-row hl"><span>Opportunités actives</span><span class="sv-val gd">9 types</span></div>`;
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
/*
  Zoho CRM — Web-to-Contact form
  Le <form> POST directement vers Zoho CRM via un iframe caché.
  Les tokens d'auth sont intégrés en champs hidden dans le HTML.
*/
function handleWaitlistSubmit(e) {
  const fname = document.getElementById('wl-fname');
  const lname = document.getElementById('wl-lname');
  const email = document.getElementById('wl-email');
  const phone = document.getElementById('wl-phone');
  const fields = [fname, lname, email, phone];
  let valid = true;
  fields.forEach(el => {
    if (!el) return;
    el.classList.remove('error');
    if (!el.value.trim() || (el.type === 'email' && !el.validity.valid)) {
      el.classList.add('error');
      setTimeout(() => el.classList.remove('error'), 2500);
      valid = false;
    }
  });
  if (!valid) { e.preventDefault(); return false; }
  /* Le form POST part vers l'iframe caché — afficher le succès */
  setTimeout(() => {
    const formDiv = document.getElementById('wl-form');
    const suc = document.getElementById('wl-success');
    if (formDiv) formDiv.style.display = 'none';
    if (suc) suc.classList.add('show');
  }, 400);
  return true;
}

/* Formatage automatique du téléphone : 555-555-5555 */
function initPhoneMask() {
  const ph = document.getElementById('wl-phone');
  if (!ph) return;
  ph.addEventListener('input', () => {
    let v = ph.value.replace(/\D/g, '').slice(0, 10);
    if (v.length > 6) v = v.slice(0,3) + '-' + v.slice(3,6) + '-' + v.slice(6);
    else if (v.length > 3) v = v.slice(0,3) + '-' + v.slice(3);
    ph.value = v;
  });
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
window.openWaitlistModal    = openWaitlistModal;
window.closeWaitlistModal   = closeWaitlistModal;
window.handleWaitlistSubmit = handleWaitlistSubmit;

/* ──────────────────────────────────────────────────────────────
   BOOT
────────────────────────────────────────────────────────────── */
/* ═══════════════════════════════════════════════════════
   COMPARE — Scroll-Driven Sparkle Circle Animation (v2)
═══════════════════════════════════════════════════════ */
function initCompareScrollAnim() {
  const outer = document.querySelector('.compare-scroll-outer');
  if (!outer) return;

  /* ── DOM refs ── */
  const card       = document.getElementById('compare-card-morph');
  const headerEl   = document.getElementById('compare-card-hdr');
  const rowsWrap   = document.getElementById('compare-rows-wrap');
  const rows       = rowsWrap ? rowsWrap.querySelectorAll('.compare-row') : [];
  const totalBar   = document.getElementById('compare-total-bar');
  const totalTxt   = totalBar ? totalBar.querySelector('.compare-total-txt') : null;
  const totalPrice = totalBar ? totalBar.querySelector('.compare-total-price') : null;
  const headerText = document.getElementById('compare-header-text');
  const circleWrap = document.getElementById('compare-circle-wrap');
  const circlePath = document.getElementById('compare-circle-path');
  const sparkHead  = document.getElementById('compare-spark-head');
  const finoxInner = document.getElementById('compare-finox-inner');
  const pricingW   = document.getElementById('compare-finox-pricing-wrap');

  if (!card || !rows.length || !totalBar || !circleWrap || !circlePath || !finoxInner || !pricingW) return;

  const rowCount = rows.length;
  const CIRC     = 974;          // 2 * PI * 155
  const CX       = 170;
  const CY       = 170;
  const CR       = 155;
  const PI2      = Math.PI * 2;

  /* ── Helpers ── */
  function clamp01(v) { return Math.max(0, Math.min(1, v)); }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function easeInOut(t) { return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2; }
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  /* ── Sparkle particle system ── */
  var sparklePool = [];
  function spawnSparkle(x, y) {
    var el = sparklePool.length ? sparklePool.pop() : document.createElement('div');
    var isStar = Math.random() > 0.5;
    el.className = isStar ? 'sparkle-star' : 'sparkle-particle';
    var size = isStar ? lerp(5, 12, Math.random()) : lerp(3, 7, Math.random());
    el.style.width = size + 'px';
    el.style.height = size + 'px';
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    el.style.background = isStar
      ? 'linear-gradient(135deg, #FFF0B0, #F0D070)'
      : 'radial-gradient(circle, #fff 0%, #FFF0B0 40%, rgba(196,162,74,.6) 100%)';
    el.style.opacity = '1';
    circleWrap.appendChild(el);

    var dx = (Math.random() - 0.5) * 40;
    var dy = (Math.random() - 0.5) * 40;
    var dur = 500 + Math.random() * 600;

    el.animate([
      { transform: 'translate(0,0) scale(1)', opacity: 1 },
      { transform: 'translate(' + dx + 'px,' + dy + 'px) scale(0)', opacity: 0 }
    ], { duration: dur, easing: 'ease-out', fill: 'forwards' })
    .onfinish = function() {
      if (el.parentNode) el.parentNode.removeChild(el);
      sparklePool.push(el);
    };
  }

  /* ── Constants ── */
  var rowH = 49;       // compact row: 8px pad + ~33px content + 8px pad
  var lastDrawP = -1;  // track circle draw progress for sparkle spawning

  var ticking = false;

  function update() {
    var rect = outer.getBoundingClientRect();
    var totalScroll = outer.offsetHeight - window.innerHeight;
    var scrolled = Math.max(0, -rect.top);
    var p = Math.min(1, scrolled / totalScroll);

    /*
     * Timeline (500vh total):
     *   0.00 → 0.20  Reading time — table fully visible, nothing moves
     *   0.20 → 0.48  Rows collapse bottom-to-top
     *   0.48 → 0.55  Header collapses
     *   0.55 → 0.62  Total bar text fades, border turns gold
     *   0.62 → 0.68  Card fades out, circle-wrap fades in
     *   0.68 → 0.84  SVG circle draws + sparkle trail
     *   0.84 → 0.90  FINOX.OS logo fades in
     *   0.90 → 1.00  Pricing fades in
     */

    /* ═══ PHASE 1: Rows collapse bottom-to-top (p: 0.20 → 0.48) ═══ */
    var rowSpan = (0.48 - 0.20) / rowCount;
    for (var i = 0; i < rowCount; i++) {
      var ri = rowCount - 1 - i; // bottom row first
      var start = 0.20 + i * rowSpan;
      var end = start + rowSpan;
      var rp = clamp01((p - start) / (end - start));
      var ease = easeOut(rp);

      rows[ri].style.maxHeight = (1 - ease) * rowH + 'px';
      rows[ri].style.opacity   = 1 - ease;
      rows[ri].style.paddingTop    = (1 - ease) * 8 + 'px';
      rows[ri].style.paddingBottom = (1 - ease) * 8 + 'px';
    }

    // Collapse rows wrapper padding
    var rowsDone = clamp01((p - 0.45) / 0.03);
    rowsWrap.style.padding = (1 - rowsDone) * 4 + 'px 0';

    /* ═══ PHASE 2: Header collapses (p: 0.48 → 0.55) ═══ */
    var hp = clamp01((p - 0.48) / 0.07);
    var hpe = easeOut(hp);
    headerEl.style.maxHeight       = (1 - hpe) * 52 + 'px';
    headerEl.style.opacity         = 1 - hpe;
    headerEl.style.paddingTop      = (1 - hpe) * 16 + 'px';
    headerEl.style.paddingBottom   = (1 - hpe) * 16 + 'px';
    headerEl.style.borderBottomWidth = (1 - hpe) + 'px';

    // Header text is outside the sticky — scrolls away naturally

    /* ═══ PHASE 3: Total bar → gold line (p: 0.55 → 0.62) ═══ */
    var gp = clamp01((p - 0.55) / 0.07);
    var gpe = easeOut(gp);

    // Fade total text
    if (totalTxt)   totalTxt.style.opacity   = 1 - gpe;
    if (totalPrice) totalPrice.style.opacity = 1 - gpe;

    // Border color: red → gold
    var cg = lerp(74, 162, gpe);
    card.style.borderColor = 'rgba(196,' + cg + ',74,' + lerp(0.15, 0.35, gpe) + ')';
    totalBar.style.borderTopColor = 'rgba(196,' + cg + ',74,' + lerp(0.15, 0, gpe) + ')';
    totalBar.style.background = 'rgba(196,' + cg + ',74,' + lerp(0.06, 0, gpe) + ')';

    // Add glow to card border at end
    if (gpe > 0.5) {
      var glowIntensity = (gpe - 0.5) * 2;
      card.style.boxShadow = '0 0 ' + (glowIntensity * 20) + 'px rgba(196,162,74,' + (glowIntensity * 0.15) + '), inset 0 0 ' + (glowIntensity * 10) + 'px rgba(196,162,74,' + (glowIntensity * 0.05) + ')';
    } else {
      card.style.boxShadow = '';
    }

    /* ═══ PHASE 4: Card fades out / Circle wrap fades in (p: 0.62 → 0.68) ═══ */
    var tp = clamp01((p - 0.62) / 0.06);
    var tpe = easeInOut(tp);

    card.style.opacity = 1 - tpe;
    if (tpe >= 1) {
      card.style.pointerEvents = 'none';
      card.style.position = 'absolute';
      card.style.visibility = 'hidden';
    } else {
      card.style.pointerEvents = '';
      card.style.position = '';
      card.style.visibility = '';
    }

    circleWrap.style.opacity = tpe;
    circleWrap.style.pointerEvents = tpe > 0.1 ? 'auto' : 'none';
    circleWrap.style.transform = 'scale(' + lerp(0.8, 1, easeOut(tpe)) + ')';

    /* ═══ PHASE 5: Circle draws + sparkle trail (p: 0.68 → 0.84) ═══ */
    var dp = clamp01((p - 0.68) / 0.16);
    var dpe = easeInOut(dp);

    // Draw circle via stroke-dashoffset
    var offset = CIRC * (1 - dpe);
    circlePath.style.strokeDashoffset = offset;

    // Position the spark head at the tip of the drawn arc
    if (dp > 0 && dp < 1) {
      sparkHead.style.opacity = '1';
      var angle = (-Math.PI / 2) + dpe * PI2;
      var tipX = CX + CR * Math.cos(angle);
      var tipY = CY + CR * Math.sin(angle);
      // Convert SVG coords to pixel coords (circle-wrap is 320×320, viewBox 340×340)
      var wrapSize = circleWrap.offsetWidth || 320;
      var scale = wrapSize / 340;
      sparkHead.style.left = (tipX * scale) + 'px';
      sparkHead.style.top  = (tipY * scale) + 'px';

      // Spawn sparkles along the trail
      if (dpe - lastDrawP > 0.015) {
        var count = 2 + Math.floor(Math.random() * 3);
        for (var s = 0; s < count; s++) {
          spawnSparkle(tipX * scale, tipY * scale);
        }
        lastDrawP = dpe;
      }
    } else {
      sparkHead.style.opacity = '0';
      if (dp >= 1) lastDrawP = -1;
    }

    /* ═══ PHASE 6: FINOX.OS logo fades in (p: 0.84 → 0.90) ═══ */
    var fp = clamp01((p - 0.84) / 0.06);
    var fpe = easeOut(fp);
    finoxInner.style.opacity   = fpe;
    finoxInner.style.transform = 'scale(' + lerp(0.6, 1, fpe) + ')';

    /* ═══ PHASE 7: Pricing fades in (p: 0.90 → 1.00) ═══ */
    var pp = clamp01((p - 0.90) / 0.10);
    var ppe = easeOut(pp);
    pricingW.style.opacity   = ppe;
    pricingW.style.transform = 'translateY(' + lerp(30, 0, ppe) + 'px)';

    ticking = false;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  // Initial render
  update();
}

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

  // Compare scroll morph
  initCompareScrollAnim();

  // Partnership diagram
  initPartnershipDiagram();

  // ABF Carousel
  initAbfCarousel();

  // Comm tabs
  initCommTabs();

  // Phone mask
  initPhoneMask();

  // Live timestamp
  updateTimestamp();
  setInterval(updateTimestamp, 1000);

  // Stagger delay hints for repeated grid children
  document.querySelectorAll('.mg-grid .mg-plan').forEach((el, i)    => el.dataset.delay = i * 80);
  document.querySelectorAll('.opps-grid .opp-card').forEach((el, i)  => el.dataset.delay = i * 55);
  document.querySelectorAll('.bento-card').forEach((el, i)           => el.dataset.delay = i * 70);

  // Préavis typewriter
  initPreavisTypewriter();
});

/* ═══════════════════════════════════════════════════════
   COMPARATEUR — Interactive Demo
═══════════════════════════════════════════════════════ */
function runComparatorDemo() {
  const btn = document.getElementById('comp-demo-btn');
  const resultsArea = document.getElementById('comp-demo-results');
  if (!btn || !resultsArea) return;

  // Disable button
  btn.disabled = true;
  btn.textContent = '🔍 Recherche en cours...';

  // Show loading spinner
  resultsArea.innerHTML = '<div class="comp-demo-loading"><div class="comp-demo-spinner"></div><div style="font-size:14px;font-weight:700;color:var(--cr)">Analyse des meilleures offres...</div><div style="font-size:11px;color:var(--cm)">Connexion à tous les assureurs du Canada</div></div>';

  // Real hardcoded results matching actual T20 250k search
  const standardResults = [
    { rank: 1, company: 'Equitable', product: 'Terme 20 Ans Renouvelable & Convertible', price: '19.01', logo: 'https://www.finox.ca/Images-Assureurs/%C3%89quitable.png' },
    { rank: 2, company: 'Beneva', product: 'Tempo Plus 20 - Assurance Temporaire 20', price: '19.13', logo: 'https://www.finox.ca/Images-Assureurs/Beneva.png' },
    { rank: 3, company: 'Co-operators', product: 'Temporaire polyvalente 20', price: '19.13', logo: 'https://www.finox.ca/Images-Assureurs/Cooperators.png' },
    { rank: 4, company: 'Desjardins', product: 'Temporaire 20 ans', price: '19.13', logo: 'https://www.finox.ca/Images-Assureurs/Desjardins.png' },
    { rank: 5, company: 'Empire Vie', product: 'Solution 20 - Terme 20 Ans R & C', price: '19.13', logo: 'https://www.finox.ca/Images-Assureurs/Empire.png' },
  ];

  const simplifiedResults = [
    { rank: 1, company: 'UV Assurance', product: 'T-20 Supérieur+ (Immédiat)', price: '19.80', logo: 'https://www.finox.ca/Images-Assureurs/UV.png' },
    { rank: 2, company: 'Beneva', product: 'SI - Vie temporaire 10 simplifiée', price: '23.85', logo: 'https://www.finox.ca/Images-Assureurs/Beneva.png' },
    { rank: 3, company: 'CPP', product: 'SI - CPP Préféré Terme 20 Ans', price: '29.48', logo: 'https://www.finox.ca/Images-Assureurs/CPP.png' },
    { rank: 4, company: 'Assomption Vie', product: 'SI - Protection Platine Temporaire 20', price: '32.40', logo: 'https://www.finox.ca/Images-Assureurs/Assomption%20Vie.png' },
    { rank: 5, company: 'Industrielle Alliance', product: 'Accès Vie T20 Immédiat +', price: '48.38', logo: 'https://www.finox.ca/Images-Assureurs/IA.png' },
  ];

  // After fake delay show results
  setTimeout(() => {
    btn.textContent = 'Comparer les prix 🔍';
    btn.disabled = true; // Keep disabled — demo only

    function buildRow(item, isBest) {
      const rankClass = item.rank === 1 ? 'gold' : item.rank === 2 ? 'silver' : item.rank === 3 ? 'bronze' : 'normal';
      return `<div class="comp-demo-row${isBest ? ' best' : ''}" style="transition-delay:${(item.rank - 1) * 80}ms">
        <div class="comp-demo-rank ${rankClass}">${item.rank}</div>
        <div class="comp-demo-logo"><img src="${item.logo}" alt="${item.company}"></div>
        <div class="comp-demo-info">
          <div class="comp-demo-company">${item.company}</div>
          <div class="comp-demo-product">${item.product}</div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div class="comp-demo-price">${item.price}$</div>
          <div class="comp-demo-price-label">PAR MOIS</div>
        </div>
      </div>`;
    }

    function buildCategory(icon, title, count, items) {
      let rows = items.map((item, i) => buildRow(item, i === 0)).join('');
      return `<div class="comp-demo-cat">
        <div class="comp-demo-cat-header">
          <div class="comp-demo-cat-icon">${icon}</div>
          <div class="comp-demo-cat-title">${title}</div>
          <div class="comp-demo-cat-count">${count}</div>
        </div>
        ${rows}
      </div>`;
    }

    let html = `<div class="comp-demo-results-header"><span class="comp-results-dot"></span> 10 résultats trouvés — Temporaire 20 ans, 250 000$</div>`;
    html += `<div class="comp-demo-cats-grid">`;
    html += buildCategory('🏆', 'Assurance Standard', '5', standardResults);
    html += buildCategory('⚡', 'Assurance Simplifiée', '5', simplifiedResults);
    html += `</div>`;

    resultsArea.innerHTML = html;

    // Animate rows in
    requestAnimationFrame(() => {
      resultsArea.querySelectorAll('.comp-demo-row').forEach(row => {
        row.classList.add('visible');
      });
    });
  }, 2200);
}

/* ═══════════════════════════════════════════════════════
   PRÉAVIS — Typewriter Animation
═══════════════════════════════════════════════════════ */
function initPreavisTypewriter() {
  const form = document.getElementById('preavis-form');
  if (!form) return;

  const cursor = document.getElementById('pf-cursor');

  const fields = [
    { id: 'pf-num-val',            text: '89175' },
    { id: 'pf-police1',            text: 'SE0070214' },
    { id: 'pf-date-vigueur1',      text: '05/08/2021' },
    { id: 'pf-assureur-actuel',    text: 'Humania' },
    { id: 'pf-assureur-propose',   text: 'UV Assurance' },
    { id: 'pf-nature-actuel',      text: 'Vie Permanente' },
    { id: 'pf-nature-propose',     text: 'Vie Temporaire, Vie Permanente' },
    { id: 'pf-date-actuel',        text: '05/08/2021' },
    { id: 'pf-date-propose',       text: 'Ne s\'applique pas' },
    { id: 'pf-prestation-actuel',  text: '25 000' },
    { id: 'pf-prestation-propose', text: '125 000' },
    { id: 'pf-prime-actuel',       text: '799,44' },
    { id: 'pf-prime-propose',      text: '1 388,40' },
    { id: 'pf-comment',            text: 'Le client souhaite remplacer son contrat actuel d\'assurance vie permanente chez Humania par une combinaison vie temporaire et vie permanente chez UV Assurance. Le nouveau contrat offre une couverture significativement plus élevée (125 000 $ vs 25 000 $) pour une prime annuelle de 1 388,40 $. Le client a été informé des avantages et inconvénients du remplacement, incluant la nouvelle période de contestabilité de deux ans.' },
  ];

  let running = false;

  function moveCursor(el) {
    if (!cursor || !el) return;
    const formRect = form.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    // Measure text width using a temp range
    let textW = 0;
    if (el.firstChild && el.firstChild.nodeType === 3) {
      const range = document.createRange();
      range.selectNodeContents(el);
      textW = range.getBoundingClientRect().width;
    } else {
      textW = el.scrollWidth;
    }
    cursor.style.opacity = '1';
    cursor.style.top = (elRect.top - formRect.top + 3) + 'px';
    cursor.style.left = (elRect.left - formRect.left + Math.min(textW, elRect.width - 4) + 2) + 'px';
  }

  function typeField(field) {
    return new Promise(resolve => {
      const el = document.getElementById(field.id);
      if (!el) { resolve(); return; }
      el.textContent = '';
      let i = 0;
      const speed = field.id === 'pf-comment' ? 12 : 35;
      moveCursor(el);
      const iv = setInterval(() => {
        if (!running) { clearInterval(iv); resolve(); return; }
        el.textContent += field.text[i];
        i++;
        moveCursor(el);
        if (i >= field.text.length) {
          clearInterval(iv);
          resolve();
        }
      }, speed);
    });
  }

  function clearAll() {
    fields.forEach(f => {
      const el = document.getElementById(f.id);
      if (el) el.textContent = '';
    });
  }

  async function runLoop() {
    running = true;
    clearAll();
    for (const field of fields) {
      if (!running) return;
      await typeField(field);
      await new Promise(r => setTimeout(r, 180));
    }
    if (cursor) cursor.style.opacity = '0';
    await new Promise(r => setTimeout(r, 4000));
    if (running) runLoop();
  }

  // Start when form scrolls into view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !running) {
        runLoop();
      } else if (!entry.isIntersecting && running) {
        running = false;
        if (cursor) cursor.style.opacity = '0';
      }
    });
  }, { threshold: 0.2 });
  observer.observe(form);
}
