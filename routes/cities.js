const router = require('express').Router();
const verify = require('./verifyToken');
const requestify = require('requestify');
const address = require('./address');
const fetch = require('node-fetch');

// router.post('/',verify,(req,res) =>{
//   // return res.status(200).send('Get Berhasil di Dapat');
//   requestify.get('https://kasirpintar.co.id/allAddress.txt').then(function(response) {
//     // Get the response body (JSON parsed - JSON response or jQuery object in case of XML response)
//     // return res.json(response.body);
//     // return res.jsonp(response.getBody());
//     const result= res.jsonp(response.body);
    
//   });
// });

// router.post('/post',verify,(req,res) =>{

//   const newAddress = {
//     id,
//     kota_id,
//     nama
//   }

// })



router.get('/',(req,res)=>{
  async function getPosts(){
    const postAPI = await fetch("https://kasirpintar.co.id/allAddress.txt");
    const response = await postAPI.json();
    console.log(response);
  }

  getPosts();
})


module.exports = router;