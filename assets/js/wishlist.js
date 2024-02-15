const div = document.getElementById('productsListx')

function getProducts () {
    div.innerHTML = ``
    let heart = JSON.parse(localStorage.getItem('heart')) || []
    console.log(heart);
    heart.map((item,index )=> {
        const box = document.createElement('div')
        box.className = "boxDivx col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12";
        box.innerHTML =`
        
        
        
        <img src="${item.image}" alt="">
        <p class="title">${item.title}</p>
        <p class="price">${item.price}</p>
        <button onclick="removeItem(${index})">Remove from heart</button>

        `
        div.appendChild(box)
    })
}

function removeItem (index) {
    let heart = JSON.parse(localStorage.getItem('heart')) || []
    heart.splice(index, 1)
    localStorage.setItem('heart', JSON.stringify(heart))
    getProducts()
}


   getProducts()