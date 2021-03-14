import React from 'react';
import axios from 'axios'

// const List = (props) => {
//   const {data } = props;
//   if (!data || data.length === 0) return <p>No Data, sorry</p>;
//   return (
//     <div>
//       <h2 className='list-head'>WHOIS Data</h2>
//       <ul>
//         {data.map((data) => {
//           return (
//               <>
//               <h3>{data.domain}</h3>
//               <p>{data.ip}</p>
//               </>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };
// export default List;

export default class DataList extends React.Component{
  state ={
    data: []
  }
  componentDidMount(){
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      this.setState({data: res.data});
    })
  }

  render() {
    return(
      <ul>
        {this.state.data.map(data=> <li>{data.name}</li>)}
      </ul>
    )
  }
}