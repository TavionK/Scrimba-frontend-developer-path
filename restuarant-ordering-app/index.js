import { menuArray } from "/data.js"

const cart = []
document.addEventListener('click', function(e){
    if (e.target.dataset.id){
    addToCart(e.target.dataset.id)
    }
    else if (e.target.dataset.index){
        removeFromCart(e.target.dataset.index)
    }
})

function addToCart(id){
    menuArray.forEach(function(food){
        if (food.id == id){
            cart.push(food)
        }
    });
    getCartHtml()
}

function getCartHtml(){
    const cartHtml = cart.map(function(food, index){
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

    const totalPrice = cart.reduce(function(total, current){
        return total + current.price
    },0)
    if (cart.length > 0){
        document.getElementById('cart').innerHTML = `
        <p class="order-header">Your Order</p>
        ${cartHtml.join("")}
        <hr>
        <div class = "cart-price">
            <p>Total price:</p>
            <p>$${totalPrice}</p>
        </div>
        <button class="green-btn">Complete order</button>`
    }
    else {
        document.getElementById('cart').innerHTML = ""
    }
}

function removeFromCart(index){
    cart.splice(index, 1)
    getCartHtml()
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

function render(){
    document.getElementById('menu').innerHTML = getMenuItemsHtml().join("")
}

render()