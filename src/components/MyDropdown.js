import React, {useState} from 'react';
import './style.css';
import SearchForm from './SearchForm';
import SortForm from './SortForm';

import {Dropdown,DropdownButton} from 'react-bootstrap';

export default function(){
  const [state,setState]=useState({
    search: false,
    sort: false
  });

  function handleState(key){
    switch (key) {
      case 'search':
        setState({
          search: true,
          sort: false
        });
        break;
      case 'sort':
        setState({
          search: false,
          sort: true
        });
        break;
    }
    
  };
  return (<div id='dropdown'>
    <DropdownButton id="dropdown-basic-button" title="Choose an Algorithm to use">
      <Dropdown.Item onSelect={()=>handleState('search')}>Binary Search</Dropdown.Item>
      <Dropdown.Item onSelect={()=>handleState('sort')}>Bubble Sort</Dropdown.Item>
    </DropdownButton>
    <SearchForm visible={state.search}>></SearchForm>
    <SortForm visible={state.sort}></SortForm>
  </div>);
}