import { openDb } from "../configDb.js";

export const criarTabela = () => {
    const db = openDb()
    db.prepare(`
        CREATE TABLE IF NOT EXISTS Pessoas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            email TEXT,
            dataNasc TEXT
        )
    `).run()
}

export const selectPessoas = () => {
    const db = openDb()
    return db.prepare('SELECT * FROM Pessoas').all()
}

export const selectPessoa = (id) => {
    const db = openDb()
    return db.prepare('SELECT * FROM Pessoas WHERE id=?').get(id)
}

export const insertPessoa = (dados) => {
    const db = openDb()
    return db.prepare(
        'INSERT INTO Pessoas (nome, email, dataNasc) VALUES (?, ?, ?)'
    ).run(dados.nome, dados.email, dados.dataNasc)
}

export const updatePessoa = (dados) => {
    const db = openDb()
    return db.prepare(
        'UPDATE Pessoas SET nome=?, email=?, dataNasc=? WHERE id=?'
    ).run(dados.nome, dados.email, dados.dataNasc, dados.id)
}

export const deletePessoa = (id) => {
    const db = openDb()
    return db.prepare(
        'DELETE FROM Pessoas WHERE id=?'
    ).run(id)
}