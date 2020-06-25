
const fs = require('fs')
const cloudinary = require('cloudinary').v2
require('dotenv').config()
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

function readDocs() {
  fs.readdir(`./client/src/assets/images/covers`, function(err, files){
    if (err) {
      console.log('fs Error' + err)
    } else {
      files.map(file => {
        let fileName = file.slice(0,-4)
        cloudinary.uploader.upload(
          `./client/src/assets/images/covers/${file}`,
        {
          
          public_id: `mc-portfolio/covers/${fileName}`
        }, 
          function(error, result) {console.log(result, error)}
        )
      })
    }
  })
}

readDocs()