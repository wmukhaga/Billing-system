import React from 'react';
import '../App.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>BillSystem</h2>
      <ul>
        <li>Dashboard</li>
        <li>Invoices</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;