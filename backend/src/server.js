import express from 'express'
import { criarTabela } from './controller/Pessoas.js'
import router from './routes/routes.js'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

criarTabela()

app.listen(process.env.PORT || 3000, () => {
    console.log("Server rodando")
})