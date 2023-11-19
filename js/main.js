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


document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez l'élément à partir du DOM
    var elementToHighlight1 = document.getElementById("elementToHighlight1");
    var elementToHighlight2 = document.getElementById("elementToHighlight2");
    var elementToHighlight3 = document.getElementById("elementToHighlight3");
    var elementToHighlight4 = document.getElementById("elementToHighlight4");
    var elementToHighlight5 = document.getElementById("elementToHighlight5");
    var elementToHighlight6 = document.getElementById("elementToHighlight6");
    var elementToHighlight7 = document.getElementById("elementToHighlight7");
    var elementToHighlight8 = document.getElementById("elementToHighlight8");

    // Ajoutez un gestionnaire d'événements au clic
    elementToHighlight1.addEventListener("click", function () {
        // Ajoutez la classe "highlighted" à l'élément
        elementToHighlight1.classList.toggle("highlighted");
        elementToHighlight4.classList.toggle("display1");
        elementToHighlight5.classList.toggle("display2");

        console.log(elementToHighlight1.classList)
    });

    elementToHighlight2.addEventListener("click", function () {
        // Ajoutez la classe "highlighted" à l'élément
        elementToHighlight2.classList.toggle("highlighted");
        elementToHighlight6.classList.toggle("display3");
        elementToHighlight7.classList.toggle("display4");
        console.log(elementToHighlight2.classList)
    });

    elementToHighlight3.addEventListener("click", function () {
        // Ajoutez la classe "highlighted" à l'élément
        elementToHighlight3.classList.toggle("highlighted");
        console.log(elementToHighlight3.classList)
    });

});
