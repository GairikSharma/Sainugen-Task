import logo from './logo.svg';
import './App.css';
import SideMenu from './components/sidemenu';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <SideMenu className='sideMenu' />
        {/* <div className="dashboard"> */}
        <Dashboard />
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;