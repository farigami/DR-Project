import React from "react";
import { Card, Button, CloseButton } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Market.css'



const Basket = ({ baskets, handleDeleteProduct }) => {
  let fullPrice = 0
  
  return (
    <>
      <Card border="success" style={{ width: '280px', height: '580px', flex: 1 }}>
        <Card.Header>Корзина</Card.Header>
        <Card.Body style={{ overflowY: 'scroll' }}>
          {baskets.length > 0 ?
            baskets.map(item => {
              fullPrice += item.price
              return (
                <p key={"basket" + item.id * fullPrice} style={{ fontSize: '15px' }}>
                  <img src={item.photo} alt='' style={{ width: '30px', height: '30px', float: 'left' }} />
                  {'  ' + item.item_name} {item.price}₽ 
                  <CloseButton style={{ float: 'right' }} onClick={() => handleDeleteProduct(item.id)} />
                </p>
              )
            })
            : <h5 className="text-muted" >Ваша корзина пуста</h5>}
        </Card.Body>
        <Card.Footer>
          <h4>Cтоимость: {fullPrice}₽</h4>
          <Button
            variant='outline-success'
            size='lg'
            block
          >
            Оформить заказ
          </Button>
        </Card.Footer>
      </Card>
    </>
  )
};

export default Basket
