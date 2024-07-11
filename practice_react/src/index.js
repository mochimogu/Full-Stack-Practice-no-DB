import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import List from './components/list';
import Error from './components/error';
import Edit from './components/edit';

const routes = createBrowserRouter([
  {
    "element" : <List/>,
    "path" : '/list',
    "errorElement" : <Error/>
  },
  {
    "element" : <App/>,
    "path" : '/',
    "errorElement" : <Error/>
  },
  {
    "element" : <Edit/>,
    "path" : '/edit',
    "errorElement" : <Error/>
  },
])





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
