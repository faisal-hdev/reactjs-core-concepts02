import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
};

function ExternalUsers() {
  const [users, setUser] = useState([]);
  // useEffect(()=>{}, [])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
  },[])
  return (
    <div>
      <h1>External users</h1>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  );
};

function User(props) {
  return (
    <div style={{border:'1px solid red', margin:'20px', borderRadius:'10px'}}>
      <h3>Name : {props.name} </h3>
      <p>Email : {props.email}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(40);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

function Product(props) {
  return (
    <div className='product'>
      <h3>Name : {props.name}</h3>
      <p>Price : {props.price}</p>
    </div>
  )
}

/*
  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount)
  // }

  const products = [
    {name : 'laptop', price:50000},
    {name : 'iphone', price:70000},
    {name : 'watch', price:12000},
    {name : 'tablet', price:25000},
  ]

{/* <Product name='laptop' price='50000'></Product>
<Product name='iphone' price='70000'></Product>
<Product name='Watch' price='12000'></Product>
 {
   products.map(product => <Product name={product.name} price={product.price}></Product>)
 } 
 */

export default App;



