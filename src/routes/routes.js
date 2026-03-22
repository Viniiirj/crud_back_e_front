import { selectPessoa, selectPessoas, insertPessoa, updatePessoa, deletePessoa } from '../controller/Pessoas.js'
import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
res.json({ message: 'API rodando' })
})

router.get('/pessoas', async (req,res) => {
    const pessoas = await selectPessoas()
    res.status(200).json(pessoas)
})

router.get('/pessoa/:id', async (req,res) => {
    const pessoa = await selectPessoa(req.params.id)
    res.status(200).json(pessoa)
})

router.post('/pessoa', async (req, res) => {
    const pessoa = await insertPessoa(req.body)
    res.status(201).json('Cadastro efetuado com sucesso')
})

router.put('/pessoa/:id', async (req, res) => {
    const pessoa = await updatePessoa({... req.body, id: req.params.id})
    res.status(200).json('Cadastro atualizado')
})

router.delete('/pessoa/:id', async (req, res) => {
    const pessoa = await deletePessoa(req.params.id)
    res.status(200).json('Cadastro excluido com sucesso')
})

export default router