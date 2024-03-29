const express = require('express');
const db = require('./utils/database');
const dotenv = require ('dotenv');
const app = express();

dotenv.config();

const port = process.env.PORT;

const userRouter = require('./users/users.router')
const xchainRouter = require('./xchain/xchain.router')

/*
db.authenticate().
    then(()=> {
        console.log('Database Authenticated!');
    })
    .catch(err => {
        console.log(err);
    })

db.sync()
    .then(()=>{
        console.log('Database synced');
    })
    .catch((err)=>{
        console.log(err);
    })
*/
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
}) 
//app.use('/api/v1/users', userRouter)
app.use('/api/bc', xchainRouter)

app.listen(port,() => {
    console.log(`Server started at port ${port}`)
})
