const React = require("react")

class Wordrelay extends React.Component{
    state={
        name:"Hello! webpack"
    }
    render(){
        const {name}=this.state
        return(
            <h2>{name}</h2>
        )
    }
}

module.exports=Wordrelay