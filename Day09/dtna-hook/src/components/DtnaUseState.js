import React from 'react'

export default function() {
    //tạo state là count và hàm cập nhật state là séttate
    const {count,setCount} = useState(0);

  return (
    <div className='alert alert-info'>
        <h2> Sử dụng State</h2>
        <div>
        <b> count: {count}</b>
        <button> Tăng</button>
        <button> Giảm</button>
        <button> Đặt Lại</button>
        </div>
    </div>
  )
}
