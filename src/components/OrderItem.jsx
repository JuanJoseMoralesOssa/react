import React, { useContext } from 'react';
import AppContext from '@context/AppContext'
import '@styles/OrderItem.scss';

import icon_close from '@icons/icon_close.png'
import App from '../routes/App'

const OrderItem = (props) => {
	const { product, indexValue } = props
	const { id, title, price, images } = product

	const { removeFromCart } = useContext(AppContext)

	const handleRemove = index => {
		removeFromCart(index)
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={ title} />
			</figure>
			<p>{ title }</p>
			<p>${ price }</p>
			<img src={icon_close} alt="close" onClick={() => handleRemove(indexValue)}/>
		</div>
	);
}

export default OrderItem;
