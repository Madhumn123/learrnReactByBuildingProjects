import React,{useState} from 'react';

function ShowPassWOrdAndHidePassWord(){
  const [ispassword,setPassword]=useState(false);
  return (
    <>
      <h1>Hello world</h1>
      <div>
        <input type={ispassword ?"text" :"password" }/>
        <button onClick={()=>setPassword(!ispassword)}>{ispassword ? "hide" :"show"}</button>
      </div>
    </>
  );
}
export default ShowPassWOrdAndHidePassWord;

