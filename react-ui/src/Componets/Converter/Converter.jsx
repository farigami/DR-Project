import React from "react";
import { Card, Dropdown } from 'react-bootstrap';
import './Converter.css'
import CurrencyList from './CurrencyList'
import { useState, useEffect, useCallback } from "react";

const Converter = () => {
    const [items, setItems] = useState([])

    const [loading, setLoading] = useState(false)

    const [error, setError] = useState(false)

    const fetchData = useCallback(
        async () => {
          try {
            setLoading(true) 
            const response = await fetch('http://127.0.0.1:8000/api/currency/')

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
    if (error) {
        return <div className='just-element'><h1><p className='emoji'>⚠️</p>Ошибка: {error.message}</h1></div>;
    }
    if (loading) {
        return <div className='just-element'><h1>Загрузка ...</h1></div>;
    }
    
    return (
        <> 
            <Card className="m-auto Converter-Card">
            <Card.Body>
                { items.map( item => (
                    <Card.Title>
                        <CurrencyList currency={ item.quotes } />
                    </Card.Title>
                ))}
                <div className="Converter-InputBlock">
                    <input type="number" min="0" className="Converter-Input"></input>
                </div>
            </Card.Body>
                
            </Card>
        </>
    )
}
export default Converter