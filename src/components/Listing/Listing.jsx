import React from 'react';
import ListingItem from './ListingItem';

function Listing({ items }) {
  return (
    <div className='container'>
      <div className='item-list'>
        {items.map((x) => {
          if (x.state === 'removed') return;
          return (
            <ListingItem
              key={x.listing_id}
              img={x.MainImage.url_570xN}
              title={x.title}
              quantity={x.quantity}
              price={x.price}
              currency={x.currency_code}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Listing;
