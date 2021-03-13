import React, { Component, useEffect, useState } from 'react';
import axios from 'axios'

import './App.css';
import List from './components/list';
import withListLoading from './components/withListLoading';

function App() {
  

  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'http://localhost:4000/api/whois/';
    axios.get(apiUrl).then((lookupData) => {
      console.log("hi",lookupData.data)
      const ipDomain = lookupData.data;
      setAppState({ loading: false, data: ipDomain });
    });
  }, [setAppState]);

  
  return (
    <div className='App'>
      <div className='container'>
        <h1>WHOIS Lookup</h1>
      </div>
      <div className='whois-container'>
        {/* Create a form that allows the user to input either a domain or ip address */}
        <form>
        <ListLoading isLoading={appState.loading} whois={appState.data} />
        <br />
        <label for="inputeValue">Enter an IP Address  or Domain Name Below</label>
        <br />
        <input id="inputValue" type="text" placeholder="IP Address or Domain" name="value" />
        <br />
        {/* Create a button that will trigger the API to display the data from what was input above */}
       <p><button className="lookupBtn">Lookup some Data</button></p> 
        <br />
        </form>
        <div className="results">
          {/* Display the results of the search here */}
        </div>
      </div>

      <footer>
        <div className='footer'>
          Built with React and Node
          by Jeffery Kimbrow
        </div>
      </footer>
    </div>
  );
}
export default App;