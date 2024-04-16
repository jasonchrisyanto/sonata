let list = document.getElementById("list")

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => {
    console.log(data)

    for(const [i, d] of data.products.entries()) {
        list.innerHTML += `<div class = "col-lg-6">
            <div class="row">
                <div class="col-lg-6 p-2">
                <img src="${d.thumbnail}" class="rounded d-block w-100">
            </div>
            <div class="col-lg-6 p-2">
                <h2>${d.title}</h2>
                ${d.description}
                <br />Price : ${d.price}
                <br />Disc : ${d.discountPercentage}
                <br />Stock : ${d.stock}
            </div>
        </div>`;
    }
})