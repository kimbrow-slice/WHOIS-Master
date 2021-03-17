import React from "react";

export default class DataList extends React.Component {
  state = {
    data: [],
  };

  handleDataChange = (data) => {
    this.setState({ data });
  };

  render() {
    return (
      // {/* I tried to do this but I found that I have already accessed my array now I just need to pull the keys and values */}
      // {/* {this.state.data.map(data=>
      // <li key={data.id}>{data[0].k}</li>
      // )} */}
      <>
        {/* the code below was moved to form.js to be able to display my output
        {this.state.data.map((data) => (
          <li key={data.id}>
            {data.k} {data.v}
          </li>
        ))} */}
      </>
    );
  }
}
