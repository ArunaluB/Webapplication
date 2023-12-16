let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCartSpan = document.querySelector('.icon-cart span');
let  cartTranfer= [];
let TotalQTY = 0;
let itemQTY =0;
let TotalDis =0;

let listProducts = [];


let products = [
    {
        "id": 1,
        "type": "Burgers",
        "name": " Classic Burger (Large)",
        "price": 750.00,
        "Discount": 0,
        "image": "../img/Classic Burger (Regular) .jpg"
    },

    {
        "id": 2,
        "type": "Burgers",
        "name": " Classic Burger (Regular)",
        "price": 1500.00,
        "Discount": 15,
        "image": "../img/Classic Burger (Regular) .jpg"
    },

    {
        "id": 3,
        "type": "Burgers",
        "name": " Turkey Burger ",
        "price": 1600.00,
        "Discount": 0,
        "image": "../img/Turkey Burger.jpg"
    },

    {
        "id": 4,
        "type": "Burgers",
        "name": " Chicken Burger (Large)  ",
        "price": 1400.00,
        "Discount": 0,
        "image": "../img/Chicken Burger (Regular) .jpg"
    },

    {
        "id": 5,
        "type": "Burgers",
        "name": " Chicken Burger (Regular)  ",
        "price": 800.00,
        "Discount": 20,
        "image": "../img/Chicken Burger.jpg"
    },

    {
        "id": 6,
        "type": "Burgers",
        "name": " Cheese Burger (Large) ",
        "price": 1000.00,
        "Discount": 0,
        "image": "../img/nwcheese.jpg"
    },

    {
        "id": 7,
        "type": "Burgers",
        "name": " Cheese Burger (Regular) ",
        "price": 600.00,
        "Discount": 0,
        "image": "../img/Cheese Burger (Regular).jpg"
    },
    {
        "id": 8,
        "type": "Burgers",
        "name": " Bacon Burger  ",
        "price": 650.00,
        "Discount": 15,
        "image": "../img/Bacon Burger .jpg"
    },

    {
        "id": 9,
        "type": "Burgers",
        "name": " Shawarma Burger",
        "price": 800.00,
        "Discount": 0,
        "image": "../img/big.jpg"
    },
    {
        "id": 10,
        "type": "Burgers",
        "name": " Olive Burger",
        "price": 1800.00,
        "Discount": 0,
        "image": "../img/Olive Burger.jpg"
    },

    {
        "id": 10,
        "type": "Burgers",
        "name": " Double-Cheese Burger ",
        "price": 1250.00,
        "Discount": 20,
        "image": "../img/Double-Cheese Burger .jpg"
    },

    {
        "id": 11,
        "type": "Burgers",
        "name": " Crispy Chicken Burger (Regular)  ",
        "price": 1200.00,
        "Discount": 0,
        "image": "../img/Crispy Chicken Burger (Regular) .jpg"
    },
    {
        "id": 12,
        "type": "Burgers",
        "name": " Crispy Chicken Burger (Large) ",
        "price": 1600.00,
        "Discount": 10,
        "image": "../img/Crispy Chicken Burger (Large).jpg"
    },
    {
        "id": 13,
        "type": "Burgers",
        "name": " Paneer Burger",
        "price": 900.00,
        "Discount": 0,
        "image": "../img/Paneer Burger.jpg"
    },
    {
        "id": 14,
        "type": "Submarines",
        "name": "Crispy Chicken Submarine (Large) ",
        "price": 2000.00,
        "Discount": 0,
        "image": "../img/Crispy Chicken Submarine.jpg"
    },
    {
        "id": 15,
        "type": "Submarines",
        "name": "Crispy Chicken Submarine (Regular)",
        "price": 1500.00,
        "Discount": 0,
        "image": "../img/Crispy Chicken Submarine (Regular).jpg"
    },
    {
        "id": 16,
        "type": "Submarines",
        "name": "Chicken Submarine (Large)",
        "price": 1800.00,
        "Discount": 3,
        "image": "../img/Chicken Submarine (Large).jpg"
    },

    {
        "id": 17,
        "type": "Submarines",
        "name": "Chicken Submarine (Regular)",
        "price": 1400.00,
        "Discount": 0,
        "image": "../img/Chicken Submarine (Regular).jpg"
    },

    {
        "id": 18,
        "type": "Submarines",
        "name": "Grinder Submarine",
        "price": 2300.00,
        "Discount": 0,
        "image": "../img/Grinder Submarine .jpg"
    },


    {
        "id": 19,
        "type": "Submarines",
        "name": "Cheese Submarine",
        "price": 2200.00,
        "Discount": 0,
        "image": "../img/Cheese Submarine.jpg"
    },


    {
        "id": 20,
        "type": "Submarines",
        "name": "Double Cheese n Chicken Submarine",
        "price": 1900.00,
        "Discount": 16,
        "image": "../img/Double Cheese n Chicken Submarine.jpg"
    },
    {
        "id": 21,
        "type": "Submarines",
        "name": "Special Horgie Submarine",
        "price": 2800.00,
        "Discount": 0,
        "image": "../img/Special Horgie Submarine.jpg"
    },

    {
        "id": 22,
        "type": "Submarines",
        "name": "MOS Special Submarine ",
        "price": 3000.00,
        "Discount": 0,
        "image": "../img/MOS Special Submarine.jpg"
    },


    {
        "id": 23,
        "type": "Fries",
        "name": "Steak Fries (Large) ",
        "price": 1200.00,
        "Discount": 0,
        "image": "../img/Steak Fries (Large) .jpg"
    },

    {
        "id": 24,
        "type": "Fries",
        "name": "Steak Fries (Medium)  ",
        "price": 600.00,
        "image": "../img/Steak Fries (Medium).jpg"
    },

    {
        "id": 25,
        "type": "Fries",
        "name": "French Fries (Large)",
        "price": 800.00,
        "Discount": 0,
        "image": "../img/French Fries (Large) .jpg"
    },
    {
        "id": 26,
        "type": "Fries",
        "name": "French Fries (Medium) ",
        "price": 650.00,
        "Discount": 0,
        "image": "../img/French Fries (Medium) .jpg"
    },

    {
        "id": 27,
        "type": "Fries",
        "name": "French Fries (Small)",
        "price": 450.00,
        "Discount": 0,
        "image": "../img/French Fries (Small).jpg"
    },

    {
        "id": 28,
        "type": "Fries",
        "name": "Sweet Potato Fries (Large)",
        "price": 600.00,
        "Discount": 0,
        "image": "../img/Sweet Potato Fries.jpg"
    },


    {
        "id": 29,
        "type": "Pasta",
        "name": "Chicken n Cheese Pasta",
        "price": 1600.00,
        "Discount": 15,
        "image": "../img/Chicken n Cheese Pasta .jpg"
    },

    {
        "id": 30,
        "type": "Pasta",
        "name": "Chicken Penne Pasta",
        "price": 1700.00,
        "Discount": 0,
        "image": "../img/Chicken Penne Pasta.jpg"
    },

    {
        "id": 31,
        "type": "Pasta",
        "name": "Ground Turkey Pasta Bake ",
        "price": 2900.00,
        "Discount": 10,
        "image": "../img/Ground Turkey Pasta Bake .jpg"
    },


    {
        "id": 32,
        "type": "Pasta",
        "name": "Creamy Shrimp Pasta",
        "price": 2000.00,
        "Discount": 0,
        "image": "../img/Creamy Shrimp Pasta .jpg"
    },

    {
        "id": 33,
        "type": "Pasta",
        "name": "Lemon Butter Pasta ",
        "price": 1950.00,
        "Discount": 0,
        "image": "../img/Lemon Butter Pasta.jpg"
    },

    {
        "id": 34,
        "type": "Pasta",
        "name": "Tagliatelle Pasta  ",
        "price": 2400.00,
        "Discount": 1,
        "image": "../img/Tagliatelle Pasta.jpg"
    },


    {
        "id": 35,
        "type": "Pasta",
        "name": "Baked Ravioli",
        "price": 2000.00,
        "Discount": 1,
        "image": "../img/Baked Ravioli .jpg"
    },
    {
        "id": 36,
        "type": "Chicken",
        "name": "Fried Chicken (Small)",
        "price": 1200.00,
        "Discount": 0,
        "image": "../img/Fried Chicken (Regular).jpg"
    },


    {
        "id": 37,
        "type": "Chicken",
        "name": "Fried Chicken (Regular)",
        "price": 2300.00,
        "Discount": 10,
        "image": "../img/Fried Chicken (Small).jpg"
    },

    {
        "id": 38,
        "type": "Chicken",
        "name": "Fried Chicken (Large)",
        "price": 3100.00,
        "Discount": 5,
        "image": "../img/Fried Chicken (Large) .jpg"
    },
    {
        "id": 39,
        "type": "Chicken",
        "name": "Hot Wings (Large) ",
        "price": 2400.00,
        "Discount": 0,
        "image": "../img/Hot Wings .jpg"
    },
    {
        "id": 40,
        "type": "Chicken",
        "name": "Devilled Chicken (Large) ",
        "price": 900.00,
        "Discount": 0,
        "image": "../img/Devilled Chicken.jpg"
    },
    {
        "id": 41,
        "type": "Chicken",
        "name": "BBQ Chicken (Regular)",
        "price": 2100.00,
        "Discount": 0,
        "image": "../img/BBQ Chicken.jpg"
    },
    {
        "id": 42,
        "type": "Beverages",
        "name": "Pepsi (330ml)",
        "price": 990.00,
        "Discount": 5,
        "image": "../img/pesi.jpg"
    },
    {
        "id": 43,
        "type": "Beverages",
        "name": "Coca-Cola (330ml) ",
        "price": 1230.00,
        "Discount": 3,
        "image": "../img/Coca-Cola.jpg"
    },

    {
        "id": 44,
        "type": "Beverages",
        "name": "Sprite (330ml)",
        "price": 1500.00,
        "Discount": 0,
        "image": "../img/alB.jpg"
    },
    {
        "id": 45,
        "type": "Beverages",
        "name": "Mirinda (330ml)",
        "price": 850.00,
        "Discount": 7,
        "image": "../img/alB.jpg"
    },

];

