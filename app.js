//load
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
app.use(express.static('public'))
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

const port = 3000

app.get('/', (req, res) => {
  res.render('index')
})


app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})

