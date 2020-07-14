import React from "react"

class ResponseCheck extends React.Component{
    state={
        state:"waiting",
        message:"클릭해서 시작하세요."
    }

    render(){
        return(
            <div>
                <h2>반응속도체크</h2>
                <div id="screen" onClick={this.changeScreen}>
                    <p>{this.message}</p>
                </div>
            </div>
        )
    }
}

export default React