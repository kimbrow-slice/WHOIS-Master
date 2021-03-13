var express = require("express");
var router = express.Router();
const axios = require("axios");
const cors = require("cors");

// const bodyparser = require('body-parser');

router.use(express.json()); //used to parse JSON bodies
router.use(cors());
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Jeffery" });
});

/* GET for WHOIS API */
router.get("/whois/:lookup", function (req, res, next) {

  // Make a request for a user to retrieve whois data
  axios
    .get(`https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_dh5G4ke9pMkIAfMSi32sA5z8F7qpp&domainName=${req.params.lookup}&ip=1&outputFormat=JSON`)
    .then(function (response) {
      // handle success
      //create a constant that holds the value of the IP Address from the response data
      const ipAdd = response.data.WhoisRecord.ips[0];
       //create a constant that holds the value of the domain name from the response data
      const domainName = response.data.WhoisRecord.domainName;
      //send back a response if the request was successful that has both the ip and domain
      res.json({ ip: ipAdd, domain: domainName })
    })
    .catch(function (error) {
      // handle error 
      console.log(error);
      //send back a json object with the error
      res.json({ error: error });
    })
});
//request at /api/whois?lookup=
module.exports = router;
