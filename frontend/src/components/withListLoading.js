import React from 'react';

function WithListLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Want to find some infomation about a specific IP Address or Domain name?
      </p>
    );
  };
}
export default WithListLoading;
