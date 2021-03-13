import React from 'react';
const List = (props) => {
  const {data } = props;
  if (!data || data.length === 0) return <p>No Data, sorry</p>;
  return (
    <div>
      <h2 className='list-head'>WHOIS Data</h2>
      <ul>
        {data.map((data) => {
          return (
              <>
              <h3>{data.domain}</h3>
              <p>{data.ip}</p>
              </>
          );
        })}
      </ul>
    </div>
  );
};
export default List;