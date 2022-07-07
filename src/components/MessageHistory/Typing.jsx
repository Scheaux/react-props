import React from 'react';
import image from './animation.svg';

function Typing({ name, time }) {
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
      <img src={image} alt='typing' width={80} />
    </div>
  );
}

export default Typing;
