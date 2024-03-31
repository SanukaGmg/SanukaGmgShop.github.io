function scrollToSection() {
  let section = document.getElementById('product-container');
  section.scrollIntoView({ behavior: 'smooth' });
}

function openCart(){
  let cart_space = document.getElementById('cart');
  cart_space.style.opacity = 1;
}

let price_array = [];

if (document.getElementById("cart-items").childElementCount === 0){
  document.getElementById("total-area").textContent = "Cart is empty";
}

function addToCart(name, price, productId) {
  let quantityInputId = "quantity" + productId;
  let quantity = parseInt(document.getElementById(quantityInputId).value);
  
  // Check if the product has color and size options
  if (document.getElementById('colour' + productId) && document.getElementById('size' + productId)) {
    let colourInputId = "colour" + productId;
    let sizeInputId = "size" + productId;
    let colour = document.getElementById(colourInputId).value;
    let size = document.getElementById(sizeInputId).value;

    let cartItem = document.createElement("li");
    cartItem.textContent = name + " - " + colour + " - " + size + " - Rs" + price + " x " + quantity;
    document.getElementById("cart-items").appendChild(cartItem.cloneNode(true));
    document.getElementById("cart-items-c").appendChild(cartItem.cloneNode(true));
  } else {
    // Product does not have color and size options
    let cartItem = document.createElement("li");
    cartItem.textContent = name + " - Rs" + price + " x " + quantity;
    document.getElementById("cart-items").appendChild(cartItem.cloneNode(true));
    document.getElementById("cart-items-c").appendChild(cartItem.cloneNode(true));
  }

  price_array.push(price * quantity);
  calcTotal();
}


function calcTotal() {
    let total = price_array.reduce((acc, curr) => acc + curr, 0);
    document.getElementById("total-area").textContent = "Total is: Rs" + total.toFixed(2); //add to total
    document.getElementById("total-area-c").textContent = "Total is: Rs" + total.toFixed(2); //add to checkout total
}

function resetCart() {
  // Reset cart items and total area
  document.getElementById("cart-items").innerHTML = "";
  document.getElementById("total-area").textContent = "";
  document.getElementById("cart-items-c").textContent = "";
  // Reset price_array
  price_array = [];
}

// Get a reference to the cart element
let cart_space = document.getElementById('cart');

// Add event listener to detect scrolling
window.onscroll = function() {
    // Get the vertical scroll position
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    //100 pixels 
    if (scrollPosition > 200) {
        // If scrolled past the threshold, set cart opacity to 0
        cart_space.style.opacity = 0;
    } else {
        // If not scrolled past the threshold, set cart opacity to 1
        cart_space.style.opacity = 1;
    }
}

function checkOut(){
  var overlay = document.getElementById("overlay");
  if (document.getElementById("cart-items").childElementCount === 0){
    alert("Your cart is empty");
  }else{
    if (overlay.style.display === "block") {
      overlay.style.display = "none"; // Hide the overlay
    } else {
      overlay.style.display = "block"; // Show the overlay
    }
  }

}

document.getElementById('colour1').addEventListener("change", changeImg1);

function changeImg1(){
  // Get the selected color value
  let colour = document.getElementById('colour1').value;
  // Get the image element
  let image = document.getElementById('product1_img');

  //image paths for different colors
  let imagePath = "";
  switch (colour) {
    case 'white':
      imagePath = "https://cdn.discordapp.com/attachments/1223965065204469780/1223970007399137371/product1_white.jpg?ex=661bc9e6&is=660954e6&hm=9d4cf2f8c32113ed3c333756078fce4ca5beda464879b8fd38ba04759f44f977&";
      break;
    case 'ivory':
      imagePath = "https://cdn.discordapp.com/attachments/1223965065204469780/1223970008041001010/product1_ivory.jpg?ex=661bc9e6&is=660954e6&hm=ced4205a5e2a3e7c937bebe445d6c3f4ff2e17ca8a9e6387642145ed3cc83127&";
      break;
    case 'lightblue':
      imagePath = "https://cdn.discordapp.com/attachments/1223965065204469780/1223970008338661506/product1_lightb.jpg?ex=661bc9e6&is=660954e6&hm=0ec3adc5f07faf895d076159020cb9281053a8398e040d5a2ca924fbeb755af2&";
      break;
    case 'mint':
      imagePath = "https://cdn.discordapp.com/attachments/1223965065204469780/1223970008644718682/product1_mint.jpg?ex=661bc9e6&is=660954e6&hm=b4bbf85771bb20cb287c6221cbfc07d02b13afb533616ae1b6e45f56b0b0d7c7&";
      break;
    case 'grey':
      imagePath = "https://cdn.discordapp.com/attachments/1223965065204469780/1223970007747137577/product1_grey.jpg?ex=661bc9e6&is=660954e6&hm=594089d438dc20497191e2a584de805b73167655dbd0aebd15ad57dfda68546f&";
      break;
    default:
      imagePath = "https://cdn.discordapp.com/attachments/1223965065204469780/1223970007399137371/product1_white.jpg?ex=661bc9e6&is=660954e6&hm=9d4cf2f8c32113ed3c333756078fce4ca5beda464879b8fd38ba04759f44f977&"; // Default image if color not found
  }

  // Set the image source to the selected color's image path
  image.src = imagePath;
}

