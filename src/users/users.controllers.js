const Users = require('../models/users.models')
const uuid = require('uuid')

const findAllUsers = async () => {
    const data = await Users.findAll()
    return data
}

const findUserById = async (Id) => {
    const data = await Users.findOne({
        where: {
            id: Id
        }
    })
    return data
}

const createUser = async (obj) => {
    const data = await Users.create({
        id: uuid.v4(),
        first_name: obj.first_name,
        last_name: obj.last_name,
        age: obj.age,
        birthday: obj.birthday, 
        email: obj.email, 
        password: obj.password
    })
    return data
}

const updateUser = async (obj,Id) => {
    const data = await Users.update({
        first_name: obj.first_name,
        last_name: obj.last_name
    },{where: { id: Id }})
    return data
}

const deleteUser = async(Id) => {
    const data = await Users.destroy({
        where: { id: Id }
      })
    return data
}
module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser
}

