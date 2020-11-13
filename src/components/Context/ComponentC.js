import React from 'react'
import ComponentE from './ComponentE'
class ComponentC extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <ComponentE/>
                </div>

        )
    }
}
export default ComponentC