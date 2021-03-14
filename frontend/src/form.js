import React from 'react';


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
        e.preventDefault();
        var appendInput = "http://localhost:4000/api/whois&?" + document.getElementsByName("inputValue")[0].value;
        var getForm = document.getElementById('inputForm');
        getForm.action = appendInput;
        this.props.onSubmit(this.state);
        console.log(this.state);
        this.setState({
            inputValue: ''
        });
    };

    render() {
        return(
            /* Create a form that allows the user to input either a domain or ip address */
            <>
            <form>
                <input id="inputForm" name="inputValue" placeholder="IP Address or Domain" value={this.state.inputValue} 
                onChange={ e => this.change(e) }/>
                <br />
                <button className="submitBtn" onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
            <br />
            </>
        );
    }

}


