/* Prompts 112 à 136 — Apprentissage, bien-être, vie personnelle et créativité */
SAMPLE.push(

{title:"Apprendre une nouvelle compétence",category:"Apprentissage",description:"Construire un plan pour apprendre n'importe quelle compétence rapidement.",tags:["apprendre","compétence","plan d'apprentissage","formation","progresser","autodidacte"],
 prompt:P({
  role:"Tu es un expert en apprentissage accéléré et en sciences cognitives.",
  contexte:"Compétence : [COMPÉTENCE]\nNiveau actuel : [NIVEAU]\nNiveau visé et pourquoi : [OBJECTIF]\nTemps disponible : [TEMPS PAR SEMAINE]\nDélai : [DÉLAI]",
  tache:"Construis un plan d'apprentissage efficace.",
  etapes:[
   "Décompose la compétence en sous-compétences et identifie les 20 % qui apportent 80 % des résultats.",
   "Organise un parcours progressif semaine par semaine.",
   "Prévois de la pratique active, des retours et des révisions espacées.",
   "Définis des jalons mesurables.",
   "Liste les obstacles fréquents et comment les surmonter.",
  ],
  contraintes:["Plan réaliste avec le temps disponible.","Pratique dès la première semaine."],
  format:"### Décomposition\n### Plan semaine par semaine\n### Exercices pratiques\n### Jalons\n### Obstacles",
 })},

{title:"Tester ses connaissances",category:"Apprentissage",description:"Se faire interroger par l'IA pour vérifier ce qu'on a vraiment compris.",tags:["quiz","tester","interroger","comprendre","révision","feynman"],
 prompt:P({
  role:"Tu es un examinateur bienveillant qui utilise la méthode socratique.",
  contexte:"Sujet : [SUJET]\nNiveau : [NIVEAU]\nPoints sur lesquels je doute : [DOUTES]",
  tache:"Interroge-moi pour évaluer ma compréhension réelle.",
  etapes:[
   "Pose une question à la fois, de difficulté croissante.",
   "Demande-moi régulièrement d'expliquer avec mes propres mots.",
   "Après chaque réponse : dis ce qui est juste, ce qui manque, et corrige les erreurs.",
   "Après 10 questions : bilan des points maîtrisés et à retravailler.",
  ],
  contraintes:["Ne donne pas la réponse avant que j'aie essayé.","Mélange questions de cours et cas pratiques."],
  format:"Commence directement par la première question.",
 })},

{title:"Plan de dissertation",category:"Apprentissage",description:"Analyser un sujet de dissertation et construire un plan argumenté.",tags:["dissertation","plan","philosophie","sujet","argumentation","lycée"],
 prompt:P({
  role:"Tu es professeur et correcteur d'examens.",
  contexte:"Matière : [MATIÈRE]\nSujet : [SUJET]\nNiveau : [NIVEAU]\nCe que j'ai déjà comme idées et références : [IDÉES]",
  tache:"Aide-moi à construire ma dissertation sans l'écrire à ma place.",
  etapes:[
   "Analyse les termes du sujet et ses présupposés.",
   "Formule une problématique.",
   "Propose 2 plans possibles (2 ou 3 parties) avec la logique de progression.",
   "Pour chaque sous-partie : idée directrice, argument et exemple ou référence possible.",
   "Donne une méthode pour l'introduction et la conclusion.",
  ],
  contraintes:["Ne rédige pas la dissertation entière.","Références à vérifier par moi."],
  format:"### Analyse du sujet\n### Problématique\n### Plans possibles\n### Conseils de rédaction",
 })},

{title:"Commentaire de texte",category:"Apprentissage",description:"Analyser un texte littéraire et construire son commentaire.",tags:["commentaire","texte","littérature","français","analyse","bac"],
 prompt:P({
  role:"Tu es professeur de lettres.",
  contexte:"Texte et auteur : [TEXTE]\nContexte (œuvre, époque, mouvement) : [CONTEXTE]\nNiveau : [NIVEAU]",
  tache:"Guide-moi dans l'analyse de ce texte.",
  etapes:[
   "Situe le texte et identifie son genre, son registre et son thème.",
   "Repère les procédés d'écriture importants avec citations.",
   "Interprète leur effet sur le lecteur.",
   "Propose une problématique et un plan en 2 ou 3 axes.",
  ],
  contraintes:["Chaque idée appuyée par une citation précise.","Ne rédige pas le commentaire complet."],
  format:"### Situation du texte\n### Relevé des procédés (tableau : Citation | Procédé | Effet)\n### Problématique\n### Plan détaillé",
 })},

{title:"Exercice de maths expliqué",category:"Apprentissage",description:"Comprendre la résolution d'un exercice de mathématiques pas à pas.",tags:["maths","mathématiques","exercice","résoudre","calcul","devoir"],
 prompt:P({
  role:"Tu es un professeur de mathématiques patient.",
  contexte:"Niveau : [NIVEAU]\nÉnoncé :\n[ÉNONCÉ]\nCe que j'ai déjà essayé : [TENTATIVE]",
  tache:"Aide-moi à comprendre comment résoudre cet exercice.",
  etapes:[
   "Identifie ce qui est demandé et les notions nécessaires.",
   "Donne d'abord un indice pour me laisser chercher.",
   "Puis détaille la résolution étape par étape, en justifiant chaque étape.",
   "Vérifie le résultat.",
   "Propose un exercice similaire pour m'entraîner.",
  ],
  contraintes:["Explique les erreurs de ma tentative.","Notations adaptées à mon niveau."],
  format:"### Ce qu'on cherche\n### Indice\n### Résolution détaillée\n### Vérification\n### Exercice d'entraînement",
 })},

{title:"Résumé et analyse d'un livre",category:"Apprentissage",description:"Retenir l'essentiel d'un livre et l'appliquer.",tags:["livre","lecture","résumé","analyse","idées","fiche de lecture"],
 prompt:P({
  role:"Tu es un critique littéraire et un lecteur assidu.",
  contexte:"Livre et auteur : [LIVRE]\nType : [ROMAN / ESSAI / DÉVELOPPEMENT PERSONNEL / AUTRE]\nPourquoi je m'y intéresse : [OBJECTIF]",
  tache:"Fais une fiche de lecture utile.",
  etapes:[
   "Résume le livre en 5 lignes.",
   "Présente les idées principales ou l'intrigue et les personnages.",
   "Donne les points forts et les critiques qu'on peut lui faire.",
   "Propose des applications concrètes ou des questions de réflexion.",
  ],
  contraintes:["Signale si tu n'es pas sûr d'un détail du livre.","Pas de révélation de la fin d'un roman sans avertissement."],
  format:"### En bref\n### Idées clés ou intrigue\n### Analyse critique\n### À retenir et appliquer",
 })},

{title:"Préparer un exposé oral",category:"Apprentissage",description:"Préparer et s'entraîner pour un exposé ou un oral.",tags:["exposé","oral","présentation","école","parler en public","stress"],
 prompt:P({
  role:"Tu es un coach en prise de parole pour élèves et étudiants.",
  contexte:"Sujet : [SUJET]\nDurée : [DURÉE]\nPublic et jury : [PUBLIC]\nSeul ou en groupe : [FORMAT]\nCe qui me fait peur : [CRAINTES]",
  tache:"Aide-moi à préparer un exposé réussi.",
  etapes:[
   "Construis le plan avec une introduction accrocheuse et une conclusion marquante.",
   "Répartis le temps par partie.",
   "Propose des supports visuels.",
   "Donne des techniques contre le trac.",
   "Prépare les questions possibles du jury.",
  ],
  contraintes:["Plan adapté à la durée.","Conseils concrets et simples."],
  format:"### Plan minuté\n### Accroche et conclusion\n### Supports\n### Gestion du trac\n### Questions du jury",
 })},

{title:"Choisir son orientation",category:"Carrière",description:"Réfléchir à ses études ou à son futur métier.",tags:["orientation","études","choisir ses études","parcoursup","avenir","lycéen","étudiant"],
 prompt:P({
  role:"Tu es conseiller d'orientation à l'écoute et sans préjugés.",
  contexte:"Âge et situation : [SITUATION]\nMatières ou activités que j'aime : [GOÛTS]\nPoints forts : [FORCES]\nCe que je ne veux pas : [À ÉVITER]\nContraintes (lieu, durée, budget) : [CONTRAINTES]",
  tache:"Aide-moi à explorer des pistes d'orientation.",
  etapes:[
   "Pose-moi d'abord 5 questions pour mieux me connaître, puis attends mes réponses.",
   "Propose 6 pistes de métiers ou domaines cohérents avec mon profil.",
   "Pour chacune : réalité du quotidien, formations possibles, débouchés.",
   "Propose des actions pour tester ces pistes (stages, rencontres, journées portes ouvertes).",
  ],
  contraintes:["Ne décide pas à ma place.","Informations sur les formations à vérifier sur les sites officiels."],
  format:"Commence par les 5 questions. Après mes réponses : tableau des pistes puis plan d'exploration.",
 })},

{title:"Préparer une reconversion",category:"Carrière",description:"Changer de métier avec un plan concret et réaliste.",tags:["reconversion","changer de métier","carrière","formation","bilan","transition"],
 prompt:P({
  role:"Tu es un coach spécialisé en reconversion professionnelle.",
  contexte:"Métier actuel et expérience : [MÉTIER ACTUEL]\nMétier visé (ou envies) : [MÉTIER VISÉ]\nRaisons du changement : [RAISONS]\nSituation financière et contraintes : [CONTRAINTES]\nDélai souhaité : [DÉLAI]",
  tache:"Construis un plan de reconversion réaliste.",
  etapes:[
   "Identifie mes compétences transférables.",
   "Décris la réalité du métier visé et les compétences manquantes.",
   "Propose des moyens de tester le métier avant de se lancer.",
   "Liste les formations et financements possibles à vérifier.",
   "Construis un plan par étapes avec un plan B.",
  ],
  contraintes:["Honnête sur les difficultés.","Sécuriser financièrement la transition."],
  format:"### Compétences transférables\n### Écart à combler\n### Tester le métier\n### Formations et financements\n### Plan par étapes",
 })},

{title:"Créer une routine du matin",category:"Santé & sport",description:"Mettre en place des habitudes du matin durables.",tags:["routine","habitudes","matin","productivité","motivation","bien-être"],
 prompt:P({
  role:"Tu es un coach en habitudes, inspiré des recherches sur le changement de comportement.",
  contexte:"Heure de lever actuelle : [HEURE]\nTemps disponible le matin : [TEMPS]\nCe que je veux améliorer : [OBJECTIFS, ex. énergie, sport, calme]\nCe qui a échoué par le passé : [ÉCHECS]",
  tache:"Crée une routine du matin adaptée et durable.",
  etapes:[
   "Propose une routine simple de départ (version minimale de 10 minutes).",
   "Propose une version complète pour plus tard.",
   "Rattache chaque habitude à un déclencheur existant.",
   "Prévois un plan pour les jours difficiles.",
   "Propose une progression sur 4 semaines.",
  ],
  contraintes:["Pas plus de 3 nouvelles habitudes au départ.","Compatible avec mon temps disponible."],
  format:"### Routine minimale\n### Routine complète\n### Déclencheurs\n### Jours difficiles\n### Progression sur 4 semaines",
 })},

{title:"Rééquilibrage alimentaire",category:"Santé & sport",description:"Améliorer son alimentation durablement, sans régime strict.",tags:["alimentation","nutrition","manger sainement","perte de poids","équilibre","santé"],
 prompt:P({
  role:"Tu es diététicien, bienveillant et pragmatique.",
  contexte:"Objectif : [OBJECTIF]\nHabitudes actuelles (journée type) : [HABITUDES]\nContraintes (horaires, budget, cantine, famille) : [CONTRAINTES]\nAllergies ou régime : [RÉGIME]",
  tache:"Propose un rééquilibrage alimentaire progressif.",
  etapes:[
   "Analyse ma journée type : points positifs et à améliorer.",
   "Propose 5 changements simples, par ordre de priorité.",
   "Donne des exemples de repas et collations adaptés à mes contraintes.",
   "Propose un plan sur 4 semaines.",
  ],
  contraintes:["Aucune privation extrême ni aliment interdit.","Rappelle de consulter un professionnel de santé en cas de problème médical."],
  format:"### Analyse\n### 5 changements prioritaires\n### Idées de repas\n### Plan sur 4 semaines",
 })},

{title:"Mieux dormir",category:"Santé & sport",description:"Comprendre ses problèmes de sommeil et les améliorer.",tags:["sommeil","dormir","insomnie","fatigue","nuit","repos"],
 prompt:P({
  role:"Tu es un spécialiste du sommeil qui s'appuie sur les recommandations reconnues.",
  contexte:"Heures de coucher et de lever : [HORAIRES]\nProblème : [ENDORMISSEMENT / RÉVEILS / FATIGUE AU RÉVEIL]\nHabitudes du soir (écrans, café, sport) : [HABITUDES]\nDepuis quand : [DURÉE]",
  tache:"Aide-moi à améliorer mon sommeil.",
  etapes:[
   "Identifie les facteurs probables dans mes habitudes.",
   "Propose des changements d'hygiène du sommeil, priorisés.",
   "Crée une routine du soir de 30 minutes.",
   "Explique quoi faire si je me réveille la nuit.",
   "Indique les signes qui nécessitent de consulter un médecin.",
  ],
  contraintes:["Pas de recommandation de médicament.","Changements progressifs."],
  format:"### Analyse\n### Changements prioritaires\n### Routine du soir\n### Réveils nocturnes\n### Quand consulter",
 })},

{title:"Commencer la course à pied",category:"Santé & sport",description:"Débuter la course à pied sans se blesser.",tags:["course","running","courir","débutant","jogging","endurance"],
 prompt:P({
  role:"Tu es entraîneur d'athlétisme spécialisé dans les débutants.",
  contexte:"Âge : [ÂGE]\nActivité physique actuelle : [ACTIVITÉ]\nObjectif : [OBJECTIF, ex. courir 30 minutes, 5 km, 10 km]\nSéances possibles par semaine : [NOMBRE]\nDouleurs ou blessures : [LIMITATIONS]",
  tache:"Crée un programme progressif pour débuter.",
  etapes:[
   "Propose un programme en alternance marche / course sur 8 semaines.",
   "Détaille chaque séance (échauffement, fractions, récupération).",
   "Explique comment régler l'allure (pouvoir parler en courant).",
   "Donne des conseils sur l'équipement et la prévention des blessures.",
  ],
  contraintes:["Augmentation de volume prudente.","Conseille un avis médical si nécessaire."],
  format:"### Programme (tableau : Semaine | Séance | Contenu)\n### Allure\n### Équipement\n### Prévention des blessures",
 })},

{title:"Méditation guidée",category:"Santé & sport",description:"Obtenir un texte de méditation guidée personnalisé.",tags:["méditation","relaxation","respiration","calme","pleine conscience","stress"],
 prompt:P({
  role:"Tu es un instructeur de méditation de pleine conscience.",
  contexte:"Durée : [DURÉE] minutes\nObjectif : [SE CALMER / S'ENDORMIR / SE CONCENTRER / LÂCHER PRISE]\nExpérience : [DÉBUTANT / HABITUÉ]\nMoment : [MATIN / PAUSE / SOIR]",
  tache:"Écris le texte d'une méditation guidée à lire ou enregistrer.",
  etapes:[
   "Installation : posture et respiration.",
   "Corps de la méditation adapté à l'objectif.",
   "Retour progressif.",
  ],
  contraintes:["Phrases lentes et douces, au présent.","Indique les pauses entre crochets avec leur durée en secondes."],
  format:"Le texte complet avec les pauses indiquées, puis 2 conseils pour pratiquer régulièrement.",
 })},

{title:"Message difficile à un proche",category:"Relations",description:"Préparer une conversation ou un message délicat avec un proche.",tags:["relation","conversation difficile","proche","couple","famille","ami","message"],
 prompt:P({
  role:"Tu es un conseiller en relations formé à la communication non violente.",
  contexte:"Personne : [PERSONNE ET LIEN]\nSituation : [SITUATION]\nCe que je ressens : [ÉMOTIONS]\nCe dont j'ai besoin : [BESOIN]\nCe que je veux éviter : [CRAINTES]\nFormat : [MESSAGE ÉCRIT / CONVERSATION]",
  tache:"Aide-moi à exprimer ce que j'ai à dire avec clarté et respect.",
  etapes:[
   "Distingue les faits, mes interprétations et mes émotions.",
   "Formule le message : observation, sentiment, besoin, demande.",
   "Anticipe les réactions possibles et comment y répondre calmement.",
   "Propose le bon moment et le bon contexte pour en parler.",
  ],
  contraintes:["Pas de reproche ni de généralisation.","Respecte l'autre personne même en cas de désaccord."],
  format:"### Clarification\n### Message proposé (2 versions)\n### Réactions possibles\n### Conseils pratiques",
 })},

{title:"Idées de cadeaux",category:"Vie quotidienne",description:"Trouver un cadeau original et adapté à une personne.",tags:["cadeau","idées","anniversaire","noël","offrir","fête"],
 prompt:P({
  role:"Tu es un conseiller cadeaux créatif.",
  contexte:"Pour qui : [PERSONNE, ÂGE ET LIEN]\nOccasion : [OCCASION]\nCe qu'elle aime : [CENTRES D'INTÉRÊT]\nCe qu'elle a déjà ou n'aime pas : [À ÉVITER]\nBudget : [BUDGET]",
  tache:"Propose des idées de cadeaux personnalisées.",
  etapes:[
   "Propose 15 idées réparties en : objets, expériences, faits main, petits budgets.",
   "Explique pour chacune pourquoi elle correspond à la personne.",
   "Sélectionne tes 3 favorites.",
   "Propose une idée de message ou de présentation originale.",
  ],
  contraintes:["Respecte le budget.","Évite les cadeaux génériques."],
  format:"Tableau : Idée | Type | Prix estimé | Pourquoi. Puis top 3 et idée de présentation.",
 })},

{title:"Organiser une fête ou un événement",category:"Vie quotidienne",description:"Planifier une fête, un anniversaire ou une réception.",tags:["fête","anniversaire","organiser","événement","soirée","réception"],
 prompt:P({
  role:"Tu es organisateur d'événements.",
  contexte:"Type d'événement : [ÉVÉNEMENT]\nNombre d'invités : [NOMBRE]\nDate et lieu : [DATE ET LIEU]\nBudget : [BUDGET]\nThème ou ambiance : [THÈME]\nPublic (enfants, adultes) : [PUBLIC]",
  tache:"Organise l'événement de A à Z.",
  etapes:[
   "Propose un rétroplanning des préparatifs.",
   "Répartis le budget par poste.",
   "Propose le menu et les quantités.",
   "Propose la décoration et les animations.",
   "Crée la checklist du jour J.",
  ],
  contraintes:["Respecte le budget.","Prévois un plan B (météo, retard)."],
  format:"### Rétroplanning\n### Budget (tableau)\n### Menu et quantités\n### Déco et animations\n### Checklist jour J\n### Texte d'invitation",
 })},

{title:"Préparer un déménagement",category:"Vie quotidienne",description:"Organiser un déménagement sans stress avec une checklist.",tags:["déménagement","déménager","checklist","logement","cartons","organisation"],
 prompt:P({
  role:"Tu es un expert en organisation de déménagements.",
  contexte:"Date du déménagement : [DATE]\nDe [LOGEMENT ACTUEL] vers [NOUVEAU LOGEMENT]\nDistance : [DISTANCE]\nNombre de personnes et animaux : [FOYER]\nAvec déménageurs ou seul : [MODE]\nBudget : [BUDGET]",
  tache:"Construis un plan de déménagement complet.",
  etapes:[
   "Établis un rétroplanning de 8 semaines à J+30.",
   "Liste les démarches administratives (résiliations, changements d'adresse).",
   "Donne une méthode pour trier et faire les cartons.",
   "Prépare la checklist du jour J et le carton de première nécessité.",
  ],
  contraintes:["Démarches à adapter et vérifier selon le pays.","Checklist cochable."],
  format:"### Rétroplanning\n### Démarches administratives\n### Méthode cartons\n### Jour J\n### Après l'emménagement",
 })},

{title:"Ranger et désencombrer",category:"Vie quotidienne",description:"Désencombrer sa maison pièce par pièce avec une méthode.",tags:["rangement","désencombrer","tri","maison","minimalisme","organisation"],
 prompt:P({
  role:"Tu es un coach en rangement et organisation de la maison.",
  contexte:"Logement : [TYPE ET TAILLE]\nPièces les plus encombrées : [PIÈCES]\nTemps disponible : [TEMPS PAR SEMAINE]\nCe qui me bloque pour trier : [BLOCAGES]",
  tache:"Crée un plan de désencombrement progressif.",
  etapes:[
   "Propose une méthode de tri simple (garder, donner, vendre, jeter).",
   "Planifie les pièces dans un ordre motivant, sur plusieurs semaines.",
   "Donne des questions pour décider quoi garder.",
   "Propose des solutions de rangement.",
   "Donne des habitudes pour que le désordre ne revienne pas.",
  ],
  contraintes:["Séances courtes et réalistes.","Bienveillant face à l'attachement aux objets."],
  format:"### Méthode\n### Planning par pièce\n### Questions pour décider\n### Rangement\n### Habitudes",
 })},

{title:"Activités avec les enfants",category:"Famille",description:"Trouver des activités adaptées à l'âge des enfants.",tags:["enfants","activités","famille","jeux","vacances","week-end"],
 prompt:P({
  role:"Tu es éducateur de jeunes enfants et animateur créatif.",
  contexte:"Âge des enfants : [ÂGES]\nLieu : [MAISON / EXTÉRIEUR / LES DEUX]\nDurée : [DURÉE]\nMatériel disponible : [MATÉRIEL]\nBudget : [BUDGET]\nCe qu'ils aiment : [GOÛTS]",
  tache:"Propose des activités adaptées.",
  etapes:[
   "Propose 12 activités variées : créatives, physiques, calmes, éducatives.",
   "Pour chacune : âge, durée, matériel, déroulé.",
   "Indique ce que l'activité développe chez l'enfant.",
  ],
  contraintes:["Activités sûres et adaptées à l'âge.","Matériel simple."],
  format:"Tableau : Activité | Type | Durée | Matériel | Déroulé | Bénéfice.",
 })},

{title:"Écrire une nouvelle",category:"Créativité",description:"Écrire une histoire courte originale à partir d'une idée.",tags:["écriture","nouvelle","histoire","fiction","récit","roman"],
 prompt:P({
  role:"Tu es un auteur de fiction publié.",
  contexte:"Idée de départ : [IDÉE]\nGenre : [GENRE]\nPublic : [PUBLIC]\nLongueur : [NOMBRE] mots\nPoint de vue : [JE / IL-ELLE]\nAmbiance : [AMBIANCE]",
  tache:"Écris une nouvelle originale.",
  etapes:[
   "Propose d'abord le synopsis, les personnages et la chute en quelques lignes.",
   "Écris la nouvelle avec une ouverture qui plonge dans l'action.",
   "Montre plutôt que d'expliquer : dialogues, détails sensoriels.",
   "Termine par une chute marquante.",
  ],
  contraintes:["Évite les clichés du genre.","Style cohérent du début à la fin."],
  format:"### Synopsis\n### La nouvelle\n### 3 pistes pour la retravailler",
 })},

{title:"Écrire un poème ou une chanson",category:"Créativité",description:"Écrire un poème ou des paroles de chanson sur un thème.",tags:["poème","chanson","paroles","poésie","écriture","rimes"],
 prompt:P({
  role:"Tu es poète et parolier.",
  contexte:"Forme : [POÈME / CHANSON]\nThème ou destinataire : [THÈME]\nÉmotion : [ÉMOTION]\nStyle : [CLASSIQUE / LIBRE / RAP / POP / AUTRE]\nLongueur : [LONGUEUR]",
  tache:"Écris un texte original et sensible.",
  etapes:[
   "Choisis une image centrale forte.",
   "Pour une chanson : couplets, refrain mémorable, pont.",
   "Travaille le rythme et les sonorités.",
  ],
  contraintes:["Évite les rimes trop attendues.","Texte entièrement original."],
  format:"Le texte, puis une courte explication des choix et 2 variantes de refrain ou de dernière strophe.",
 })},

{title:"Créer un personnage",category:"Créativité",description:"Construire un personnage crédible pour un roman, un jeu ou un scénario.",tags:["personnage","roman","jeu","scénario","fiction","création"],
 prompt:P({
  role:"Tu es scénariste et auteur spécialisé dans la création de personnages.",
  contexte:"Univers : [UNIVERS]\nRôle du personnage dans l'histoire : [RÔLE]\nIdées de départ : [IDÉES]",
  tache:"Construis une fiche de personnage riche et cohérente.",
  etapes:[
   "Identité, apparence et manière de parler.",
   "Passé et blessure qui explique son comportement.",
   "Désir conscient et besoin profond.",
   "Qualités, défauts et contradictions.",
   "Évolution possible au fil de l'histoire.",
  ],
  contraintes:["Éviter les stéréotypes.","Chaque trait doit avoir un intérêt pour l'histoire."],
  format:"Fiche de personnage avec sous-titres, puis 3 scènes qui le révéleraient et un exemple de réplique.",
 })},

{title:"Scénario de jeu de rôle",category:"Créativité",description:"Créer une aventure de jeu de rôle ou une murder party.",tags:["jeu de rôle","scénario","aventure","murder party","jeu","soirée"],
 prompt:P({
  role:"Tu es un maître du jeu expérimenté et un concepteur de scénarios.",
  contexte:"Type : [JEU DE RÔLE / MURDER PARTY / ESCAPE GAME MAISON]\nUnivers : [UNIVERS]\nNombre de joueurs : [NOMBRE]\nDurée : [DURÉE]\nNiveau des joueurs : [DÉBUTANTS / CONFIRMÉS]",
  tache:"Crée un scénario complet prêt à jouer.",
  etapes:[
   "Synopsis et enjeu principal.",
   "Personnages et objectifs secrets.",
   "Déroulé en scènes avec indices et rebondissements.",
   "Énigmes ou défis avec solutions.",
   "Plusieurs fins possibles.",
  ],
  contraintes:["Chaque joueur doit avoir un rôle actif.","Adapté à la durée prévue."],
  format:"### Synopsis\n### Personnages\n### Déroulé\n### Énigmes et solutions\n### Fins possibles\n### Matériel à préparer",
 })},

{title:"Créer un potager",category:"Vie quotidienne",description:"Planifier un potager adapté à son espace et sa région.",tags:["jardin","potager","jardinage","plantes","légumes","balcon"],
 prompt:P({
  role:"Tu es maraîcher et formateur en jardinage écologique.",
  contexte:"Espace : [BALCON / JARDIN] de [SURFACE]\nRégion et climat : [RÉGION]\nExposition : [SOLEIL / MI-OMBRE / OMBRE]\nTemps disponible : [TEMPS PAR SEMAINE]\nLégumes que j'aime : [LÉGUMES]\nExpérience : [NIVEAU]",
  tache:"Planifie mon potager.",
  etapes:[
   "Sélectionne les cultures adaptées à mon espace, mon climat et mon niveau.",
   "Propose un plan d'aménagement avec les associations de plantes.",
   "Crée un calendrier des semis, plantations et récoltes.",
   "Donne les gestes d'entretien essentiels et les solutions naturelles contre les problèmes courants.",
  ],
  contraintes:["Méthodes naturelles, sans pesticides chimiques.","Commencer petit si débutant."],
  format:"### Cultures choisies\n### Plan du potager\n### Calendrier (tableau par mois)\n### Entretien\n### Problèmes courants",
 })}

);
