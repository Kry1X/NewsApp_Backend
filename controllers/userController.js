const {User, Publisher} = require('../models/models')

class UserController {
    async registration(req, res){
        const {email, password, role} = req.body;
        if (!email || !password) {
            return new Error('Incorrect email or password')
        }
        const candidate = User.findOne({where: {email}})
        if (candidate) {
            return new Error('User already created!')
        }
    }

    async login(req, res){
        return undefined;
    }

    async logout(req, res){
        return undefined;
    }

    async getOne(req, res){
        return undefined;
    }

    async getAll(req, res){
        return undefined;
    }

    async deleteUser(req, res) {
        return undefined;     
    }

    async test(req, res) {
        return undefined
    }
}

module.exports = new UserController()