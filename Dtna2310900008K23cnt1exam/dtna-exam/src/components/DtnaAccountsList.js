import React from "react";
import DtnaAccountItems from "./DtnaAccountItems"; // Đảm bảo đường dẫn đúng!

const DtnaAccountsList = ({ accounts }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tên</th>
          <th>Email</th>
          <th>Số tiền</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map((account) => (
          <DtnaAccountItems key={account.Dtna_id} account={account} />
        ))}
      </tbody>
    </table>
  );
};

export default DtnaAccountsList;

  


