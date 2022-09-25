const db = require('../db')

class UserController {
    async createUser(req, res) {
        const {name, surname} = req.body
        const newPerson = await db.query(`INSERT INTO person (name, surname) values ($1, $2) RETURNING *`, [name, surname])
        res.json(newPerson.rows[0])
    }

    async getUser(req, res) {
        const persons = await db.query(`SELECT * FROM person`)
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(persons.rows)
    }

    async getUserById(req, res) {
        const id = req.params.id
        const user = await db.query(`SELECT * FROM person where id = $1`, [id])
        res.json(user.rows[0])
    }

    async updateUser(req, res) {
        const {id, name, surname} = req.body
        const updatedUser = await db.query('UPDATE person SET name = $2, surname = $3 where id = $1 RETURNING *', [id, name, surname])
        res.json(updatedUser.rows[0])
    }

    async deleteUser(req, res) {
        const id = req.params.id
        const deletedUser = await db.query('DELETE FROM person  where id = $1', [id])
        res.json(deletedUser.rows[0])
    }
}

module.exports = new UserController();