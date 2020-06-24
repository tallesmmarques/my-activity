const User = require('../models/User')

module.exports = {
    create(req, res){
        const user = req.body

        User.newUser(user).then(()=> {
            res.status(200).json(user)
        }).catch(error => console.log(error))
    },
    
    index(req, res) {
        User.getAllUsers().then(allUsers => {
            res.status(200).json(allUsers)
        }).catch(error => console.log(error))
    },

    update(req, res) { 
        const user = req.body
        const userId = req.params.id

        User.updateUser(userId, user).then(()=> {
            res.status(200).json(user)
        }).catch(error => console.log(error))
    },

    delete(req, res) {
        const userId = req.params.id

        User.deleteUser(userId).then(()=> {
            res.status(200).json({ message: `Usuário ${userId} foi deletado com sucesso` })
        }).catch(error => console.log(error))
    }
}