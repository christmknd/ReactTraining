//dépendances 
const express = require('express');
const app = express() :
const PORT = (process.env.PORT_BACKEND || 5000)

app.get('/', (req,res) => {
    res.send('Node Backend')
})

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
 
})