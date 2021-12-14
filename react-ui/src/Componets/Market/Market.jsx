import React, { useState, useEffect, useCallback } from "react";
import { Container } from "react-bootstrap";

import Basket from './Basket'
import Cards from './Cards'

const Market = () => {
  const [items, setItems] = useState([])

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState(false)

  const [baskets, setBaskets] = useState([])

  const fetchData = useCallback(
    async () => {
      try {
        setLoading(true) 
        const response = await fetch('http://' + window.location.host + '/api/cards/')
        const json = await response.json()

        setItems(json)
        setLoading(false)

      } catch (err) {
        setError(!err)
      }
    },
    [],
  )

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const handleAddProduct = (item) => {
    const newBaskets = baskets.filter((basket) => basket.id === item.id);
    if (!newBaskets.length){
      setBaskets(baskets.concat(item))
    }
  }

  const handleDeleteProduct = (productID) => {
    const newBaskets = baskets.filter((item) => item.id !== productID);
    setBaskets(newBaskets);
  }
  
  if (error) {
    return <div className='just-element'><h1><p className='emoji'>⚠️</p>Ошибка: {error.message}</h1></div>;
  }
  if (loading) {
    return <div className='just-element'><h1>Загрузка ...</h1></div>;
  }
  return (
    <>
      <Container>
        <Basket baskets={baskets} handleDeleteProduct={handleDeleteProduct}/>
        <Cards items={items} handleAddProduct={handleAddProduct}/>
      </Container>
    </>
  )
}

export default Market