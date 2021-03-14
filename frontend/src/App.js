import React, { Component, useEffect, useState } from 'react';


import './App.css';
import DataList from './components/list.js';
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
        <h4>Let's find out some information about a specific domain or</h4>
        {/* populate the page with form.js */}
        <Form onSubmit={fields => this.onSubmit(fields)} />
        {/*The P tag below is where my response will be displayed after I click submit on the form*/}
        <p>{JSON.stringify(this.state.fields, null, 2)}</p>
        <DataList />
        <br />
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

