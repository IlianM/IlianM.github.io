function sortArticles(ev) {
    // Get selected value
    const sortType = ev.target.value;
    const articlesList = document.querySelectorAll(".card")
    const articlesArray = Array.from(articlesList)

    if (sortType === "note") {
        newList = articlesArray.sort((a, b) => {
            const noteA = a.querySelector(".note").dataset.note;
            const noteB = b.querySelector(".note").dataset.note;
            return noteB - noteA;
        })
    }

    if (sortType === "date") {
        newList = articlesArray.sort((a, b) => {
            const dateA = new Date(a.querySelector(".date").dataset.date);
            const dateB = new Date(b.querySelector(".date").dataset.date);
            return dateB - dateA;
        })
    }

    newList.forEach((articleEl, i) => {
        articleEl.style.order = i;
    });
}

// Fonction pour ouvrir la fenêtre modale
function openModal(index) {
    const modal = document.getElementById('myModal');
    const modalContent = modal.querySelector(".modal-content p");

    if (index === 1) {
        modalContent.innerHTML = "J'ai effectué ma scolarité dans cet établissement de ma 6ème à ma 3ème (2014-2018) C'est ici que j'ai été initié aux bases de l'informatique et de la programmation, notamment avec Scratch, et mes premiers cours sur ordinateur.";
    } else if (index === 2) {
        modalContent.innerHTML = "C'est dans ce lycée que j'ai pu commencer à programmer en cours d'informatique (2019-2022) J'ai commencé l'algorithmie, grâce à ma spécialité NSI. J'ai fait mon premier site web non hébergé, et mon premier jeu en python.";
    } else if (index === 3) {
        modalContent.innerHTML = "J'ai entamé un BTS SIO SLAM afin de m'orienter vers un parcours de developpeur J'ai commencé l'algorithmie, grâce à ma spécialité NSI. J'ai fait mon premier site web non hébergé, et mon premier jeu en python.";
    } else if (index === 4) {
        modalContent.innerHTML = "Depuis maintenant presque 2 ans, je fais régulièrement du sport et notamment de la musculation. C'est un moyen de relacher la pression, de penser à autre chose, d'être dans ma bulle";
    } else if (index === 5) {
        modalContent.innerHTML = "C'est évidemment lié à mes études, mais aussi depuis longtemps dans ma famille. Je suis passionné d'informatique depuis petit, et c'est surtout mon beau-père qui m'a transmis cette passion.";
    } else if (index === 6) {
        modalContent.innerHTML = "Je rêve d'un jour pouvoir conduire cette magnifique Porsche 911 Turbo S. Mais actuellement, soyons réaliste, j'ai pour projet 2024 d'acquérir une C250TD avec son fameux moteur l'OM605, pour rouler en toute tranquilité en dessous des limitations de vitesse.";
    } else if (index === 7) {
        modalContent.innerHTML = "<p class='margin-modal title-modal'>Objectif : Concevoir des scripts Bash</p><p class='margin-modal'>Temps : 1 mois </p> <p class='margin-modal'>Équipe : 1,5 personne</p> <p class='margin-modal'>Ces scripts Bash ont été implémentés dans l'image Windows, ce qui permet directement lors de l'installation de Windows, d'apporter des modifications lors de la réinitialisation ou la mise en service d'un nouveau PC.</p><p class='margin-modal'> Ce projet a duré un mois, j'ai été aidé uniquement par un collègue du déploiement. Il n'y a pas eu de cahier des charges vraiment défini. Les scripts que j'ai codé ont permis d'installer automatiquement des drivers, de lancer des mise à jour grâce à l'outil Dell Command Update, d'installer et de créer des raccourcis Office 2016, et d'activer la license.</p>";
    } else if (index === 8) {
        modalContent.innerHTML = "<p class='margin-modal title-modal'>Objectif : Concevoir des règles opérationnelles</p><p class='margin-modal'>  Temps : 6 mois</p> <p class='margin-modal'>Équipe : 8 personnes</p> <p class='margin-modal'>Ce projet consiste en créer des règles opérationnelles, des sortes de script sans code, qui crée des fonctions, qui déclenchent elles-même des actions lors d'événement précis. Par exemple, une règle opérationnelle permettant l'exécution d'un logiciel métier au démarrage de l'ordinateur.</p> <p class='margin-modal'> Ces règles opérationnelles sont chez Orpea, créées grâce au logiciel BMC, qui permet de faire énormément de chose sur un parc informatique.</p><p class='margin-modal'> Dans ces règles opérationnelles, il est possible d'effectuer des centaines d'actions différentes, et de les mettre bout à bout pour créer des règles très complexe. Plusieurs de mes Script Bash que j'ai créé dans mon autre projet ont été utilisé entièrement ou partiellement dans ces règles opérationnelles.</p> <p class='margin-modal'>Le cahier des charges a été défini par le responsable déploiement, et contenait pas moins d'une centaine de règle opérationnelles à créer.</p><p class='margin-modal'> Ce projet était vraiment très intéressant et enrichissant car je ne connaissait pas ce principe de règle opérationnelles</p>";
    } else if (index === 9) {
        modalContent.innerHTML = "<p class='margin-modal title-modal'> Objectif : Wi-Fi et réseau</p><p class='margin-modal'>  Temps : indéfini</p> <p class='margin-modal'>Équipe : modulable</p> <p class='margin-modal'>Ce projet est très important pour Orpea, car depuis 2 ans, l'entreprise embauche beaucoup, et les locaux actuel commencent à devenir petit pour autant de collaborateur. Orpea a donc décidé de louer 4 étages d'une tour situé à 150 mètres du siège actuel.</p><p class='margin-modal'> Notre mission est de mettre à disposition un Wi-Fi, un réseau de cable éthernet, et un réseau de salle de réunion. Au début du projet il y a d'abord eu de multiples réunions, pour répartir les équipes et les tâches à effectuer. Personnellement Je me suis occupé du branchement des câbles dans la baie. Ce n'est pas le point le plus passionnant mais je ne l'avait que très rarement fait donc j'ai pu comprendre comment fonctionnait une baie de brassage, et comment brancher les cables sur un switch.</p> <p class='margin-modal'> Ensuite j'ai aidé l'équipe réseau à configurer les VLANs, et placer les Sortie réseau des salles de réunions sur un VLAN différent. Lors de ce projet il y a eu de multiples péripétie, notamment le fait que j'ai du refaire le brassage une fois, car les switchs installés par une autre équipe n'était pas en POE, donc de multiples outils ne pouvaient pas fonctionner </p> <p class='margin-modal'> Le déménagement des équipes est prévu pour la première moitié de 2024, donc tout doit être fonctionnel prochainement.";
    } else if (index === 10) {
        modalContent.innerHTML = "<p class='margin-modal title-modal'>Objectif : Automatisation et remise en ordre de l'outil de ticketing</p><p class='margin-modal'>  Temps : 1 semaine</p> <p class='margin-modal'>Équipe : 3 personnes</p> <p>Orpea utilise un outil de ticketing appelé ServiceNOW(SNOW), depuis maintenant 4 ans. Lorsque je suis arrivé dans l'entreprise en Septembre 2022, je n'avait rien remarqué d'étrange, mais c'est quelques mois plus tard, en utilisant régulièrement l'outil, que j'ai compris qu'il était mal configuré. Les formulaires de création de tickets comportaient des options inutiles, des champs avec des noms pouvant porter à confusion. Les techniciens niveau 2 s'étaient déjà plaint de cette problématique de configuration, car c'est un problème auxquelles ils font face chaque jour car ils utilisent cet outil continuellement. Leur travail en est donc impacté et leur productivité bridée>. C'est pour quoi une reconfiguration de l'outil est nécessaire. Dans ce projet, j'ai certe fait des modifications moi-même, mais ce sont en grande partie mes collègues qui s'en sont occupés. Cependant j'ai proposé de multiples idées de changement.</p>";
    } else if (index === 11) {
        modalContent.innerHTML = "Modale 11";
    } else if (index === 12) {
        modalContent.innerHTML = "Modale 12";
    } else if (index === 13) {
        modalContent.innerHTML = "Modale 13";
    } else if (index === 14) {
        modalContent.innerHTML = "Modale 14";

    }



    modal.style.display = 'flex';
}

// Fonction pour fermer la fenêtre modale
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}


document.getElementById('hamburger-menu').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('display');
});