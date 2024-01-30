const uuid = require('uuid')
const fs = require('fs')
const { generatePhrase, validatePhrase, encryptToKeyStore, decryptFromKeystore } = require ('@xchainjs/xchain-crypto');



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
    GenerateKeystore
}

