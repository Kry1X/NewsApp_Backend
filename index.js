require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const router = require('./routes/index')

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use('/api', router)


const start = async () => {
    try {
        // await sequelize.authenticate()
        // await sequelize.sync()
        app.listen(PORT, () => console.log(`Server launched at http://localhost:${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()