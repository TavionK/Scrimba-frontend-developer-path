import { menuArray } from "/data.js"

const cart = []
const checkoutForm = document.getElementById("checkout-form")
document.addEventListener('click', function(e){
    if (e.target.dataset.id){
    addToCart(e.target.dataset.id)
    }
    else if (e.target.dataset.index){
        removeFromCart(e.target.dataset.index)
    }
    else if (e.target.dataset.order){
        showCheckoutHtml()
    }
})

checkoutForm.addEventListener('submit', function(e){
    e.preventDefault()
    const formData = new FormData(checkoutForm)
    const name = formData.get('name')
    hideCheckoutHtml()
    renderThanksHtml(name)    
})
function removeFromCart(index){
    cart.splice(index, 1)
    getCartItemsHtml()
}

function addToCart(id){
    menuArray.forEach(function(food){
        if (food.id == id){
            cart.push(food)
        }
    });
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

function showCheckoutHtml(){
    checkoutForm.style.visibility = "visible"
}

function hideCheckoutHtml(){
    checkoutForm.style.visibility = "hidden"
}

function renderThanksHtml(name){
    const thanksHtml = `
    <div class="thank-you-div">
        <p class="thank-you">Thanks, ${name}! Your order is on its way!</p>
    </div>`
    renderCart(thanksHtml)
}

function getCartTotalPrice(){
    return cart.reduce(function(total, current){
        return total + current.price
    }, 0)
}

// Render Functions
function renderMenu(){
    document.getElementById('menu').innerHTML = getMenuItemsHtml().join("")
}

function renderCart(htmlStr){
    document.getElementById('cart').innerHTML = htmlStr
}

renderMenu()