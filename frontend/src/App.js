import React, { Component, useEffect, useState } from 'react';
import axios from 'axios'

import './App.css';
import List from './components/list';
import withListLoading from './components/withListLoading';
import Form from './form.js';


class App extends Component {
  state = {
    fields: "Submit for Results!"
  };


  onSubmit = fields => {
    console.log('App component got:', fields)
    this.setState({ fields });
  };

  render() {
    return(
      <div className="App">
        <div className="container">
          <h1>WHOIS Lookup Application</h1>
        </div>
        {/* populate the page with form.js */}
        <Form onSubmit={fields => this.onSubmit(fields)} />
        <p>{JSON.stringify(this.state.fields, null, 2)}</p>
        <footer>
          <div className='footer'>
           Built with React and Node
           by Jeffery Kimbrow
         </div>
       </footer>
      </div>
    );
  }
}
export default App;
// function App() {
  

//   const ListLoading = withListLoading(List);
//   const [appState, setAppState] = useState({
//     loading: false,
//     lookupData: null,
  
//   });

//   useEffect(() => {
//     setAppState({ loading: true });
//     const apiUrl = 'http://localhost:4000/api/whois/';
//     axios.get(apiUrl).then((lookupData) => {
//       console.log("hi",lookupData.data)
//       const ipDomain = lookupData.data;
//       setAppState({ loading: false, data: ipDomain });
//     });
//   }, [setAppState]);



//   return (
//     <div className='App'>
//       <div className='container'>
//         <h1>WHOIS Lookup</h1>
//       </div>
//       <div className='whois-container'>
//         {/* Create a form that allows the user to input either a domain or ip address */}
//        <Form onSubmit={fields =>this.formSubmit(fields)} />

//       </div>

//      
//     </div>
//   );
// }

