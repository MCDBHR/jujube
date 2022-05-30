import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './components/App.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<Router>
  {/* <App/> */}
  <Routes>
    <Route path='/' exact element={<App/>}/>
    <Route path='/products/:id' exact element={<App/>}/>
  </Routes>
</Router>
)
