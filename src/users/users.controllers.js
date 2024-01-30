const Users = require('../models/users.models')
const uuid = require('uuid')
const fs = require('fs')
const { generatePhrase, validatePhrase, encryptToKeyStore, decryptFromKeystore } = require ('@xchainjs/xchain-crypto');


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

const GenerateKeystore = async(password) => {
    const phrase = generatePhrase()
    console.log(`phrase ${phrase}`)
    const isCorrect = validatePhrase(phrase) //validate phrase if needed returns Boolean
    console.log(`Phrase valid?: ${isCorrect}`)
    const keystore = await encryptToKeyStore(phrase, password)
    fs.writeFileSync(`./keystore.json`, JSON.stringify(keystore, null, 4), 'utf8')
    const data = {
        phrase: phrase,
        keystore: keystore,
        isPhraseValid: isCorrect
    }
    return data
}

module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser,
    GenerateKeystore
}

