import React from "react"

class Try extends React.Component{
    render(){
        return(
            <li>
                {this.props.tryInfo.try}
            </li>
        )
    }
}