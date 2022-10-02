const { Contragents } = require('../models/models')
const ApiError = require('../error/error')

class ContragentsController {
    async createContragents(req, res, next) {
        const { firstName } = req.body
        try {
            const contragents = await Contragents.create({ firstName })
            return res.json(contragents)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }

    async getContragents(req, res) {
        const contragents = await Contragents.findAll()
        return res.json(contragents)
    }

    async getContragentsById(req, res) {

    }

    async updateContragents(req, res) {

    }

    async deleteContragents(req, res) {

    }
}

module.exports = new ContragentsController();