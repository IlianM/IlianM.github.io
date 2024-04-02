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