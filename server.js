let express = require('express')
let app = express()
app.use(express.static('./SW_Appli/dist'))
app.listen(4200)