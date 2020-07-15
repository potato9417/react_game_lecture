const React = require("react")

// 클래스의 LifeCycle
// construncotr -> render -> ref -> componentDidMount -> 
// (setState/props 바뀔때 -> shouldComponentUpdate -> render -> componentDidUpdate)
// 부모가 컴포넌트를 없앨 때-> componentWillUnmount -> 소멸

const rspCoords={
    바위:"0",
    가위:"-142px",
    보:"-284px"
}

const scores ={
    바위:1,
    가위:0,
    보:-1
}

class RSP extends React.Component{
    state={
        result:"",
        score:0,
        imgCoord:"0"
    }

    interval;
    // 컴포넌트가 첫 렌더링 된 후 => 비동기 요청 주로 함
    componentDidMount(){
        const {imgCoord}=this.state

        this.interval=setInterval(()=>{

            // console.log("hi")
            if(imgCoord===rspCoords.바위){
                console.log("바위")
                this.setState({
                    imgCoord:rspCoords.가위
                })
            }
            else if(imgCoord===rspCoords.가위){
                console.log("가위")
                this.setState({
                    imgCoord:rspCoords.보
                })
            }
            else if(imgCoord===rspCoords.보){
                console.log("보")
                this.setState({
                    imgCoord:rspCoords.바위
                })
            }
        },500)
    }

    // 리렌더링 후 
    componentDidUpdate(){

    }

    // 컴포넌트가 제거되기 직전 => 비동기 요청 정리 주로 함
    componentWillUnmount(){

    }

    render(){
        const {result,score,imgCoord}=this.state

        return(
            <div>
                <h2>가위바위보</h2>
                <div id="computer" style={{background:`url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}}></div>
                <div>
                    <button id="scissor">가위</button>
                    <button id="rock">바위</button>
                    <button id="paper">보</button>
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