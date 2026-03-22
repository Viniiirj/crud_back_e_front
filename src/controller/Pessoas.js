import { openDb } from "../configDb.js";

export const criarTabela = async () => {
    const db = await openDb()
    await db.exec('CREATE TABLE IF NOT EXISTS Pessoas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, dataNasc TEXT)')
}

export const selectPessoas = async () => {
    const db = await openDb()
    const pessoas = await db.all('SELECT * FROM Pessoas')
    return pessoas
}

export const selectPessoa = async (id) => {
    const db = await openDb()
    const pessoa = await db.get('SELECT * FROM Pessoas WHERE id=?', [id])
    return pessoa
}

export const insertPessoa = async (dados) => {
    const db = await openDb()
    const pessoa = await db.run('INSERT INTO Pessoas ( nome, email, dataNasc) VALUES (?,?,?)', [dados.nome, dados.email, dados.dataNasc])
    return pessoa
}

export const updatePessoa = async (dados) => {
    const db = await openDb()
    const pessoa = await db.run('UPDATE Pessoas SET nome = ?, email = ?, dataNasc = ? WHERE id = ? ', [dados.nome, dados.email, dados.dataNasc, dados.id])
    return pessoa
}

export const deletePessoa = async (id) => {
    const db = await openDb()
    const pessoa = await db.run('DELETE FROM Pessoas WHERE id = ?', [id])
    return pessoa
}