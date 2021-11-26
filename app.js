//設定加載模組
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

//載入靜態檔案
app.use(express.static('public'))

//設定使用樣板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//設定 port
const port = 3000

//提取資料庫的內容 至js 中
const restaurantList = require('./restaurant')

//index 頁面網站架構
app.get('/', (req, res) => {
  res.render('index', { restaurantList: restaurantList.results })
})



app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})