import express from 'express'
import { criarTabela } from './controller/Pessoas.js'
import router from './routes/routes.js'

const app = express()
app.use(express.json())
app.use(router)

criarTabela()

app.listen(3000, () => {
    console.log("Server rodando")
})