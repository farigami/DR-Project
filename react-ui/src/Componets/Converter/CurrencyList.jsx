import React, {useState} from "react";

import { Dropdown, FormControl } from 'react-bootstrap';

const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');
    
        return (
          <div
            ref={ref}
            style={style}
            className={className}
            aria-labelledby={labeledBy}
          >
            <FormControl
              autoFocus
              className="mx-3 my-2 w-auto"
              placeholder="Search..."
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
            <ul className="list-unstyled">
              {React.Children.toArray(children).filter(
                (child) =>
                  !value || 
                  child.props.children?.toLowerCase().startsWith(value) || 
                  child.props.children?.toUpperCase().startsWith(value),
              )}
            </ul>
          </div>
        );
      },
    );


const CurrencyList = (currencies) => {
    const titles = Object.keys(currencies.currency)
    let rows = [], i = 0, len=titles.length-1
    while (i++ < len) rows.push(i);
    return (
        <> 
            <div className="Converter-Header">
                <Dropdown key='dropdown1'>
                    <p>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" className='Converter-Toggle' variant="secondary">
                            Select FIAT
                        </Dropdown.Toggle>
                    </p>
                    <Dropdown.Menu className="Converter-Item Converter-Menu" as={CustomMenu} id="WTS">
                    {
                        rows.map( row => (
                            <Dropdown.Item  className="Converter-Item">{titles[row].slice(3)}</Dropdown.Item>
                        ))
                    }  
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown key='dropdown2'>
                    <p>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" className='Converter-Toggle' variant="secondary">
                            Select FIAT
                        </Dropdown.Toggle>
                    </p>
                    <Dropdown.Menu className="Converter-Item Converter-Menu" as={CustomMenu} id="WTS">
                    {
                        rows.map( row => (
                            <Dropdown.Item  className="Converter-Item">{titles[row].slice(3)}</Dropdown.Item>
                        ))
                    }  
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </>
    )
}

export default CurrencyList;