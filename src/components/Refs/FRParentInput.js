import React,{Component} from 'react'
import FRInput from './FRInput'
class FRParentInput extends React.Component{
    constructor(){
        super()
        this.inputRef=React.createRef()
    }
    Clickhandler=()=>{
        //caling focusinput method in childcomp through compref
        this.inputRef.current.focus()
    }
    render(){
        return(
            <div>
                
                <FRInput ref={this.inputRef}/>
                <button onClick={this.Clickhandler}>Focus</button>
            </div>
        )
    }

}
export default FRParentInput