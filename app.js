//設定加載模組
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

//載入靜態檔案
app.use(express.static('public'))

//設定使用樣板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

const port = 3000

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})