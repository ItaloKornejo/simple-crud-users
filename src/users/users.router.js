const router = require('express').Router()

const userServices = require('./users.services')

router.get("/", userServices.getAllUsers) //? /api/v1/users
router.post("/", userServices.postUser) //? /api/v1/users
router.get("/:id", userServices.getUserById)
router.get("/ks/:id", userServices.getKeystore) //? /api/v1/users/:id
router.patch("/:id", userServices.patchUser)
router.delete("/:id", userServices.deleteUser)

module.exports = router