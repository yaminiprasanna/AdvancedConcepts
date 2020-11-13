import React,{Component} from 'react'
// function FRInput(){
//     return(
//         <div>
//             <input type="text"/>
//             </div>
//     )
// }
const FRInput=React.forwardRef((props,ref)=>{
    return(
        <div>
            <label>Forwardref
            <input type="text" ref={ref}/></label>
            </div>
    )
})
export default FRInput