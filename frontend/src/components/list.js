import React from "react";
import axios from "axios";

export default class DataList extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/whois/jeffkimbrow.com")
      .then((res) => {
        let k;
        let newArr = [];
        let newFormat = {};
        for ( k in res.data) {
          newFormat = { k: k, v: res.data[k] };
          console.log(k)
          newArr.push(newFormat);
        }
        console.log("end", newArr);
        console.log(typeof newArr)
        // console.log(typeof res.data);
        this.setState({ data: newArr });
       console.log(this.state.data[0].k)
       console.log(this.state.data[1].v)
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  render() {

    return (
      // {/* I tried to do this but I found that I have already accessed my array now I just need to pull the keys and values */}
      // {/* {this.state.data.map(data=> 
      // <li key={data.id}>{data[0].k}</li>
      // )} */}
      <>
      
      {this.state.data.map(data=> 
      <p>{data.k } {data.v}</p>
      )}
      </>

    );
  }
}


