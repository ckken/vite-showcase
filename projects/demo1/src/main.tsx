import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
//@ts-ignore
import App from '@vitecase/demo2'
// import '@vitecase/demo2/App.css'
//
// import App from 'http://172.26.130.38:3002/App.es.js'
// import confetti from 'https://cdn.skypack.dev/canvas-confetti';
// confetti()
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
