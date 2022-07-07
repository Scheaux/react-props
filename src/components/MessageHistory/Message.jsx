import React from 'react';

function Message({ name, time, text }) {
  const style = {
    backgroundColor: '#004e00',
  };

  return (
    <div className='message-wrapper'>
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

export default Message;
