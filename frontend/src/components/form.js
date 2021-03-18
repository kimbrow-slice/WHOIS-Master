import React from "react";
import axios from "axios";

export default class Form extends React.Component {
  //making inputValue an empty string to allow the user input and work with that later
  state = {
    inputValue: "",
    //making data an empty array to display later
    data: [],
  };
  change = (e) => {
    this.setState({
      //when input is changed set the state of inputValue to the new value given from the form
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    //create a constant variable that is called input to shorten up code when using it later
    const input = document.getElementsByName("inputValue")[0].value;
    //prevent page from refreshing when submit is pressed
    e.preventDefault();
    //appending the value the user input to trigger my API
    var appendInput = "http://localhost:4000/api/whois/" + input;
    var getForm = document.getElementById("inputForm");
    getForm.action = appendInput;
    // this.props.onSubmit(this.state.inputValue);
    //at this point this.state is = my userInput
    console.log(this.state.inputValue);
    console.log("Before GET");
    //rename the current state of inputValue into a variable to shorten the code up
    const x = this.state.inputValue;
    //this is where I use axios to make the call to the backend to then display data
    console.log(`${encodeURIComponent(`${x}`)}`);
    axios
      .get(`http://localhost:4000/api/whois/${encodeURIComponent(`${x}`)}`)
      .then((resp) => {
        //when the request is successful I want to format the data from a JSON object into an array with key pair values
        let k;
        let newArr = [];
        let newFormat = {};
        for (k in resp.data) {
          newFormat = { k: k, v: resp.data[k] };
          console.log(k);
          newArr.push(newFormat);
        }
        console.log("end", newArr);
        console.log(typeof newArr);
        console.log(typeof resp.data);
        //setting state of data to an array from object
        this.setState({ data: newArr });
        console.log(this.state.data[0].k);
        console.log(this.state.data[0].v);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Finished GET");
    // this.setState({
    //     inputValue: ''
    // });
  };

  render() {
    return (
      /* Create a form that allows the user to input either a domain or ip address */
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
        {/* THIS FINALLY WORKS! WOOOOOOO */}
        {this.state.data.map((data) => (
          <p >
            {data.k} {data.v}
          </p>
        ))}
      </>
    );
  }
}
