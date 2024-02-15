const div = document.getElementById('productsListx')

function getProducts () {
    div.innerHTML = ``
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    console.log(cart);
    cart.map((item,index )=> {
        const box = document.createElement('tr')
        box.className = "boxDivx col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12";
        box.innerHTML =`
        <td class="title">${item.title}</td>
        <td class="price">${item.price}</td>
        <td class="count">${item.count}</td>
        <td class="last_th">
        <button onclick="removeItem(${index})"><i class="fa-solid fa-trash-can"></i><span>Remove</span></button>
        </td>

        `
        div.appendChild(box)
    })
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart[index].count > 1) {
        cart[index].count -= 1;
    } else {
        cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    getProducts();
}


   getProducts()


   