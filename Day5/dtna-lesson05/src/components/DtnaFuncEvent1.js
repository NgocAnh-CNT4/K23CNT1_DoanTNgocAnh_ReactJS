import React from 'react'

export default function () {
    // hàm xử lý sự kiện
    const dtnaEvnetButton1Click =() =>{
        alert("Button1- clicked");
    }
    const dtnaEvnetButton2Click =() =>{
        alert("Button2- clicked");
    }
    const dtnaEvnetButton3Click =(name) =>{
        alert("Name:" + name)
    }
  return (
    <div className="">
        <button className='btn btn-primary' onClick={dtnaEvnetButton1Click()}>
            button1
            </button>
        <button className='btn btn-success' onClick={dtnaEvnetButton2Click}>
            button2
        </button>
        <button className='btn btn-success' onClick={dtnaEvnetButton3Click("Ngọc Ánh")}>
            button3
        </button>
        <button className='btn btn-success' onClick={()=>dtnaEvnetButton3Click("Ngọc Ánh Đoàn")}>
            button4
        </button>
        <button className='btn btn-success' onClick={(param)=>dtnaEvnetButton3Click(param)}>
            button5
        </button>
    </div>
  );
}
