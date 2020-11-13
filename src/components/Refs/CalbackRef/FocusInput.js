import React from 'react'
import InputClassRef from './InputClassRef'
class FocusInput extends  React.Component{
    constructor(){
        super()
        this.componentRef=React.createRef()
    }
    Clickhandler=()=>{
        //caling focusinput method in childcomp through compref
        this.componentRef.current.focusInput()
    }
    render(){
        return(
            <div>
                <InputClassRef ref={this.componentRef}/>
                <button onClick={this.Clickhandler}>Check</button>
                </div>
        )
    }
}
export default FocusInput