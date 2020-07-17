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

class RSP extends React.Component{
    state={
        result:"",
        score:0,
        imgCoord:rspCoords.rock
    }

    changeHand=()=>{
        const {imgCoord}=this.state
        console.log(imgCoord)
        if(imgCoord===rspCoords.rock){
            // console.log("바위",imgCoord)
            this.setState({
                imgCoord:rspCoords.scissor
            })
        }
        else if(imgCoord===rspCoords.scissor){
            // console.log("가위",imgCoord)
            this.setState({
                imgCoord:rspCoords.paper
            })
        }
        else if(imgCoord===rspCoords.paper){
            // console.log("보",imgCoord)
            this.setState({
                imgCoord:rspCoords.rock
            })
        }
    }

    interval;
    // 컴포넌트가 첫 렌더링 된 후 => 비동기 요청 주로 함
    componentDidMount(){
        // 비동기요청을 할떄 클로저(클로저는 외부함수(포함하고 있는)의 변수에 접근할 수 있는 내부 함수)는 함수안으로
        this.interval=setInterval(this.changeHand,100)
    }

    // 리렌더링 후 
    componentDidUpdate(){

    }

    // 컴포넌트가 제거되기 직전 => 비동기 요청 정리 주로 함
    componentWillUnmount(){
        clearInterval(this.interval)
    }

    clickBtn=(choice)=>{
        const {imgCoord}=this.state
        clearInterval(this.interval)
        const myScore=scores[choice]
        const cpuScore=scores[computerChoice(imgCoord)]
        const diff=myScore-cpuScore
        
        // console.log("choice",choice)
        // console.log("myScore",myScore)
        // console.log("cpuScore",cpuScore)
        // console.log("diff",diff)
        if(diff===0){
            this.setState({
                result:"비겼습니다."
            })
        }
        else if([-1,2].includes(diff)){
            this.setState(prevState=>{
                return{
                    result:"졌습니다.",
                    score:prevState.score-1
                }
            })
        }
        else {
            this.setState(prevState=>{
                return{
                    result:"이겼습니다.",
                    score:prevState.score+1
                }
            })
        }
        setTimeout(() => {
            this.interval=setInterval(this.changeHand,100)
        }, 2000);
    }

    render(){
        const {result,score,imgCoord}=this.state
        // console.log(imgCoord,"이거확인")

        return(
            <div>
                <h2>가위바위보</h2>
                <div id="computer" style={{background:`url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}} />
                <div>
                    <button id="rock" onClick={()=>{this.clickBtn("rock")}}>바위</button>
                    <button id="scissor" onClick={()=>{this.clickBtn("scissor")}}>가위</button>
                    <button id="paper" onClick={()=>{this.clickBtn("paper")}}>보</button>
                </div>
                <div>
                    <p>{result}</p>
                    <p>현재 {score}점</p>
                </div>
            </div>
        )
    }
}

module.exports=RSP