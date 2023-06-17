import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ExpiredMembership from './components/ExpiredMembership';
import BalancePayment from './components/BalancePayment'
import Membership from './components/Membership';
import EnquiryFollowUp from './components/EnquiryFollowUp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='div'>
        <Sidebar/>
        <Routes>
          <Route path='/BalancePayment' element={<BalancePayment/>}></Route>
          <Route path='/ExpiredMembership' element={<ExpiredMembership/>}></Route>
          <Route path='/Membership' element={<Membership/>}></Route>
          <Route path='/EnquiryFollowUp' element={<EnquiryFollowUp/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
