import React from 'react'

export default function DtnaJsxExpression(){
    //bien
    const name="Doan Thi Ngoc Anh";
    // bien doi tg
    const user ={
        firstName:"Anh",
        lastName:"Doan"
    }
    //ham
    const fullName=(user)=>{
        return user.firstName + ' '+ user.lastName ;
    }
    //element
    const element =(
        <div>
            {/* bt jsx*/}
            <h2>{fullName(user)}</h2>
            <hr/>
            <h3> Welcome to,{user}</h3>
        </div>
    );
    //ham
    const sayWelcome =(name)=>{
        if(name){
            return <h3> Welcome to {name} </h3>
        }
        else {
            return <h3> Welcome to FIT-NTU -K23CNT1</h3>
        } 
    }
    return (
        <div>
            <h1> Dtna- JSX Expression</h1>
            {/* su dung bien element */}
            {element}  {/* Đưa element vào JSX */}
    
            <hr/>
            {saywelcome()}
            <hr/>
            {saywelcome("Doan T Ngoc Anh")}
        </div>
    )
}