import logo from './logo.svg';
import './App.css';
import Table from './components/Table/Table';
import DataTable from './components/Table/Table';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className="App">
    <DataTable></DataTable>
    </div>
    </>
  );
}

export default App;
