function changeImage(image) {
    document.getElementById("mainImage").src = image.src;
}

let quantity = 1;

function increaseQty() {
    quantity++;
    document.getElementById("qty").innerHTML = quantity;
}

function decreaseQty() {
    if (quantity > 1) {
        quantity--;
        document.getElementById("qty").innerHTML = quantity;
    }
}

function showTab(tabId) {

    document.getElementById("details").style.display = "none";
    document.getElementById("benefits").style.display = "none";
    document.getElementById("facts").style.display = "none";

    document.getElementById(tabId).style.display = "block";
}
let dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(function(button){

    button.addEventListener("click", function(){

        let answer = this.nextElementSibling;

        if(answer.style.display === "block"){
            answer.style.display = "none";
        }
        else{
            answer.style.display = "block";
        }

    });

});

let accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(function(button){

    button.addEventListener("click", function(){

        let content = this.nextElementSibling;
        let icon = this.querySelector("span");

        if(content.style.display === "block"){
            content.style.display = "none";
            icon.textContent = "+";
        }
        else{
            content.style.display = "block";
            icon.textContent = "-";
        }

    });

});