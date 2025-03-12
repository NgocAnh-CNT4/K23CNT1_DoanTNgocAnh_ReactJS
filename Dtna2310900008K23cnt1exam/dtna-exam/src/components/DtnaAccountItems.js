import React from "react";

const DtnaAccountItems = ({ account }) => {
  return (
    <tr>
      <td>{account.Dtna_id}</td>
      <td>{account.Dtna_name}</td>
      <td>{account.Dtna_email}</td>
      <td>{account.Dtna_amount}</td>
    </tr>
  );
};

export default DtnaAccountItems;