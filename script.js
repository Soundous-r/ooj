class product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class item {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    // Calculate the total price
    total() {
        return this.product.price * this.quantity;
    }
}

class cart {
    constructor() {
        this.ShoppingCartItem = [];
    }
    // Add products to the cart
    addToCart(product, quantity) {
        this.ShoppingCartItem.push(new item(product, quantity));
    }
    // Total of elements inside the cart
    totalitems() {
        return this.ShoppingCartItem.reduce((total, item) => total + item.total(), 0);
    }
    // Display elements inside the cart
    displayCart() {
        console.log("Cart:");
        this.ShoppingCartItem.forEach(item => {
            console.log(`- ${item.product.name} x ${item.quantity}`);
        });
    }
    // Delete elements of the cart
    deleteItem(product) {
        this.ShoppingCartItem = this.ShoppingCartItem.filter(item => item.product.id !== product.id);
    }
}

// Create products
const product1 = new product(1, "socks", 20);
const product2 = new product(2, "bag", 50);
const product3 = new product(3, "baskets", 100);

// Create cart
const shoppingCart = new cart();
shoppingCart.addToCart(product1, 2);
shoppingCart.addToCart(product2, 1);
shoppingCart.addToCart(product3, 1);

// Display the cart
shoppingCart.displayCart();

// Total of the cart
console.log(shoppingCart.totalitems());

// Delete a product
shoppingCart.deleteItem(product2);

