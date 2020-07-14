const React = require("react")

class ResponseCheck extends React.Component{
    state={
        state:"waiting",
        message:"클릭해서 시작하세요."
    }

    render(){
        const {message}=this.state
        return(
            <div>
                <h2>반응속도체크</h2>
                <div id="screen" onClick={this.changeScreen}>
                    <p>{message}</p>
                </div>
            </div>
        )
    }
}

module.exports=ResponseCheck