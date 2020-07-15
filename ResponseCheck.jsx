const React = require("react")

const ResponseCheck=()=>{
    const [state,setState]=React.useState("waiting")
    const [message,setMessage]=React.useState("클릭해서 시작하세요.")
    const [result,setResult]=React.useState([])
    const timeout=React.useRef(null)
    const startTime=React.useRef()
    const endTime=React.useRef()

    const changeScreen=()=>{
        console.log("click")

        if(state==="waiting"){
            setState("ready")
            setMessage("초록색이 되면 클릭하세요.")

            timeout.current=setTimeout(() => {
                setState("now")
                setMessage("지금 클릭!")

                startTime.current=new Date()
            }, Math.floor((Math.random()*1000)+2000));
        }
        else if(state==="ready"){
            clearTimeout(timeout.current)

            setState("waiting")
            setMessage("너무 성급하시군요! 초록색이 된 후에 클릭하세요.")
        }
        else if(state==="now"){
            endTime.current=new Date()

            setState("waiting")
            setMessage("클릭해서 시작하세요.")
            setResult((prevResult)=>{return[...prevResult,endTime.current-startTime.current]})
        }
    }

    const reset=()=>{
        setResult([])
    }

    return(
        <div>
            <h2>반응속도체크</h2>
            <div id="screen" className={state} onClick={changeScreen}>
                <p>{message}</p>
            </div>
            {result.length !==0 && 
                <div>
                    <h4>반응속도 : {result[result.length-1]}ms</h4>
                    <h4>평균시간 : {result.reduce((a,c)=>a+c)/result.length}ms</h4>
                    <button onClick={reset}>초기화</button>
                </div>
            }
        </div>
    )
}

module.exports=ResponseCheck