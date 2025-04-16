import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import {BrowserRouter,Route,Routes}from 'react-router-dom';
// import Sample from './Components/Sample'
// import './App.css'

// const { useState } = require("react");

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// export default function App(age){
//   const [count, setCount] = useState(0)
//   const [age1, setAge1] = useState([age])
//   console.log(age1)
//   return(
//     <div>
//       <h1>{count}</h1>
//       <Sample/>
//       <button onClick={()=>setCount(count+1)}>change</button>
//       <h1>hello</h1>
//     </div>
//   )
// }


export default function App() {
  return (
 <>
 <BrowserRouter>
 <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='about' element={<About/>}/>
   <Route path='contact' element={<Contact/>}/>
 </Routes>
 </BrowserRouter>
 </>
  )
}




