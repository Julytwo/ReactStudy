import React from 'react';

//props形参，什么名字都可以
// const prop=(props)=>{
//     return <p>大家好,今天是星期{props.count}</p>
//     <p>{props.children}</p>
// }
const prop=(props)=>{
    return (
        <div>
            <p>大家好,今天是星期{props.count},要{props.thing}</p>
            <p onClick={props.myclick}>今天是星期{props.count},要{props.thing}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}></input>
            <input type="text" onChange={props.changed} defaultValue={props.thing}></input>
        </div>
    )
}



export default prop; //进行外部公开
  