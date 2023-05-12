import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from "react";
// import Home from "./Components/Home/Home";
// import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";
// import "./index.css"
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import AppComponent from "./App";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         {/* <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/Header">Header</Link>
//             </li>
//             <li>
//               <Link to="/Footer">Footer</Link>
//             </li>
//           </ul>
//         </nav> */}

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         {/* <Switch>
//           <Route path="/Header">
//             <Header />
//           </Route>
//           <Route path="/Footer">
//             <Footer />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch> */}
//         <AppComponent />
//         Hello world
//       </div>
//     </Router>
//   );
// }