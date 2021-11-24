// Link to restaurant images (local files)
const restaurantArray = [
    "./images/cactusclub.jpeg",
    "./images/joeyrestaurant.png",
    "./images/miku.jpeg",
    "./images/topofvanvouver.jpeg",
    
];

// Access img and button elements
const restaurant = document.querySelector("img");
const button = document.querySelector("button");

// Generate new selection on click
button.addEventListener("click", () => generateRandomRestaurant(restaurantArray));
button.addEventListener("click", () => change());

let arrayEnd = restaurantArray.length;

// Function to get random restaurant
function generateRandomRestaurant(array){
        let randomNum = Math.floor(Math.random() * array.length);
        restaurant.setAttribute("src", array[randomNum]);
}


// Function to change button text after first click
function change(){
    button.innerHTML = "Choose Another";
}

