import React from 'react';
import axios from 'axios';



export default class Form extends React.Component {
    state = {
        inputValue: ''
    }
    change = (e) => {
        this.setState({ 
            [e.target.name] : e.target.value
        });
    };

    onSubmit = e => {
        const input = document.getElementsByName("inputValue")[0].value;
        e.preventDefault();
        var appendInput = "http://localhost:4000/api/whois/" + input;
        var getForm = document.getElementById('inputForm');
        getForm.action = appendInput;
        // this.props.onSubmit(this.state.inputValue);
        //at this point this.state is = my userInput
        console.log(this.state.inputValue);
        console.log("Before Fetch");
        const x = this.state.inputValue;
        axios
        .get(`http://localhost:4000/api/whois/${x}`)
        .then((resp) => {
            let k;
        let newArr = [];
        let newFormat = {};
        for ( k in resp.data) {
          newFormat = { k: k, v: resp.data[k] };
          console.log(k)
          newArr.push(newFormat);
        }
        console.log("end", newArr);
        console.log(typeof newArr)
        console.log(typeof resp.data);
        this.setState({ data: newArr });
       console.log(this.state.data[0].k)
       console.log(this.state.data[1].v)
        })
        .catch((err) =>{
            console.log(err);
        })
        console.log("Finished fetch")
        // this.setState({
        //     inputValue: ''
        // });
    };

    render() {
        return(
            /* Create a form that allows the user to input either a domain or ip address */
            <>
            <form>
                <input id="inputForm" name="inputValue" placeholder="Domain" value={this.state.inputValue} 
                onChange={ e => this.change(e) }/>
                <br />
                <button className="submitBtn" onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
            <br />
            
            </>
        );
    }

}