/* =========================================================
   Bibliothèque de prompts.
   Chaque prompt est construit avec la même structure, qui aide
   le LLM à bien interpréter la demande :
     Rôle → Contexte → Tâche → Étapes → Contraintes → Format → Questions
   Les parties entre [CROCHETS] deviennent des champs à remplir.
   ========================================================= */

function P({role, contexte, tache, etapes = [], contraintes = [], format}) {
  const list = (arr, num) => arr.map((x, i) => (num ? `${i + 1}. ` : "- ") + x).join("\n");
  return [
    `## Rôle\n${role}`,
    `## Contexte\n${contexte}`,
    `## Tâche\n${tache}`,
    etapes.length && `## Étapes à suivre\n${list(etapes, true)}`,
    contraintes.length && `## Contraintes\n${list(contraintes)}`,
    `## Format de la réponse\n${format}`,
    `## Avant de commencer\nSi une information indispensable manque ou reste ambiguë, pose-moi d'abord jusqu'à 3 questions précises au lieu d'inventer. Sinon, réponds directement.`,
  ].filter(Boolean).join("\n\n");
}

const SAMPLE = [

/* ---------------- Rédaction pro ---------------- */
{title:"Relance de facture impayée",category:"Rédaction pro",description:"Écrire un mail de relance ferme mais courtois à un client qui n'a pas payé.",tags:["mail","client","relance","facture","paiement","impayé"],
 prompt:P({
  role:"Tu es un assistant spécialisé en recouvrement amiable pour les indépendants et les PME. Tu sais rester ferme sans abîmer la relation commerciale.",
  contexte:"Client : [NOM DU CLIENT]\nNuméro et montant de la facture : [N° FACTURE] — [MONTANT]\nDate d'échéance : [DATE D'ÉCHÉANCE]\nNombre de relances déjà envoyées : [0 / 1 / 2]\nRelation avec le client : [NOUVEAU CLIENT / CLIENT RÉGULIER / CLIENT IMPORTANT]",
  tache:"Rédige le mail de relance adapté au niveau de relance indiqué.",
  etapes:[
   "Adapte le ton au nombre de relances : 0 = rappel cordial (oubli possible), 1 = rappel ferme, 2 = dernière relance avant mise en demeure.",
   "Rappelle les éléments factuels : numéro de facture, montant, date d'échéance, nombre de jours de retard.",
   "Facilite le paiement : moyen de paiement, coordonnées bancaires à insérer, proposition d'échéancier si le client est en difficulté.",
   "Termine par une date limite précise et la suite prévue si le paiement n'arrive pas.",
  ],
  contraintes:[
   "120 à 180 mots, phrases courtes.",
   "Aucune formule agressive ni culpabilisante.",
   "Mentionne les pénalités de retard et l'indemnité forfaitaire de 40 € seulement à partir de la 2e relance.",
  ],
  format:"1. Objet du mail.\n2. Corps du mail prêt à envoyer.\n3. Une ligne de conseil sur le moment idéal pour l'envoyer.",
 })},

{title:"Mail professionnel clair",category:"Rédaction pro",description:"Transformer des idées en vrac en un mail professionnel structuré.",tags:["mail","email","professionnel","rédaction","travail"],
 prompt:P({
  role:"Tu es un expert en communication écrite professionnelle. Tu rends les messages clairs, concis et orientés vers l'action.",
  contexte:"Destinataire : [DESTINATAIRE ET SON RÔLE]\nRelation : [COLLÈGUE / MANAGER / CLIENT / PARTENAIRE / INCONNU]\nObjectif du mail : [CE QUE JE VEUX OBTENIR]\nMes idées en vrac : [IDÉES]",
  tache:"Transforme mes idées en un mail professionnel prêt à envoyer.",
  etapes:[
   "Identifie le message principal et place-le dans les deux premières phrases.",
   "Regroupe les informations secondaires en points courts et logiques.",
   "Formule une demande ou action attendue explicite, avec une échéance si pertinent.",
   "Adapte le niveau de formalité à la relation indiquée.",
  ],
  contraintes:[
   "150 mots maximum hors formule de politesse.",
   "Pas de jargon inutile ni de phrases d'introduction creuses (« J'espère que vous allez bien »…).",
   "Ne rajoute aucune information que je n'ai pas donnée.",
  ],
  format:"1. Trois propositions d'objet.\n2. Le mail complet.\n3. Une version plus courte (3 phrases) pour une messagerie instantanée.",
 })},

{title:"Améliorer un texte",category:"Rédaction pro",description:"Corriger et rendre un texte plus fluide sans changer le sens.",tags:["corriger","orthographe","reformuler","texte","relecture"],
 prompt:P({
  role:"Tu es correcteur et éditeur professionnel en langue française.",
  contexte:"Type de texte : [MAIL / ARTICLE / RAPPORT / POST / AUTRE]\nPublic visé : [PUBLIC]\nNiveau d'intervention souhaité : [CORRECTION SEULE / AMÉLIORATION LÉGÈRE / RÉÉCRITURE]\n\nTexte :\n[TEXTE]",
  tache:"Corrige et améliore ce texte selon le niveau d'intervention demandé.",
  etapes:[
   "Corrige l'orthographe, la grammaire, la conjugaison et la ponctuation.",
   "Améliore la fluidité : répétitions, phrases trop longues, connecteurs logiques.",
   "Vérifie la clarté : chaque paragraphe doit porter une idée.",
   "Conserve le sens, le ton et le style personnel de l'auteur.",
  ],
  contraintes:[
   "Ne change jamais le fond ni les faits.",
   "N'ajoute pas de contenu nouveau sauf si je demande une réécriture.",
  ],
  format:"1. Le texte corrigé complet.\n2. Un tableau « Avant → Après → Raison » des 10 modifications les plus importantes.\n3. Deux conseils d'écriture personnalisés tirés de mes erreurs récurrentes.",
 })},

/* ---------------- Productivité ---------------- */
{title:"Résumé de document",category:"Productivité",description:"Résumer un long texte en points clés et actions à retenir.",tags:["résumé","synthèse","document","lecture","points clés"],
 prompt:P({
  role:"Tu es un analyste capable d'extraire l'essentiel d'un document long de façon fidèle et structurée.",
  contexte:"Je dois utiliser ce résumé pour : [USAGE, ex. décider, présenter à mon équipe, réviser]\nPublic du résumé : [PUBLIC]\n\nDocument :\n[TEXTE]",
  tache:"Produis un résumé fidèle et exploitable de ce document.",
  etapes:[
   "Lis l'intégralité du document avant de résumer.",
   "Identifie la thèse ou le message principal.",
   "Extrais les points clés, chiffres importants et arguments, dans l'ordre d'importance.",
   "Repère les décisions, actions, échéances et responsables mentionnés.",
   "Signale les zones floues, contradictions ou informations manquantes.",
  ],
  contraintes:[
   "Reste strictement fidèle au texte : aucune information extérieure ni interprétation non signalée.",
   "Cite les passages essentiels entre guillemets quand la formulation exacte compte.",
  ],
  format:"### En une phrase\n### Points clés (5 à 7 puces)\n### Chiffres et faits importants\n### Actions / décisions à retenir\n### Points flous ou manquants",
 })},

{title:"Compte rendu de réunion",category:"Productivité",description:"Transformer des notes de réunion en compte rendu avec décisions et tâches.",tags:["réunion","compte rendu","notes","tâches","équipe"],
 prompt:P({
  role:"Tu es un assistant de direction expérimenté dans la rédaction de comptes rendus clairs et actionnables.",
  contexte:"Réunion : [OBJET DE LA RÉUNION] du [DATE]\nParticipants : [PARTICIPANTS]\n\nMes notes brutes :\n[NOTES]",
  tache:"Rédige un compte rendu prêt à être envoyé aux participants.",
  etapes:[
   "Reformule l'objectif de la réunion.",
   "Résume chaque sujet abordé en 2 à 3 phrases.",
   "Isole clairement les décisions prises.",
   "Liste les actions avec un responsable et une échéance ; si l'un manque, écris « À définir ».",
   "Liste les questions restées ouvertes.",
  ],
  contraintes:[
   "Style neutre et factuel, sans jugement.",
   "N'invente ni décision ni responsable absents des notes.",
  ],
  format:"### Objectif\n### Sujets abordés\n### Décisions\n### Plan d'action (tableau : Action | Responsable | Échéance)\n### Points ouverts / prochaine réunion",
 })},

{title:"Planifier sa semaine",category:"Productivité",description:"Répartir ses tâches de la semaine par priorité et par créneau.",tags:["planning","priorités","semaine","emploi du temps","agenda","to-do list","productivité"],
 prompt:P({
  role:"Tu es un coach en organisation personnelle, spécialiste de la gestion des priorités et de l'énergie.",
  contexte:"Mes tâches cette semaine (avec durée estimée si possible) : [LISTE DES TÂCHES]\nRendez-vous fixes : [RENDEZ-VOUS]\nHoraires de travail : [HORAIRES]\nMoment de la journée où je suis le plus concentré(e) : [MATIN / APRÈS-MIDI / SOIR]",
  tache:"Construis un planning réaliste pour ma semaine.",
  etapes:[
   "Classe chaque tâche avec la matrice d'Eisenhower (urgent / important).",
   "Estime les durées manquantes et signale-les comme estimations.",
   "Place les tâches demandant de la concentration sur mes créneaux de forte énergie.",
   "Regroupe les petites tâches similaires (mails, appels) en blocs.",
   "Garde 20 % de temps libre pour les imprévus.",
   "Indique ce qui peut être délégué, reporté ou supprimé.",
  ],
  contraintes:[
   "Pas plus de 3 tâches importantes par jour.",
   "Prévois des pauses.",
  ],
  format:"1. Tableau de priorisation.\n2. Planning jour par jour (Créneau | Tâche).\n3. Liste « à déléguer / reporter / supprimer ».\n4. Les 3 tâches qui feront la plus grande différence cette semaine.",
 })},

/* ---------------- Apprentissage ---------------- */
{title:"Expliquer un concept simplement",category:"Apprentissage",description:"Comprendre un sujet difficile avec des explications adaptées à son niveau.",tags:["apprendre","expliquer","comprendre","débutant","cours"],
 prompt:P({
  role:"Tu es un pédagogue reconnu pour rendre les sujets complexes accessibles sans les déformer.",
  contexte:"Concept à comprendre : [CONCEPT]\nMon niveau actuel : [NIVEAU, ex. aucune connaissance / notions de base / étudiant]\nPourquoi je veux le comprendre : [OBJECTIF]",
  tache:"Explique-moi ce concept de façon progressive et adaptée à mon niveau.",
  etapes:[
   "Donne une définition en une phrase simple.",
   "Utilise une analogie de la vie quotidienne.",
   "Explique le fonctionnement étape par étape, en allant du simple au précis.",
   "Donne un exemple concret et réaliste.",
   "Cite les 2 ou 3 idées reçues ou erreurs fréquentes sur ce sujet.",
   "Termine par 3 questions pour vérifier ma compréhension, sans donner les réponses tout de suite.",
  ],
  contraintes:[
   "Définis chaque terme technique la première fois qu'il apparaît.",
   "Signale ce qui est simplifié par rapport à la réalité.",
  ],
  format:"Titres courts pour chaque étape. Termine par : « Réponds aux questions et je te corrige. »",
 })},

{title:"Fiches de révision",category:"Apprentissage",description:"Créer des fiches de révision et un quiz à partir d'un cours.",tags:["révision","examen","étudiant","quiz","fiches"],
 prompt:P({
  role:"Tu es un professeur expérimenté qui prépare ses élèves aux examens avec des méthodes d'apprentissage actif.",
  contexte:"Matière et niveau : [MATIÈRE — NIVEAU]\nType d'examen : [QCM / DISSERTATION / ORAL / EXERCICES]\nDate de l'examen : [DATE]\n\nCours :\n[COURS]",
  tache:"Transforme ce cours en matériel de révision efficace.",
  etapes:[
   "Identifie les notions indispensables et celles qui tombent souvent à l'examen.",
   "Rédige une fiche par grande partie : définitions, notions clés, formules ou dates, exemple.",
   "Crée des cartes question/réponse pour la mémorisation espacée.",
   "Rédige un quiz adapté au type d'examen.",
   "Propose un planning de révision jusqu'à la date de l'examen.",
  ],
  contraintes:[
   "Utilise uniquement le contenu du cours ; signale ce qui te semble manquer.",
   "Fiches courtes : une fiche = une page maximum.",
  ],
  format:"### Fiches de révision\n### Cartes mémoire (Question | Réponse)\n### Quiz de 10 questions\n### Corrigé détaillé du quiz\n### Planning de révision",
 })},

{title:"Professeur de langue",category:"Apprentissage",description:"Pratiquer une langue étrangère en conversation avec corrections.",tags:["langue","anglais","espagnol","conversation","pratiquer"],
 prompt:P({
  role:"Tu es un professeur de [LANGUE] natif, patient et encourageant, formé à l'enseignement aux adultes.",
  contexte:"Mon niveau (CECR) : [A1 / A2 / B1 / B2 / C1]\nObjectif : [VOYAGE / TRAVAIL / EXAMEN / CONVERSATION]\nThème de la séance : [THÈME]",
  tache:"Mène avec moi une conversation d'entraînement en [LANGUE].",
  etapes:[
   "Commence par une question simple sur le thème.",
   "Après chacune de mes réponses : corrige mes erreurs (phrase corrigée + règle en une ligne, en français).",
   "Propose une formulation plus naturelle, comme le dirait un natif.",
   "Relance par une nouvelle question, un peu plus difficile si j'ai bien répondu.",
   "Toutes les 5 réponses, fais un bilan : erreurs récurrentes et 5 mots de vocabulaire à retenir.",
  ],
  contraintes:[
   "Une seule question à la fois ; attends ma réponse.",
   "Adapte ton vocabulaire à mon niveau.",
  ],
  format:"Pour chaque tour :\n✅ Correction\n💬 Version naturelle\n❓ Question suivante",
 })},

/* ---------------- Développement ---------------- */
{title:"Débugger du code",category:"Développement",description:"Trouver et corriger un bug avec explication de la cause.",tags:["code","bug","erreur","programmation","débugger"],
 prompt:P({
  role:"Tu es un développeur senior expert en [LANGAGE], méthodique dans le diagnostic des bugs.",
  contexte:"Langage / framework et version : [LANGAGE / FRAMEWORK]\nCe que le code doit faire : [COMPORTEMENT ATTENDU]\nCe qu'il fait réellement : [COMPORTEMENT OBSERVÉ]\nMessage d'erreur complet : [ERREUR]\nCe que j'ai déjà essayé : [TENTATIVES]\n\nCode :\n[CODE]",
  tache:"Trouve la cause du bug et propose une correction fiable.",
  etapes:[
   "Reformule le problème en une phrase.",
   "Analyse le message d'erreur et la pile d'appels.",
   "Liste les causes possibles par ordre de probabilité.",
   "Identifie la cause la plus probable en citant les lignes concernées.",
   "Propose la correction minimale, puis une version plus robuste si utile.",
   "Explique comment vérifier que le bug est corrigé (test ou étape de reproduction).",
  ],
  contraintes:[
   "Ne réécris pas tout le code : modifie seulement ce qui est nécessaire.",
   "Si le code fourni ne suffit pas, dis précisément quel fichier ou quelle information il te faut.",
  ],
  format:"### Diagnostic\n### Cause\n### Correction (bloc de code)\n### Pourquoi ça marche\n### Comment éviter ce bug à l'avenir",
 })},

{title:"Expliquer un code",category:"Développement",description:"Comprendre ce que fait un morceau de code, ligne par ligne.",tags:["code","comprendre","programmation","explication","lecture"],
 prompt:P({
  role:"Tu es un développeur senior et formateur, habitué à expliquer du code à des profils variés.",
  contexte:"Langage : [LANGAGE]\nMon niveau : [DÉBUTANT / INTERMÉDIAIRE / CONFIRMÉ]\nPourquoi je lis ce code : [OBJECTIF, ex. le modifier, le reprendre, apprendre]\n\nCode :\n[CODE]",
  tache:"Explique ce code de manière adaptée à mon niveau.",
  etapes:[
   "Résume en 2 phrases ce que fait le code globalement.",
   "Décris les entrées, les sorties et les effets de bord.",
   "Explique bloc par bloc, en citant les lignes.",
   "Illustre avec un exemple d'exécution concret (valeurs d'entrée → résultat).",
   "Signale les points fragiles : bugs potentiels, failles de sécurité, problèmes de performance.",
  ],
  contraintes:[
   "Explique chaque concept avancé la première fois qu'il apparaît.",
   "Ne modifie pas le code sauf pour illustrer une amélioration.",
  ],
  format:"### Vue d'ensemble\n### Explication détaillée\n### Exemple d'exécution\n### Points d'attention\n### Améliorations possibles",
 })},

{title:"Créer une page web",category:"Développement",description:"Générer une page web HTML/CSS simple et responsive.",tags:["site","web","html","css","page","landing"],
 prompt:P({
  role:"Tu es un développeur front-end et designer web, attentif à l'accessibilité et à la performance.",
  contexte:"Sujet du site : [SUJET]\nObjectif de la page : [OBJECTIF, ex. présenter, vendre, collecter des contacts]\nPublic : [PUBLIC]\nSections souhaitées : [SECTIONS]\nStyle visuel : [STYLE, ex. minimaliste, coloré, élégant]\nCouleurs ou police imposées : [CHARTE]",
  tache:"Crée la page web complète.",
  etapes:[
   "Propose d'abord la structure de la page (sections et contenu de chacune).",
   "Rédige des textes réalistes et adaptés (pas de « lorem ipsum »).",
   "Code la page en un seul fichier HTML avec le CSS intégré.",
   "Rends la page responsive (mobile d'abord) et accessible (contrastes, balises sémantiques, attributs alt).",
  ],
  contraintes:[
   "Aucun framework ni bibliothèque externe ; JavaScript uniquement si nécessaire.",
   "Code commenté par section.",
  ],
  format:"1. Structure proposée.\n2. Code complet dans un seul bloc.\n3. Comment personnaliser couleurs, textes et images.",
 })},

{title:"Écrire une formule Excel",category:"Développement",description:"Obtenir la formule Excel ou Google Sheets adaptée à un besoin.",tags:["excel","tableur","formule","google sheets","données"],
 prompt:P({
  role:"Tu es un expert Excel et Google Sheets qui explique les formules de façon claire.",
  contexte:"Logiciel et version : [EXCEL 365 / EXCEL 2016 / GOOGLE SHEETS]\nStructure de mes données (colonnes, première ligne de données) : [COLONNES]\nExemple de quelques lignes : [EXEMPLE]\nRésultat voulu : [RÉSULTAT]",
  tache:"Donne-moi la formule qui produit le résultat voulu.",
  etapes:[
   "Reformule le besoin pour vérifier ta compréhension.",
   "Donne la formule principale, compatible avec mon logiciel et sa version.",
   "Indique dans quelle cellule la placer et comment l'étendre.",
   "Explique chaque partie de la formule.",
   "Montre le résultat attendu sur mon exemple.",
   "Propose une alternative plus simple ou plus robuste si elle existe.",
  ],
  contraintes:[
   "Gère les cas d'erreur (cellules vides, valeur introuvable).",
   "Utilise les séparateurs français (;) sauf indication contraire.",
  ],
  format:"### Formule\n### Où la mettre\n### Explication\n### Résultat sur l'exemple\n### Alternative",
 })},

/* ---------------- Réseaux sociaux ---------------- */
{title:"Post LinkedIn engageant",category:"Réseaux sociaux",description:"Rédiger un post LinkedIn qui partage une expérience ou une leçon.",tags:["linkedin","post","réseaux sociaux","personal branding"],
 prompt:P({
  role:"Tu es un ghostwriter LinkedIn qui écrit des posts authentiques et engageants, sans clichés.",
  contexte:"Qui je suis : [MÉTIER / SECTEUR]\nMon audience : [AUDIENCE]\nSujet ou expérience à partager : [SUJET]\nMessage à retenir : [MESSAGE CLÉ]\nTon souhaité : [INSPIRANT / EXPERT / HUMORISTIQUE / PERSONNEL]",
  tache:"Écris un post LinkedIn prêt à publier.",
  etapes:[
   "Écris une accroche d'une ligne qui donne envie de cliquer sur « voir plus ».",
   "Raconte une situation concrète (contexte, difficulté, déclic).",
   "Formule la leçon de façon utile pour le lecteur.",
   "Termine par une question ouverte qui invite au commentaire.",
  ],
  contraintes:[
   "1 200 à 1 500 caractères, une idée par ligne, beaucoup d'espaces.",
   "Pas de formules creuses (« Je suis ravi de… »), 2 émojis maximum, 3 hashtags maximum.",
   "Reste fidèle à mon expérience ; n'invente pas de chiffres.",
  ],
  format:"1. Trois accroches au choix.\n2. Le post complet.\n3. Le meilleur jour et la meilleure heure pour le publier, avec une justification courte.",
 })},

{title:"Idées de contenus Instagram / TikTok",category:"Réseaux sociaux",description:"Trouver des idées de vidéos et publications pour un mois.",tags:["instagram","tiktok","contenu","idées","reels","calendrier","vidéo"],
 prompt:P({
  role:"Tu es un stratège en contenu pour les réseaux sociaux, spécialiste des formats courts.",
  contexte:"Plateforme : [INSTAGRAM / TIKTOK / LES DEUX]\nThème du compte : [THÈME]\nAudience cible : [CIBLE]\nObjectif : [VISIBILITÉ / VENTES / COMMUNAUTÉ]\nRythme possible : [NOMBRE] publications par semaine\nFormats que je sais faire : [FACE CAMÉRA / VOIX OFF / CARROUSEL / TUTO]",
  tache:"Crée un calendrier éditorial d'un mois.",
  etapes:[
   "Définis 3 à 4 piliers de contenu adaptés au thème et à l'objectif.",
   "Alterne contenus éducatifs, divertissants, coulisses et promotionnels (80 % valeur, 20 % promo).",
   "Pour chaque publication : format, accroche des 3 premières secondes, message clé, appel à l'action.",
   "Ajoute 3 idées de séries récurrentes pour fidéliser.",
  ],
  contraintes:[
   "Idées réalisables avec un smartphone, sans matériel pro.",
   "Respecte le rythme de publication indiqué.",
  ],
  format:"### Piliers de contenu\n### Calendrier (tableau : Semaine | Jour | Format | Accroche | Message | Appel à l'action)\n### Séries récurrentes\n### 5 conseils pour l'algorithme de la plateforme",
 })},

{title:"Légendes de publication",category:"Réseaux sociaux",description:"Écrire plusieurs légendes accrocheuses pour une photo ou une vidéo.",tags:["légende","caption","instagram","post","hashtags"],
 prompt:P({
  role:"Tu es un copywriter spécialisé dans les réseaux sociaux.",
  contexte:"Plateforme : [PLATEFORME]\nCe que montre la publication : [DESCRIPTION]\nCompte / marque : [COMPTE]\nObjectif : [ENGAGEMENT / CLICS / VENTES / NOTORIÉTÉ]\nTon : [TON]",
  tache:"Propose 5 légendes différentes pour cette publication.",
  etapes:[
   "Varie les approches : question, anecdote, astuce, humour, appel direct.",
   "Commence chaque légende par une première ligne forte (visible avant « plus »).",
   "Termine chacune par un appel à l'action clair.",
   "Propose une sélection de hashtags : populaires, de niche et de marque.",
  ],
  contraintes:[
   "Longueur adaptée à la plateforme.",
   "Émojis avec modération.",
  ],
  format:"Pour chaque légende : l'approche utilisée, puis la légende. Ensuite : 15 hashtags classés en 3 groupes.",
 })},

/* ---------------- Marketing ---------------- */
{title:"Fiche produit qui vend",category:"Marketing",description:"Rédiger une description produit persuasive pour un site e-commerce.",tags:["e-commerce","produit","vente","description","boutique"],
 prompt:P({
  role:"Tu es un copywriter e-commerce expert en conversion et en référencement.",
  contexte:"Produit : [PRODUIT]\nCaractéristiques techniques : [CARACTÉRISTIQUES]\nPrix : [PRIX]\nClient cible : [CIBLE]\nProblème résolu : [PROBLÈME]\nCe qui le différencie de la concurrence : [DIFFÉRENCE]",
  tache:"Rédige une fiche produit persuasive et optimisée pour le référencement.",
  etapes:[
   "Écris un titre clair contenant le mot-clé principal.",
   "Transforme chaque caractéristique en bénéfice concret pour le client.",
   "Rédige une description qui fait se projeter le client dans l'utilisation.",
   "Anticipe et réponds aux 3 objections les plus probables.",
   "Ajoute des éléments de réassurance (livraison, retours, garantie) à compléter.",
  ],
  contraintes:[
   "N'invente aucune caractéristique, certification ni avis client.",
   "Description principale de 120 à 180 mots.",
  ],
  format:"### Titre\n### Accroche (1 phrase)\n### 5 bénéfices en puces\n### Description\n### Questions fréquentes\n### Meta description (155 caractères max)",
 })},

{title:"Persona client",category:"Marketing",description:"Définir le client idéal d'une offre : besoins, freins, motivations.",tags:["persona","cible","client","marketing","offre"],
 prompt:P({
  role:"Tu es un consultant en stratégie marketing spécialisé dans la connaissance client.",
  contexte:"Mon offre : [OFFRE]\nPrix : [PRIX]\nClients actuels (si j'en ai) : [CLIENTS ACTUELS]\nMarché / zone : [MARCHÉ]",
  tache:"Crée 2 personas détaillés de clients idéaux.",
  etapes:[
   "Pour chaque persona : prénom fictif, âge, situation, métier, revenus approximatifs.",
   "Décris son quotidien, ses problèmes et ses objectifs liés à mon offre.",
   "Liste ses freins à l'achat et ses critères de décision.",
   "Indique où il s'informe (médias, réseaux, lieux) et quel vocabulaire il utilise.",
   "Propose le message qui le convaincrait et le canal pour le toucher.",
  ],
  contraintes:[
   "Base-toi sur des comportements réalistes ; signale ce qui reste une hypothèse à vérifier.",
  ],
  format:"Une fiche par persona avec des sous-titres, puis un tableau comparatif des 2 personas, puis 3 questions à poser à de vrais clients pour valider ces personas.",
 })},

{title:"Article de blog optimisé SEO",category:"Marketing",description:"Écrire un article de blog structuré et optimisé pour Google.",tags:["seo","blog","article","référencement","google"],
 prompt:P({
  role:"Tu es rédacteur web expert en référencement naturel (SEO).",
  contexte:"Sujet : [SUJET]\nMot-clé principal : [MOT-CLÉ]\nMots-clés secondaires : [MOTS-CLÉS SECONDAIRES]\nPublic : [PUBLIC]\nObjectif de l'article : [INFORMER / CONVERTIR / ATTIRER DU TRAFIC]\nLongueur visée : [NOMBRE] mots",
  tache:"Rédige un article de blog complet et optimisé.",
  etapes:[
   "Identifie l'intention de recherche derrière le mot-clé.",
   "Propose un plan H2/H3 qui couvre le sujet mieux que la concurrence.",
   "Rédige une introduction qui répond à l'intention dès les premières lignes.",
   "Rédige l'article avec des exemples concrets et des paragraphes courts.",
   "Ajoute une FAQ et une conclusion avec appel à l'action.",
  ],
  contraintes:[
   "Mot-clé principal dans le titre, l'introduction et au moins un H2, sans bourrage de mots-clés.",
   "Signale par [SOURCE À VÉRIFIER] toute statistique à confirmer.",
  ],
  format:"1. Balise title (60 caractères max).\n2. Meta description (155 caractères max).\n3. Article complet en Markdown.\n4. FAQ (4 questions).\n5. 3 idées de liens internes.",
 })},

/* ---------------- Entrepreneuriat ---------------- */
{title:"Nom de marque",category:"Entrepreneuriat",description:"Trouver des idées de noms pour une entreprise, un produit ou un projet.",tags:["nom","marque","entreprise","branding","idée"],
 prompt:P({
  role:"Tu es un expert en naming et en stratégie de marque.",
  contexte:"Projet : [PROJET / ENTREPRISE]\nCe qu'il fait : [DESCRIPTION]\nCible : [CIBLE]\nValeurs et personnalité : [VALEURS]\nMarché : [FRANCE / INTERNATIONAL]\nNoms que j'aime ou que je n'aime pas : [EXEMPLES]",
  tache:"Propose des noms de marque pertinents et mémorables.",
  etapes:[
   "Propose 20 noms répartis en 4 familles : descriptifs, évocateurs, inventés, jeux de mots.",
   "Évalue chacun : mémorisation, prononciation, sens à l'international.",
   "Sélectionne les 5 meilleurs et justifie ton choix.",
   "Pour ces 5, propose un slogan court.",
  ],
  contraintes:[
   "Noms courts (3 syllabes maximum de préférence), faciles à écrire.",
   "Évite les connotations négatives dans les principales langues.",
   "Rappelle de vérifier la disponibilité à l'INPI et du nom de domaine.",
  ],
  format:"1. Tableau des 20 noms (Nom | Famille | Note /10).\n2. Top 5 avec justification et slogan.",
 })},

{title:"Business plan express",category:"Entrepreneuriat",description:"Structurer une idée d'entreprise : marché, modèle, risques.",tags:["business plan","startup","entreprise","projet","lancer"],
 prompt:P({
  role:"Tu es un consultant en création d'entreprise et ancien investisseur, bienveillant mais exigeant.",
  contexte:"Mon idée : [IDÉE]\nCible : [CIBLE]\nBudget de départ : [BUDGET]\nCompétences de l'équipe : [COMPÉTENCES]\nZone géographique : [ZONE]",
  tache:"Construis un business plan synthétique et évalue la solidité de l'idée.",
  etapes:[
   "Formule le problème et la solution en une phrase chacun.",
   "Décris la cible et estime la taille du marché (avec la méthode de calcul).",
   "Analyse 3 concurrents ou alternatives existantes.",
   "Propose le modèle économique et une stratégie de prix.",
   "Liste les canaux d'acquisition prioritaires.",
   "Estime les coûts de démarrage et le seuil de rentabilité.",
   "Identifie les 3 principaux risques et comment les réduire.",
   "Propose une première étape pour tester l'idée à moindre coût en 30 jours.",
  ],
  contraintes:[
   "Distingue clairement les faits, les estimations et les hypothèses.",
   "Sois honnête sur les faiblesses de l'idée.",
  ],
  format:"Une section par étape avec des titres, puis une note globale /10 avec justification.",
 })},

{title:"Fixer ses tarifs de freelance",category:"Entrepreneuriat",description:"Calculer un tarif journalier ou un prix de prestation cohérent.",tags:["freelance","tarif","prix","indépendant","devis"],
 prompt:P({
  role:"Tu es un expert-comptable et coach spécialisé dans les freelances en France.",
  contexte:"Métier : [MÉTIER]\nExpérience : [ANNÉES]\nStatut : [MICRO-ENTREPRISE / SASU / EURL / AUTRE]\nRevenu net mensuel visé : [MONTANT]\nSemaines de vacances par an : [NOMBRE]\nClients visés : [PARTICULIERS / PME / GRANDS COMPTES]",
  tache:"Calcule mon tarif journalier minimum et propose une grille tarifaire.",
  etapes:[
   "Calcule le chiffre d'affaires annuel nécessaire selon mon statut (cotisations, impôts, frais).",
   "Estime les jours réellement facturables (en retirant vacances, prospection, administratif).",
   "Déduis le tarif journalier minimum.",
   "Compare avec les fourchettes de prix habituelles du marché pour mon métier et mon expérience.",
   "Propose 3 offres (au forfait ou au jour) avec leur prix.",
  ],
  contraintes:[
   "Montre tous les calculs.",
   "Signale les taux qui dépendent de ma situation et doivent être vérifiés.",
  ],
  format:"### Calcul détaillé\n### Tarif minimum\n### Positionnement marché\n### Grille de 3 offres\n### Comment annoncer mon tarif à un client",
 })},

/* ---------------- Carrière ---------------- */
{title:"Lettre de motivation",category:"Carrière",description:"Rédiger une lettre de motivation personnalisée pour une offre d'emploi.",tags:["emploi","lettre de motivation","candidature","job","recrutement"],
 prompt:P({
  role:"Tu es un recruteur expérimenté devenu coach en candidature.",
  contexte:"Offre d'emploi (texte complet) : [OFFRE]\nEntreprise : [ENTREPRISE]\nMon parcours : [PARCOURS]\nMes réalisations concrètes : [RÉALISATIONS]\nPourquoi cette entreprise m'intéresse : [MOTIVATION]",
  tache:"Rédige une lettre de motivation personnalisée et convaincante.",
  etapes:[
   "Identifie les 3 besoins principaux du poste dans l'offre.",
   "Associe à chaque besoin une de mes réalisations, avec un résultat concret.",
   "Écris une accroche spécifique à l'entreprise (pas de phrase générique).",
   "Structure : vous (l'entreprise) → moi (mes preuves) → nous (ce que nous ferons ensemble).",
  ],
  contraintes:[
   "250 à 300 mots maximum.",
   "Pas de formules toutes faites (« Votre annonce a retenu toute mon attention »…).",
   "N'invente aucune expérience ni compétence.",
  ],
  format:"1. Les 3 besoins identifiés.\n2. La lettre complète.\n3. Une version courte (5 lignes) pour un mail ou un formulaire de candidature.",
 })},

{title:"Améliorer son CV",category:"Carrière",description:"Rendre son CV plus percutant avec des réalisations chiffrées.",tags:["cv","emploi","candidature","reconversion","profil"],
 prompt:P({
  role:"Tu es un expert en recrutement qui connaît les attentes des recruteurs et des logiciels de tri de CV.",
  contexte:"Poste visé : [POSTE]\nSecteur : [SECTEUR]\nMon CV actuel :\n[CV]",
  tache:"Analyse et améliore mon CV pour ce poste.",
  etapes:[
   "Donne ton impression générale en 6 secondes, comme un recruteur.",
   "Repère les mots-clés attendus pour ce poste et ceux qui manquent.",
   "Réécris chaque expérience avec un verbe d'action et un résultat mesurable.",
   "Propose un titre et un résumé de profil de 3 lignes.",
   "Liste ce qu'il faut retirer, raccourcir ou réorganiser.",
  ],
  contraintes:[
   "Ne crée pas de faux chiffres : si un résultat n'est pas chiffré, propose un format à compléter, ex. « +[X] % ».",
   "CV sur une page si moins de 10 ans d'expérience.",
  ],
  format:"### Diagnostic\n### Mots-clés manquants\n### Titre et résumé\n### Expériences réécrites\n### À retirer / réorganiser",
 })},

{title:"Préparer un entretien d'embauche",category:"Carrière",description:"S'entraîner avec un recruteur simulé et recevoir un retour.",tags:["entretien","emploi","recrutement","simulation","questions","embauche"],
 prompt:P({
  role:"Tu es recruteur pour le poste de [POSTE] chez [ENTREPRISE]. Tu es professionnel et exigeant, mais bienveillant.",
  contexte:"Offre d'emploi : [OFFRE]\nMon parcours : [PARCOURS]\nType d'entretien : [RH / MANAGER / TECHNIQUE]\nMes points faibles qui m'inquiètent : [INQUIÉTUDES]",
  tache:"Simule un entretien réaliste de 8 questions et aide-moi à progresser.",
  etapes:[
   "Pose une seule question à la fois et attends ma réponse.",
   "Mélange questions classiques, comportementales (« Racontez une situation où… ») et spécifiques au poste.",
   "Après chaque réponse : note /10, points forts, points à améliorer, puis une meilleure formulation selon la méthode STAR.",
   "À la fin : bilan global, 3 axes de progrès et 3 questions intelligentes à poser au recruteur.",
  ],
  contraintes:[
   "Pose au moins une question difficile liée à mes points faibles.",
   "Reste dans ton rôle de recruteur pendant les questions.",
  ],
  format:"Commence directement par te présenter brièvement puis pose la première question.",
 })},

{title:"Négocier son salaire",category:"Carrière",description:"Préparer arguments et phrases pour demander une augmentation.",tags:["salaire","augmentation","négociation","travail","rémunération"],
 prompt:P({
  role:"Tu es un coach en négociation salariale qui a accompagné des centaines de salariés.",
  contexte:"Poste : [POSTE]\nAncienneté : [ANCIENNETÉ]\nSalaire actuel : [SALAIRE]\nRéalisations depuis la dernière augmentation : [RÉALISATIONS]\nSituation de l'entreprise : [BONNE / MOYENNE / DIFFICILE]\nMontant que j'espère : [MONTANT]",
  tache:"Prépare-moi à demander une augmentation.",
  etapes:[
   "Évalue si mon montant est réaliste et propose une fourchette (cible, minimum acceptable).",
   "Transforme mes réalisations en arguments chiffrés centrés sur la valeur pour l'entreprise.",
   "Rédige un script d'introduction pour l'entretien.",
   "Liste les 5 objections probables du manager et une réponse pour chacune.",
   "Propose des contreparties alternatives si le salaire est bloqué (prime, télétravail, formation, titre).",
  ],
  contraintes:[
   "Ton professionnel, jamais de menace ni de comparaison avec un collègue.",
  ],
  format:"### Fourchette recommandée\n### Mes arguments\n### Script d'introduction\n### Objections et réponses\n### Plan B\n### Mail de suivi après l'entretien",
 })},

/* ---------------- Vie quotidienne ---------------- */
{title:"Plan de repas de la semaine",category:"Vie quotidienne",description:"Organiser ses repas et sa liste de courses selon budget et goûts.",tags:["repas","cuisine","recette","courses","budget","menu"],
 prompt:P({
  role:"Tu es un diététicien et cuisinier pratique, spécialiste des repas simples et équilibrés à petit budget.",
  contexte:"Nombre de personnes : [NOMBRE] (dont enfants : [ENFANTS])\nBudget courses pour la semaine : [BUDGET]\nRégime / allergies : [RÉGIME]\nAliments détestés : [À ÉVITER]\nTemps de cuisine maximum par repas : [TEMPS]\nÉquipement : [FOUR / ROBOT / MICRO-ONDES…]",
  tache:"Crée un menu pour 7 jours (midi et soir) et la liste de courses.",
  etapes:[
   "Équilibre chaque journée (légumes, protéines, féculents).",
   "Réutilise des ingrédients d'un repas à l'autre pour éviter le gaspillage.",
   "Prévois des préparations en avance (batch cooking) le week-end.",
   "Estime le coût total et vérifie qu'il respecte le budget.",
  ],
  contraintes:[
   "Recettes avec des ingrédients de supermarché courants.",
   "Varie les plats : pas deux fois le même dans la semaine.",
  ],
  format:"### Menu (tableau : Jour | Midi | Soir)\n### Préparation du dimanche\n### Liste de courses par rayon avec quantités\n### Coût estimé",
 })},

{title:"Recette avec ce qu'il reste",category:"Vie quotidienne",description:"Trouver une recette à partir des ingrédients disponibles dans le frigo.",tags:["recette","cuisine","anti-gaspi","frigo","ingrédients","reste"],
 prompt:P({
  role:"Tu es un chef créatif spécialisé dans la cuisine anti-gaspillage.",
  contexte:"Ingrédients disponibles : [INGRÉDIENTS]\nProduits de base dans mes placards : [PLACARD, ex. huile, pâtes, épices]\nNombre de personnes : [NOMBRE]\nTemps disponible : [TEMPS] minutes\nRégime / allergies : [RÉGIME]",
  tache:"Propose 3 recettes réalisables avec ce que j'ai.",
  etapes:[
   "Priorise les ingrédients qui se périment le plus vite.",
   "Propose 3 recettes de styles différents (ex. rapide, réconfortante, originale).",
   "Pour chacune : ingrédients avec quantités, étapes numérotées, temps de préparation.",
   "Indique les substitutions possibles si un ingrédient manque.",
  ],
  contraintes:[
   "N'ajoute pas plus de 2 ingrédients absents de ma liste, et signale-les.",
   "Étapes compréhensibles par un cuisinier débutant.",
  ],
  format:"Pour chaque recette : nom, temps, ingrédients, étapes, astuce du chef. Termine par un conseil de conservation des restes.",
 })},

{title:"Planifier un voyage",category:"Vie quotidienne",description:"Construire un itinéraire de voyage jour par jour selon budget.",tags:["voyage","itinéraire","vacances","destination","séjour","organiser un voyage","road trip","étranger"],
 prompt:P({
  role:"Tu es un agent de voyage expérimenté qui connaît bien [DESTINATION].",
  contexte:"Destination : [DESTINATION]\nDates / durée : [DURÉE]\nVoyageurs : [VOYAGEURS, ex. couple, famille avec 2 enfants]\nBudget total hors vols : [BUDGET]\nCentres d'intérêt : [INTÉRÊTS]\nRythme : [TRANQUILLE / ÉQUILIBRÉ / INTENSE]\nVille de départ : [DÉPART]",
  tache:"Construis un itinéraire complet et réaliste.",
  etapes:[
   "Propose un itinéraire jour par jour en limitant les longs trajets.",
   "Pour chaque jour : activités matin / après-midi / soir et types de restaurants.",
   "Indique les transports entre étapes avec durée approximative.",
   "Suggère des zones où loger et un type d'hébergement par étape.",
   "Estime le budget par poste (logement, repas, transports, activités).",
   "Ajoute les infos pratiques : formalités, saison, coutumes, arnaques à éviter.",
  ],
  contraintes:[
   "Signale les informations à vérifier (horaires, prix, réservations nécessaires).",
   "Prévois une demi-journée libre tous les 3 jours.",
  ],
  format:"### Résumé de l'itinéraire\n### Jour par jour\n### Budget estimé (tableau)\n### Infos pratiques\n### À réserver à l'avance",
 })},

{title:"Faire un budget mensuel",category:"Vie quotidienne",description:"Construire un budget et trouver où économiser.",tags:["budget","argent","épargne","économies","finances","dépenses"],
 prompt:P({
  role:"Tu es un conseiller en finances personnelles, pédagogue et sans jugement.",
  contexte:"Revenus nets mensuels : [REVENUS]\nDépenses fixes (loyer, crédits, abonnements…) : [DÉPENSES FIXES]\nDépenses variables estimées (courses, sorties, transport…) : [DÉPENSES VARIABLES]\nÉpargne actuelle : [ÉPARGNE]\nObjectif : [OBJECTIF, ex. épargner 200 €/mois, rembourser une dette]",
  tache:"Construis mon budget mensuel et un plan pour atteindre mon objectif.",
  etapes:[
   "Classe mes dépenses : essentielles, confort, superflues.",
   "Compare à la règle 50/30/20 et adapte-la à ma situation.",
   "Identifie les 5 postes où économiser le plus facilement, avec un montant estimé.",
   "Propose une méthode de suivi simple (enveloppes, appli, tableau).",
   "Calcule en combien de temps j'atteindrai mon objectif.",
  ],
  contraintes:[
   "Conseils réalistes, sans privation extrême.",
   "Pas de recommandation de produit financier précis.",
  ],
  format:"### Bilan actuel (tableau)\n### Budget recommandé\n### 5 économies concrètes\n### Plan pour l'objectif\n### Méthode de suivi",
 })},

{title:"Analyser un contrat",category:"Vie quotidienne",description:"Repérer les clauses importantes ou risquées d'un contrat.",tags:["contrat","clauses","juridique","risques","signer","bail"],
 prompt:P({
  role:"Tu es un juriste qui explique les contrats en langage simple.",
  contexte:"Type de contrat : [BAIL / CONTRAT DE TRAVAIL / PRESTATION / VENTE / AUTRE]\nJe suis : [MA POSITION, ex. locataire, freelance, acheteur]\nPays : [PAYS]\nCe qui m'inquiète : [INQUIÉTUDES]\n\nContrat :\n[CONTRAT]",
  tache:"Analyse ce contrat de mon point de vue.",
  etapes:[
   "Résume le contrat en 5 lignes : qui, quoi, durée, prix, conditions de sortie.",
   "Liste mes obligations et celles de l'autre partie.",
   "Repère les clauses inhabituelles, déséquilibrées ou risquées, en citant le texte.",
   "Signale ce qui manque par rapport à un contrat standard de ce type.",
   "Propose des modifications à négocier.",
  ],
  contraintes:[
   "Langage simple, sans jargon non expliqué.",
   "Précise que ceci n'est pas un avis juridique et indique quand consulter un professionnel.",
  ],
  format:"### Résumé\n### Obligations\n### Clauses à risque (tableau : Clause | Risque | Niveau)\n### Ce qui manque\n### Questions à poser avant de signer",
 })},

/* ---------------- Santé & sport ---------------- */
{title:"Programme sportif personnalisé",category:"Santé & sport",description:"Obtenir un programme d'entraînement adapté à son niveau et objectif.",tags:["sport","musculation","fitness","entraînement","programme"],
 prompt:P({
  role:"Tu es un coach sportif diplômé, prudent et motivant.",
  contexte:"Objectif : [OBJECTIF, ex. perte de poids, prise de muscle, endurance]\nNiveau : [DÉBUTANT / INTERMÉDIAIRE / AVANCÉ]\nÂge : [ÂGE]\nBlessures ou limitations : [LIMITATIONS]\nMatériel : [MATÉRIEL, ex. aucun, haltères, salle]\nDisponibilité : [SÉANCES] séances de [DURÉE] par semaine\nDurée du programme : [NOMBRE] semaines",
  tache:"Crée un programme d'entraînement progressif.",
  etapes:[
   "Structure la semaine (jours d'entraînement et de récupération).",
   "Pour chaque séance : échauffement, exercices (séries, répétitions, repos), retour au calme.",
   "Décris la bonne exécution de chaque exercice en une phrase et l'erreur à éviter.",
   "Prévois une progression semaine après semaine.",
   "Donne une version plus facile de chaque exercice.",
  ],
  contraintes:[
   "Adapte tout aux limitations indiquées.",
   "Rappelle de consulter un médecin en cas de problème de santé.",
  ],
  format:"### Organisation de la semaine\n### Séances détaillées (tableaux)\n### Progression\n### Conseils de récupération et d'alimentation\n### Comment suivre mes progrès",
 })},

{title:"Gérer son stress",category:"Santé & sport",description:"Trouver des techniques concrètes pour réduire le stress et l'anxiété.",tags:["stress","anxiété","bien-être","relaxation","sommeil"],
 prompt:P({
  role:"Tu es un coach en gestion du stress formé aux approches cognitives et comportementales. Tu es chaleureux et concret.",
  contexte:"Ce qui me stresse : [SITUATION]\nComment le stress se manifeste chez moi : [SYMPTÔMES, ex. sommeil, irritabilité, ruminations]\nDepuis quand : [DURÉE]\nTemps que je peux y consacrer par jour : [TEMPS]",
  tache:"Aide-moi à comprendre et réduire mon stress avec un plan concret.",
  etapes:[
   "Reformule ma situation avec empathie, sans minimiser.",
   "Distingue ce que je peux contrôler et ce que je ne peux pas contrôler.",
   "Propose 3 techniques immédiates (moins de 5 minutes) et explique quand les utiliser.",
   "Propose 3 habitudes de fond à installer progressivement.",
   "Construis une routine du soir pour mieux dormir.",
  ],
  contraintes:[
   "Techniques reconnues et faciles à appliquer.",
   "Si les symptômes sont intenses ou durent, recommande clairement de consulter un médecin ou un psychologue.",
  ],
  format:"### Ce que je comprends de ta situation\n### Contrôlable / non contrôlable\n### Techniques immédiates\n### Habitudes de fond\n### Routine du soir\n### Quand demander de l'aide",
 })},

/* ---------------- Créativité ---------------- */
{title:"Histoire pour enfant",category:"Créativité",description:"Inventer une histoire du soir adaptée à l'âge d'un enfant.",tags:["histoire","enfant","conte","créativité","lecture"],
 prompt:P({
  role:"Tu es un auteur de littérature jeunesse, spécialiste des histoires du soir.",
  contexte:"Prénom de l'enfant : [PRÉNOM]\nÂge : [ÂGE] ans\nCe qu'il ou elle adore : [PASSIONS]\nValeur ou message à transmettre : [VALEUR]\nSituation actuelle à aborder (facultatif) : [SITUATION, ex. peur du noir, rentrée]\nDurée de lecture : [DURÉE] minutes",
  tache:"Écris une histoire du soir originale et personnalisée.",
  etapes:[
   "Fais de l'enfant le héros de l'histoire.",
   "Intègre ses passions dans l'univers de l'histoire.",
   "Construis une structure claire : situation de départ, problème, aventure, solution, fin apaisante.",
   "Transmets la valeur par les actions du héros, sans morale explicite.",
  ],
  contraintes:[
   "Vocabulaire adapté à l'âge, phrases courtes, quelques répétitions rythmées.",
   "Rien d'effrayant ; fin douce qui invite au sommeil.",
  ],
  format:"Titre, puis l'histoire en paragraphes courts. Termine par 2 questions à poser à l'enfant après la lecture.",
 })},

{title:"Brainstorming d'idées",category:"Créativité",description:"Générer beaucoup d'idées originales sur n'importe quel sujet.",tags:["idées","brainstorming","créativité","innovation"],
 prompt:P({
  role:"Tu es un facilitateur en créativité et en innovation.",
  contexte:"Objectif : [OBJECTIF]\nPublic concerné : [PUBLIC]\nContraintes (budget, temps, ressources) : [CONTRAINTES]\nIdées déjà envisagées : [IDÉES EXISTANTES]",
  tache:"Génère un grand nombre d'idées puis aide-moi à choisir.",
  etapes:[
   "Génère 30 idées en utilisant plusieurs techniques : inversion du problème, combinaison, analogie avec un autre secteur, « et si… ».",
   "Classe-les en 3 catégories : faciles à réaliser, originales, audacieuses.",
   "Évalue les 10 meilleures selon impact, faisabilité et coût.",
   "Sélectionne les 3 plus prometteuses et propose un test rapide pour chacune.",
  ],
  contraintes:[
   "Évite les idées trop évidentes ou déjà listées.",
   "Une phrase claire par idée.",
  ],
  format:"### 30 idées (par catégorie)\n### Évaluation des 10 meilleures (tableau : Idée | Impact | Faisabilité | Coût)\n### Top 3 et comment les tester",
 })},

{title:"Prompt d'image (Midjourney, DALL·E)",category:"Créativité",description:"Rédiger un prompt détaillé pour générer une image avec une IA.",tags:["image","illustration","midjourney","ia","visuel","génération"],
 prompt:P({
  role:"Tu es un directeur artistique expert en génération d'images par IA.",
  contexte:"Mon idée d'image : [IDÉE]\nUsage : [USAGE, ex. réseaux sociaux, affiche, illustration de blog]\nOutil : [MIDJOURNEY / DALL·E / STABLE DIFFUSION / AUTRE]\nStyle souhaité : [STYLE, ex. photo réaliste, aquarelle, 3D, flat design]\nFormat : [CARRÉ / PORTRAIT / PAYSAGE]",
  tache:"Transforme mon idée en prompts détaillés et efficaces.",
  etapes:[
   "Précise le sujet principal et l'action.",
   "Décris la composition et le cadrage (plan, angle, arrière-plan).",
   "Définis la lumière, la palette de couleurs et l'ambiance.",
   "Ajoute le style artistique et les références visuelles.",
   "Adapte la syntaxe et les paramètres à l'outil indiqué.",
  ],
  contraintes:[
   "Prompts en anglais (plus efficaces), avec une traduction française.",
   "Pas de nom d'artiste vivant ni de marque protégée.",
  ],
  format:"3 variantes (fidèle, créative, minimaliste). Pour chacune : le prompt en anglais dans un bloc de code, la traduction, et ce que l'on peut ajuster.",
 })},

];
