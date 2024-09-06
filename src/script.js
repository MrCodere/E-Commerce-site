let price = 30;
let quantity = document.getElementById("numberText");
let addBtn = document.getElementById("addBtn");
let subBtn = document.getElementById("subBtn");
let startNumber = 1;
let totalPrice = document.getElementById("totalPrice");
let greenBottle = document.getElementById("color1");
let greyBottle = document.getElementById("color2");
let blackBottle = document.getElementById("color3");
let discountCode = document.getElementById("discountCode");
let applyDiscount = document.getElementById("apply-Discount");
let button1 = document.getElementById("size500")
let button2 = document.getElementById("size1L")

function updateCounter() {
    quantity.textContent = startNumber;
    totalPrice.textContent = "TOTAL PRICE: £" + (startNumber * price).toFixed(2);
}

addBtn.addEventListener("click", function() {
    startNumber++;
    updateCounter();
});

subBtn.addEventListener("click", function() {
    if (startNumber > 1) {
        startNumber--;
        updateCounter();
    }
});

function colorChange1() {
    let img = document.getElementById("img");
    img.src = 'bottle_forest_green-removebg-preview.png';
}

function colorChange2() {
    let img = document.getElementById("img");
    img.src = 'bottle_sun_orange-removebg-preview.png';
}

function colorChange3() {
    let img = document.getElementById("img");
    img.src = 'bottle_black-removebg-preview.png';
}

function colorChange4() {
    let img = document.getElementById("img");
    img.src = 'ocean_blue-removebg-preview.png';
    }

applyDiscount.addEventListener("click", function() {
    let finalPrice = startNumber * price;
    if (discountCode.value === "SIMPLEBOTTLE") {
        finalPrice *= 0.9;
    }
    totalPrice.textContent = "TOTAL PRICE: £" + finalPrice.toFixed(2);
});

function changeBc1(){
    button1.style.color = "white"
    button1.style.backgroundColor = "black"
    button2.style.color = "black"
    button2.style.backgroundColor = "white"
}

function changeBC(){
    button2.style.color = "white"
    button2.style.backgroundColor = "black"
    button1.style.color = "black"
    button1.style.backgroundColor = "white"
}

updateCounter();
