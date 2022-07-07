import React from 'react';
import Message from './Message';
import Response from './Response';
import Typing from './Typing';

function MessageHistory({ list }) {
  return (
    <div className='container'>
      <ul className='flex-column'>
        {list.map((x) => {
          if (x.type === 'message')
            return (
              <li key={x.id}>
                <Message name={x.from.name} time={x.time} text={x.text} />
              </li>
            );

          if (x.type === 'response')
            return (
              <li key={x.id} className='float-right'>
                <Response name={x.from.name} time={x.time} text={x.text} />
              </li>
            );

          if (x.type === 'typing')
            return (
              <li key={x.id}>
                <Typing name={x.from.name} time={x.time} />
              </li>
            );
        })}
      </ul>
    </div>
  );
}

export default MessageHistory;
