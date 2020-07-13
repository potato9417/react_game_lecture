import React from "react"

class Try extends React.Component{
    render(){
        return(
            <li>
                <p>{this.props.tryInfo.tryNum}</p>
                <p>{this.props.tryInfo.result}</p>
            </li>
        )
    }
}

export default Try