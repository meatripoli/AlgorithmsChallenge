import React,{useState} from 'react';
import './style.css';

import {Dropdown, FormControl} from 'react-bootstrap';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </div>
  ));
  
  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
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
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );

export default function(){
   return (<Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            Choose an Algorithm to use
        </Dropdown.Toggle>
        <Dropdown.Menu as={CustomMenu}>
            <Dropdown.Item eventKey="1">Binary Search</Dropdown.Item>
            <Dropdown.Item eventKey="2">Bubble Sort</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>);
}