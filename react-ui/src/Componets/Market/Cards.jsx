import { Card, Col, Row, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../ownStyle.css'


const Cards = ({ items, handleAddProduct}) => {
  return (
    <>
      {items.map(item => (      // data <=> items
        <Row key={'card' + item.id}>
          <Col md>
            <Card className='m-2' border="info" style={{ width: '280px', height: '580px', flex: 1 }}>
              <Card.Body>
                <Card.Img variant='top' src={item.photo} style={{ width: '240px', height: '240px' }} thumbnail='true'></Card.Img>
                <Card.Title>{item.item_name}</Card.Title>
                <hr />
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='float-left'>{item.price}₽</small>
                {item.item_new ? <small className='float-right'>Новинка</small> : null}
                <Button
                  variant='outline-info'
                  size='lg'
                  block
                  onClick={() => handleAddProduct(item)}
                >
                  Добавить
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      ))}
    </>
  )
};


export default Cards