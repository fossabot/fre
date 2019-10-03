// import { unstable_createRoot } from "react-dom"
// import { createElement as h, useState, useEffect } from "react"
import { h, render, useState, useEffect } from "../../src"

import './style.css'

const UPDATE_EVERY = 1000;
const BLOCK_FOR = 3;
const NUM_COMPONENTS = 100;

const App = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    setTimeout(() => setCount(count + 1), UPDATE_EVERY);
  });

  const values = [];

  for (let i=count; i<count+NUM_COMPONENTS; i++) {
    values.push(i);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      {values.map((value, index) => <SlowComponent key={index} value={value}/>)}
    </div>
  );
}

const SlowComponent = ({ value }) => {
  const start = performance.now();
  while (performance.now() - start < BLOCK_FOR);
  
  return <span className="SlowComponent">{value}</span>
}

render(<App/>, document.getElementById("root"));
// const root = unstable_createRoot(document.getElementById('root'))
// root.render(<App />)
