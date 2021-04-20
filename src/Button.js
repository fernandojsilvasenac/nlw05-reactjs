//usar um conceito chamado estado
import { useState } from 'react';

export default function Button(props){
  const [counter, setCounter] = useState(1);
  // let counter = 1;

  // [estado,  alterarEstado] //2a opção é uma função

  function increment() {
    // counter = counter +1
    // console.log(counter);
    setCounter(counter +1);
  }

  return (
    <>
    <span>{counter}</span>
    <button onClick={increment}>{props.children}</button> 
    <br/>
    </>
  )
}