let cart = []; // Declare the cart array


iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

const initApp = () => {
    // Initialize the listProducts array with the products array
    listProducts = [...products];
    addDataToHTML();
};

const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    if (listProducts.length > 0) {
        listProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = `
                <img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">RS${product.price}</div>
                <button class="addCart">Add To Cart</button>
            `;
            listProductHTML.appendChild(newProduct);


        });
    }
};

listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('addCart')) {
        let id_product = positionClick.closest('.item').dataset.id;
        addToCart(id_product);
        console.log('Product added to cart:', id_product);
    }
});
const addToCart = (product_id) => {
    let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
    if (cart.length <= 0) {
        cart = [{
            product_id: product_id,
            quantity: 1
            
        }];
    } else if (positionThisProductInCart < 0) {
        cart.push({
            product_id: product_id,
            quantity: 1
        });
    } else {
        cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
    addCartToMemory();
}
const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}
const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    TotalQTY =0;
    let totalQuantity = 0;
    if (cart.length > 0) {
        cart.forEach(item => {
            totalQuantity = totalQuantity + item.quantity;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.product_id;

            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];
            cartTranfer.push(products[positionProduct]);
            listCartHTML.appendChild(newItem);
            // infor load is ordee detals
            console.log(info)
            // Calculate total price
            let totalDis= ((info.price * item.quantity)*info.Discount)/100;
            TotalDis+=totalDis;
            TotalQTY  += info.price * item.quantity;
            newItem.innerHTML = `
            <div class="image">
                    <img src="${info.image}">
                </div>
                <div class="name">
                ${info.name}
                </div>
                <div class="totalPrice">RS${(info.price * item.quantity)-totalDis}</div>
                <div class="quantity">
                    <span class="minus">-</span>
                    <span>${item.quantity}</span>
                    <span class="plus">+</span>
                </div>
            `;
        })
    }
    
    itemQTY=totalQuantity;
    iconCartSpan.innerText = totalQuantity;
 
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if (positionClick.classList.contains('plus')) {
            type = 'plus';
        }
        changeQuantityCart(product_id, type);
    }
})
const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
    if (positionItemInCart >= 0) {
        let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
                break;

            default:
                let changeQuantity = cart[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    cart[positionItemInCart].quantity = changeQuantity;
                    TotalQTY += changeQuantity; // Fix the variable name here
                } else {
                    cart.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
    addCartToMemory();
}

// Function to display products based on the filter
function displayProducts(filter) {
    listProductHTML.innerHTML = ""; // Clear existing products

    // Filter products based on the selected type
    const filteredProducts = filter === "all" ? products : products.filter(product => product.type === filter);

    // Display filtered products
    filteredProducts.forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('item');
        newProduct.dataset.id = product.id;
        newProduct.innerHTML = `
            <img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">RS${product.price}</div>
            <button class="addCart">Add To Cart</button>
        `;
        listProductHTML.appendChild(newProduct);
    });
}

// Event listener for filter buttons
function filterProduct(type) {
    displayProducts(type);
}

// Initial display of all products
displayProducts("all");

function checkOutf() {
    
    console.log(itemQTY)
    console.log(TotalQTY);
    console.log(cartTranfer);
}




// Call the initApp function to initialize the app
initApp();

