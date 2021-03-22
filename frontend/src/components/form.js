import React from "react";
import axios from "axios";

export default class Form extends React.Component {
  state = {
    inputValue: "",
    data: [],
  };
  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    const input = document.getElementsByName("inputValue")[0].value;
    e.preventDefault();
    const appendInput = "http://localhost:4000/api/whois/" + input;
    const getForm = document.getElementById("inputForm");
    getForm.action = appendInput;
    const stateOfInputValue = this.state.inputValue;
    axios
      .get(`http://localhost:4000/api/whois/${encodeURIComponent(`${stateOfInputValue}`)}`)
      .then((resp) => {
        if (resp.data.error) {
          this.setState({ data: [] });
        } else {
          var k;
          var newArr = [];
          var newFormat = {};
          for (k in resp.data) {
            newFormat = { k: k, v: resp.data[k] };
            newArr.push(newFormat);
          }
          this.setState({ data: newArr });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  render() {
    return (
      <>
        <form>
          <input
            id="inputForm"
            name="inputValue"
            placeholder="Domain or IP Address"
            value={this.state.inputValue}
            onChange={(e) => this.change(e)}
          />
          <br />
          <button className="submitBtn" onClick={(e) => this.onSubmit(e)}>
            Submit
          </button>
        </form>
        <br />
        {this.state.data.map((data) => (
          <p>
            {data.k} {data.v}
          </p>
        ))}
      </>
    );
  }
}
