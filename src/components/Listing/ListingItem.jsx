import React from 'react';

function ListingItem(props) {
  const { img, title, quantity, price, currency } = props;
  let levelClass = null;
  if (quantity < 10) levelClass = 'level-low';
  else if (quantity >= 10 && quantity < 20) levelClass = 'level-medium';
  else if (quantity > 20) levelClass = 'level-high';

  let curr = null;
  if (currency === 'USD') curr = '$';
  else if (currency === 'EUR') curr = '€';
  else curr = `${currency} `;
  const currencyElem = (
    <p className='item-price'>
      {curr}
      {price}
    </p>
  );

  return (
    <div className='item'>
      <div className='item-image'>
        <a href='https://www.etsy.com/listing/292754135/woodland-fairy'>
          <img className='listing-img' src={img} />
        </a>
      </div>
      <div className='item-details'>
        <p className='item-title'>
          {title.length <= 50 ? title : title.slice(0, 50) + '...'}
        </p>
        <div className='flex space-between'>
          {currencyElem}
          <p className={`item-quantity ${levelClass}`}>{quantity} left</p>
        </div>
      </div>
    </div>
  );
}

export default ListingItem;
