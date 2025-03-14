import { menuArray } from "/data.js"

const cart = []
document.addEventListener('click', function(e){
    if (e.target.dataset.id){
    addToCart(e.target.dataset.id)
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
    const cartHtml = cart.map(function(food){
        return `
        <div class="cart-item">
            <div class="cart-item-info">
                <p>${food.name}</p>
                <p class="lighter">remove</p>
            </div>
            <div>
                <p>$${food.price}</p>
            </div>
        </div>`
    })

    console.log(cartHtml)

    const totalPrice = cart.reduce(function(total, current){
        return total + current.price
    },0)

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
                <img class="add-cart-btn" class="add-cart-btn" src="/images/add-btn.png" role="button" data-id="${food.id}">
            </div>
        </div>`
    })
    console.log(menuItemsHtml)
    return menuItemsHtml
}

function render(){
    document.getElementById('menu').innerHTML = getMenuItemsHtml().join("")
}

render()