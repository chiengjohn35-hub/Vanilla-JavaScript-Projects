const products ={
    data: [
        {
            productName: "black Men Jacket",
            category: "Jackets",
            price: "50",
            image: "assests/black-men-jacket.jpg",
        },
        {
            productName: "Pencils",
            category: "Pens",
            price: "5",
            image: "assests/pens1.png"
        },
        {
            productName: "Pens",
            category: "Pens",
            price: "3",
            image: "assests/pens2.jpg"
        },
        {
            productName: "Bule men Shirt",
            category: "T-Shirts",
            price: "14",
            image: "assests/Blue-men-shirt2.jpg"
        },
        {
            productName: "School Books",
            category: "Books",
            price: "5",
            image: "assests/school-books.jpg"
        },
        {
            productName: "Sport Shoes",
            category: "Shoes",
            price: "5",
            image: "assests/shoe3.jpg"
        },
        {
            productName: "Casual Shoes",
            category: "Shoes",
            price: "5",
            image: "assests/shoe2.jpg"
        },
        {
            productName: "Blue Men Jacket",
            category: "Jackets",
            price: "5",
            image: "assests/blue-men-jacket.jpg"
        },
        {
            productName: "White Men Shirt",
            category: "Shirts",
            price: "14",
            image: "assests/white-men-shirt.jpg"
        },
    ]
};



for(let i of products.data){
    // create card
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");


    // image container
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    // container
    let container = document.createElement("div");
    container.classList.add("container");

    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");;
    name.innerHTML = i.productName.toUpperCase();
    container.appendChild(name);

    //prduct price 
    let price = document.createElement("h5");
    price.classList.add("product-price");
    price.innerHTML = "$" + i.price;
    container.appendChild(price);


    
    card.appendChild(container);
    document.getElementById("products").appendChild(card);

}


// filter product function 
function filterProduct(value){
    // button class code
    let button = document.querySelectorAll(".button-value");
    button.forEach((button) =>{
        const btnText = button.innerText.trim();
        if (value.toLowerCase() === btnText.toLowerCase()){
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    // show/hide product cards based on filter
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (value.toLowerCase() === 'all') {
            card.classList.remove('hide');
            return;
        } else {
            card.classList.add("hide");
        }
        // check card classes case-insensitively
        const matches = Array.from(card.classList).some(c => c.toLowerCase() === value.toLowerCase());
        if (matches) card.classList.remove('hide'); else card.classList.add('hide');
    });
}


// search button click

document.getElementById("search").addEventListener("click", (e) => {

    e.preventDefault();

    // initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    // loop throuugh all elements
    elements.forEach((elements, index) => {

        // check if text includes the search value
        if (elements.innerText.includes(searchInput.toUpperCase())){
            cards[index].classList.remove("hide");
        } else {
            cards[index].classList.add("hide");
        }
    });
});



// initially display all products
window.onload = () => {
    filterProduct("all");
}