# WHOIS Lookup

The goal of this project is to create an application that will display IP and Domain information within the UI using one or more WHOIS APIs that is comprised of a Frontend built with React and Backend created with Node.

## MVP
Frontend completed with React.

Backend completed with Node.

Display data return by WHOIS API within the UI.

Form for user to submit input.

Deployed using Docker + Heroku.

# CURRENT ISSUES

(1) IP is not a valid input for my API

(2) Docker image created needs to be hosted on Heroku still or EC2

(3) Refactor backend


## Future Implementions
Add the IP Geolocation feature from WHOIS API.

Calculate amount of searches done since page was first published live.

# Reflection

## Friday: Challenge given to me around 3PM

Research about React

(https://reactjs.org/docs/getting-started.html)

Read documentation about WHOIS API

(https://whois.whoisxmlapi.com/documentation/making-requests)

 Make a project requirments document to be able to accomplish my MVP
 
( Frontend React, Backend Node server, WHOIS API, User Input on frontend, Data fetched from my API and displayed after user submits input)

## Saturday: Start working around 8AM

Create Backend

(https://expressjs.com/en/starter/generator.html)

Create a WHOIS endpoint with Axios

(https://www.npmjs.com/package/react-axios)

 Pull the specific information out of WHOIS JSON output
 
(created key value pairs that correlate to what the output of the WHOIS API outputs)

Backend is created and I can see data when going to the endpoint

(http://localhost:4000/api/whois/jeffkimbrow.com)

Research creating UI with React

(https://reactjs.org/docs/forms.html)

 Start building out UI of my form

Sleep 10PM 

## Sunday: 'Crunch time' 7:30AM

Finish creating the Form component

Connect frontend to the backend with an axios get request
 
(added a button that will trigger my API endpoint once the button is submitted see below) 

When the request is successful I want to format the data from a JSON object into an array with key pair values

(The similar to how I created the backend to only pull specific values)

Inside of render method holds my JSX

( form, input, button, and data to be displayed)

Hit wall, went to sleep 9PM

## Monday 730AM

 Unable to figure out how to get the data displayed without having the domain hard coded
 
(ended up submitting my answer with the value hard coded so data was displaying)

Do more research for the rest of the day to figure out what I am doing wrong

## Tuesday 9AM

Although I submitted my answer, I didn't want to just give up on project

( More research )

Figured out I needed to create a constant that held the state of inputValue

( inputValue was an empty string but the state wasn't being updated so data wasn't being passed properly)

 Change GET request to proper endpoint
 
( `http://localhost:4000/api/whois/${x}` )

Move my converting of Object to Array inside of the get where my response is being created

(I had my Datalist component holding this but it was inside the wrong portion of my code )

Restructuring the code

( asked for opinions on better ways to structure my code)

 FINALLY GOT INPUT TO FORM TO DO WHAT I WANT
 
( changed the architecture of my code )



