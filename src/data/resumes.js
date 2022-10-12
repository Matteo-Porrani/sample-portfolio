const resumes = [
  {
    id: 1,
    resume: `Pour mon premier projet en <strong>NodeJS</strong> j'ai voulu tester le
                  fonctionnement d'une <strong>boutique en ligne</strong> avec ses besoins spécifiques, comme
                  l'utilisation des <strong>filtres produit</strong> ou la manipulation des <strong>cookies</strong>
                  pour la navigation interne et la gestion du panier.
                  <br>
                  <br>
                  Le site est structuré sur <strong>5 pages</strong> : l'accueil, une page par genre avec les promotions
                  en cours, une page de recherche par catégorie de vêtements, une page produit, et la page panier.
                  <br>
                  Le travail sur le <strong>responsive design</strong> a parfois été complèxe, notamment sur des
                  sections du site qui présentent beaucoup d'informations à l'utilisateur et nécessitent une mise en page très différente entre
                  mobile et desktop.
                  <br>
                  <br>
                  Le back-end est construit en <strong>Node JS</strong>, avec <strong>Express</strong>, et
                  <strong>EJS</strong> comme moteur de template, et une base de données <strong>MySQL</strong>. Côté
                  front j'ai choisi l'option <strong>CSS "from scratch"</strong>.
                  <br>
                  <br>
                  Toutes les photos proviennent du site <strong>unsplash.com</strong> et pour l'hébergement 
                  j'ai utilisé la plateforme <strong>Heroku</strong> avec le module additionnel <strong>ClearDB</strong> pour les données.`,
  },
  {
    id: 2,
    resume: `Étant passionné de compétitions moto, j'ai imaginé cette <strong>application web</strong> qui
                  permet de disputer un championnat de pronostics entre amis. 
                  <br>
                  <br>
                  Une page d'accueil présente les informations principales sur la prochaine course, avec le classique compte à rebours. 
                  Chaque joueur dispose d'un <strong>espace personnel</strong> pour gérer ses pronostics, visualiser ses résultats et performances, 
                  et recevoir des notifications mail pour chaque action de jeu.
                  <br>
                  L'<strong>interface d'administration</strong> permet au "directeur de course" de gérer les différentes phases de jeu, et
                  notamment de bloquer l'envoi des pronostics au début d'un grand prix, puis lancer le calcul des
                  points après chaque compétition (les scores sont basés sur le championnat MotoGP).
                  <br>
                  Une page <strong>calendrier</strong> affiche la liste des courses de la saison et permet de naviguer
                  entre les résultats.
                  <br>
                  <br>
                  Le back-end est écrit en <strong>PHP</strong> avec une base de données
                  <strong>MySQL</strong> et pour le front-end j'ai utilisé <strong>Bootstrap</strong>.
                  Le site est pour l'instant <strong>"mobile only"</strong>, étant conçu en priorité pour smartphone. 
                  <br>
                  Il existe depuis juillet 2021, hébergé avec <strong>Alwaysdata</strong>, et compte une vingtaine d'utilisateurs réguliers.
                  <br>
                  <br>
                  Je travaille actuellement sur l'ajout d'une nouvelle section <strong>statistiques</strong>.`,
  },
  {
    id: 3,
    resume: `Ce jeu n'est pas une création originale, mais plutôt un clone de <strong><a class="text-decoration-none link-accent" href="https://joshcollinsworth.com/projects" target="_blank" title="Quina by Josh Collinsworth">Quina</a></strong>, créé par Josh Collinsworth.
    <br><br>
    Je me suis inspiré de l'original américain pour construire une <strong>SPA (Single Page Application)</strong> en m'appuyant sur <strong>VueJS</strong> et en particulier sur deux briques fondamentales du framework, le <strong>Router</strong> pour la navigation et le tout nouveau store <strong>Pinia</strong>, qui permet de partager facilement les données reactives entre les composants.
    <br><br>
    L'idée était de m'amuser avec les transitions et animations en fonction des phases de jeu et des actions utilisateur, et aussi de proposer un <strong>choix entre deux langues</strong> : le français et l'italien.
    <br>
    <br>
    Pour l'hébergement j'ai utilisé <strong>Netlify</strong>, qui fournit un système simplifié de CI/CD avec liaison directe à un répository GitHub. 
    
`,
  },
  {
    id: 4,
    resume: `
                  Ce petit site utilise les données fournies par l'<strong>API Restcountries</strong>, qui offre de
                  nombreuses informations sur tous les pays du monde. 
                  <br>
                  <br>

                  La navigation entre les cinq continents se fait à travers une <strong>carte intéractive</strong>,
                  qui génère à chaque clic une manipulation du DOM et l'affichage d'une nouvelle liste de pays en fonction du continent choisi.
                  Cet élément de l'interface m'a permis de tester les possibilités de <strong>manipulation d'une image SVG en JavaScript</strong>.
                  <br>
                  Un simple système de filtres permet d'affiner ultérieurement la liste en triant selon la taille du pays ou le
                  nombre d'habitants. 
                  <br>
                  <br>
                  Pour l'hébergement j'ai testé le plan gratuit de la plateforme <strong>Netlify</strong>, qui permet de <strong>déployer directement à partir d'un dépôt GitHub</strong>, et met automatiquement à jour le site à chaque nouveau commit.`,
  },
  {
    id: 5,
    resume: `Ce projet était au départ un simple exercice de <strong>CRUD</strong> sur un thème imposé : le
                  recrutement des Argonautes, les héros qui accompagnèrent Jason à la recherche de la Toison d'Or. Nous
                  sommes en Grèce Antique au Ier siècle avant J.C. et JavaScript est encore loin de sa version
                  définitive...
                  <br>
                  <br>
                  Bien inspiré par ce thème mythologique et grâce aux ressources graphiques libres de droits disponibles
                  sur <strong>flaticon.com</strong>, j'ai imaginé une interface de <strong>"cards"</strong> qui
                  permet de gérer son équipage, d'ajouter ou supprimer des membres, de choisir un avatar et des niveaux spécifiques
                  pour chaque compétence.
                  <br>
                  <br>
                  Le back-end est construit en <strong>PHP</strong>, avec une base de données <strong>MySQL</strong>.
                  <br>
                  Pour le front-end je me suis servi de <strong>Bootstrap</strong>.`,
  },
];

export default resumes;