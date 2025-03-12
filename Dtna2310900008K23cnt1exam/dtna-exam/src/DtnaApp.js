import React from 'react'
import DtnaAccountsList from './components/DtnaAccountsList'

function DtnaApp() {
  const Dtna_Accounts = [
    { Dtna_id: "2310900008", Dtna_name: "Đoàn Thị Ngọc Ánh", Dtna_email: "doan@student.edu.vn", Dtna_amount: 1000 },
    { Dtna_id: "2310900030", Dtna_name: "Trần Văn An", Dtna_email: "tva@student.edu.vn", Dtna_amount: 1500 },
    { Dtna_id: "2310900032", Dtna_name: "Lê Thị Bích", Dtna_email: "ltb@student.edu.vn", Dtna_amount: 2000 }
  ];

  return (
    <div className="container">
       <h2 className="text-2xl font-bold text-center mb-4 flex justify-center">Danh sách tài khoản </h2>
      
      <DtnaAccountsList accounts={Dtna_Accounts} />
    </div>
  );
}

export default DtnaApp;
