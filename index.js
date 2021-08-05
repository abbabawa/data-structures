const express = require("express")
const app = express()

let port = process.env.PORT || 3000

const bodyParser = require('body-parser')
app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(express.static('public'))


app.get("/", (req, res)=>{
	res.send("Data structure visualization")
})

app.listen(port, ()=>{
	console.log("app listening on port: "+port)
})