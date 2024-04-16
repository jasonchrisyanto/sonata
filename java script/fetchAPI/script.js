fetch('https://dummyjson.com/quotes')
.then(res => res.json())
.then(data => {
    console.log(data)
    console.log(data.limit);
    console.log(data.total);
    console.log(data.quotes);

    document.getElementById
    ("total").innerHTML = data.total

    for(const [i, d] of data.quotes.entries()) {
        document.getElementById("list").innerHTML += `<li>${d.quote} - ${d.author}</li>`
    }
})