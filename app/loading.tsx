import React from 'react';

const Loading = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const loaderContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const loaderStyle = {
    width: '20px',
    height: '40px',
    borderRadius: '10px 50px',
    boxShadow: '0px 0px 5px black',
    animation: 'dominos 1s ease infinite',
  };

  const loader1Style = {
    backgroundColor: '#5d9960',
  };

  const loader2Style = {
    backgroundColor: '#82a587',
  };

  const loader3Style = {
    backgroundColor: '#8bac74',
  };

  const loader4Style = {
    backgroundColor: '#b9bf90',
  };

  const loader5Style = {
    backgroundColor: '#e7d2ab',
  };

  return (
    <div style={containerStyle}>
      <div style={loaderContainerStyle}>
        <div style={{ ...loaderStyle, ...loader1Style }}></div>
        <div style={{ ...loaderStyle, ...loader2Style }}></div>
        <div style={{ ...loaderStyle, ...loader3Style }}></div>
        <div style={{ ...loaderStyle, ...loader4Style }}></div>
        <div style={{ ...loaderStyle, ...loader5Style }}></div>
      </div>
    </div>
  );
}

export default Loading;
