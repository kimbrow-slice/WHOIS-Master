var express = require("express");
var router = express.Router();
var axios = require("axios");


// const bodyparser = require('body-parser');

router.use(express.json()); //used to parse JSON bodies

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
      
      // TODO: refactor for multiple contact types, this will work for MVP
      //handle registrant info properly
      const registrantName = response.data.WhoisRecord.registrant.name;
      const registrantOrg = response.data.WhoisRecord.registrant.organization;
      const registrantStreet = response.data.WhoisRecord.registrant.street1;
      const registrantCity = response.data.WhoisRecord.registrant.city;
      const registrantState = response.data.WhoisRecord.registrant.state;
      const registrantPostal = response.data.WhoisRecord.registrant.postalCode;
      const registrantCountry = response.data.WhoisRecord.registrant.country;
      const registrantcountryCode = response.data.WhoisRecord.registrant.countryCode;
      const registrantEmail = response.data.WhoisRecord.registrant.email;
      const registrantTelephone = response.data.WhoisRecord.registrant.telephone;
      const registrantFax = response.data.WhoisRecord.registrant.fax;

      //handle administrative info properly
      const administrativeContactName = response.data.WhoisRecord.administrativeContact.name;
      const administrativeContactOrg = response.data.WhoisRecord.administrativeContact.organization;
      const administrativeContactStreet = response.data.WhoisRecord.administrativeContact.street1;
      const administrativeContactCity = response.data.WhoisRecord.administrativeContact.city;
      const administrativeContactState = response.data.WhoisRecord.administrativeContact.state;
      const administrativeContactPostal = response.data.WhoisRecord.administrativeContact.postalCode;
      const administrativeContactCountry = response.data.WhoisRecord.administrativeContact.country;
      const administrativeContactcountryCode = response.data.WhoisRecord.administrativeContact.countryCode;
      const administrativeContactEmail = response.data.WhoisRecord.administrativeContact.email;
      const administrativeContactTelephone = response.data.WhoisRecord.administrativeContact.telephone;
      const administrativeContactFax = response.data.WhoisRecord.administrativeContact.fax;

      //handle administrative info properly
      const technicalContactName = response.data.WhoisRecord.technicalContact.name;
      const technicalContactOrg = response.data.WhoisRecord.technicalContact.organization;
      const technicalContactStreet = response.data.WhoisRecord.technicalContact.street1;
      const technicalContactCity = response.data.WhoisRecord.technicalContact.city;
      const technicalContactState = response.data.WhoisRecord.technicalContact.state;
      const technicalContactPostal = response.data.WhoisRecord.technicalContact.postalCode;
      const technicalContactCountry = response.data.WhoisRecord.technicalContact.country;
      const technicalContactcountryCode = response.data.WhoisRecord.technicalContact.countryCode;
      const technicalContactEmail = response.data.WhoisRecord.technicalContact.email;
      const technicalContactTelephone = response.data.WhoisRecord.technicalContact.telephone;
      const technicalContactFax = response.data.WhoisRecord.technicalContact.fax;

       //create a constant that holds the value of the domain name from the response data
      const domainName = response.data.WhoisRecord.domainName;
      //send back a response if the request was successful that has the WHOIS information
      
      // const nameServers = response.data.WhoisRecord.nameServers.hostNames;
      res.json({ 
        "Domain Name:": domainName,
        "Registrant Name:": registrantName,
        "Registrant Org:": registrantOrg,
        "Registrant Street:": registrantStreet,
        "Registrant City:": registrantCity,
        "Registrant State:": registrantState,
        "Registrant Postal": registrantPostal,
        "Registrant Country:": registrantCountry,
        "Registrant Country Code:": registrantcountryCode,
        "Registrant Email:": registrantEmail,
        "Registrant Telephone:": registrantTelephone,
        "Registrant Fax:": registrantFax,
        "Administrative Contact Name:": administrativeContactName,
        "Administrative Org:": administrativeContactOrg,
        "Administrative Street:": administrativeContactStreet,
        "Administrative City:": administrativeContactCity,
        "Administrative State:": administrativeContactState,
        "Administrative Postal:": administrativeContactPostal,
        "Administrative Country:": administrativeContactCountry,
        "Administrative Country Code:": administrativeContactcountryCode,
        "Administrative Email:": administrativeContactEmail,
        "Administrative Telephone:": administrativeContactTelephone,
        "Administrative Fax:": administrativeContactFax,
        "Technical Contact Name:": technicalContactName,
        "Technical Org:": technicalContactOrg,
        "Technical Street:": technicalContactStreet,
        "Technical City:": technicalContactCity,
        "Technical State:": technicalContactState,
        "Technical Postal:": technicalContactPostal,
        "Technical Country:": technicalContactCountry,
        "Technical Country Code:": technicalContactcountryCode,
        "Technical Email:": technicalContactEmail,
        "Technical Telephone:": technicalContactTelephone,
        "Technical Fax:": technicalContactFax
      })
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
