class product {
    constructor(id,name,price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class item{
    constructor(product,quantity){
        this.product = product;
        this.quantity = quantity;
    }
    //calculate the total price
    total(){
        return this.product.price * this.quantity;
    }   
}
class cart{
    constructor(){
        this.ShoppingCartItem =[];
    }
    //create products
     addToCart(product,quantity){
        this.ShoppingCartItem.push(new item(product,quantity));
    }
    //total of elements inside of cart
    totalitems(){
        return this.ShoppingCartItem.reduce((total,item)=>total+item.total(),0);
    }
    //display elements inside of cart
     displayCart(){
        console.log("Cart :");
        this.ShoppingCartItem.forEach(item=>{
            console.log(`- ${item.product.name} x ${item.quantity}`);
        });
    }
    //delete elements of the cart
     deleteItem(product){
        this.ShoppingCartItem =this.ShoppingCartItem.filter(item=>item.product.id !==product.id);
    }

}
//create products
const product1= new product((1,"socks",20));
const product2= new product((2,"bag",50));
const product3= new product((3,"baskets",100));
//create cart
const shoppingCart = new cart();
shoppingCart.addToCart(product1, 2);
shoppingCart.addToCart(product2, 1);
shoppingCart.addToCart(product3, 1);
// display the cart
shoppingCart.displayCart();
// total of the cart
console.log(shoppingCart.totalitems());
// delete a product
shoppingCart.deleteItem(product2);
