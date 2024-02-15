const div = document.getElementById("productList");
let db = [];

async function getProduct() {
    const response = await axios.get("https://65675cba64fcff8d73103f34.mockapi.io/xpolee");
    const data = response.data;
    db = data;
    data.forEach(item => {
        if (item.count === undefined) {
            item.count = 1;
        }
        if (item.title.startsWith("Fortnite")) { 
            const box = document.createElement("tr");
            box.className = 'boxDiv';
            box.innerHTML = `
                <td class="title">${item.title}</td>
                <td class="price">${item.price}</td>
                <td>
                    <input data-id="${item.id}" class="number_type" type="number" min="1" step="1" value="${item.count}" name="quantity">
                </td>
                <td class="last_th">
                    <button onclick="addTobasket(${item.id})">
                        <i class="fa-solid fa-basket-shopping"></i><span>Sifariş et</span>
                    </button>
                </td>
            `;
            div.appendChild(box);
        }
    });
}

function addTobasket(index) {
    const inputElement = document.querySelector(`input[data-id="${index}"]`);
    const count = parseInt(inputElement.value); 
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let productItem = cart.find(item => item.id == index);
    if (productItem) {
        productItem.count = count; 
    } else {
        const newItem = {...db.find((item) => item.id == index), count: count};
        cart.push(newItem);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}

window.onload = () => {
    getProduct();
};


function updateCartIcon() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let count = 0;
    cart.forEach(item => {
        count += item.count;
    });

    const basketCount = document.getElementById('basket-count');
    basketCount.textContent = count; 
}

window.onload = () => {
    getProduct();
    updateCartIcon();
};