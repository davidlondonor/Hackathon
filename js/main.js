// fetch('https://app.fakejson.com/q', {
//     method: 'post',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         token: "oBnzdo7RVLm0AiuXnIIwXw",
//         "data": {
//             "_repeat": 50,
//             "id": "cryptoUUID",
//             "image": "personAvatar",
//             "name": "productName",
//             "price": "numberInt|0,100000",
//             "quantity": "numberInt",
//             "size": "productSize",
//             "status": "productOrderStatus"
//         }
//     })
// }).then(r => r.json()).then(console.log)

var arr = [{ "id": "f4e927ae-acd5-469a-b36e-371f16755802", "image": "https://robohash.org/scale.png?size=300x300", "name": "Danfind", "price": 90747, "quantity": 500, "size": "M", "status": "started" },

{ "id": "42b3d47c-9f41-4ccd-b914-8b35ffd4365f", "image": "https://robohash.org/thin.png?size=300x300", "name": "Onto-quo", "price": 42106, "quantity": 73, "size": "3XL", "status": "cancelled" },

{ "id": "dcf9c9a9-8389-4b58-b4e6-d252264808df", "image": "https://robohash.org/design.png?size=300x300", "name": "Tamlight", "price": 88334, "quantity": 585, "size": "2XL", "status": "in-progress" },

{ "id": "c8bc79dd-d664-4e06-8b5c-13075bb3dd0e", "image": "https://robohash.org/death.png?size=300x300", "name": "Greenstatstock", "price": 48527, "quantity": 619, "size": "XS", "status": "completed" },

{ "id": "22bdd38e-2fdf-4015-a453-feb02e158c0d", "image": "https://robohash.org/dad.png?size=300x300", "name": "True-don", "price": 43240, "quantity": 967, "size": "2XS", "status": "started" },

{ "id": "f49a3148-6fb1-4fbb-a163-0b2ba7e41e53", "image": "https://robohash.org/original.png?size=300x300", "name": "Stim-mat", "price": 27234, "quantity": 59, "size": "XL", "status": "cancelled" },

{ "id": "5ddce6fa-7193-4cef-a08b-997b9c6c32cd", "image": "https://robohash.org/log.png?size=300x300", "name": "Dinglambam", "price": 17522, "quantity": 458, "size": "3XL", "status": "completed" },

{ "id": "be35bc16-808b-44d8-9e74-4d64b357bceb", "image": "https://robohash.org/qui.png?size=300x300", "name": "Quotehothold", "price": 65614, "quantity": 185, "size": "M", "status": "in-progress" }]
var mishtres = document.querySelector('card-title')
let foriching = arr.forEach(myf)
function myf(x) {
    let creatediv = document.createElement('div')
    creatediv.className = 'card'
    let mycards = document.querySelector('.card-group')
    mycards.appendChild(creatediv)

    let createImg = document.createElement('img')
    createImg.src = x.image
    creatediv.appendChild(createImg)

    let bodycard = document.createElement('card-body')
    creatediv.appendChild(bodycard)

    let createhcinco = document.createElement('h5')
    createhcinco.className = 'card-title'
    createhcinco.innerHTML = x.name
    bodycard.appendChild(createhcinco)

    let createp = document.createElement('p')
    createp.className = 'card-text'
    createp.innerHTML = 'Este es mi precio ' + x.price
    bodycard.appendChild(createp)


}


let createabtn = document.createElement('a')
createabtn.href = 'http://www.cnn.com'
createabtn.className = 'btn btn-primary'
createabtn.innerHTML = 'Comprar'
bodycard.appendChild(createabtn)





