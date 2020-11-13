import React,{Component} from 'react'
class RefDemo extends React.Component{
    constructor(){
        super()
        this.inputRef= React.createRef();
        this.cbRef=null;
        this.setcbRef=element=>{
            this.cbRef=element
        }
        this.handleClick=this.handleClick.bind(this)
    }
    componentDidMount(){
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
        if(this.cbRef){
            this.cbRef.focus()
        }
    }
    handleClick=()=>{
        alert(this.inputRef.current.value)
    }
    render(){
        return(
            <div>
                <label> UserName:
                <input type="text" ref={this.inputRef}/></label>
                <h2>
                <label> CUserName:
                <input type="text" ref={this.setcbRef}/></label>
                <button onClick={this.handleClick}>click</button></h2>
                </div>
        )
    }
}
export default RefDemo