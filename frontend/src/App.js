import React, { Component } from "react";

import "./App.css";
import DataList from "./components/list.js";
import Form from "./components/form.js";

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {data: [] }
  }



  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>WHOIS Lookup Application</h1>
        </div>
        <h4>Let's find out some information about a specific domain or</h4>
        {/* populate the page with form.js */}
        <Form />
        {/* <p>{JSON.stringify(this.state.fields, null, 2)}</p> */}
        <DataList data={this.state.data} onDataChange={this.handleDataChange} />
        <br />
        <footer>
          <div className="footer">
            Built with React and Node by Jeffery Kimbrow
          </div>
        </footer>
      </div>
    );
  }
}
export default App;
