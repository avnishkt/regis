const express = require('express')


const app = express()

// middleware

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


// routers
const router = require('./routes/Router')
app.use('/api', router)




//port

const PORT = process.env.PORT || 8080

//server
app.get('/',(req,res)=>{
    res.json({mesg:`REGISTER BACKEND`})
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})