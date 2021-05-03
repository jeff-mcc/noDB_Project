const express = require('express')

const app = express()
const port = 3030;

const inventoryCtrl = require('./controllers/inventoryController')

app.use(express.json())

app.get('/smallbusiness/store', inventoryCtrl.getItems)
app.post('/smallbusiness/store', inventoryCtrl.addItem)
app.delete('/smallbusiness/store/:id', inventoryCtrl.deleteItem)
app.put('/smallbusiness/store/:id', inventoryCtrl.editItem)
app.get('/smallbusiness/store/:id/:name', inventoryCtrl.getBus)
app.put('/smallbusiness/store/:id/:name', inventoryCtrl.editBus)

app.listen(port,()=>console.log(`Server is eating tacos on port: ${port}`))