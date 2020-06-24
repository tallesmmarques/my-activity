const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    activity: {
        type: String,
    },
    birth: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const UserData = mongoose.model('User', UserSchema)

class User {
    
    //Create
    static newUser(data) {
        return new Promise((resolve, reject) => {
            UserData.create(data).then((result) => {
                resolve(result)
            }).catch((error) => {
                reject(error)
            })
        })
    }

    //Index
    static getAllUsers() {
        return new Promise((resolve, reject) => {
            UserData.find().then((result) => {
                resolve(result)
            }).catch((error) => {
                reject(error)
            })
        })
    }

    //Update
    static updateUser(id, user) {
        return new Promise((resolve, reject) => {
            UserData.findByIdAndUpdate(id, user).then(() => {
                resolve()
            }).catch((error) => {
                reject(error)
            })
        })
    }
    
    //Delete
    static deleteUser(id) {
        return new Promise((resolve, reject) => {
            UserData.findByIdAndDelete(id).then(() => {
                resolve()
            }).catch((error) => {
                reject(error)
            })
        })
    }
}

module.exports = User