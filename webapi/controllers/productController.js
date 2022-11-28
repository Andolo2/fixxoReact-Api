

const express = require ('express')
const controller = express.Router()
let products = require('../data/simulated_database')



 controller.param("articleNumber", (req, res, next, articleNumber) => {

    req.products = products.find(products => products.articleNumber == articleNumber)
    next()
    
    }) 

// POST - CREATE - SKAPA PRODUKT /////////////////////////////////////////////////////////////////////////////////////

//  http://localhost:5000/api/products

controller.post ('/', (httpRequest, httpResponse) => {

    let product = {

        articleNumber: (products[products.length -1 ])?.articleNumber  > 0 ? (products[products.length -1 ]) ?.articleNumber + 1 : 1,
        name: httpRequest.body.name ,
        description: httpRequest.body.description ,
        category: httpRequest.body.category ,
        price: httpRequest.body.price ,
        rating: httpRequest.body.rating ,
        imageName: httpRequest.body.imageName ,
       
    }

    products.push(product)
	httpResponse.status(201).json(product)
   
})


// GET - READ - HÄMTA ALLA PRODUKTER /////////////////////////////////////////////////////////////////////////////////////

controller.get('/', (httpRequest, httpResponse) => {

    httpResponse.status(201).json(products)
}) 



module.exports = controller