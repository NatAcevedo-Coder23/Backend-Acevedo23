const express = require('express')
const session = require('express-session')
const { create } = require('connect-mongo');
const {connectDb} = require('./config/configServer')
const appRouter = require('./routes')
const logger = require('morgan')

const cookieParser = require('cookie-parser')
const passport = require('passport')
const { initPassport } = require('./passport-jwt/passport.config')

const app = express()
const PORT = 8080

connectDb()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/static',express.static(__dirname+'/public'))
app.use(logger('dev'))
app.use(cookieParser())

app.use(session({
    store: create({
        mongoUrl: 'mongodb+srv://acevedocoder:OvgvzAEu5Eq6gPEP@cluster0.qjk7yms.mongodb.net/Ecommerce',
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        ttl: 1000000*6000
    }),
    secret: 'secretCoder',
    resave: false,
    saveUninitialized: false
})) 



initPassport()
passport.use(passport.initialize())
passport.use(passport.session())

app.use(appRouter)

app.listen(PORT, (err)=> {
    if (err) console.log('Erro en el servidor', err)
    console.log(`Escuchando en el puerto: ${PORT}`)
})
