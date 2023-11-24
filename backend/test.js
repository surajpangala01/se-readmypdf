const exp = require('express')
const app = exp()
const cors = require('cors')
const fileUpload = require('express-fileupload')
const fs = require('fs')

app.use(cors())
app.use(exp.json({ limit: 2548576 }))
app.use(fileUpload())




app.listen(9000,()=>{
  console.log('listening in 9000')
})

