import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';
import Image from 'next/image';

const OrderItem = ({ product }) => {
  
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image src={product?.images[0]} alt={product?.title} width={50} height={50}/>
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image className={(styles.pointer, styles['more-clickable-area'])} src={close} alt="close" onClick={() => handleRemove(product)} />
    </div>
  );
};

export default OrderItem;
