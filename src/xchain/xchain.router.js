const router = require('express').Router()

const userServices = require('./xchain.services')

router.get("/:id", userServices.getKeystore) // /api/users/:id

module.exports = router