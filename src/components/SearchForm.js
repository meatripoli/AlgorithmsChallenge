import React from 'react';
import './style.css';

import {Jumbotron,Form,Row,Col,Button} from 'react-bootstrap';
import {useState,useEffect} from 'react';

export default function(props){
    let initialData={
        list:'',
        isSorted:false,
        index:'',
        hidden:true,
        output: 'fill in the input on the left'
    }
    let [data,setData]=useState(initialData);

    useEffect(()=>{
        setData(initialData);
    },[]);

    //let randomNumber=Math.floor(Math.random()*100);
    //let randomArray=Array.from({length: 40}, () => Math.floor(Math.random() * 40));

    let linearSearch = function (item, arr){
        if(arr===undefined){
            return;
        };
        for( let i=0;i<arr.length;i++){
            if(arr[i]===item){
                return `Found ${item} at position ${i} in list`;
            };
        };
        return `${item} not in list`;
    };
    
    //binary search
    //we need to have an ordered list
    let binarySearch = function (item,arr){
        //we start at the two ends of array
        let lower=0;
        let upper=arr.length-1;
        if(arr===undefined){
            return;
        };
        while(lower<=upper){
          //find midpoint
          let mid=Math.floor((lower+upper)/2);
          if(arr[mid]===item){
            return `Found ${item} at position ${mid} in list`;
          }
          else if(arr[mid]<item){
            lower=mid+1;
          }
          else if(arr[mid]>item){
            upper=mid-1;
          }
        };
        if(lower>upper){
          return `${item} not in list`;
        };
    };
    
    let isSorted = function (arr){
        for(let i=0; i<arr.length; i++){
            if(arr[i]>arr[i+1]){
                return false;
            };
        };
        return true;
    };

    let handleInput = function(event){
        let newObj;
        if(event.target.name==='list'){
            newObj = {[event.target.name]: event.target.value.split(',').map(x=>parseInt(x))};
        }
        else{
            newObj = {[event.target.name]: parseInt(event.target.value)}
        };
        setData({...data,...newObj});
    };
    
    let handleClick = function(event){
        event.preventDefault();
        let newOutput;
        let newIsSorted=isSorted(data.list);
        if(data.isSorted===false){
            newOutput=linearSearch(data.index,data.list);
        }
        else{
            newOutput=binarySearch(data.index,data.list);
        }
        
        let newObj = {
            isSorted: newIsSorted,
            hidden:false,
            output: newOutput,
        }
        setData({...data,...newObj});
    }

    let handleClear = function(event){
        event.preventDefault();
        setData(initialData);
    }

    return (<Jumbotron className={props.visible?'visible':'hidden'}>
          <Row>
              <Col>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Please enter a comma separated list of numbers</Form.Label>
                        <Form.Control type="array" name='list' onChange={handleInput} placeholder="i.e: 1,2,3,4,5" value={data.list}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Please enter number to search</Form.Label>
                        <Form.Control type="number" name='index' onChange={handleInput} placeholder="i.e: 10" value={data.index}/>
                    </Form.Group>
                    <Button variant="outline-light" onClick={handleClick} type="submit">
                        Search
                    </Button>
                    <Button variant="outline-light" onClick={handleClear} type="submit">
                        Clear
                    </Button>
                </Form>
              </Col>
              <Col className={data.hidden===true?'hidden':'visible'}>
                <h1>{data.isSorted===false?'Linear Search':'Binary Search'}</h1>
                <p>{data.isSorted===false?'List provided is unsorted':'List provided is sorted'}</p>
                <p>{data.isSorted===false?'scans one item at a time from the leftmost element, without jumping to any item':'searches a sorted array by repeatedly dividing the search interval in half'}</p>
                <p>{data.output}</p>
              </Col>
              <Col className={data.hidden===false?'hidden':'visible'}>
                <h1>Search...</h1>
                <p>{data.output}</p>
                <p>OR</p>
                <p>Click the random button to pick random number </p>
                <Button variant="outline-light" >Random Array</Button>
                <Button variant="outline-light" >Random Number</Button>
              </Col>
          </Row>
    </Jumbotron>);
}