function sortArticles(ev) {
    console.log("123");
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
            const dateA = a.querySelector(".date").dataset.date;
            const dateB = b.querySelector(".date").dataset.date;
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
        modalContent.textContent = "Modale 1";
    } else if (index === 2) {
        modalContent.textContent = "Modale 2";
    } else if (index === 3) {
        modalContent.textContent = "Modale 3";
    } else if (index === 4) {
        modalContent.textContent = "Modale 4";
    } else if (index === 5) {
        modalContent.textContent = "Modale 5";
    } else if (index === 6) {
        modalContent.textContent = "Modale 6";
    } else if (index === 7) {
        modalContent.innerHTML = "Objectif : Concevoir des scripts Bash <br><br>  Temps : 1 mois <br><br> Équipe : 1,5 personne <br><br> Ces scripts Bash ont été implémentés dans l'image Windows, ce qui permet directement lors de l'installation de Windows, d'apporter des modifications lors de la réinitialisation ou la mise en service d'un nouveau PC. Ce projet a duré un mois, j'ai été aidé uniquement par le responsable déploiement. Il n'y a pas eu de cahier des charges vraiment défini. Les scripts que j'ai codé ont permis d'installer automatiquement des drivers, de lancer des mise à jour grâce à l'outil Dell Command Update, D'installer et de créer des raccourcis Office 2016, et d'activer la license.";
    } else if (index === 8) {
        modalContent.textContent = "Ce projet ";
    } else if (index === 9) {
        modalContent.textContent = "Modale 9";
    } else if (index === 10) {
        modalContent.textContent = "Modale 10";
    }


    modal.style.display = 'flex';
}

// Fonction pour fermer la fenêtre modale
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}