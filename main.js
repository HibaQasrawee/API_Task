async function getProduct() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const products = data.products;
    const result = products.map(function (ele) {
        return `
        <h2>${ele.title}</h2> 
        <p>${ele.description}</p>
        <p>${ele.category}" <p/>
        <p>${ele.brand}" <p/>
        `;
    }).join('');
    document.querySelector(".products").innerHTML = result;
}

getProduct();
