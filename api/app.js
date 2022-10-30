import express from 'express'
import routes from './routes.js'

const app = express()

app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use(routes)

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"))