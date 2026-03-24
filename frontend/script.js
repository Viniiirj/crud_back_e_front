
const pessoaForm = document.getElementById('pessoaForm')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const dataNasc = document.getElementById('dataNasc')
const btnSalvar = document.getElementById('btnSalvar')
const btnCancelar = document.getElementById('btnCancelar')

const btnBuscar = document.getElementById('btnBuscar')
const btnVerTd = document.getElementById('btnVerTd')
const buscarId = document.getElementById('buscarId')

const tabela = document.getElementById('tabela')

let idEditando = null

const API = 'http://localhost:3000'

async function buscarPessoas() {
    const res = await fetch(`${API}/pessoas`)
    const data = await res.json()
    renderizarTabela(data)
}

function renderizarTabela(pessoas) {
    let html = `
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Nascimento</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
    `
    pessoas.forEach(pessoa => {
        html += `
        <tr>
            <td>${pessoa.id}</td>
            <td>${pessoa.nome}</td>
            <td>${pessoa.email}</td>
            <td>${pessoa.dataNasc}</td>
            <td>
                <button onclick="editarPessoa(${pessoa.id})">Editar</button>
                <button onclick="deletarPessoa(${pessoa.id})">Deletar</button>
            </td>
        </tr>
    `
    })
   
    html += `</tbody></table>`

    tabela.innerHTML = html
}

async function salvarPessoa(e) {
    e.preventDefault()

    const dados = {
        nome: nome.value,
        email: email.value,
        dataNasc: dataNasc.value
    }

    if (idEditando) {
        await fetch(`${API}/pessoa/${idEditando}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        })
    } else {
        await fetch(`${API}/pessoa`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        })
    }

    idEditando = null
    limparForm()
    buscarPessoas()
}

function limparForm() {
    nome.value = ''
    email.value = ''
    dataNasc.value = ''
}

async function editarPessoa(id) {
    const res = await fetch(`${API}/pessoa/${id}`)
    const pessoa = await res.json()
    
    nome.value = pessoa.nome
    email.value = pessoa.email
    dataNasc.value = pessoa.dataNasc

    idEditando = id
    
}

async function deletarPessoa(id) {
    await fetch(`${API}/pessoa/${id}`, { method: 'DELETE' })
    buscarPessoas()
}

async function buscarPorId() {
    const id = buscarId.value
    const res = await fetch(`${API}/pessoa/${id}`, {method: 'GET'})
    const pessoa = await res.json()
    renderizarTabela([pessoa])
}

async function verTodos() {
    buscarPessoas()
}

pessoaForm.addEventListener('submit', salvarPessoa)
btnCancelar.addEventListener('click', limparForm)
btnBuscar.addEventListener('click', buscarPorId)
btnVerTd.addEventListener('click', verTodos)
document.addEventListener('DOMContentLoaded', buscarPessoas)