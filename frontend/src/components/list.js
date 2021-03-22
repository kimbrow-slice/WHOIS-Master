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
      <>
      </>
    );
  }
}
