 
var cart = []; //will be used throughout to append and delete items in cart
var quantity;
var glazing;
var price;


//object
function bun(quantity, glazing, price) {
    this.quantity = quantity;
    this.glazing = glazing;
    this.price = price;
}

//below are different options users can pick (quantity and glazing)
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

        //store it to local storage
        var JSONcart = JSON.stringify(cart);
        localStorage.setItem("cart", JSONcart);
    }

}

//update everything in cart when shopping cart page loads
function updateCart() {
    //retrieve cart information
    var getJSON = localStorage.getItem("cart");
    var inCart = JSON.parse(getJSON);

    //change content of page depending on choices user made
    document.getElementById("cartItems").innerHTML = "";

    //if cart is empty, page prompts users to look at products
    if(document.getElementById("cartQ").value == 0){
        document.getElementById("cartItems").innerHTML = "Go take a look at our delicious buns!";

    //if cart not empty, show items in cart
    }
    for (var i = 0; i < inCart.length; i++){

        //code inspiration from https://www.w3schools.com/js/js_htmldom_nodes.asp
        var originalBun = document.createElement("p");
        originalBun.append("Flavor: Original");

        var cartItem = document.getElementById("cartItems");
        cartItem.appendChild(originalBun);

        //create new div for cart items
        var product = document.createElement("div");

        //new element for quantity of buns
        var qty = document.createElement("p");
        var qtyText = document.createTextNode("Quantity: " +inCart[i][0]);
        qty.appendChild(qtyText);
        product.append(qty);

        //new element for glazing of buns
        var glz = document.createElement("p");
        var glzText = document.createTextNode("Glazing: " +inCart[i][1]);
        glz.appendChild(glzText);
        product.append(glz);

        //new element for price of buns
        var price = document.createElement("p");
        var priceText = document.createTextNode("Price: " +inCart[i][2]);
        price.appendChild(priceText);
        product.append(price);

        //sets delete emoji which onclick, delete item from cart
        var deletion = document.createElement("a");
        deletion.innerHTML = "&#10060"; //red deletion emoji
        deletion.setAttribute("onclick", "deleteItem(this);"); 
        deletion.setAttribute("value", "Delete");
        deletion.setAttribute("name", i);
        console.log(i);
        product.append(deletion);

        var end = document.getElementById("cartItems");
        end.append(product);
    }
    document.getElementById("cartQ").value = inCart.length;

}

//code partially from https://codepen.io/lukashavenga/pen/JJBxwx?editors=0010
function deleteItem(item) {

    //delete items if cart isn't empty
    if(document.getElementById('cartQ').value != 0){

        var JSONc = localStorage.getItem("cart");
        var newCart = JSON.parse(JSONc);

        //deletes item based on the index
        var i = item.getAttribute("name");
        newCart.splice(i , 1);

        //store new cart 
        var JSONstring = JSON.stringify(newCart);
        localStorage.setItem("cart", JSONstring);

        document.getElementById('cartQ').value = newCart.length;
    }
    updateCart();
}