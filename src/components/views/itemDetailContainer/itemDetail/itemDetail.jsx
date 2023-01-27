import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import ItemCount from '../itemCount/ItemCount';
import { useCartContext } from '../../../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ data }) => {

	const { addProduct } = useCartContext()
	
	const { title, price, image, description, category, rating } = data;

	const [goToCart, setGoToCart] = useState(false);
	

	const onAdd = count => {
		setGoToCart(true)
		addProduct(data, count)
	};
	
	const botones = () => {
		return (
			<>
				<Link to='/' className=''><Button variant='primary'>Seguir comprando</Button></Link> 
				<Link to='/cart' className='mx-3'><Button  variant='outline-success'>Ir al carrito</Button></Link> 
			</>
		   
			)
	}


	return (

		<Container className='py-5'>
			<div className="row py-5">
				<div className="col-md-6">
					<img src={image} alt={title} height="400px" width="400px"></img>
				</div>
				<div className="col-md-6 mt-2">
					<h4 className="text-uppercase text-black-50">{category}</h4>
					<h1 className="display-6">{title}</h1>
					<p className="lead fw-bolder">
						Rating {rating.rate && rating.rate}
						<AiFillStar className='text-warning mb-1 mx-1' />
					</p>
					<h3 className="display-6 fw-bold my-3">$ {price}</h3>
					<p className="lead">{description}.</p>
					
					{goToCart ?
						  botones() :
						<ItemCount initial={1} stock={7} onAdd={onAdd} className=''></ItemCount>
					}
					
					
				</div>
			</div>
		</Container>
	);
};
export default ItemDetail;
