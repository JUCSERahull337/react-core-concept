import React , { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // let name = 'rahul faiza preeti'
  // let product = {
  //   name: 'Laptop',
  //   price: 200 ,
  //   owner: 'Rahul'
  // };
  // let product2 = {
  //   name: 'Mobile',
  //   price: 700 ,
  //   owner: 'Faiza'
  // };
  // const style= {
  //   color: 'red',
  //   backgroundColor: 'blue'
  // }
  const names=['himu', 'dipu','konchi', ' dadu','faiza','preeti']
  const foods=['Coke','Fish','Vegetable']
  const cities=['Savar','Bngla-Motor','Mirpur']
  const products = [
    {name:'Photoshop', price: '$90.99'},
    {name:'Illustrator', price: '$110.79'},
    {name:'Visual Studio', price: '$90'},
    {name:'Android Studio', price: '$190'},
    {name:'PyCharm', price: '$100'}
  ]
  const productNames = products.map(product => product);
  //console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <h1>My First React App</h1> */}
        {/* <p>Hello World!</p> */}
        {/* <h4>My react app runs javascript like this: {((2*10)+5)*4}</h4> */}
        {/* <i>My friends name : {name}</i> */}
        {/* <p style={style}>Our Products : {product.name + " "+ product.owner + " " + product.price}</p>
        <h5 className="" style={{backgroundColor: 'cyan', color: 'yellow'}}>Our Products : {product2.name + " "+ product.owner + " " + product2.price}</h5> */}
        {/* Similar in Looks */}

        {/* <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person> */}

        {/* End Of similar in looks */}

        {/* Dynamic Data Passing */}

        {/* <Person name="Sushmoy Barua" food='Kacchi'city='chittagong'></Person>
        <Person name='Faiza Feroz' food='Velpuri' city='satkhira city'></Person>
        <Person name='Neelima Preeti' food='Burger' city='dhaka'></Person>
        <Person name={names[0]} food={foods[0]} city={cities[1]}></Person>
        <Person name= {names[1]} food={foods[1]} city={cities[2]}></Person> */}

        {/* End of dynamic data passing */}

        {/* Dynamic Object Passing */}
        <Counter></Counter>
        <Users></Users>
        <h2><i>My Friends</i></h2>
        <ul>
          {
            names.map(fName => <li>{fName}</li>)
          }
          <h4>Products</h4>
          {
            products.map(product => <li>{product.name}</li>)
            
          }
          {/* <li>{names[0]}</li>
          <li>{names[1]}</li>
          <li>{names[2]}</li> */}
        </ul>
        {
          //products.map(product => console.log('hello ',product))
          products.map(product => <Product product={product}></Product>)
        }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product = {products[2]}></Product> */}
        {/* <Product name= {products[1].name} price= {products[1].price}></Product>
        <Product name= {products[2].name} price= {products[2].price}></Product> */}


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function Users(){
  const [user, setUsers]= useState([]);

  useEffect(()=> {
    //console.log('calling use Effect');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  return (
    <div>
      <h2><i>Dynamic Users: {user.length}</i></h2>
      {/* {
         console.log(user)
      } */}
      <ul>
      {
       
        user.map(user => <li>{user.name}:  {user.email}</li>)
        
      }

      </ul>
      
    </div>
  )
}
function Counter(){
  const [count, setCount]= useState(0);
  // const handleIncrease = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  const handleIncrease = () => setCount(count + 1);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>Increase</button><br/>
      <button onClick= {()=> setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Person(props){
  const personStyle= {
    border: '3px solid red',
    margin : '5px',
    color: 'orange',
    borderRadius: '5px',
    // width: '800px'
  }
  const headingStyle = {
    border: '2px solid blue',
    color: 'tomato',
    backgroundColor: 'white',
    margin: '3px',
    borderRadius: '10px'
  }
  // console.log(props);
  return (
  // <div style={personStyle}>
  //   <h1 style={headingStyle}> Sakib Khan The hero</h1>
  //   <h3>Player of the year</h3>
  //   <p>But My name is: {props.name} and I like {props.food}. I live in {props.city}</p>
  // </div>

    <h1>Hello World!</h1>
  )
} 

function Product(prop){
  const productStyle= {
    border: '1px solid gray',
    width: '300px',
    height: '300px',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    float: 'left'
  }
  //console.log('prop product',prop)
  const {name , price}= prop.product;
  //console.log(name, price);

  return(
    <div style={productStyle}>
      {/* <h3>Name:{prop.product.name}</h3>
      <h4>{prop.product.price}</h4> */}
     
     
      <h3>Name:{name}</h3>
      <h4>{price}</h4>
      <button>Buy Now</button>
      

    </div>
  )
}


export default App;
