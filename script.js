// Exercice 1
function footerAlert() {
    footer = document.querySelector("footer")
    nombre_de_clique = 1
    footer.addEventListener("click", function() {
        alert("clique n° " + nombre_de_clique)
        nombre_de_clique++
    })
}
footerAlert()

//exo 2 

function hamburger_menu() {
    nav = document.getElementById("navbarHeader")
    hambuger = document.querySelector("button", ".navbar-toggler")
        // navbar-toggler qui ouvre le navbar 
    hambuger.addEventListener("click", function() {
        nav.classList.toggle("collapse")
    })
}

hamburger_menu()

// exo 3

function text_rouge() {
    edit_premiere_carte_button = document.querySelectorAll(".btn-outline-secondary")[0]
        // on créer une variable pour editer le button avec la class ".btn-outline-secondary"
    text_carte_prems = document.querySelectorAll(".card-text")[0]
        // on va créer une variable pour modfier le texte  seulement la première carte. 
    edit_premiere_carte_button.addEventListener("click", function() {
        //  on va ajouter une fonction  click 
        text_carte_prems.style.color = "red"
            // on peut styliser en RED 
    })
}

text_rouge()



//exo 4



function texte_vert() {
    edit_deuxieme_carte_button = document.querySelectorAll(".btn-outline-secondary")[1]

    text_carte_deuxieme = document.querySelectorAll(".card-text")[1]
    nombre_de_clique = 1
    edit_deuxieme_carte_button.addEventListener("click", function() {
        nombre_de_clique++
        if (nombre_de_clique % 2 == 0) {
            text_carte_deuxieme.style.color = "green"
        } else {
            text_carte_deuxieme.style.color = "rgb(33, 37, 41)"
        }
    })
}
texte_vert()


function nuclearPage() {
    navbar = document.querySelector("header")
    bootstrap = document.querySelector("head").querySelector("link")
    nombre_de_clique = 1
    navbar.addEventListener("dblclick", function() {
        nombre_de_clique++
        if (nombre_de_clique % 2 == 0) {
            bootstrap.setAttribute("href", "#")
        } else {
            bootstrap.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css")
        }
    })
}

nuclearPage()

// Exo 6

function cardsView() {
    viewButtons = document.querySelectorAll("button.btn.btn-sm.btn-success")
    viewButtons.forEach(function(el) {
        el.addEventListener("mouseover", function(e) {
            card = e.target.offsetParent.offsetParent.offsetParent
            text = card.firstElementChild.lastElementChild.firstElementChild
            if (card.style.maxWidth != "20%") {
                text.hidden = true
                card.style.maxWidth = "20%"
            } else {
                text.hidden = false
                card.style.maxWidth = "100%"
            }
        })
    })
}

cardsView()


// Exo 7
// 
function cardsRight() {
    row = document.querySelector(".album").firstElementChild.firstElementChild
    rightRow = document.querySelector("a.btn.btn-secondary.my-2")
    rightRow.addEventListener("click", function() {
        row.insertBefore(row.lastElementChild, row.firstElementChild)
    })
}
cardsRight()

// Exo 8

function cardsLeft() {
    row = document.querySelector(".album").firstElementChild.firstElementChild
    leftRow = document.querySelector("a.btn.btn-primary.my-2")
    leftRow.setAttribute("href", "#")
    leftRow.addEventListener("click", function() {
        row.insertBefore(row.firstElementChild, row.lastChild)
    })
}
cardsLeft()