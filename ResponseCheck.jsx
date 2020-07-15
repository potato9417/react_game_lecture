const React = require("react")

class ResponseCheck extends React.Component{
    state={
        state:"waiting",
        message:"클릭해서 시작하세요.",
        result:[]
    }

    timeout;
    startTime;
    endTime;

    changeScreen=()=>{
        console.log("click")
        const {state,message,result}=this.state

        if(state==="waiting"){
            this.setState({
                state:"ready",
                message:"초록색이 되면 클릭하세요."
            })
            this.timeout=setTimeout(() => {
                this.setState({
                    state:"now",
                    message:"지금 클릭!"
                })
                this.startTime=new Date()
            }, Math.floor((Math.random()*1000)+2000));
        }
        else if(state==="ready"){
            clearTimeout(this.timeout)
            this.setState({
                state:"waiting",
                message:"너무 성급하시군요! 초록색이 된 후에 클릭하세요."
            })
        }
        else if(state==="now"){
            this.endTime=new Date()
            this.setState((prevState)=>{
                return{
                    state:"waiting",
                    message:"클릭해서 시작하세요.",
                    result:[...prevState.result,this.endTime-this.startTime]
                }   
            })
        }
    }

    reset=()=>{
        this.setState({
            result:[]
        })
    }

    render(){
        const {state,message,result}=this.state
        return(
            <div>
                <h2>반응속도체크</h2>
                <div id="screen" className={state} onClick={this.changeScreen}>
                    <p>{message}</p>
                </div>
                {result.length !==0 && 
                    <div>
                        <h4>반응속도 : {result[result.length-1]}ms</h4>
                        <h4>평균시간 : {result.reduce((a,c)=>a+c)/result.length}ms</h4>
                        <button onClick={this.reset}>초기화</button>
                    </div>
                }
            </div>
        )
    }
}

module.exports=ResponseCheck