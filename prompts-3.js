/* Prompts 62 à 86 — Développement, données et IA */
SAMPLE.push(

{title:"Écrire des tests unitaires",category:"Développement",description:"Générer des tests unitaires complets pour une fonction.",tags:["tests","test unitaire","code","qualité","jest","pytest"],
 prompt:P({
  role:"Tu es un développeur senior spécialiste de la qualité logicielle et du TDD.",
  contexte:"Langage et framework de test : [LANGAGE / FRAMEWORK DE TEST]\nCe que fait la fonction : [COMPORTEMENT]\n\nCode à tester :\n[CODE]",
  tache:"Écris une suite de tests unitaires complète.",
  etapes:[
   "Liste les comportements à vérifier : cas normaux, cas limites, cas d'erreur.",
   "Écris un test par comportement, avec un nom qui décrit le comportement attendu.",
   "Utilise la structure Préparer / Agir / Vérifier.",
   "Simule les dépendances externes (réseau, base de données, date).",
   "Signale les bugs potentiels découverts en écrivant les tests.",
  ],
  contraintes:["Tests indépendants les uns des autres.","Pas de test qui dépend de l'implémentation interne."],
  format:"### Cas à tester (liste)\n### Code des tests\n### Commande pour les lancer\n### Bugs ou ambiguïtés détectés",
 })},

{title:"Revue de code",category:"Développement",description:"Obtenir une relecture critique de son code avec des améliorations.",tags:["revue de code","code review","qualité","relecture","bonnes pratiques","code"],
 prompt:P({
  role:"Tu es un lead développeur qui fait des revues de code exigeantes mais bienveillantes.",
  contexte:"Langage / framework : [LANGAGE]\nObjectif du code : [OBJECTIF]\nContexte (production, prototype, exercice) : [CONTEXTE]\n\nCode :\n[CODE]",
  tache:"Fais une revue de code complète.",
  etapes:[
   "Vérifie la correction : bugs, cas limites non gérés.",
   "Vérifie la sécurité : injections, données sensibles, validations.",
   "Vérifie la lisibilité : nommage, taille des fonctions, duplication.",
   "Vérifie la performance si elle est pertinente.",
   "Classe chaque remarque par gravité.",
  ],
  contraintes:["Cite la ligne concernée pour chaque remarque.","Propose le code corrigé pour les remarques importantes.","Signale aussi ce qui est bien fait."],
  format:"Tableau : Gravité (bloquant / important / suggestion) | Ligne | Problème | Correction. Puis points positifs et note globale /10.",
 })},

{title:"Refactoriser du code",category:"Développement",description:"Rendre un code plus lisible et maintenable sans changer son comportement.",tags:["refactoring","refactoriser","nettoyer","code","maintenable","lisibilité"],
 prompt:P({
  role:"Tu es un expert en code propre (clean code) et en refactorisation.",
  contexte:"Langage : [LANGAGE]\nCe qui me gêne dans ce code : [PROBLÈMES]\nContraintes (compatibilité, style d'équipe) : [CONTRAINTES]\n\nCode :\n[CODE]",
  tache:"Refactorise ce code sans changer son comportement.",
  etapes:[
   "Identifie les problèmes : duplication, fonctions trop longues, noms flous, imbrications.",
   "Propose un plan de refactorisation par petites étapes sûres.",
   "Applique les changements.",
   "Explique chaque changement et son bénéfice.",
  ],
  contraintes:["Comportement strictement identique.","Pas de nouvelle dépendance.","Ne change pas l'interface publique sans le signaler."],
  format:"### Problèmes identifiés\n### Code refactorisé\n### Explication des changements\n### Tests à lancer pour vérifier",
 })},

{title:"Écrire une requête SQL",category:"Données",description:"Obtenir une requête SQL correcte à partir d'un besoin en français.",tags:["sql","requête","base de données","données","select","jointure"],
 prompt:P({
  role:"Tu es un expert SQL et en modélisation de données.",
  contexte:"Base de données : [POSTGRESQL / MYSQL / SQLITE / SQL SERVER]\nTables et colonnes : [SCHÉMA]\nCe que je veux obtenir : [BESOIN]\nVolume approximatif : [NOMBRE DE LIGNES]",
  tache:"Écris la requête SQL qui répond au besoin.",
  etapes:[
   "Reformule le besoin pour vérifier ta compréhension.",
   "Écris la requête, formatée et commentée.",
   "Explique chaque partie (jointures, filtres, regroupements).",
   "Montre un exemple de résultat attendu.",
   "Propose des index si la requête risque d'être lente.",
  ],
  contraintes:["Syntaxe compatible avec la base indiquée.","Gère les valeurs nulles et les doublons."],
  format:"### Requête\n### Explication\n### Exemple de résultat\n### Optimisation",
 })},

{title:"Concevoir une base de données",category:"Données",description:"Modéliser les tables et relations d'une application.",tags:["base de données","modélisation","schéma","tables","sql","relations"],
 prompt:P({
  role:"Tu es un architecte de données expérimenté.",
  contexte:"Application : [APPLICATION]\nCe qu'elle doit gérer : [ENTITÉS ET FONCTIONNALITÉS]\nBase prévue : [BASE DE DONNÉES]\nVolume et croissance attendus : [VOLUME]",
  tache:"Conçois le schéma de base de données.",
  etapes:[
   "Identifie les entités et leurs attributs.",
   "Définis les relations (1-1, 1-n, n-n) et les tables de liaison.",
   "Choisis les types, clés primaires, clés étrangères et contraintes.",
   "Prévois les index utiles aux requêtes fréquentes.",
   "Écris le script de création.",
  ],
  contraintes:["Normalisation jusqu'à la 3e forme normale, sauf justification.","Noms de tables et colonnes cohérents."],
  format:"### Entités\n### Schéma (diagramme textuel)\n### Script SQL de création\n### Requêtes fréquentes et index\n### Évolutions possibles",
 })},

{title:"Créer une expression régulière",category:"Développement",description:"Obtenir une regex fiable et expliquée pour valider ou extraire du texte.",tags:["regex","expression régulière","validation","extraire","texte","motif"],
 prompt:P({
  role:"Tu es un expert des expressions régulières.",
  contexte:"Langage ou outil : [LANGAGE / OUTIL]\nObjectif : [VALIDER / EXTRAIRE / REMPLACER]\nCe que je cherche : [DESCRIPTION]\nExemples qui doivent correspondre : [EXEMPLES VALIDES]\nExemples qui ne doivent pas correspondre : [EXEMPLES INVALIDES]",
  tache:"Écris l'expression régulière adaptée.",
  etapes:[
   "Écris la regex.",
   "Explique chaque morceau.",
   "Vérifie-la sur tous mes exemples dans un tableau.",
   "Ajoute des cas limites auxquels je n'ai pas pensé.",
   "Donne le code d'utilisation dans mon langage.",
  ],
  contraintes:["Privilégie la lisibilité.","Évite les motifs à risque de lenteur extrême."],
  format:"### Regex\n### Explication\n### Tests (tableau : Texte | Attendu | Résultat)\n### Code d'exemple",
 })},

{title:"Script d'automatisation Python",category:"Développement",description:"Automatiser une tâche répétitive avec un script Python.",tags:["python","automatisation","script","automatiser","fichiers","tâche répétitive"],
 prompt:P({
  role:"Tu es un développeur Python pragmatique qui écrit des scripts fiables pour des non-experts.",
  contexte:"Tâche à automatiser : [TÂCHE]\nDonnées d'entrée (fichiers, dossiers, format) : [ENTRÉES]\nRésultat attendu : [SORTIE]\nSystème : [WINDOWS / MAC / LINUX]\nMon niveau en Python : [NIVEAU]",
  tache:"Écris un script Python qui automatise cette tâche.",
  etapes:[
   "Décris l'approche en quelques lignes.",
   "Écris le script complet et commenté.",
   "Gère les erreurs courantes (fichier manquant, format inattendu).",
   "Affiche des messages de progression clairs.",
   "Explique comment l'installer et le lancer pas à pas.",
  ],
  contraintes:["Bibliothèque standard en priorité ; sinon indique la commande d'installation.","Ne supprime ni n'écrase aucun fichier sans confirmation."],
  format:"### Approche\n### Script\n### Installation et lancement\n### Comment l'adapter",
 })},

{title:"Rédiger un README",category:"Développement",description:"Documenter un projet de code pour qu'il soit facile à utiliser.",tags:["readme","documentation","projet","github","documenter","code"],
 prompt:P({
  role:"Tu es un rédacteur technique spécialisé dans la documentation open source.",
  contexte:"Projet : [NOM ET DESCRIPTION]\nTechnologies : [TECHNOLOGIES]\nInstallation : [ÉTAPES CONNUES]\nUtilisation principale : [EXEMPLES]\nPublic : [DÉVELOPPEURS / UTILISATEURS FINAUX]",
  tache:"Rédige un README complet et clair.",
  etapes:[
   "Écris une description qui explique le problème résolu en 2 phrases.",
   "Ajoute prérequis, installation et démarrage rapide.",
   "Donne des exemples d'utilisation avec du code.",
   "Ajoute configuration, contribution et licence.",
  ],
  contraintes:["Commandes copiables telles quelles.","Marque [À COMPLÉTER] ce que tu ne sais pas."],
  format:"Le README complet en Markdown.",
 })},

{title:"Concevoir une API REST",category:"Développement",description:"Définir les routes, données et règles d'une API.",tags:["api","rest","backend","routes","endpoints","serveur"],
 prompt:P({
  role:"Tu es un architecte backend expert en conception d'API.",
  contexte:"Application : [APPLICATION]\nRessources à gérer : [RESSOURCES]\nUtilisateurs et droits : [RÔLES]\nTechnologie prévue : [TECHNOLOGIE]",
  tache:"Conçois une API REST claire et cohérente.",
  etapes:[
   "Liste les ressources et leurs routes (méthode, chemin, description).",
   "Définis le format des requêtes et réponses en JSON.",
   "Définis les codes d'erreur et leur format.",
   "Prévois authentification, autorisations, pagination et filtres.",
   "Donne un exemple d'implémentation d'une route.",
  ],
  contraintes:["Conventions REST respectées (noms au pluriel, verbes HTTP).","Versionnement de l'API."],
  format:"### Routes (tableau)\n### Exemples JSON\n### Erreurs\n### Sécurité\n### Exemple de code",
 })},

{title:"Convertir du code dans un autre langage",category:"Développement",description:"Traduire un programme d'un langage de programmation à un autre.",tags:["convertir","traduire","code","langage","migration","programmation"],
 prompt:P({
  role:"Tu es un développeur polyglotte expert en [LANGAGE SOURCE] et en [LANGAGE CIBLE].",
  contexte:"Langage source : [LANGAGE SOURCE]\nLangage cible et version : [LANGAGE CIBLE]\nContraintes (bibliothèques, environnement) : [CONTRAINTES]\n\nCode :\n[CODE]",
  tache:"Convertis ce code de façon idiomatique dans le langage cible.",
  etapes:[
   "Comprends le comportement exact du code source.",
   "Convertis en utilisant les conventions et bibliothèques naturelles du langage cible.",
   "Signale les différences de comportement possibles (types, arrondis, gestion d'erreurs).",
   "Propose un test qui vérifie que les deux versions donnent le même résultat.",
  ],
  contraintes:["Pas de traduction mot à mot.","Même comportement observable."],
  format:"### Code converti\n### Correspondances importantes (tableau)\n### Différences à surveiller\n### Test de vérification",
 })},

{title:"Résoudre un problème Git",category:"Développement",description:"Comprendre et réparer une situation Git (conflit, erreur, annulation).",tags:["git","conflit","commit","branche","github","versionning"],
 prompt:P({
  role:"Tu es un expert Git qui explique simplement et prudemment.",
  contexte:"Ce que je voulais faire : [OBJECTIF]\nCe que j'ai tapé : [COMMANDES]\nMessage ou situation actuelle : [SORTIE DE GIT STATUS / ERREUR]\nTravail en équipe sur la branche : [OUI / NON]",
  tache:"Aide-moi à revenir à une situation propre.",
  etapes:[
   "Explique ce qui s'est passé en mots simples.",
   "Propose d'abord une sauvegarde de sécurité (branche ou copie).",
   "Donne les commandes, une par une, avec ce que chacune fait.",
   "Indique comment vérifier le résultat.",
   "Explique comment éviter le problème à l'avenir.",
  ],
  contraintes:["Signale clairement toute commande destructrice.","Pas de force push sans avertissement si la branche est partagée."],
  format:"### Ce qui s'est passé\n### Sauvegarde\n### Commandes à exécuter\n### Vérification\n### Prévention",
 })},

{title:"Analyser des données",category:"Données",description:"Explorer un jeu de données et en tirer des conclusions utiles.",tags:["analyse de données","données","csv","statistiques","tableau","tendances"],
 prompt:P({
  role:"Tu es un data analyst qui transforme des données en décisions.",
  contexte:"Contexte des données : [CONTEXTE]\nQuestion à laquelle je veux répondre : [QUESTION]\nDonnées (ou description des colonnes) :\n[DONNÉES]",
  tache:"Analyse ces données pour répondre à ma question.",
  etapes:[
   "Décris les données : colonnes, types, volume, qualité (manques, valeurs aberrantes).",
   "Calcule les indicateurs pertinents.",
   "Identifie les tendances, écarts et corrélations.",
   "Réponds à la question avec le niveau de certitude.",
   "Propose des graphiques adaptés et des analyses complémentaires.",
  ],
  contraintes:["Ne confonds pas corrélation et causalité.","Montre tes calculs ou ta méthode."],
  format:"### Aperçu des données\n### Indicateurs clés\n### Constats\n### Réponse à la question\n### Graphiques recommandés\n### Limites",
 })},

{title:"Définir des indicateurs (KPI)",category:"Données",description:"Choisir les bons indicateurs pour piloter une activité.",tags:["kpi","indicateurs","tableau de bord","pilotage","mesure","performance"],
 prompt:P({
  role:"Tu es consultant en pilotage de la performance.",
  contexte:"Activité ou projet : [ACTIVITÉ]\nObjectifs : [OBJECTIFS]\nDonnées disponibles : [DONNÉES]\nQui consulte le tableau de bord : [PUBLIC]",
  tache:"Propose un tableau de bord d'indicateurs utiles.",
  etapes:[
   "Relie chaque objectif à 1 ou 2 indicateurs.",
   "Pour chaque indicateur : définition, formule, source, fréquence, cible.",
   "Distingue indicateurs de résultat et indicateurs d'action.",
   "Propose la présentation visuelle du tableau de bord.",
  ],
  contraintes:["10 indicateurs maximum.","Évite les indicateurs de vanité."],
  format:"### Indicateurs (tableau : Objectif | KPI | Formule | Source | Fréquence | Cible)\n### Maquette du tableau de bord\n### Rituels de suivi",
 })},

{title:"Prompt système pour un chatbot",category:"Intelligence artificielle",description:"Écrire les instructions d'un assistant IA personnalisé.",tags:["chatbot","prompt système","assistant","ia","gpt","agent"],
 prompt:P({
  role:"Tu es un expert en conception d'assistants IA et en prompt engineering.",
  contexte:"Rôle de l'assistant : [RÔLE]\nUtilisateurs : [UTILISATEURS]\nCe qu'il doit faire : [MISSIONS]\nCe qu'il ne doit jamais faire : [INTERDITS]\nTon et personnalité : [TON]\nInformations de référence : [CONNAISSANCES]",
  tache:"Rédige le prompt système complet de cet assistant.",
  etapes:[
   "Définis l'identité et la mission de l'assistant.",
   "Décris le comportement attendu, étape par étape, dans les situations courantes.",
   "Définis les limites et la conduite en cas de question hors sujet.",
   "Précise le format et la longueur des réponses.",
   "Ajoute 3 exemples de dialogues.",
  ],
  contraintes:["Instructions positives et précises plutôt que vagues.","Sections clairement séparées."],
  format:"### Prompt système (bloc prêt à copier)\n### Exemples de dialogues\n### 5 tests pour vérifier l'assistant",
 })},

{title:"Améliorer un prompt",category:"Intelligence artificielle",description:"Rendre un prompt plus précis pour obtenir de meilleures réponses d'une IA.",tags:["prompt","améliorer","prompt engineering","ia","optimiser"],
 prompt:P({
  role:"Tu es un expert en prompt engineering.",
  contexte:"Mon prompt actuel :\n[PROMPT]\nCe que j'obtiens : [RÉSULTAT ACTUEL]\nCe que je voudrais obtenir : [RÉSULTAT SOUHAITÉ]\nIA utilisée : [IA]",
  tache:"Améliore mon prompt pour obtenir le résultat souhaité.",
  etapes:[
   "Diagnostique les faiblesses : flou, contexte manquant, format non précisé, consignes contradictoires.",
   "Réécris le prompt avec : rôle, contexte, tâche, étapes, contraintes, format.",
   "Ajoute un exemple de réponse attendue si utile.",
   "Explique chaque amélioration.",
  ],
  contraintes:["Garde mon intention d'origine.","Marque entre crochets les informations que je dois compléter."],
  format:"### Diagnostic\n### Prompt amélioré (bloc prêt à copier)\n### Explication des changements",
 })},

{title:"Architecture d'une application",category:"Développement",description:"Choisir la structure technique d'une nouvelle application.",tags:["architecture","application","app","technique","projet","structure"],
 prompt:P({
  role:"Tu es un architecte logiciel pragmatique.",
  contexte:"Application : [DESCRIPTION]\nFonctionnalités principales : [FONCTIONNALITÉS]\nUtilisateurs attendus : [NOMBRE]\nÉquipe et compétences : [ÉQUIPE]\nBudget et délai : [BUDGET / DÉLAI]",
  tache:"Propose une architecture adaptée.",
  etapes:[
   "Identifie les besoins techniques clés (temps réel, hors ligne, sécurité, volume).",
   "Propose une architecture simple avec ses composants.",
   "Recommande les technologies et justifie-les par rapport à l'équipe.",
   "Découpe le projet en étapes, en commençant par une première version minimale.",
   "Liste les risques techniques.",
  ],
  contraintes:["La solution la plus simple qui répond au besoin.","Évite la sur-ingénierie."],
  format:"### Besoins clés\n### Schéma d'architecture (textuel)\n### Technologies\n### Plan par étapes\n### Risques",
 })},

{title:"Audit de sécurité du code",category:"Développement",description:"Détecter les failles de sécurité dans un code.",tags:["sécurité","faille","vulnérabilité","audit","code","owasp"],
 prompt:P({
  role:"Tu es un expert en sécurité applicative (référentiel OWASP).",
  contexte:"Langage / framework : [LANGAGE]\nType d'application : [WEB / API / MOBILE]\nDonnées sensibles manipulées : [DONNÉES]\n\nCode :\n[CODE]",
  tache:"Audite ce code et propose des corrections.",
  etapes:[
   "Recherche : injections, failles XSS, authentification, gestion des sessions, secrets en clair, validation des entrées, dépendances.",
   "Pour chaque faille : explique le risque et un scénario d'abus en termes généraux.",
   "Classe par gravité.",
   "Propose le code corrigé.",
  ],
  contraintes:["Reste défensif : aucune instruction d'exploitation détaillée.","Cite les lignes concernées."],
  format:"Tableau : Gravité | Ligne | Faille | Risque | Correction. Puis code corrigé et bonnes pratiques à adopter.",
 })},

{title:"Optimiser les performances",category:"Développement",description:"Rendre un code ou une page plus rapide.",tags:["performance","optimiser","rapide","lent","vitesse","code"],
 prompt:P({
  role:"Tu es un expert en optimisation des performances.",
  contexte:"Langage / technologie : [TECHNOLOGIE]\nCe qui est lent : [SYMPTÔME]\nMesures actuelles : [MESURES]\nObjectif : [OBJECTIF]\n\nCode :\n[CODE]",
  tache:"Identifie les causes de lenteur et propose des optimisations.",
  etapes:[
   "Identifie les goulots d'étranglement probables.",
   "Estime la complexité des parties critiques.",
   "Propose les optimisations par ordre de gain attendu.",
   "Donne le code optimisé.",
   "Explique comment mesurer le gain.",
  ],
  contraintes:["Garde le comportement identique.","N'optimise pas au détriment de la lisibilité sans gain significatif."],
  format:"### Diagnostic\n### Optimisations (tableau : Changement | Gain estimé | Effort)\n### Code optimisé\n### Comment mesurer",
 })},

{title:"Apprendre à programmer",category:"Apprentissage",description:"Obtenir un plan d'apprentissage de la programmation adapté à son objectif.",tags:["apprendre","programmation","coder","débutant","plan","développeur"],
 prompt:P({
  role:"Tu es un mentor en développement qui a formé des centaines de débutants.",
  contexte:"Mon objectif : [OBJECTIF, ex. créer des sites, analyser des données, changer de métier]\nMon niveau actuel : [NIVEAU]\nTemps disponible par semaine : [TEMPS]\nBudget pour des formations : [BUDGET]",
  tache:"Construis mon plan d'apprentissage.",
  etapes:[
   "Recommande le langage et les outils adaptés à mon objectif, avec justification.",
   "Découpe l'apprentissage en étapes, chacune avec compétences et durée estimée.",
   "Propose un projet concret à réaliser à chaque étape.",
   "Suggère des types de ressources gratuites ou payantes.",
   "Donne une méthode pour ne pas abandonner.",
  ],
  contraintes:["Apprendre en pratiquant, pas seulement en regardant des vidéos.","Plan réaliste avec le temps disponible."],
  format:"### Choix du langage\n### Feuille de route (tableau : Étape | Compétences | Projet | Durée)\n### Ressources\n### Conseils de motivation",
 })},

{title:"Automatiser Google Sheets",category:"Données",description:"Créer un script Apps Script pour automatiser un tableur.",tags:["google sheets","apps script","automatisation","tableur","script","macro"],
 prompt:P({
  role:"Tu es un expert Google Apps Script.",
  contexte:"Structure du tableur (feuilles, colonnes) : [STRUCTURE]\nCe que je veux automatiser : [AUTOMATISATION]\nDéclenchement : [MANUEL / À L'OUVERTURE / CHAQUE JOUR / À LA MODIFICATION]",
  tache:"Écris le script Apps Script et explique comment l'installer.",
  etapes:[
   "Écris le script complet et commenté.",
   "Gère les cas d'erreur (feuille vide, valeurs manquantes).",
   "Explique l'installation : menu Extensions, coller, enregistrer, autoriser.",
   "Explique comment configurer le déclencheur.",
  ],
  contraintes:["Utilise des noms de feuilles et colonnes faciles à modifier en haut du script.","Ne supprime pas de données sans confirmation."],
  format:"### Script\n### Installation pas à pas\n### Déclencheur\n### Personnalisation",
 })},

{title:"Rédiger des spécifications",category:"Développement",description:"Transformer une idée de fonctionnalité en user stories et critères d'acceptation.",tags:["spécifications","user stories","cahier des charges","fonctionnalité","produit","agile"],
 prompt:P({
  role:"Tu es product owner expérimenté.",
  contexte:"Produit : [PRODUIT]\nFonctionnalité envisagée : [FONCTIONNALITÉ]\nUtilisateurs concernés : [UTILISATEURS]\nProblème résolu : [PROBLÈME]",
  tache:"Rédige les spécifications de la fonctionnalité.",
  etapes:[
   "Formule l'objectif et l'indicateur de succès.",
   "Écris les user stories (En tant que…, je veux…, afin de…).",
   "Ajoute des critères d'acceptation au format Étant donné / Quand / Alors.",
   "Liste les cas limites et les questions ouvertes.",
   "Priorise (indispensable, important, bonus).",
  ],
  contraintes:["Une story = une valeur utilisateur testable.","Pas de solution technique imposée sauf nécessité."],
  format:"### Objectif\n### User stories priorisées\n### Critères d'acceptation\n### Cas limites\n### Questions ouvertes",
 })},

{title:"Comparer des technologies",category:"Développement",description:"Choisir entre plusieurs outils, langages ou logiciels.",tags:["comparer","technologie","choisir","outil","logiciel","framework"],
 prompt:P({
  role:"Tu es un consultant technique neutre.",
  contexte:"Options à comparer : [OPTIONS]\nUsage prévu : [USAGE]\nCritères importants : [CRITÈRES, ex. coût, facilité, performance]\nÉquipe : [COMPÉTENCES]",
  tache:"Compare ces options et recommande la plus adaptée.",
  etapes:[
   "Décris chaque option en 2 lignes.",
   "Compare-les sur mes critères dans un tableau.",
   "Donne les cas où chaque option est le meilleur choix.",
   "Recommande une option pour mon cas, avec justification.",
  ],
  contraintes:["Signale ce qui peut avoir changé récemment et doit être vérifié.","Reste neutre."],
  format:"### Présentation\n### Tableau comparatif\n### Quand choisir quoi\n### Recommandation",
 })},

{title:"Expliquer la technique à un non-technicien",category:"Développement",description:"Expliquer un sujet technique à un client, manager ou proche.",tags:["expliquer","technique","vulgariser","client","non technique","communication"],
 prompt:P({
  role:"Tu es un expert technique doué pour la vulgarisation.",
  contexte:"Sujet technique : [SUJET]\nInterlocuteur : [PERSONNE ET RÔLE]\nCe qu'il doit comprendre ou décider : [OBJECTIF]",
  tache:"Prépare une explication claire pour cette personne.",
  etapes:[
   "Commence par l'impact concret pour l'interlocuteur.",
   "Utilise une analogie du quotidien.",
   "Explique l'essentiel en 3 points.",
   "Présente les options, coûts et risques si une décision est attendue.",
  ],
  contraintes:["Aucun jargon non expliqué.","Explication orale de 2 minutes maximum."],
  format:"1. L'explication.\n2. Une version écrite en 5 lignes.\n3. Les questions probables et les réponses.",
 })},

{title:"Rendre un site accessible",category:"Développement",description:"Vérifier et améliorer l'accessibilité d'une page web.",tags:["accessibilité","rgaa","wcag","handicap","site","web"],
 prompt:P({
  role:"Tu es expert en accessibilité numérique (WCAG et RGAA).",
  contexte:"Page ou composant : [DESCRIPTION]\nPublic : [PUBLIC]\n\nCode HTML/CSS :\n[CODE]",
  tache:"Audite l'accessibilité et propose des corrections.",
  etapes:[
   "Vérifie la structure : titres, repères, ordre de lecture.",
   "Vérifie les images, formulaires, liens et boutons.",
   "Vérifie la navigation au clavier et le focus.",
   "Vérifie les contrastes et la taille des textes.",
   "Propose le code corrigé.",
  ],
  contraintes:["Cite le critère WCAG concerné.","Priorise par impact pour les utilisateurs."],
  format:"Tableau : Priorité | Problème | Critère | Correction. Puis code corrigé et tests manuels à faire.",
 })},

{title:"Créer un outil d'IA pour son métier",category:"Intelligence artificielle",description:"Identifier comment utiliser l'IA pour gagner du temps dans son travail.",tags:["ia","productivité","métier","automatiser","outils","gagner du temps"],
 prompt:P({
  role:"Tu es consultant en transformation par l'intelligence artificielle.",
  contexte:"Mon métier : [MÉTIER]\nMes tâches principales et le temps passé : [TÂCHES]\nOutils actuels : [OUTILS]\nContraintes (confidentialité, budget) : [CONTRAINTES]",
  tache:"Identifie où l'IA peut m'aider et comment commencer.",
  etapes:[
   "Classe mes tâches selon leur potentiel d'automatisation par l'IA.",
   "Pour les 5 meilleures : usage concret, type d'outil, gain de temps estimé.",
   "Écris un prompt prêt à l'emploi pour chacune.",
   "Signale les risques (erreurs, confidentialité) et comment vérifier.",
  ],
  contraintes:["Solutions réalistes sans compétences techniques avancées.","Ne pas recommander de partager des données confidentielles."],
  format:"### Cartographie des tâches\n### Top 5 des usages\n### Prompts prêts à l'emploi\n### Précautions",
 })}

);
