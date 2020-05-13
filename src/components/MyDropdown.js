import React, {useState} from 'react';
import './style.css';
import SearchForm from './SearchForm';
import SortForm from './SortForm';

import {Dropdown,DropdownButton} from 'react-bootstrap';

export default function(){
  const [state,setState]=useState({
    search: false,
    sort: false,
    title:'Choose an Algorithm to use'
  });

  function handleState(key){
    switch (key) {
      case 'search':
        setState({
          search: true,
          sort: false,
          title:'Search'
        });
        break;
      case 'sort':
        setState({
          search: false,
          sort: true,
          title:'Sort'
        });
        break;
    }
    
  };
  return (<div id='dropdown'>
    <DropdownButton id="dropdown-basic-button" title={state.title}>
      <Dropdown.Item onSelect={()=>handleState('search')}>Search</Dropdown.Item>
      <Dropdown.Item onSelect={()=>handleState('sort')}>Sort</Dropdown.Item>
    </DropdownButton>
    <SearchForm visible={state.search}>></SearchForm>
    <SortForm visible={state.sort}></SortForm>
  </div>);
}

//make SearchForm and SortForm one jumbotron with inputs so I can expand
//possible inputs needed title,algorithm description,