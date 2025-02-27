import React, { Component } from 'react';
import DtnaFuncEvent1 from './components/DtnaFuncEvent1';
import DtnaClassCompEvent1 from './components/DtnaClassCompEvent1';

 class DtnaApp extends Component {
  render() {
    return (
      <div className='container border mt-3'>
         <h1 className='text-center alert alert-info my-2'>K23CNT1-Đoàn Thị Ngọc Ánh-Event and Form</h1>
         <hr/>
          <div>
            <h2> Function Component -Event</h2>
         <DtnaFuncEvent1/>
         </div>
         <hr/>
         <div>
          <h2> Class Component-Event</h2>
          <DtnaClassCompEvent1/>
         </div>
      </div>
     
    )
  }
}

export default DtnaApp;