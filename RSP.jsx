const React = require("react")

// 클래스의 LifeCycle
// construncotr -> render -> ref -> componentDidMount -> 
// (setState/props 바뀔때 -> shouldComponentUpdate -> render -> componentDidUpdate)
// 부모가 컴포넌트를 없앨 때-> componentWillUnmount -> 소멸

const rspCoords={
    rock:"0",
    scissor:"-142px",
    paper:"-284px"
}

const scores ={
    rock:1,
    scissor:0,
    paper:-1
}

const computerChoice=(imgCoord)=>{
    return Object.entries(rspCoords).find(function(v){
        return v[1]===imgCoord
    })[0]
}

const RSP=()=>{
    const [result,setResult]=React.useState("")
    const [score,setScore]=React.useState(0)
    const [imgCoord,setImgCoord]=React.useState(rspCoords.rock)
    const interval = React.useRef();

    // useEffect사용
    React.useEffect(()=>{ // => componentDidMount, componentDidUpdate 역할을 해줌(1대1 대응은 아님)
        console.log("다시실행")
        interval.current=setInterval(changeHand,100)
        return()=>{ // => componentWillUnmount 역할
            console.log("종료")
            clearInterval(interval.current)
        }
    },[imgCoord]) // 클로저 문제같은 것을 해결해줌 => function component는 매번 전체를 다시 실행하므로
    // [] : 처음에만 실행하고 나중에 다시 실행하지않는다. => componentDidMount 역할
    // [imgCoord] : imgCoord는 다시 실행한다. => componentDidUpdate 역할
    // state마다 다른 이펙트를 주고싶을떄 useEffect를 여러번 사용하기도함

    const changeHand=()=>{
        if(imgCoord===rspCoords.rock){
            // console.log("바위",imgCoord)
            setImgCoord(rspCoords.scissor)
        }
        else if(imgCoord===rspCoords.scissor){
            // console.log("가위",imgCoord)
            setImgCoord(rspCoords.paper)
        }
        else if(imgCoord===rspCoords.paper){
            // console.log("보",imgCoord)
            setImgCoord(rspCoords.rock)
        }
    }

    const clickBtn=(choice)=>()=>{
        clearInterval(interval.current)
        const myScore=scores[choice]
        const cpuScore=scores[computerChoice(imgCoord)]
        const diff=myScore-cpuScore
        
        // console.log("choice",choice)
        // console.log("myScore",myScore)
        // console.log("cpuScore",cpuScore)
        // console.log("diff",diff)
        if(diff===0){
            setResult("비겼습니다.")
        }
        else if([-1,2].includes(diff)){
            setResult("졌습니다.")
            setScore((prevScore)=>prevScore-1)
        }
        else {
            setResult("이겼습니다.")
            setScore((prevScore)=>prevScore+1)
        }
        setTimeout(() => {
            interval.current=setInterval(changeHand,100)
        }, 2000);
    }

    return (
        <div>
            <h2>가위바위보</h2>
            <div id="computer" style={{background:`url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}} />
            <div>
                <button id="rock" onClick={clickBtn("rock")}>바위</button>
                <button id="scissor" onClick={clickBtn("scissor")}>가위</button>
                <button id="paper" onClick={clickBtn("paper")}>보</button>
            </div>
            <div>
                <p>{result}</p>
                <p>현재 {score}점</p>
            </div>
        </div>
    )
}

module.exports=RSP