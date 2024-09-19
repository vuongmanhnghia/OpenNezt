import authRouter from './auth.router'
import userRouter from './user.router'
import homeRouter from './home.router'

function route(app) {
    app.use('/auth', authRouter)
    app.use('/users', userRouter)
    app.use('/home', homeRouter)

    app.get('/', (req, res) => {
        res.jsonify({
            message: 'Welcome to OpenNezt API',
        })
    })
}

export default route
