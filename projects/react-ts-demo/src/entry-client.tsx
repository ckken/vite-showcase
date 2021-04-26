import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import RouterComp from './Router'

ReactDOM.hydrate(
  <BrowserRouter>
    <RouterComp />
  </BrowserRouter>,
  document.getElementById('app')
)