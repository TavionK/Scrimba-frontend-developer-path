import { menuArray } from "/data.js"

const cart = []
document.addEventListener('click', function(e){
    console.log(e.target.dataset)
    if (e.target.dataset.id){
    addToCart(e.target.dataset.id)
    }
    else if (e.target.dataset.index){
        removeFromCart(e.target.dataset.index)
    }
    else if (e.target.dataset.order){
        console.log("button working")
        renderCheckout()
    }
    else if (e.target.dataset.pay){
        
    }
})

function addToCart(id){
    menuArray.forEach(function(food){
        if (food.id == id){
            cart.push(food)
        }
    });
    getCartItemsHtml()
}

function removeFromCart(index){
    cart.splice(index, 1)
    getCartItemsHtml()
}

function getCartItemsHtml(){
    const itemsHtml = cart.map(function(food, index){
        return `
        <div class="cart-item">
            <div class="cart-item-info">
                <p>${food.name}</p>
                <p class="lighter cursor" data-index="${index}">remove</p>
            </div>
            <div>
                <p>$${food.price}</p>
            </div>
        </div>`
    })

    getFullCartHtml(itemsHtml)
}

function getFullCartHtml(itemsHtml){
    const totalCartPrice = getCartTotalPrice()
    
    const fullCartHtml = `
        <p class="order-header">Your Order</p>
        ${itemsHtml.join("")}
        <hr>
        <div class = "cart-price">
            <p>Total price:</p>
            <p>$${totalCartPrice}</p>
        </div>
        <button data-order="true" class="green-btn cursor">Complete order</button>`
    
        cart.length > 0 ? renderCart(fullCartHtml) : renderCart("")
}

function getMenuItemsHtml() {
    const menuItemsHtml = menuArray.map(function(food){
        return `
        <div class = "food-card">
        <div class="food-info">   
        <div class="food-image">
        <p class="icon">${food.emoji}</p>
        </div>
        <div class="food-text">
        <p>${food.name}</p>
        <p class="lighter">${food.ingredients.join(", ")}</p>
        <p class="bold">$${food.price}</p>
        </div>
        </div>
        <div class="add-food">
        <img class="add-cart-btn cursor" class="add-cart-btn" src="/images/add-btn.png" role="button" data-id="${food.id}">
        </div>
        </div>`
    })
    return menuItemsHtml
}

// Functions that don't call another function
function getCartTotalPrice(){
    return cart.reduce(function(total, current){
        return total + current.price
    }, 0)
}

function render(){
    document.getElementById('menu').innerHTML = getMenuItemsHtml().join("")
}

function renderCart(cartHtml){
    document.getElementById('cart').innerHTML = cartHtml
}

function renderCheckout(){
    const checkoutHtml = `
    <form class="checkout-form">
          <p class="form-header">Enter card details</p>
          <input
            type="text"
            id="name"
            name="name"
            aria-label="Name"
            placeholder="Enter your name"
          />
          <input
            aria-label="Enter card number"
            type="number"
            id="card-number"
            name="card-number"
            placeholder="Enter card number"
          />
          <input
          aria-label="Enter CVV"
          type="number"
          id="cvv"
          name="cvv"
          placeholder="Enter CVV" />
          <button class="green-btn pay-btn cursor" data-pay="true">Pay</button>
        </form>`
    document.getElementById('checkout').innerHTML = checkoutHtml
}

render()
// showCheckout()