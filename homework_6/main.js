 
var cart = [];

var quantity;
var glazing;
var price;


//object
function bun(quantity, glazing, price) {
    this.quantity = quantity;
    this.glazing = glazing;
    this.price = price;
}

//if users chose quantity and glazing, add to cart and update number of items in cart 
function addToCart() {
    if(quantity !== null && glazing !== null){

        document.getElementById('cartQ').value = cart.length+1;

        if(bun.quantity == undefined){
            bun.quantity = 1;
            bun.price = 3;
        }

        if(bun.glazing == undefined){
            bun.glazing = "none";
        }

        cart.push([bun.quantity, bun.glazing, bun.price]);

        var JSONcart = JSON.stringify(cart);
        localStorage.setItem("cart", JSONcart);
    }

}

//show everything in cart when shopping cart page loads
function showCart() {
    //retrieve cart information
    var getJSON = localStorage.getItem("cart");
    var inCart = JSON.parse(getJSON);

    //change content of page depending on choices user made
    document.getElementById("cartItems").innerHTML = "";

    //if cart is empty, page says that there are no items in cart
    if(document.getElementById("cartQ").value == null){
        var noItem = document.createElement("p");
        var noItemText = document.createTextNode("There are no items in your cart!");
        noItem.append(noItemText);

    //if cart not empty, show items in cart
    } else {
        for (var i = 0; i < inCart.length; i++){

            //code inspiration from https://www.w3schools.com/js/js_htmldom_nodes.asp
            var originalBun = document.createElement("p");
            originalBun.append("Flavor: Original");

            var cartItem = document.getElementById("cartItems");
            cartItem.append(originalBun);


            //create new div for cart items
            var product = document.createElement("div");
            product.append(qty);

            var qty = document.createElement("p");
            var qtyText = document.createTextNode=inCart[i][0];
            qty.append(qtyText);

            var glz = document.createElement("p");
            var glzText = document.createTextnode = inCart[i][1];
            glz.append(glzText);
            product.append(glz);

            var price = document.createElement("p");
            var priceText = document.createTextnode = inCart[i][2];
            price.append(priceText);
            product.append(price);

            //set all items as a class called inCart
            product.setAttribute("class", "inCart");

            //set delete button



//different options users can pick (quantity and glazing)
function q1(){
    bun.quantity = 1;
    bun.price = document.getElementById("1bun").value;

    //update total price based on user's choice
    document.getElementsByName("total").value = bun.price;

}

function q2(){
    bun.quantity = 3;
    bun.price = document.getElementById("3bun").value;
    document.getElementsByName("total").value = bun.price;
}


function q3(){
    bun.quantity = 6;
    bun.price = document.getElementById("6bun").value;
    document.getElementsByName("total").value = bun.price;
}

function q4(){
    bun.quantity = 12;
    bun.price = document.getElementById("12bun").value;
    document.getElementsByName("total").value = bun.price;
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




