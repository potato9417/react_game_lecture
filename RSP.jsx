const React = require("react")

class RSP extends React.Component{
    state={
        result:"",
        score:0,
        imgCoord:0
    }

    // 컴포넌트가 첫 렌더링 된 후
    componentDidMount(){

    }

    // 리렌더링 후 
    componentDidUpdate(){

    }

    // 컴포넌트가 제거되기 직전
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