import React from 'react'

 function DtnaFuncComp(props) {
  return (
    <div>
        <h1>Demo: Function components props</h1>
        <p>Lấy Dữ liệu từ props để hiển thị</p>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Address: {props.address}</p>
        <p>Note: {props.note}</p>
    </div>
  )
}
export default DtnaFuncComp;
