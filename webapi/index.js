const port = process.env.PORT || 5000
const express = require('express')
const app = express()
const cors = require('cors')




// middleWare

app.use(cors())
app.use(express.json())

//app.listen(cors, console.log(`cors is running ${cors}`))

const productController = require('./controllers/productController')
app.use('/api/products', productController)






app.listen(port, console.log(`app in running on ${port}`))



