 
var cart = [];

var quantity;
var glazing;


//object
function bun(quantity, glazing) {
    this.quantity = quantity;
    this.glazing = glazing;
}

//add to cart and update number of items in cart 
function addToCart() {
    if(quantity !== null && glazing !== null){

        document.getElementById('cartQ').value = cart.length;
        localStorage.setItem("cart", JSON.stringify(cart));

        cart.push([bun.quantity, bun.glazing]);
        console.log(cart)
    }

}


//options users can pick 
function q1(){
    bun.quantity = document.getElementById("1bun").value;

}

function q2(){
    bun.quantity = document.getElementById("3bun").value;
}


function q3(){
    bun.quantity = document.getElementById("6bun").value;
}

function q4(){
    bun.quantity = document.getElementById("12bun").value;
}

function g1(){
    bun.glazing = document.getElementById("none").value; 
}

function g2(){
    bun.glazing = document.getElementById("sugar-milk").value;   
}

function g3(){
    bun.glazing = document.getElementById("vanilla-milk").value;   
}

function g4(){
    bun.glazing = document.getElementById("double-chocolate").value; 
}



