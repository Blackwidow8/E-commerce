const singleProduct = document.querySelector('.single-product')

const data = localStorage.getItem ('singleProduct')
const product = JSON.parse(data)
console.log(product)

singleProduct.innerHTML=`
<div class="card" style="width: 18rem;">
 <img src="${product.image}" class= "card-img-top" alt=""/>
  <div class="card-body">
   <h5 class="card-title">${product.image}</h5>
   <p class="card-text">${product.description}</p>
   <button onclick="fetchSingle(${product.id})" class="btn btn-primary">View Product</a>
  </div>
</div>
`;

