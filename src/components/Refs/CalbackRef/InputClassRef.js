import React,{Component} from 'react'
class InputClassRef extends React.Component{
    constructor(){
        super()
    this.inputRef= React.createRef()
    }
    focusInput(){
      this.inputRef.current.focus()
    }
    render(){
        return(
            <div>
                <label> FocusElement
                <input type="text" ref={this.inputRef}/></label>
                </div>
        )
    }
}
export default InputClassRef