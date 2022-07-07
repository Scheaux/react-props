import React from 'react';

function Response({ name, time, text }) {
  const style = {
    backgroundColor: '#00c9c9',
  };

  return (
    <div className='message-wrapper float-right'>
      <div className='message-credentials'>
        <i className='message-circle' style={style}></i>
        <div className='message-name'>{name}</div>
        <div className='message-date'>{time}</div>
      </div>
      <div className='message' style={style}>
        {text}
      </div>
    </div>
  );
}

export default Response;
