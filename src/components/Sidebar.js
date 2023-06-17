import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <h4 className='sideHeader'>Alerts <i class="bi bi-bell-fill"></i></h4><hr style={{margin:'10px'}}></hr>
        <div className='sideContent'>
          <Link className='sideButton' to="/BalancePayment"> <i class="bi bi-people-fill"></i> Balance Payment</Link>
          <Link className='sideButton' to="/Membership"><i class="bi bi-reply-all-fill"></i> Membership </Link>
          <Link className='sideButton' to="/ExpiredMembership"><i class="bi bi-person-fill-slash"></i> Expired Membership </Link>
          <Link className='sideButton' to="/EnquiryFollowUp"><i class="bi bi-telephone-plus-fill"></i> Enquiry Follow up</Link>
        </div>
    </div>    
  )
}

export default Sidebar