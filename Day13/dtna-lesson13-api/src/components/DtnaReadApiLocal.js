import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function DtnaReadApiLocal() {
    // khởi tạo state
    const [dtnaListUser, setDtnaListUser] = useState([])
    // đọc dữ liệu từ api local  và set cho dtnaListUser
    const apiUrl = "http://localhost:3001/users"
    // Lấy danh sách từ apiUrl
    useEffect(()=>{
        axios
            .get(apiUrl)
            .then((dtnaResponse)=>{
                setDtnaListUser(dtnaResponse.data)
            })
            .catch((error)=>{
                console.log("Lỗi");
            })
    },[])

  return (
    <div>
        <h2>Đọc dữ liệu từ API Local</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>FullName</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    dtnaListUser.map((dtnaItem, index)=>{
                        return (
                            <tr>
                                <td>{dtnaItem.fullName}</td>
                                <td>{dtnaItem.age}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
