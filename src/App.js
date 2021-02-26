import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Bappi', 'Shakib', 'Jolil', 'Shuvo', 'Razzak','Salman'];
  const nayika = ['Mahi', 'Apu Bissas', 'Barsha', 'Tisha'];
  const products =[
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premiere El', price: '$249.99'}
  ];
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I am a React Person</p>
        <Todo></Todo>
        <Counter></Counter>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        <Product product ={products[0]}></Product>
        <Product product ={products[1]}></Product>
        <Hero Hname={nayoks[0]} Nname={nayika[0]} cinema="Borbad"></Hero>
        <Hero Hname={nayoks[1]} Nname={nayika[1]} cinema="Premer Jala"></Hero>
        <Hero Hname={nayoks[2]} Nname={nayika[2]} cinema="Hotat Bristi"></Hero>
        <Hero Hname={nayoks[3]} Nname={nayika[3]} cinema="Agun"></Hero>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Todo(){
  const [Todo, setTodo] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setTodo(data))
  })
  return (
    <div>
        <h1>Number of Item: {Todo.length}</h1>
        <ul>
          {
            Todo.map(todo => <li>{todo.title}</li>)
          }
        </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name,price} = props.product;
  return (
    <div style={productStyle}>
        <h3>{props.product.name}</h3>
        <h5>{props.product.price}</h5>
        <button>Buy Now</button>
    </div>
  )
}

function Hero(props){
  const HeroStyle={
    border: '2px solid salmon',
    width: '400px',
    margin: '15px'
  }
  return (
    <div style={HeroStyle}>
        <h4>Hero Name:{props.Hname}</h4>
        <h5>Heroine Name:{props.Nname}</h5>
        <p>Cinema: {props.cinema}</p>
    </div>
  )
}

export default App;
