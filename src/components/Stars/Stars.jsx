import React from 'react';
import Star from './Star';
import { v4 } from 'uuid';

function Stars({ count }) {
  if (count > 5 || count < 1) return;

  const list = [];

  for (let i = 0; i < count; i++) {
    list.push(
      <li key={v4()}>
        <Star />
      </li>
    );
  }

  return (
    <div className='container'>
      <ul className='flex'>{list}</ul>
    </div>
  );
}

Stars.defaultProps = {
  count: 0,
};

export default Stars;
