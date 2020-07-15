const React = require("react")

class ResponseCheck extends React.Component{
    state={
        state:"waiting",
        message:"클릭해서 시작하세요.",
        result:[]
    }

    changeScreen=()=>{
        console.log("click")
    }

    render(){
        const {state,message,result}=this.state
        return(
            <div>
                <h2>반응속도체크</h2>
                <div id="screen" className={state} onClick={this.changeScreen}>
                    <p>{message}</p>
                </div>
                {result.length !==0 && <h4>평균시간 : {result.reduce((a,c)=>a+c)/result.length}ms</h4>}
            </div>
        )
    }
}

module.exports=ResponseCheck