J’ai installé Node.js et j’ai vérifié son installation avec les commandes node --version et npm --version. Avant de commencer mon travail, j’ai initialisé le projet avec npm init -y pour générer un fichier package.json.
1/ Création d’un fichier hello-world.js
J’ai créé un fichier nommé hello-world.js dans lequel j’affiche un message à l’aide de console.log. Ensuite, j’ai exécuté le fichier dans le terminal avec la commande node hello-world.js.
2/ Création d’un serveur
J’ai préféré garder le serveur principal dans le fichier main. J’ai créé un fichier server.js en utilisant le package http pour gérer les requêtes. J’ai défini une fonction createServer ainsi qu’un port d’écoute. Pour éviter de relancer manuellement le serveur après chaque modification, j’ai installé nodemon avec npm install nodemon et je l’exécute avec npx nodemon server.js.
3/ Gestion des fichiers avec fs
J’ai utilisé le package fs (File System) pour créer et manipuler des fichiers. Ce module propose plusieurs méthodes, notamment writeFile pour écrire et readFile pour lire. En cas d’erreur, un message est affiché pour m’aider à comprendre le problème, ce qui permet une meilleure organisation et une approche méthodique.
4/ Création d’un générateur de mots de passe
J’ai créé un nouveau fichier password-generator.js, copié le code nécessaire et installé le module avec npm install générer-mot-de-passe
. Il est important d’exporter ce fichier vers le serveur pour qu’il puisse être lu. Sans cette étape, le serveur ne détectera pas d’erreur mais ne pourra pas l’exécuter correctement.
5/ Création d’un système d’envoi d’e-mails
J’ai créé un fichier email-sender.js et installé nodemailer en suivant les instructions du site W3Schools. Je n’ai pas encore testé cette fonctionnalité afin d’éviter tous risques imprévu.
