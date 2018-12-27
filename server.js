const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//allows express to see the public folder aka css and images and stuff
app.use(express.static('public'))
//able to access the values of items in the html
app.use(bodyParser.urlencoded({extended : true}))
//this sets the templating engine as ejs
app.set('view engine', 'ejs')

app.get('/',function(req, res){
  res.render('index')
})
//telling the post what to do once it happens from the index
app.post('/', function(req,res){
  res.render('index')
  console.log(req.body.city)
})
//able to access the values of items in the html
app.use(bodyParser.urlencoded({extended : true}))

app.listen(process.env.PORT || 3000)
