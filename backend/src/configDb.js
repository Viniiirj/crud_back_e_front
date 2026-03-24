import Database from 'better-sqlite3'

let db

export function openDb() {
    if (!db) {
        db = new Database('database.db')
    }
    return db
}