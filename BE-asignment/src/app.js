import express from 'express'
import cors from 'cors'
import routerProduct from './router/product'
import routerCategory from './router/categories'

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api", routerProduct)
app.use("/api", routerCategory)

const PORT = 3885
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})