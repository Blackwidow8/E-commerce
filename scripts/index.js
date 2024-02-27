const showcaseContainer =document.querySelector('.showcase-container')

const fetchProducts = async ()=>{
    const response = await fetch ('https://fakestoreapi.com/products')
    const data = await response.json()
    data.forEach((product)=>{
    const card =document.createElement('div')
    
 
    card.innerHTML =`
        <div class="card" style="width: 18rem;">
        <img src="${product.image}" class= "card-img-top" alt=""/>
        <div class="card-body">
            <h5 class="card-title">${product.image}</h5>
            <p class="card-text">${product.description}</p>
            <button onClick="fetchSingle(${product.id})" class = "btn btn-primary"> View Product</button>
        </div>
       </div>

       
       `;
    

    showcaseContainer.appendChild(card)
   });

};

const fetchSingle = async (id)=>{
    const response = await fetch (`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    console.log(data)

    localStorage.setItem('singleProduct', JSON.stringify(data))
    window.location.href = 'product.html'
}

fetchProducts();