import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routerProduct from './router/product'
import routerCategory from './router/categories'
import routerAuth from './router/auth'

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api", routerProduct)
app.use("/api", routerCategory)
app.use("/api", routerAuth)

mongoose.connect('mongodb://localhost:27017/asm-nodejs', () => {
    console.log('successfully');
})

const PORT = 3885
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})