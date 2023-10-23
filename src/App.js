import { useState } from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
};

function Counter() {
  const [count, setCount] = useState(40);
  const increaseCount = () => setCount(count + 1);

  const decreaseCount = () => setCount(count - 1);
  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount)
  // }

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

/*
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



function Product(props) {
  return (
    <div className='product'>
      <h3>Name : {props.name}</h3>
      <p>Price : {props.price}</p>
    </div>
  )
}

export default App;



