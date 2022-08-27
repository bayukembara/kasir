// const { request } = require('express');
const router = require('express').Router();
const verify = require('./verifyToken');
const request = require('request');
const cities = require('./cities');
const { response } = require('express');



const url = "https://kasirpintar.co.id/allAddress.txt";

const options = {json: true};


const getAllAddress = (req,res,verify) =>{
  // const { id, kecamatan_id, nama} = req.params;
  // let filterCities = cities;

  // if(id){
  //   filterCities = filterCities.filter((kota) => kota.id === id)[0];
  // }

  // const response = res.response({
  //   status:'success',
  //   data: {cities: JSON.parse(JSON.stringify(filterBook, ['id', 'name', 'publisher']))},
  // })
  // response.code(200);
  return response.code(200)
}

module.exports = getAllAddress;


// request(url,options, (err,res,body) => {
//   if(err){
//     return res.status(400).send('Error Api URL')
//   };

//   if(!err && res.statusCode == 200){
//     response.json(body);
//   }
// });

// router.get('/',verify, async (req,res) =>{
//   request('', function (error, response, body) {
//     if (!error && response.statusCode === 200) {
//       const data = {cities: JSON.parse(response.body)}
//       return data;
//     }
// })
// });


// request('https://kasirpintar.co.id/allAddress.txt', function (error, response, body) {
//   response.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });



// router.get('/',(req,res)=>{
//   request({
//     uri: 'https://api.tradegecko.com/products',
//     headers: {'Authorization': 'Bearer ' + 'TOKEN HERE'}
//   }, function (error, response, body){
//     if(!error && response.statusCode == 200){
//       res.json(body);
//     }
//   })
// });

  // request('https://kasirpintar.co.id/allAddress.txt', function (error, response, body) {
  // console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.


module.exports = router;