document.getElementById('colour2').addEventListener("change", changeImg2);

function changeImg2(){
  // Get the selected color value
  let colour = document.getElementById('colour2').value;
  // Get the image element
  let image = document.getElementById('product2_img');

  //image paths for different colors
  let imagePath = "";
  switch (colour) {
    case 'white':
      imagePath = "https://cdn.discordapp.com/attachments/1223965065204469780/1223970096293216347/product2_white.jpg?ex=661bc9fb&is=660954fb&hm=130925bd6631de6beaf2be232dbbfa2caa6132d5646fb7aa7410c7b88c85adc4&";
      break;
    case 'ivory':
      imagePath = "https://cdn.discordapp.com/attachments/1223965065204469780/1223970097044131911/product2_ivory.jpg?ex=661bc9fb&is=660954fb&hm=293503ff94259d7f602dba513d2febfa56dbd5097489347ead12e0c7f34f79d7&";
      break;
    case 'lightblue':
      imagePath = "https://cdn.discordapp.com/attachments/1223965065204469780/1223970097358569523/product2_lightb.jpg?ex=661bc9fb&is=660954fb&hm=2d9cbbb0ceb2c9acaa4038a7c38a3ab600537722eac10ca3fcf53b591c5cd8e7&";
      break;
    case 'mint':
      imagePath = "https://cdn.discordapp.com/attachments/1223965065204469780/1223970097664884736/product2_mint.jpg?ex=661bc9fb&is=660954fb&hm=c842e72f8587d7ff0d0f37cf2ef50b58111b3a2341337d46d7be19732d4a43f9&";
      break;
    case 'grey':
      imagePath = "https://cdn.discordapp.com/attachments/1223965065204469780/1223970096700194838/product2_grey.jpg?ex=661bc9fb&is=660954fb&hm=85fa3e266c3555171f1730d5a4d41e490f8d7adadb84e83f5aff4415e84b3335&";
      break;
    default:
      imagePath = "https://cdn.discordapp.com/attachments/1223965065204469780/1223970097664884736/product2_mint.jpg?ex=661bc9fb&is=660954fb&hm=c842e72f8587d7ff0d0f37cf2ef50b58111b3a2341337d46d7be19732d4a43f9&"; // Default image if color not found
  }

  // Set the image source to the selected color's image path
  image.src = imagePath;
}

document.getElementById('colour4').addEventListener("change", changeImg4);

function changeImg4(){
  // Get the selected color value
  let colour = document.getElementById('colour4').value;
  // Get the image element
  let image = document.getElementById('product4_img');

  //image paths for different colors
  let imagePath = "";
  switch (colour) {
    case 'white':
      imagePath = "https://cdn.discordapp.com/attachments/1223965065204469780/1223970200454565888/mug_white.jpg?ex=661bca14&is=66095514&hm=efa9e00089a18400e9c2444bf7e647e3e4ec09f4dd0bdac15f92a85adff8dc2d&";
      break;
    case 'black':
      imagePath = "https://cdn.discordapp.com/attachments/1223965065204469780/1223970200941101076/mug_black.jpg?ex=661bca14&is=66095514&hm=0ef9e038d6a6945977bc1a04321ec060084279023831cfd00d981c67e544f6ec&";
      break;
    default:
      imagePath = "https://cdn.discordapp.com/attachments/1223965065204469780/1223970200454565888/mug_white.jpg?ex=661bca14&is=66095514&hm=efa9e00089a18400e9c2444bf7e647e3e4ec09f4dd0bdac15f92a85adff8dc2d&"; // Default image if color not found
  }

  // Set the image source to the selected color's image path
  image.src = imagePath;
}

document.getElementById('colour5').addEventListener("change",changeImg5);

function changeImg5(){
  let colour = document.getElementById('colour5').value;
  // Get the image element
  let image = document.getElementById('product5_img');

  //image paths for different colors
  let imagePath = "";
  switch (colour) {
    case 'coralblue':
      imagePath = "https://cdn.discordapp.com/attachments/1223965065204469780/1223970249494237194/coralblue.jpg?ex=661bca1f&is=6609551f&hm=ebf75b41ac97dc265549d3c4c2e15bc4e0288e50028ae5627d0dcac49650fadd&";
      break;
    case 'navyblue':
      imagePath = "https://cdn.discordapp.com/attachments/1223965065204469780/1223970249074802828/navy.jpg?ex=661bca1f&is=6609551f&hm=22d1070854ab03eeb2e0a04f5e73b68d15fcb82b87d7f97950c478da4253d78b&";
      break;
    case 'cream':
      imagePath = "https://cdn.discordapp.com/attachments/1223965065204469780/1223970249909731378/cream.jpg?ex=661bca1f&is=6609551f&hm=820e18fcb7c3589114d2203dfa5234e1f53655aab781d0d3bc005ba8eb3f9202&";
  }

  // Set the image source to the selected color's image path
  image.src = imagePath;
}

function resetForms() {
  document.getElementById('form1').reset();
  document.getElementById('form2').reset();
  document.getElementById('form3').reset();
}

function submitForms() {
  document.getElementById('form1').submit();
  document.getElementById('form2').submit();
  document.getElementById('form3').submit();
}
