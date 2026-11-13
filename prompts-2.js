/* Prompts 37 à 61 — Communication, travail et management */
SAMPLE.push(

{title:"Répondre à un client mécontent",category:"Rédaction pro",description:"Répondre à une réclamation de façon apaisante et constructive.",tags:["client","réclamation","mécontent","service client","réponse","plainte"],
 prompt:P({
  role:"Tu es responsable du service client, expert en désescalade et en fidélisation.",
  contexte:"Message du client :\n[MESSAGE DU CLIENT]\nCe qui s'est réellement passé : [FAITS]\nCe que je peux proposer : [GESTE COMMERCIAL / SOLUTION]\nCanal : [MAIL / AVIS EN LIGNE / MESSAGE PRIVÉ]",
  tache:"Rédige une réponse qui apaise le client et résout le problème.",
  etapes:[
   "Identifie l'émotion et l'attente réelle du client.",
   "Commence par reconnaître le problème et son ressenti, sans te justifier.",
   "Explique brièvement ce qui s'est passé, sans rejeter la faute.",
   "Propose une solution concrète avec un délai.",
   "Termine par une ouverture qui donne envie de rester client.",
  ],
  contraintes:["Ton humain, pas de langue de bois.","Ne promets rien qui ne figure pas dans ce que je peux proposer.","150 mots maximum."],
  format:"1. Analyse en 2 lignes de l'attente du client.\n2. La réponse prête à envoyer.\n3. Ce qu'il faut éviter de dire dans ce cas.",
 })},

{title:"Mail de refus poli",category:"Rédaction pro",description:"Dire non à une demande tout en préservant la relation.",tags:["refus","dire non","mail","refuser","poli","relation"],
 prompt:P({
  role:"Tu es expert en communication assertive et bienveillante.",
  contexte:"Ce qu'on me demande : [DEMANDE]\nQui me le demande : [PERSONNE ET RELATION]\nPourquoi je refuse : [RAISON]\nCe que je peux proposer à la place (facultatif) : [ALTERNATIVE]",
  tache:"Rédige un refus clair, poli et définitif.",
  etapes:[
   "Remercie pour la demande ou la confiance.",
   "Exprime le refus clairement dès le début, sans ambiguïté.",
   "Donne une raison courte et honnête, sans te justifier excessivement.",
   "Propose une alternative si j'en ai une.",
   "Termine sur une note positive pour la relation.",
  ],
  contraintes:["Pas de « peut-être » ni de faux espoir.","100 mots maximum."],
  format:"Trois versions : formelle, chaleureuse, très courte. Puis une phrase à dire si la personne insiste.",
 })},

{title:"Prospection par mail",category:"Rédaction pro",description:"Écrire un premier mail à un prospect qui donne envie de répondre.",tags:["prospection","prospect","mail","vente","rendez-vous","b2b"],
 prompt:P({
  role:"Tu es un expert en prospection B2B qui obtient des taux de réponse élevés sans être insistant.",
  contexte:"Mon offre : [OFFRE]\nProspect : [NOM, POSTE, ENTREPRISE]\nCe que je sais de lui ou de son entreprise : [INFOS]\nProblème que je résous pour ce type d'entreprise : [PROBLÈME]\nPreuve (client, résultat) : [PREUVE]",
  tache:"Rédige un mail de prospection personnalisé et une séquence de relance.",
  etapes:[
   "Écris une accroche personnalisée qui montre que je connais le prospect.",
   "Formule son problème probable en une phrase.",
   "Présente le résultat que j'apporte, avec la preuve.",
   "Termine par une demande simple et peu engageante (15 minutes d'appel, une question).",
   "Rédige 2 relances courtes espacées, chacune avec un angle différent.",
  ],
  contraintes:["Premier mail de 90 mots maximum.","Aucune formule commerciale creuse.","Objet de 5 mots maximum, sans majuscules agressives."],
  format:"### Objet (3 options)\n### Mail 1\n### Relance 1 (J+4)\n### Relance 2 (J+10)",
 })},

{title:"Construire une présentation",category:"Rédaction pro",description:"Créer le plan et le contenu des diapositives d'une présentation.",tags:["présentation","powerpoint","diapositives","slides","oral","réunion"],
 prompt:P({
  role:"Tu es consultant en communication spécialisé dans les présentations percutantes.",
  contexte:"Sujet : [SUJET]\nPublic : [PUBLIC]\nObjectif (informer, convaincre, former) : [OBJECTIF]\nDurée : [DURÉE] minutes\nInformations à intégrer : [CONTENU]",
  tache:"Construis une présentation complète, diapositive par diapositive.",
  etapes:[
   "Définis le message principal à retenir en une phrase.",
   "Construis une trame narrative : problème, enjeux, solution, preuve, appel à l'action.",
   "Pour chaque diapositive : titre affirmatif, 3 éléments maximum, visuel suggéré.",
   "Rédige les notes de l'orateur.",
   "Prévois les 3 questions difficiles du public et leurs réponses.",
  ],
  contraintes:["Une idée par diapositive.","Environ une diapositive par minute.","Titres sous forme de phrases qui disent la conclusion."],
  format:"### Message principal\n### Plan (tableau : N° | Titre | Contenu | Visuel)\n### Notes de l'orateur\n### Questions-réponses",
 })},

{title:"Rapport professionnel",category:"Rédaction pro",description:"Rédiger un rapport structuré avec analyse et recommandations.",tags:["rapport","analyse","recommandations","professionnel","document"],
 prompt:P({
  role:"Tu es un consultant senior qui rédige des rapports clairs pour des décideurs pressés.",
  contexte:"Sujet du rapport : [SUJET]\nDestinataire : [DESTINATAIRE]\nDonnées et informations disponibles : [DONNÉES]\nDécision que le rapport doit éclairer : [DÉCISION]",
  tache:"Rédige un rapport structuré qui aide à prendre la décision.",
  etapes:[
   "Rédige une synthèse de 5 lignes en tête (conclusion d'abord).",
   "Expose le contexte et la problématique.",
   "Analyse les données en séparant faits et interprétations.",
   "Compare les options possibles avec avantages, inconvénients et risques.",
   "Formule des recommandations priorisées et un calendrier.",
  ],
  contraintes:["Phrases courtes, chiffres mis en avant.","Signale clairement les données manquantes ou incertaines."],
  format:"### Synthèse\n### Contexte\n### Analyse\n### Options (tableau comparatif)\n### Recommandations\n### Prochaines étapes",
 })},

{title:"Discours pour un événement",category:"Rédaction pro",description:"Écrire un discours touchant ou drôle pour un mariage, un départ, un anniversaire.",tags:["discours","mariage","anniversaire","départ","toast","événement"],
 prompt:P({
  role:"Tu es un auteur de discours qui sait faire rire et émouvoir.",
  contexte:"Occasion : [MARIAGE / DÉPART EN RETRAITE / ANNIVERSAIRE / AUTRE]\nPersonne(s) concernée(s) : [PERSONNES]\nMon lien avec elles : [LIEN]\nAnecdotes et souvenirs : [ANECDOTES]\nTon : [ÉMOUVANT / DRÔLE / LES DEUX]\nDurée : [DURÉE] minutes",
  tache:"Écris un discours personnel prêt à être prononcé.",
  etapes:[
   "Commence par une accroche qui capte l'attention.",
   "Raconte 2 ou 3 anecdotes qui révèlent la personnalité des personnes concernées.",
   "Alterne moments drôles et moments sincères.",
   "Termine par un vœu ou un hommage et une invitation à lever son verre.",
  ],
  contraintes:["Humour bienveillant, rien de gênant pour quiconque dans le public.","Environ 130 mots par minute de discours.","Phrases faciles à dire à voix haute."],
  format:"Le discours complet, avec des indications entre parenthèses pour les pauses. Puis 3 conseils pour bien le prononcer.",
 })},

{title:"Communiqué de presse",category:"Rédaction pro",description:"Rédiger un communiqué pour annoncer une nouvelle aux médias.",tags:["communiqué","presse","médias","annonce","relations presse"],
 prompt:P({
  role:"Tu es attaché de presse expérimenté.",
  contexte:"Annonce : [ANNONCE]\nOrganisation : [ORGANISATION]\nDate et lieu : [DATE ET LIEU]\nChiffres ou faits marquants : [FAITS]\nCitation possible du dirigeant : [CITATION OU IDÉE]\nMédias visés : [MÉDIAS]",
  tache:"Rédige un communiqué de presse professionnel.",
  etapes:[
   "Écris un titre informatif et un sous-titre.",
   "Rédige un premier paragraphe qui répond à : qui, quoi, quand, où, pourquoi.",
   "Développe avec les faits, chiffres et une citation.",
   "Ajoute le paragraphe « À propos » et les contacts presse.",
  ],
  contraintes:["Une page maximum.","Style journalistique, factuel, sans superlatifs publicitaires."],
  format:"Le communiqué complet, puis un mail d'accompagnement de 80 mots à envoyer aux journalistes.",
 })},

{title:"Newsletter",category:"Rédaction pro",description:"Rédiger une newsletter utile et agréable à lire.",tags:["newsletter","emailing","abonnés","lettre d'information","contenu"],
 prompt:P({
  role:"Tu es un rédacteur de newsletters avec de très bons taux d'ouverture.",
  contexte:"Thème de la newsletter : [THÈME]\nAbonnés : [PUBLIC]\nSujets de ce numéro : [SUJETS]\nAppel à l'action principal : [ACTION]\nTon : [TON]",
  tache:"Rédige le numéro complet de la newsletter.",
  etapes:[
   "Propose des objets de mail qui donnent envie d'ouvrir.",
   "Écris une introduction personnelle et courte.",
   "Développe chaque sujet avec un titre, un paragraphe utile et un lien à insérer.",
   "Place un seul appel à l'action principal, bien visible.",
  ],
  contraintes:["Lecture en moins de 4 minutes.","Paragraphes de 3 lignes maximum."],
  format:"### 5 objets possibles\n### Texte d'aperçu\n### Newsletter complète\n### Idée de sujet pour le prochain numéro",
 })},

{title:"Traduire et adapter un texte",category:"Rédaction pro",description:"Traduire un texte en l'adaptant à la culture du lecteur.",tags:["traduction","traduire","anglais","langue","adapter","localisation"],
 prompt:P({
  role:"Tu es traducteur professionnel natif de [LANGUE CIBLE], spécialisé dans l'adaptation culturelle.",
  contexte:"Langue source : [LANGUE SOURCE]\nLangue cible : [LANGUE CIBLE]\nType de texte et public : [TYPE ET PUBLIC]\nRegistre : [FORMEL / NEUTRE / FAMILIER]\n\nTexte :\n[TEXTE]",
  tache:"Traduis le texte de façon naturelle, comme s'il avait été écrit directement dans la langue cible.",
  etapes:[
   "Comprends le sens et l'intention avant de traduire.",
   "Traduis le sens et non les mots, en gardant le registre.",
   "Adapte les expressions, références culturelles, unités et formats de date.",
   "Relis pour vérifier le naturel et la fidélité.",
  ],
  contraintes:["N'ajoute ni ne supprime d'information.","Garde la mise en forme d'origine."],
  format:"1. La traduction.\n2. Un tableau des choix de traduction délicats (Original | Traduction | Raison).",
 })},

{title:"Simplifier un texte compliqué",category:"Rédaction pro",description:"Rendre un texte administratif ou technique compréhensible par tous.",tags:["simplifier","vulgariser","langage clair","administratif","comprendre","technique"],
 prompt:P({
  role:"Tu es spécialiste du langage clair (FALC et rédaction simplifiée).",
  contexte:"Public visé : [PUBLIC, ex. grand public, enfants, personnes non francophones]\n\nTexte compliqué :\n[TEXTE]",
  tache:"Réécris ce texte pour qu'il soit compris dès la première lecture.",
  etapes:[
   "Identifie les informations essentielles et ce que le lecteur doit faire.",
   "Remplace le jargon par des mots courants, ou explique-le.",
   "Raccourcis les phrases : une idée par phrase.",
   "Organise avec des titres et des listes.",
  ],
  contraintes:["Ne supprime aucune information importante (dates, montants, obligations).","Phrases de 15 mots maximum."],
  format:"1. Le texte simplifié.\n2. Un encadré « Ce que vous devez faire » en 3 points.\n3. Un lexique des mots techniques conservés.",
 })},

{title:"Donner un feedback constructif",category:"Management",description:"Formuler une critique utile à un collègue ou un collaborateur.",tags:["feedback","critique","collègue","management","manager","équipe"],
 prompt:P({
  role:"Tu es un coach en management formé à la communication non violente.",
  contexte:"À qui : [PERSONNE ET RÔLE]\nSituation précise observée : [FAITS]\nImpact de cette situation : [IMPACT]\nCe que j'attends à l'avenir : [ATTENTE]\nNotre relation : [RELATION]",
  tache:"Prépare un feedback constructif à donner à l'oral.",
  etapes:[
   "Reformule les faits de façon objective, sans jugement.",
   "Structure le message avec la méthode Faits – Impact – Attente.",
   "Prévois une question ouverte pour écouter le point de vue de la personne.",
   "Prévois les réactions possibles (déni, émotion, justification) et comment y répondre.",
   "Termine par un engagement concret et une date de suivi.",
  ],
  contraintes:["Parle du comportement, jamais de la personnalité.","Pas de « toujours » ni de « jamais »."],
  format:"### Script du feedback\n### Questions à poser\n### Réactions possibles et réponses\n### Message de suivi écrit",
 })},

{title:"Gérer un conflit au travail",category:"Management",description:"Désamorcer un conflit avec un collègue ou entre deux personnes.",tags:["conflit","tension","collègue","travail","médiation","équipe"],
 prompt:P({
  role:"Tu es un médiateur professionnel spécialisé dans les conflits en entreprise.",
  contexte:"Personnes concernées : [PERSONNES]\nMon rôle dans la situation : [IMPLIQUÉ / MANAGER / TÉMOIN]\nCe qui s'est passé : [FAITS]\nDepuis quand : [DURÉE]\nCe que je souhaite obtenir : [OBJECTIF]",
  tache:"Aide-moi à comprendre ce conflit et à le résoudre.",
  etapes:[
   "Analyse les causes probables (besoins, malentendus, organisation, valeurs).",
   "Décris le point de vue probable de chaque personne.",
   "Propose une démarche de résolution étape par étape.",
   "Rédige des phrases d'ouverture pour la discussion.",
   "Indique quand il faut faire appel à un tiers (RH, médiateur).",
  ],
  contraintes:["Reste neutre, ne prends pas parti.","Propose des actions réalistes."],
  format:"### Analyse\n### Points de vue\n### Plan de résolution\n### Phrases pour ouvrir la discussion\n### Si ça ne s'améliore pas",
 })},

{title:"Prendre une décision difficile",category:"Productivité",description:"Comparer des options de façon structurée pour bien décider.",tags:["décision","choix","hésiter","options","comparer","décider"],
 prompt:P({
  role:"Tu es un conseiller en prise de décision, rigoureux et neutre.",
  contexte:"Décision à prendre : [DÉCISION]\nOptions envisagées : [OPTIONS]\nCe qui compte le plus pour moi : [CRITÈRES]\nContraintes : [CONTRAINTES]\nDate limite : [ÉCHÉANCE]",
  tache:"Aide-moi à prendre une décision éclairée.",
  etapes:[
   "Reformule la décision et vérifie s'il existe d'autres options oubliées.",
   "Pondère mes critères par importance.",
   "Évalue chaque option sur chaque critère dans une matrice.",
   "Analyse les risques et la réversibilité de chaque option.",
   "Applique le test du regret : quelle option je regretterais le moins dans 5 ans ?",
   "Donne ta recommandation tout en rappelant que la décision m'appartient.",
  ],
  contraintes:["Signale tes hypothèses.","Pose-moi les questions qui pourraient changer la recommandation."],
  format:"### Options (y compris oubliées)\n### Matrice de décision (tableau notes /10)\n### Risques\n### Recommandation\n### Questions à me poser",
 })},

{title:"Définir des objectifs SMART",category:"Productivité",description:"Transformer une envie floue en objectifs précis et atteignables.",tags:["objectifs","smart","but","motivation","plan d'action","résolutions"],
 prompt:P({
  role:"Tu es un coach en performance personnelle et professionnelle.",
  contexte:"Ce que je veux accomplir : [ENVIE OU OBJECTIF FLOU]\nDomaine : [PRO / PERSO / SANTÉ / FINANCES]\nÉchéance souhaitée : [ÉCHÉANCE]\nTemps disponible par semaine : [TEMPS]\nObstacles prévisibles : [OBSTACLES]",
  tache:"Transforme mon envie en objectifs SMART avec un plan d'action.",
  etapes:[
   "Clarifie la motivation profonde derrière l'objectif.",
   "Formule 1 objectif principal SMART (spécifique, mesurable, atteignable, réaliste, temporel).",
   "Découpe-le en jalons mensuels puis en actions hebdomadaires.",
   "Prévois une solution pour chaque obstacle.",
   "Propose un système de suivi simple.",
  ],
  contraintes:["Objectifs ambitieux mais réalistes avec le temps disponible.","Actions formulées avec un verbe concret."],
  format:"### Pourquoi\n### Objectif SMART\n### Jalons\n### Actions de la semaine 1\n### Obstacles et parades\n### Suivi",
 })},

{title:"Rédiger une procédure",category:"Productivité",description:"Écrire un mode opératoire clair pour une tâche répétitive.",tags:["procédure","mode opératoire","processus","documentation","tutoriel","checklist"],
 prompt:P({
  role:"Tu es spécialiste de la documentation de processus et de la qualité.",
  contexte:"Tâche à documenter : [TÂCHE]\nQui va l'utiliser : [UTILISATEURS ET NIVEAU]\nOutils utilisés : [OUTILS]\nComment je fais aujourd'hui (en vrac) : [ÉTAPES EN VRAC]",
  tache:"Rédige une procédure que n'importe qui pourra suivre sans aide.",
  etapes:[
   "Indique l'objectif, le déclencheur et le prérequis.",
   "Liste les étapes numérotées, une action par étape, avec un verbe à l'infinitif.",
   "Ajoute les points de contrôle et les erreurs fréquentes.",
   "Prévois que faire en cas de problème.",
  ],
  contraintes:["Aucun jargon non expliqué.","Signale les étapes où une capture d'écran serait utile."],
  format:"### Objectif\n### Prérequis\n### Étapes\n### Points de contrôle\n### En cas de problème\n### Checklist récapitulative",
 })},

{title:"Créer une FAQ",category:"Rédaction pro",description:"Créer une foire aux questions à partir d'un document ou d'une offre.",tags:["faq","questions","réponses","site","support","client"],
 prompt:P({
  role:"Tu es spécialiste de l'expérience client et du support.",
  contexte:"Produit / service / sujet : [SUJET]\nPublic : [PUBLIC]\nDocument ou informations de référence :\n[INFORMATIONS]",
  tache:"Crée une FAQ complète et utile.",
  etapes:[
   "Identifie les questions que se pose vraiment le public, y compris les objections et inquiétudes.",
   "Regroupe-les par thèmes.",
   "Rédige des réponses courtes, directes, qui commencent par oui/non quand c'est possible.",
  ],
  contraintes:["Utilise uniquement les informations fournies ; marque [À COMPLÉTER] ce qui manque.","15 questions minimum."],
  format:"FAQ en Markdown, par thème, puis la liste des informations manquantes à fournir.",
 })},

{title:"Mail d'excuses après une erreur",category:"Rédaction pro",description:"Reconnaître une erreur professionnelle et rétablir la confiance.",tags:["excuses","erreur","mail","confiance","pardon","professionnel"],
 prompt:P({
  role:"Tu es un expert en communication de crise à petite échelle.",
  contexte:"Erreur commise : [ERREUR]\nConséquences pour la personne : [CONSÉQUENCES]\nDestinataire : [DESTINATAIRE]\nCe que j'ai fait ou vais faire pour réparer : [ACTIONS]",
  tache:"Rédige un message d'excuses sincère et efficace.",
  etapes:[
   "Reconnais l'erreur clairement, sans minimiser ni chercher d'excuses.",
   "Montre que tu comprends l'impact pour la personne.",
   "Explique les actions de réparation et ce qui change pour que cela ne se reproduise pas.",
   "Termine sans redemander pardon de façon excessive.",
  ],
  contraintes:["Pas de « désolé si vous avez été dérangé ».","120 mots maximum."],
  format:"Objet + message. Puis une version orale de 3 phrases si je dois appeler.",
 })},

{title:"Ordre du jour de réunion",category:"Productivité",description:"Préparer une réunion efficace avec un ordre du jour minuté.",tags:["réunion","ordre du jour","préparer","animer","équipe"],
 prompt:P({
  role:"Tu es un facilitateur expert en réunions courtes et productives.",
  contexte:"Objectif de la réunion : [OBJECTIF]\nParticipants : [PARTICIPANTS]\nDurée : [DURÉE]\nSujets à aborder : [SUJETS]\nFormat : [PRÉSENTIEL / VISIO]",
  tache:"Prépare l'ordre du jour et le déroulé de la réunion.",
  etapes:[
   "Vérifie que la réunion est nécessaire ; sinon propose une alternative écrite.",
   "Classe les sujets : information, discussion, décision.",
   "Attribue une durée et un responsable à chaque sujet.",
   "Prévois ce que chacun doit préparer avant.",
   "Prévois 5 minutes finales pour récapituler décisions et actions.",
  ],
  contraintes:["Les sujets de décision passent en premier.","Total dans la durée prévue."],
  format:"### Invitation à envoyer (avec objectif et préparation)\n### Ordre du jour (tableau : Horaire | Sujet | Type | Responsable)\n### Règles de la réunion",
 })},

{title:"Pitch de présentation en 60 secondes",category:"Entrepreneuriat",description:"Se présenter ou présenter un projet de façon percutante en une minute.",tags:["pitch","présenter","elevator pitch","networking","oral","projet"],
 prompt:P({
  role:"Tu es un coach en prise de parole et en pitch.",
  contexte:"Ce que je présente : [MOI / MON PROJET / MON ENTREPRISE]\nContexte : [SALON / ENTRETIEN / SOIRÉE NETWORKING / JURY]\nInterlocuteur : [INTERLOCUTEUR]\nInformations clés : [INFOS]\nCe que je veux obtenir : [OBJECTIF]",
  tache:"Écris un pitch oral percutant.",
  etapes:[
   "Accroche : une question, un chiffre ou une situation concrète.",
   "Problème : ce qui ne va pas aujourd'hui.",
   "Solution : ce que je fais, en mots simples.",
   "Preuve : un résultat ou un exemple.",
   "Demande : ce que j'attends de la personne.",
  ],
  contraintes:["150 mots maximum (60 secondes).","Aucun jargon ; un enfant de 12 ans doit comprendre."],
  format:"1. Version 60 secondes.\n2. Version 15 secondes.\n3. Version écrite d'une phrase pour une bio.",
 })},

{title:"Intégrer un nouvel employé",category:"Management",description:"Préparer un parcours d'accueil pour un nouveau collaborateur.",tags:["onboarding","intégration","nouvel employé","accueil","recrutement","rh"],
 prompt:P({
  role:"Tu es responsable RH spécialisé dans l'intégration des collaborateurs.",
  contexte:"Poste : [POSTE]\nÉquipe : [ÉQUIPE]\nTaille de l'entreprise : [TAILLE]\nOutils à maîtriser : [OUTILS]\nTélétravail : [OUI / NON / HYBRIDE]",
  tache:"Construis un parcours d'intégration sur 30 jours.",
  etapes:[
   "Liste ce qu'il faut préparer avant l'arrivée.",
   "Détaille le premier jour heure par heure.",
   "Planifie la première semaine puis les semaines 2 à 4.",
   "Fixe des objectifs à 30 jours et les points d'étape avec le manager.",
  ],
  contraintes:["Équilibre formation, rencontres et premières missions concrètes.","Évite la surcharge d'informations le premier jour."],
  format:"### Avant l'arrivée (checklist)\n### Jour 1\n### Semaine 1\n### Semaines 2 à 4\n### Objectifs à 30 jours\n### Mail de bienvenue",
 })},

{title:"Rédiger une fiche de poste",category:"Management",description:"Écrire une offre d'emploi attractive et précise.",tags:["fiche de poste","offre d'emploi","recrutement","annonce","rh","embauche"],
 prompt:P({
  role:"Tu es recruteur expert en marque employeur.",
  contexte:"Poste : [POSTE]\nEntreprise et culture : [ENTREPRISE]\nMissions principales : [MISSIONS]\nCompétences requises : [COMPÉTENCES]\nConditions (salaire, lieu, télétravail, contrat) : [CONDITIONS]",
  tache:"Rédige une offre d'emploi qui attire les bons candidats.",
  etapes:[
   "Écris un titre de poste clair, avec les mots que les candidats recherchent.",
   "Présente l'entreprise et pourquoi le poste existe.",
   "Décris les missions de façon concrète (une journée type).",
   "Sépare compétences indispensables et appréciées.",
   "Détaille ce que l'entreprise offre et le processus de recrutement.",
  ],
  contraintes:["Langage inclusif.","Pas plus de 6 compétences indispensables.","Affiche la fourchette de salaire."],
  format:"L'offre complète en Markdown, puis une version courte pour LinkedIn (500 caractères).",
 })},

{title:"Questions pour recruter",category:"Management",description:"Préparer une grille d'entretien pour évaluer des candidats.",tags:["recruter","entretien","questions","candidat","grille","recrutement"],
 prompt:P({
  role:"Tu es un expert en recrutement structuré et en évaluation des compétences.",
  contexte:"Poste : [POSTE]\nCompétences clés à évaluer : [COMPÉTENCES]\nValeurs de l'équipe : [VALEURS]\nDurée de l'entretien : [DURÉE]",
  tache:"Crée une grille d'entretien structurée.",
  etapes:[
   "Pour chaque compétence, propose 2 questions comportementales (« Racontez une situation où… »).",
   "Ajoute une mise en situation pratique adaptée au poste.",
   "Décris ce qu'est une bonne réponse et une réponse inquiétante.",
   "Crée une grille de notation commune pour comparer les candidats.",
  ],
  contraintes:["Aucune question discriminatoire ou illégale.","Questions ouvertes uniquement."],
  format:"### Déroulé de l'entretien\n### Questions par compétence\n### Mise en situation\n### Grille de notation (tableau)",
 })},

{title:"Préparer son entretien annuel",category:"Carrière",description:"Faire le bilan de son année et préparer ses demandes.",tags:["entretien annuel","bilan","évaluation","manager","objectifs","carrière"],
 prompt:P({
  role:"Tu es un coach de carrière qui aide les salariés à valoriser leur travail.",
  contexte:"Poste : [POSTE]\nObjectifs fixés l'an dernier : [OBJECTIFS]\nCe que j'ai accompli : [RÉALISATIONS]\nDifficultés rencontrées : [DIFFICULTÉS]\nCe que je souhaite (formation, évolution, salaire) : [SOUHAITS]",
  tache:"Prépare mon entretien annuel.",
  etapes:[
   "Transforme mes réalisations en résultats mesurables.",
   "Présente les difficultés de façon constructive (ce que j'ai appris, ce qu'il faudrait).",
   "Formule mes souhaits sous forme de demandes argumentées.",
   "Propose 3 objectifs pour l'année prochaine.",
   "Prépare les questions à poser à mon manager.",
  ],
  contraintes:["Ton positif et factuel.","Aucune exagération."],
  format:"### Bilan chiffré\n### Difficultés et apprentissages\n### Mes demandes\n### Objectifs proposés\n### Questions au manager",
 })},

{title:"Analyse SWOT",category:"Entrepreneuriat",description:"Analyser forces, faiblesses, opportunités et menaces d'un projet.",tags:["swot","analyse","stratégie","forces","faiblesses","projet"],
 prompt:P({
  role:"Tu es consultant en stratégie d'entreprise.",
  contexte:"Projet / entreprise : [PROJET]\nSecteur : [SECTEUR]\nSituation actuelle : [SITUATION]\nObjectif stratégique : [OBJECTIF]",
  tache:"Réalise une analyse SWOT utile et actionnable.",
  etapes:[
   "Liste les forces et faiblesses internes.",
   "Liste les opportunités et menaces externes (marché, concurrence, réglementation, tendances).",
   "Croise les éléments : utiliser les forces pour saisir les opportunités, réduire les faiblesses face aux menaces.",
   "Déduis 5 actions stratégiques priorisées.",
  ],
  contraintes:["5 éléments maximum par case, du plus au moins important.","Distingue faits et hypothèses."],
  format:"### Matrice SWOT (tableau 2x2)\n### Stratégies croisées\n### 5 actions prioritaires",
 })},

{title:"Lettre de réclamation",category:"Vie quotidienne",description:"Rédiger une réclamation à une entreprise ou une administration.",tags:["réclamation","lettre","administration","litige","remboursement","plainte"],
 prompt:P({
  role:"Tu es juriste en droit de la consommation, habitué à rédiger des réclamations efficaces.",
  contexte:"Destinataire : [ENTREPRISE / ADMINISTRATION]\nProblème : [PROBLÈME]\nDates et références (commande, contrat, dossier) : [RÉFÉRENCES]\nDémarches déjà faites : [DÉMARCHES]\nCe que je demande : [DEMANDE, ex. remboursement, réparation]",
  tache:"Rédige une lettre de réclamation ferme et argumentée.",
  etapes:[
   "Expose les faits chronologiquement, avec les références.",
   "Formule clairement la demande.",
   "Cite si possible les droits applicables, en signalant de les vérifier.",
   "Fixe un délai de réponse et la suite envisagée (médiateur, recours).",
  ],
  contraintes:["Ton ferme mais courtois.","Une page maximum.","Ce n'est pas un avis juridique."],
  format:"La lettre complète avec les mentions d'en-tête, puis la liste des pièces à joindre et le moyen d'envoi conseillé.",
 })}

);
