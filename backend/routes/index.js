require('dotenv').config();
const express = require("express");
const router = express.Router();
const axios = require("axios");
const WHOISAPI = 'https://www.whoisxmlapi.com/whoisserver/WhoisService?';
const apiKey = process.env.apiKey;


router.use(express.json()); 


router.get("/", function (req, res, next) {
  res.render("index", { title: "Jeffery" });
});

router.get("/whois/:lookup", function (req, res, next) {
  axios
  //attempting to fix the IP Lookup aspect '&ipWhois=1' 1 results in returning the whois record for the hosting ip if the whois record for the tld of the input domain is not supported
    .get(
      `${WHOISAPI}apiKey=${apiKey}&domainName=${req.params.lookup}&ip=1&outputFormat=JSON`
    )
    .then(function (response) {
      // TODO: refactor for multiple contact types, this will work for MVP
      const registrantName = response.data.WhoisRecord.registrant.name;
      const registrantOrg = response.data.WhoisRecord.registrant.organization;
      const registrantStreet = response.data.WhoisRecord.registrant.street1;
      const registrantCity = response.data.WhoisRecord.registrant.city;
      const registrantState = response.data.WhoisRecord.registrant.state;
      const registrantPostal = response.data.WhoisRecord.registrant.postalCode;
      const registrantCountry = response.data.WhoisRecord.registrant.country;
      const registrantcountryCode =
        response.data.WhoisRecord.registrant.countryCode;
      const registrantEmail = response.data.WhoisRecord.registrant.email;
      const registrantTelephone =
        response.data.WhoisRecord.registrant.telephone;
      const registrantFax = response.data.WhoisRecord.registrant.fax;
      const administrativeContactName =
        response.data.WhoisRecord.administrativeContact.name;
      const administrativeContactOrg =
        response.data.WhoisRecord.administrativeContact.organization;
      const administrativeContactStreet =
        response.data.WhoisRecord.administrativeContact.street1;
      const administrativeContactCity =
        response.data.WhoisRecord.administrativeContact.city;
      const administrativeContactState =
        response.data.WhoisRecord.administrativeContact.state;
      const administrativeContactPostal =
        response.data.WhoisRecord.administrativeContact.postalCode;
      const administrativeContactCountry =
        response.data.WhoisRecord.administrativeContact.country;
      const administrativeContactcountryCode =
        response.data.WhoisRecord.administrativeContact.countryCode;
      const administrativeContactEmail =
        response.data.WhoisRecord.administrativeContact.email;
      const administrativeContactTelephone =
        response.data.WhoisRecord.administrativeContact.telephone;
      const administrativeContactFax =
        response.data.WhoisRecord.administrativeContact.fax;
      const technicalContactName =
        response.data.WhoisRecord.technicalContact.name;
      const technicalContactOrg =
        response.data.WhoisRecord.technicalContact.organization;
      const technicalContactStreet =
        response.data.WhoisRecord.technicalContact.street1;
      const technicalContactCity =
        response.data.WhoisRecord.technicalContact.city;
      const technicalContactState =
        response.data.WhoisRecord.technicalContact.state;
      const technicalContactPostal =
        response.data.WhoisRecord.technicalContact.postalCode;
      const technicalContactCountry =
        response.data.WhoisRecord.technicalContact.country;
      const technicalContactcountryCode =
        response.data.WhoisRecord.technicalContact.countryCode;
      const technicalContactEmail =
        response.data.WhoisRecord.technicalContact.email;
      const technicalContactTelephone =
        response.data.WhoisRecord.technicalContact.telephone;
      const technicalContactFax =
        response.data.WhoisRecord.technicalContact.fax;
      const domainName = response.data.WhoisRecord.domainName;
      const ipAdd = response.data.WhoisRecord.ips[0];

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
        "Technical Fax:": technicalContactFax,
        "IP Address": ipAdd,
      });
    })
    .catch(function (error) {

      console.log(error.message);

      res.json({ error: error });
    });
});

module.exports = router;
