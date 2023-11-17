import React from 'react';
import './App.css';
import { Header } from './components/Header';
import Balanc from './components/balanc/Balanc';
import Incomeexpenses from './components/income/Incomeexpenses';
import Transactionlist from './components/transcation/Transactionlist';
import Addtransaction from './components/addtransaction/Addtransaction';
import { GlobalProvider } from './components/context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balanc />
        <Incomeexpenses />
        <Transactionlist />
        <Addtransaction />
      </div>

    </GlobalProvider>

  );
}

export default App;
