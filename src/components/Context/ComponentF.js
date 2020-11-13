import React from 'react'
import {UserConsumer} from './UserContext' 
class ComponentF extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <UserConsumer>
                    {
                        (username)=>{
                            return <div>Hello {username} </div>
                        }
                    }
                    </UserConsumer>
                </div>
        )
    }
}
export default ComponentF