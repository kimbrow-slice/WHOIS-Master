  
import React, { Component } from 'react';


import './App.css';
import DataList from './components/list.js';
import Form from './components/form.js';


class App extends Component {
  state = {
    fields: "Submit for Results!"
  };


  onSubmit = fields => {
    //I need to append the input to the url to trigger the API
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
        {/* <p>{JSON.stringify(this.state.fields, null, 2)}</p> */}
        <DataList data={this.state.data} onDataChange={this.handleDataChange}/>
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