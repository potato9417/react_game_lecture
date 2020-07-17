const React=require("react")
const Ball=require("./Ball")

const getNums=()=>{
    const nums=Array(45).fill().map((current,index)=>index+1)
    const shuffle=[]
    while(nums.length>0){
        shuffle.push(nums.splice(Math.floor(Math.random()*nums.length),1)[0])
    }
    const BonusNum = shuffle[shuffle.length-1]
    const winNums = shuffle.splice(0,6).sort((a,b)=>a-b) // 오름차순 정렬
    return [...winNums,BonusNum]
}

class Lotto extends React.Component{
    state={
        winNums:getNums(), // 당첨번호
        winBalls:[],
        bonus:null, // 보너스 공
        showBtn:false
    }

    clickRandom=()=>{}

    componentDidMount(){
        const {winNums}=this.state
        // 비동기와 let을 함께 쓰면 클로저 문제발생하지않음
        for(let i=0;i<winNums.length-1;i++){
            setTimeout(()=>{
                this.setState((prevState)=>{
                    return{
                        winBalls:[...prevState.winBalls,winNums[i]]
                    }
                })
            },(i+1)*1000)
        }
        setTimeout(()=>{
            this.setState({
                bonus:winNums[6],
                showBtn:true
            })
        },7000)
    }

    render(){
        const {winNums,winBalls,bonus,showBtn}=this.state
        console.log(winBalls,bonus)
        return(
            <div>
                <h2>로또추첨기</h2>
                <div>
                    <h3>당첨숫자</h3>
                    {winBalls.map(props=><Ball key={props} number={props} />)}
                    <h4>보너스!</h4>
                    {bonus&&<Ball number={bonus} />}
                </div>
                <button onClick={showBtn?this.clickRandom:()=>{}}>한번 더?</button>

            </div>

        )
    }
}

module.exports=Lotto