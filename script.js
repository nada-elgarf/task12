// let cat = document.getElementById("categories")
// let catArr = Array.from(cat)

allProduct = []
fetch('https://fakestoreapi.com/products').then((data) => {
  return data.json()
}).then((completedata) => {
  let data1 = ''
  allProduct = completedata
  allProduct.map((values) => {
    data1 += `<div class="card">
    <img src="${values.image}" alt="" class="img">
    <h1 class="title">
        title: ${values.title}
    </h1>
    <p class="rate">rate ${values.rating.rate}</p>
    <p class="category">category ${values.category}</p>
    <p class="price">price ${values.price}</p>
    </div> `
  })
  document.getElementById('cards').innerHTML = data1
}).catch((error) => {
  console.log(error)
})
//  let data1 = 
let catvalue = ''
document.getElementById('categories').addEventListener('change', function (e) {
  console.log(e.target.value)
  catvalue = e.target.value
  allProduct = []

  fetch(`https://fakestoreapi.com/products/category/${catvalue}`).then((data) => {
    return data.json()
  }).then((completedata) => {
    let item = ''
    allProduct = completedata
    allProduct.map((values) => {
      item = `<div class="card">
        <img src="${values.image}" alt="" class="img">
        <h1 class="title">
            title: ${values.title}
        </h1>
        <p class="rate">rate ${values.rating.rate}</p>
        <p class="category">category ${values.category}</p>
        <p class="price">price ${values.price}</p>
        </div> `
    })
    document.getElementById('cards').innerHTML = item
  })
})
fetch('https://fakestoreapi.com/products/categories').then((item) => {
  return item.json()
}).then((completeitem) => {
  console.log(completeitem)
  document.getElementById('cards').innerHTML = data2
}).catch((error) => {
  console.log(error)
})
