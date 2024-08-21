import React from 'react';

export const withFancyText = (WrappedComponent) => {
  return (props) => {
    // console.log(props);
    return (
      <div style={{ fontSize: '1.2rem', color: 'blue', fontWeight: 'bold' }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};
