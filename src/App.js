// src/App.js
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Exchange from './components/Exchange';
// Other imports...

function App() {
  return (
    <Router>
  <div className="App">
    <nav>
      <ul>
        <li><Link to="/exchange">Exchange</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/exchange" component={Exchange} />
    </Routes>
  </div>
</Router>
  );
}

export default App;
