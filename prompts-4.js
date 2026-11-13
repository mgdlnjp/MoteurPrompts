/* Prompts 87 à 111 — Marketing, vente, entrepreneuriat et finances */
SAMPLE.push(

{title:"Script de vidéo YouTube",category:"Réseaux sociaux",description:"Écrire le script d'une vidéo YouTube qui retient l'attention.",tags:["youtube","vidéo","script","youtubeur","tournage","contenu"],
 prompt:P({
  role:"Tu es un scénariste YouTube qui maîtrise la rétention d'audience.",
  contexte:"Chaîne et thème : [CHAÎNE]\nSujet de la vidéo : [SUJET]\nPublic : [PUBLIC]\nDurée visée : [DURÉE] minutes\nObjectif : [ÉDUCATIF / DIVERTISSEMENT / VENTE]",
  tache:"Écris le script complet de la vidéo.",
  etapes:[
   "Propose 5 titres et 3 idées de miniature.",
   "Écris une introduction de 30 secondes qui promet un bénéfice clair.",
   "Structure le contenu en parties avec des relances régulières pour garder l'attention.",
   "Indique les plans, illustrations et textes à l'écran.",
   "Termine par un appel à l'action naturel.",
  ],
  contraintes:["Style oral, phrases courtes.","Environ 150 mots par minute de vidéo."],
  format:"### Titres et miniatures\n### Script (tableau : Temps | Texte dit | Visuel)\n### Description et tags YouTube",
 })},

{title:"Script de vidéo courte (Reels / TikTok)",category:"Réseaux sociaux",description:"Écrire une vidéo verticale de moins d'une minute qui accroche.",tags:["tiktok","reels","shorts","vidéo courte","script","viral"],
 prompt:P({
  role:"Tu es un créateur de contenu expert des formats courts.",
  contexte:"Sujet : [SUJET]\nCompte et audience : [AUDIENCE]\nFormat : [FACE CAMÉRA / VOIX OFF / TEXTE À L'ÉCRAN / TENDANCE]\nDurée : [DURÉE] secondes\nObjectif : [OBJECTIF]",
  tache:"Écris 3 scripts de vidéo courte sur ce sujet.",
  etapes:[
   "Pour chaque script : une accroche des 2 premières secondes très forte.",
   "Développe une seule idée, avec un rythme rapide.",
   "Indique plans, textes à l'écran et suggestions de son.",
   "Termine par une boucle ou un appel à commenter.",
  ],
  contraintes:["Une idée par vidéo.","Faisable seul avec un smartphone."],
  format:"Pour chaque script : accroche, déroulé seconde par seconde, texte à l'écran, légende et hashtags.",
 })},

{title:"Bio de profil",category:"Réseaux sociaux",description:"Écrire une bio percutante pour Instagram, TikTok, LinkedIn ou un site.",tags:["bio","profil","instagram","linkedin","présentation","description"],
 prompt:P({
  role:"Tu es un copywriter spécialiste du personal branding.",
  contexte:"Plateforme : [PLATEFORME]\nQui je suis / ce que je fais : [DESCRIPTION]\nPour qui : [CIBLE]\nCe qui me distingue : [DIFFÉRENCE]\nAction attendue du visiteur : [ACTION]\nTon : [TON]",
  tache:"Écris plusieurs bios adaptées à la plateforme.",
  etapes:[
   "Dis clairement ce que je fais et pour qui.",
   "Ajoute un élément de crédibilité ou de personnalité.",
   "Termine par un appel à l'action.",
  ],
  contraintes:["Respecte la limite de caractères de la plateforme.","Pas de clichés (« passionné », « entrepreneur dans l'âme »)."],
  format:"5 bios de styles différents, avec le nombre de caractères. Puis la recommandation de la meilleure.",
 })},

{title:"Stratégie de contenu sur 3 mois",category:"Marketing",description:"Construire une stratégie de contenu complète pour développer sa marque.",tags:["stratégie de contenu","contenu","marketing","plan","réseaux sociaux","blog"],
 prompt:P({
  role:"Tu es directeur de la stratégie de contenu.",
  contexte:"Marque / activité : [ACTIVITÉ]\nCible : [CIBLE]\nObjectifs à 3 mois : [OBJECTIFS]\nCanaux utilisés : [CANAUX]\nRessources (temps, budget, équipe) : [RESSOURCES]",
  tache:"Construis une stratégie de contenu sur 3 mois.",
  etapes:[
   "Définis le positionnement et le ton éditorial.",
   "Définis 4 piliers de contenu.",
   "Attribue un rôle à chaque canal et un rythme de publication.",
   "Planifie les grands temps forts sur 12 semaines.",
   "Définis les indicateurs et un rituel de bilan mensuel.",
  ],
  contraintes:["Réaliste avec les ressources.","Recyclage d'un même contenu sur plusieurs canaux."],
  format:"### Positionnement\n### Piliers\n### Canaux (tableau)\n### Planning 12 semaines\n### Indicateurs",
 })},

{title:"Séquence d'emails automatique",category:"Marketing",description:"Écrire une série d'emails pour accueillir ou convertir des abonnés.",tags:["emailing","séquence","email","automatisation","abonnés","conversion"],
 prompt:P({
  role:"Tu es un expert en email marketing et en copywriting.",
  contexte:"Objectif de la séquence : [BIENVENUE / VENTE / RELANCE DE PANIER / FIDÉLISATION]\nOffre : [OFFRE]\nAbonnés : [PUBLIC]\nNombre d'emails : [NOMBRE]\nTon : [TON]",
  tache:"Écris la séquence complète.",
  etapes:[
   "Définis le rôle de chaque email dans le parcours.",
   "Pour chaque email : délai d'envoi, objet, texte d'aperçu, contenu, appel à l'action.",
   "Alterne valeur, preuve et proposition.",
  ],
  contraintes:["Un seul appel à l'action par email.","Emails de 200 mots maximum."],
  format:"### Plan de la séquence (tableau)\n### Emails complets\n### Indicateurs à suivre",
 })},

{title:"Page de vente",category:"Marketing",description:"Rédiger une page de vente ou landing page qui convertit.",tags:["page de vente","landing page","vente","conversion","copywriting","site"],
 prompt:P({
  role:"Tu es un copywriter spécialiste des pages de vente.",
  contexte:"Offre : [OFFRE]\nPrix : [PRIX]\nCible et son problème principal : [CIBLE ET PROBLÈME]\nBénéfices : [BÉNÉFICES]\nPreuves (témoignages, chiffres) : [PREUVES]\nGarantie : [GARANTIE]",
  tache:"Rédige le texte complet de la page de vente.",
  etapes:[
   "Titre principal centré sur le résultat obtenu.",
   "Description du problème et de ses conséquences.",
   "Présentation de la solution et de son fonctionnement.",
   "Bénéfices, preuves, contenu de l'offre et prix.",
   "Réponses aux objections, garantie et appels à l'action répétés.",
  ],
  contraintes:["N'invente aucun témoignage ni chiffre : utilise [À COMPLÉTER].","Phrases courtes, lecture facile sur mobile."],
  format:"Le texte de la page, section par section, avec les titres et l'emplacement des boutons.",
 })},

{title:"Textes de publicité en ligne",category:"Marketing",description:"Écrire des annonces Facebook, Instagram ou Google efficaces.",tags:["publicité","annonce","facebook ads","google ads","pub","campagne"],
 prompt:P({
  role:"Tu es un spécialiste de l'acquisition payante.",
  contexte:"Plateforme : [FACEBOOK-INSTAGRAM / GOOGLE / LINKEDIN / TIKTOK]\nOffre : [OFFRE]\nCible : [CIBLE]\nObjectif : [CLICS / VENTES / INSCRIPTIONS]\nBudget : [BUDGET]",
  tache:"Crée des variantes d'annonces prêtes à tester.",
  etapes:[
   "Propose 3 angles différents (bénéfice, problème, preuve sociale).",
   "Pour chaque angle : titre, texte principal, appel à l'action, idée de visuel.",
   "Propose un ciblage de départ.",
   "Explique comment tester et lire les résultats.",
  ],
  contraintes:["Respecte les limites de caractères et les règles publicitaires de la plateforme.","Aucune promesse exagérée."],
  format:"Tableau des annonces par angle, puis ciblage, puis plan de test.",
 })},

{title:"Analyse de la concurrence",category:"Marketing",description:"Étudier ses concurrents pour trouver comment se démarquer.",tags:["concurrence","concurrents","benchmark","positionnement","marché","analyse"],
 prompt:P({
  role:"Tu es analyste en stratégie marketing.",
  contexte:"Mon activité : [ACTIVITÉ]\nConcurrents connus : [CONCURRENTS]\nCe que je sais d'eux (prix, offres, communication) : [INFOS]\nMa cible : [CIBLE]",
  tache:"Analyse la concurrence et trouve mon positionnement.",
  etapes:[
   "Compare les concurrents : offre, prix, cible, message, forces, faiblesses.",
   "Identifie les attentes clients mal satisfaites.",
   "Propose 3 positionnements différenciants possibles.",
   "Recommande le plus pertinent et son message clé.",
  ],
  contraintes:["Signale ce qui est à vérifier.","Ne te base que sur les informations fournies ou générales."],
  format:"### Tableau comparatif\n### Opportunités\n### 3 positionnements\n### Recommandation et message",
 })},

{title:"Proposition de valeur",category:"Marketing",description:"Formuler clairement pourquoi un client devrait choisir son offre.",tags:["proposition de valeur","offre","message","différenciation","positionnement","client"],
 prompt:P({
  role:"Tu es consultant en marketing stratégique.",
  contexte:"Offre : [OFFRE]\nCible : [CIBLE]\nProblèmes du client : [PROBLÈMES]\nCe que je fais mieux que les autres : [DIFFÉRENCE]",
  tache:"Formule une proposition de valeur claire.",
  etapes:[
   "Décris les tâches, frustrations et gains attendus du client.",
   "Relie chaque élément de mon offre à une frustration ou un gain.",
   "Rédige la proposition de valeur : titre, sous-titre, 3 bénéfices.",
   "Teste-la : est-elle claire, spécifique, différente ?",
  ],
  contraintes:["Compréhensible en 5 secondes.","Pas de superlatifs vides."],
  format:"### Profil client\n### Correspondance offre / besoins\n### 3 versions de la proposition de valeur\n### Recommandation",
 })},

{title:"Questionnaire d'étude de marché",category:"Marketing",description:"Créer un questionnaire pour valider une idée auprès de clients.",tags:["étude de marché","questionnaire","sondage","valider","clients","enquête"],
 prompt:P({
  role:"Tu es chargé d'études marketing.",
  contexte:"Idée ou produit à valider : [IDÉE]\nCible interrogée : [CIBLE]\nCe que je veux apprendre : [OBJECTIFS]\nFormat : [EN LIGNE / ENTRETIEN]",
  tache:"Crée un questionnaire sans biais.",
  etapes:[
   "Définis les hypothèses à valider.",
   "Rédige les questions : filtres, habitudes actuelles, problèmes, solutions utilisées, intérêt, prix.",
   "Explique comment analyser les réponses.",
  ],
  contraintes:["Questions neutres, jamais orientées.","15 questions maximum, 5 minutes."],
  format:"### Hypothèses\n### Questionnaire (avec type de réponse)\n### Analyse des résultats\n### Message d'invitation",
 })},

{title:"Créer un slogan",category:"Marketing",description:"Trouver un slogan mémorable pour une marque ou une campagne.",tags:["slogan","accroche","marque","publicité","baseline","tagline"],
 prompt:P({
  role:"Tu es concepteur-rédacteur dans une agence de publicité.",
  contexte:"Marque / produit : [MARQUE]\nCe qu'elle apporte : [BÉNÉFICE]\nCible : [CIBLE]\nPersonnalité : [TON]\nSlogans de concurrents à éviter : [CONCURRENTS]",
  tache:"Propose des slogans originaux.",
  etapes:[
   "Propose 20 slogans selon plusieurs styles : bénéfice, émotion, jeu de mots, promesse, question.",
   "Sélectionne les 5 meilleurs et justifie.",
   "Teste les 5 : mémorisation, clarté, différenciation.",
  ],
  contraintes:["8 mots maximum.","Facile à prononcer et à retenir."],
  format:"Liste des 20 slogans par style, puis top 5 avec justification.",
 })},

{title:"Répondre aux avis clients",category:"Marketing",description:"Répondre aux avis Google, positifs ou négatifs, de façon professionnelle.",tags:["avis","google","réponse","client","e-réputation","commentaire"],
 prompt:P({
  role:"Tu es responsable de l'e-réputation d'une entreprise.",
  contexte:"Entreprise : [ENTREPRISE]\nAvis du client :\n[AVIS]\nNote : [NOTE]/5\nInformations utiles sur la situation : [CONTEXTE]",
  tache:"Rédige une réponse publique adaptée.",
  etapes:[
   "Remercie le client en personnalisant.",
   "Pour un avis négatif : reconnais le problème, explique sans te défendre, propose une solution hors ligne.",
   "Pour un avis positif : valorise un détail précis et invite à revenir.",
   "Pense aux futurs clients qui liront la réponse.",
  ],
  contraintes:["80 mots maximum.","Aucune donnée personnelle du client.","Jamais agressif, même si l'avis est injuste."],
  format:"2 versions de réponse, puis une suggestion d'action interne si l'avis révèle un problème.",
 })},

{title:"Script d'appel de vente",category:"Vente",description:"Préparer un appel téléphonique de prospection ou de vente.",tags:["vente","appel","téléphone","prospection","script","commercial"],
 prompt:P({
  role:"Tu es un formateur commercial spécialiste de la vente consultative.",
  contexte:"Offre : [OFFRE]\nInterlocuteur : [POSTE / TYPE DE CLIENT]\nObjectif de l'appel : [RENDEZ-VOUS / VENTE / QUALIFICATION]\nObjections fréquentes : [OBJECTIONS]",
  tache:"Prépare un script d'appel souple.",
  etapes:[
   "Introduction de 15 secondes qui donne une raison d'écouter.",
   "Questions de découverte pour comprendre le besoin.",
   "Présentation de la solution reliée aux réponses.",
   "Réponses aux objections fréquentes.",
   "Conclusion avec une prochaine étape précise.",
  ],
  contraintes:["Le client doit parler plus que le vendeur.","Ton naturel, pas récité."],
  format:"### Introduction\n### Questions de découverte\n### Présentation\n### Objections (tableau)\n### Conclusion\n### Message vocal si absent",
 })},

{title:"Pitch investisseurs",category:"Entrepreneuriat",description:"Préparer la présentation d'une startup pour lever des fonds.",tags:["pitch","investisseurs","levée de fonds","startup","pitch deck","financement"],
 prompt:P({
  role:"Tu es un investisseur en capital-risque qui a vu des milliers de pitchs.",
  contexte:"Startup : [STARTUP]\nProblème et solution : [PROBLÈME / SOLUTION]\nMarché : [MARCHÉ]\nTraction (clients, revenus, croissance) : [TRACTION]\nÉquipe : [ÉQUIPE]\nMontant recherché et usage : [MONTANT]",
  tache:"Construis le contenu d'un pitch deck de 12 diapositives.",
  etapes:[
   "Rédige chaque diapositive : problème, solution, produit, marché, modèle économique, traction, concurrence, stratégie, équipe, finances, levée, vision.",
   "Pour chacune : titre affirmatif et contenu clé.",
   "Identifie les faiblesses que les investisseurs vont relever.",
   "Prépare les 10 questions les plus probables et les réponses.",
  ],
  contraintes:["Chiffres sourcés ou marqués comme estimations.","Une idée par diapositive."],
  format:"### Diapositives (tableau : N° | Titre | Contenu)\n### Points faibles\n### Questions-réponses",
 })},

{title:"Proposition commerciale",category:"Vente",description:"Rédiger une proposition commerciale ou un devis convaincant.",tags:["proposition commerciale","devis","offre","client","vente","prestation"],
 prompt:P({
  role:"Tu es consultant commercial expert en propositions gagnantes.",
  contexte:"Client : [CLIENT]\nSon besoin (tel qu'il l'a exprimé) : [BESOIN]\nMa solution : [SOLUTION]\nPrix et modalités : [PRIX]\nDélais : [DÉLAIS]\nConcurrents probables : [CONCURRENTS]",
  tache:"Rédige une proposition commerciale structurée.",
  etapes:[
   "Reformule le besoin et les enjeux du client avec ses mots.",
   "Présente la solution et la méthode étape par étape.",
   "Montre les résultats attendus et les bénéfices.",
   "Présente le prix en plusieurs options si possible.",
   "Ajoute planning, références, conditions et prochaine étape.",
  ],
  contraintes:["Centré sur le client, pas sur moi.","Signale les éléments à compléter."],
  format:"La proposition complète, avec sommaire, puis un mail d'envoi de 80 mots.",
 })},

{title:"Plan de lancement de produit",category:"Marketing",description:"Préparer le lancement d'un nouveau produit ou service.",tags:["lancement","produit","nouveau","lancer","marketing","plan"],
 prompt:P({
  role:"Tu es chef de produit marketing expérimenté en lancements.",
  contexte:"Produit : [PRODUIT]\nCible : [CIBLE]\nDate de lancement : [DATE]\nBudget : [BUDGET]\nAudience existante (abonnés, clients) : [AUDIENCE]",
  tache:"Construis le plan de lancement.",
  etapes:[
   "Phase d'avant-lancement : créer l'attente, liste d'attente, premiers testeurs.",
   "Jour du lancement : actions canal par canal.",
   "Après le lancement : relances, témoignages, ajustements.",
   "Objectifs chiffrés et suivi.",
  ],
  contraintes:["Planning semaine par semaine.","Actions adaptées au budget."],
  format:"### Rétroplanning (tableau : Semaine | Action | Canal | Responsable)\n### Messages clés\n### Objectifs et indicateurs\n### Checklist du jour J",
 })},

{title:"Fixer le prix d'un produit",category:"Entrepreneuriat",description:"Déterminer le bon prix de vente d'un produit ou service.",tags:["prix","tarif","pricing","marge","vente","rentabilité"],
 prompt:P({
  role:"Tu es expert en stratégie de prix.",
  contexte:"Produit / service : [PRODUIT]\nCoûts (fabrication, temps, frais) : [COÛTS]\nPrix des concurrents : [PRIX CONCURRENTS]\nCible et pouvoir d'achat : [CIBLE]\nPositionnement souhaité : [ÉCONOMIQUE / MILIEU DE GAMME / PREMIUM]",
  tache:"Recommande un prix et une structure tarifaire.",
  etapes:[
   "Calcule le prix plancher (coûts et marge minimale).",
   "Analyse le prix du marché.",
   "Estime la valeur perçue par le client.",
   "Propose un prix et éventuellement 3 offres (basique, standard, premium).",
   "Explique comment tester le prix.",
  ],
  contraintes:["Montre les calculs.","Tiens compte de la TVA si applicable."],
  format:"### Calculs\n### Prix recommandé\n### Offres\n### Comment présenter le prix\n### Test",
 })},

{title:"Fidéliser ses clients",category:"Marketing",description:"Trouver des actions pour garder ses clients et les faire revenir.",tags:["fidélisation","clients","fidélité","rétention","programme","satisfaction"],
 prompt:P({
  role:"Tu es expert en relation client et en fidélisation.",
  contexte:"Activité : [ACTIVITÉ]\nClients types : [CLIENTS]\nFréquence d'achat actuelle : [FRÉQUENCE]\nCe que les clients apprécient ou reprochent : [RETOURS]\nBudget : [BUDGET]",
  tache:"Construis un plan de fidélisation.",
  etapes:[
   "Identifie les moments clés du parcours client.",
   "Propose 10 actions classées par coût et impact.",
   "Propose un programme de fidélité adapté si pertinent.",
   "Définis comment mesurer la fidélité.",
  ],
  contraintes:["Actions simples à mettre en place.","Personnalisation plutôt que réductions systématiques."],
  format:"### Parcours client\n### 10 actions (tableau : Action | Coût | Impact)\n### Programme de fidélité\n### Indicateurs",
 })},

{title:"Préparer un épisode de podcast",category:"Réseaux sociaux",description:"Structurer un épisode de podcast ou une interview.",tags:["podcast","épisode","interview","audio","questions","invité"],
 prompt:P({
  role:"Tu es producteur de podcasts.",
  contexte:"Podcast et thème : [PODCAST]\nSujet de l'épisode : [SUJET]\nInvité (facultatif) : [INVITÉ ET PARCOURS]\nDurée : [DURÉE]\nAuditeurs : [PUBLIC]",
  tache:"Prépare le conducteur de l'épisode.",
  etapes:[
   "Propose un titre et une accroche d'introduction.",
   "Structure l'épisode en séquences minutées.",
   "Rédige 15 questions, des plus simples aux plus profondes.",
   "Prévois des relances et une question de fin marquante.",
   "Rédige la description de l'épisode.",
  ],
  contraintes:["Questions ouvertes.","Une ligne directrice claire."],
  format:"### Titre et intro\n### Conducteur (tableau minuté)\n### Questions\n### Description de l'épisode",
 })},

{title:"Plan de communication d'un événement",category:"Marketing",description:"Promouvoir un événement pour attirer du monde.",tags:["événement","communication","promotion","inscriptions","salon","atelier"],
 prompt:P({
  role:"Tu es chargé de communication événementielle.",
  contexte:"Événement : [ÉVÉNEMENT]\nDate et lieu : [DATE ET LIEU]\nPublic visé : [PUBLIC]\nObjectif de participants : [NOMBRE]\nCanaux disponibles : [CANAUX]\nBudget : [BUDGET]",
  tache:"Construis le plan de communication.",
  etapes:[
   "Définis le message clé et l'accroche.",
   "Planifie les actions de J-30 à J+7.",
   "Rédige les messages principaux (annonce, rappel, dernière chance, remerciement).",
   "Propose des partenaires ou relais possibles.",
  ],
  contraintes:["Actions adaptées au budget.","Messages courts adaptés à chaque canal."],
  format:"### Message clé\n### Rétroplanning\n### Messages rédigés\n### Relais\n### Indicateurs",
 })},

{title:"Comprendre l'investissement",category:"Finances",description:"Comprendre les bases des placements avant d'investir.",tags:["investir","investissement","bourse","placement","épargne","débutant"],
 prompt:P({
  role:"Tu es un éducateur financier indépendant, sans produit à vendre.",
  contexte:"Âge : [ÂGE]\nÉpargne disponible : [MONTANT]\nÉpargne de précaution déjà constituée : [OUI / NON]\nHorizon de placement : [DURÉE]\nTolérance au risque : [FAIBLE / MOYENNE / ÉLEVÉE]\nPays : [PAYS]",
  tache:"Explique-moi les bases pour investir de façon éclairée.",
  etapes:[
   "Explique la relation entre risque, rendement et durée.",
   "Présente les grandes familles de placements disponibles dans mon pays, avec avantages et risques.",
   "Explique la diversification et l'intérêt de l'investissement régulier.",
   "Décris les erreurs fréquentes des débutants.",
   "Propose des questions à poser à un conseiller.",
  ],
  contraintes:["Pas de recommandation de produit précis ni de promesse de rendement.","Rappelle que les règles fiscales doivent être vérifiées."],
  format:"### Les bases\n### Familles de placements (tableau)\n### Principes clés\n### Erreurs à éviter\n### Prochaines étapes",
 })},

{title:"Sortir de ses dettes",category:"Finances",description:"Faire un plan pour rembourser ses crédits et dettes.",tags:["dettes","crédit","rembourser","endettement","budget","argent"],
 prompt:P({
  role:"Tu es un conseiller en budget bienveillant.",
  contexte:"Mes dettes (montant, taux, mensualité) : [DETTES]\nRevenus mensuels : [REVENUS]\nDépenses essentielles : [DÉPENSES]\nSomme disponible chaque mois pour rembourser : [MONTANT]",
  tache:"Construis un plan pour rembourser mes dettes.",
  etapes:[
   "Fais le bilan de la situation.",
   "Compare la méthode avalanche (taux le plus élevé d'abord) et boule de neige (plus petite dette d'abord).",
   "Calcule la durée de remboursement pour chaque méthode.",
   "Propose des pistes pour augmenter la somme disponible.",
   "Indique les aides et organismes à contacter en cas de difficulté.",
  ],
  contraintes:["Ton sans jugement.","Ne recommande pas de nouveau crédit pour rembourser sans en expliquer les risques."],
  format:"### Bilan\n### Comparaison des méthodes\n### Plan mois par mois\n### Pistes d'économies\n### Où trouver de l'aide",
 })},

{title:"Comprendre ses impôts",category:"Finances",description:"Comprendre sa déclaration et les démarches fiscales.",tags:["impôts","déclaration","fiscalité","taxe","revenus","administration"],
 prompt:P({
  role:"Tu es un pédagogue de la fiscalité des particuliers.",
  contexte:"Pays : [PAYS]\nSituation (célibataire, couple, enfants) : [SITUATION]\nType de revenus : [SALAIRE / INDÉPENDANT / LOCATIF / AUTRE]\nMa question : [QUESTION]",
  tache:"Explique-moi clairement ce que je dois savoir.",
  etapes:[
   "Explique le principe en mots simples.",
   "Applique-le à ma situation avec un exemple chiffré approximatif.",
   "Liste les démarches et les dates importantes.",
   "Signale les déductions ou erreurs fréquentes à vérifier.",
  ],
  contraintes:["Les règles changent chaque année : indique ce qui doit être vérifié sur le site officiel.","Ce n'est pas un conseil fiscal personnalisé."],
  format:"### Le principe\n### Mon cas\n### Démarches et dates\n### Points à vérifier",
 })},

{title:"Négocier un achat",category:"Vie quotidienne",description:"Préparer une négociation pour obtenir un meilleur prix.",tags:["négocier","négociation","achat","prix","voiture","fournisseur"],
 prompt:P({
  role:"Tu es un négociateur expérimenté.",
  contexte:"Ce que je veux acheter : [ACHAT]\nPrix demandé : [PRIX]\nPrix que je vise : [OBJECTIF]\nMon prix maximum : [MAXIMUM]\nAlternatives si ça échoue : [ALTERNATIVES]\nInformations sur le vendeur : [VENDEUR]",
  tache:"Prépare ma négociation.",
  etapes:[
   "Évalue le prix du marché et mon pouvoir de négociation.",
   "Définis ma première offre et mes paliers de concession.",
   "Prépare mes arguments.",
   "Prépare les phrases clés et les réponses aux refus.",
   "Propose des contreparties autres que le prix.",
  ],
  contraintes:["Négociation honnête et respectueuse.","Toujours savoir quand partir."],
  format:"### Analyse\n### Stratégie de prix\n### Arguments\n### Phrases clés\n### Contreparties",
 })},

{title:"Comparer deux offres",category:"Vie quotidienne",description:"Comparer des offres (assurance, forfait, logement, emploi) pour bien choisir.",tags:["comparer","offres","assurance","forfait","choisir","contrat"],
 prompt:P({
  role:"Tu es un conseiller consommation neutre et rigoureux.",
  contexte:"Type d'offre : [TYPE]\nOffre A : [DÉTAILS A]\nOffre B : [DÉTAILS B]\nMes besoins et priorités : [BESOINS]\nDurée d'engagement envisagée : [DURÉE]",
  tache:"Compare les offres et recommande la plus adaptée.",
  etapes:[
   "Mets les offres dans un tableau comparable (mêmes critères, coût total sur la durée).",
   "Repère les frais cachés, exclusions et conditions de résiliation.",
   "Évalue chaque offre par rapport à mes besoins.",
   "Recommande et explique.",
  ],
  contraintes:["Calcule le coût total réel.","Signale les informations manquantes à demander."],
  format:"### Tableau comparatif\n### Points de vigilance\n### Recommandation\n### Questions à poser avant de signer",
 })}

);
