const React=require("react")

const getNums=()=>{
    const nums=Array(45).fill().map((current,index)=>index+1)
    const shuffle=[]
    while(nums.length>0){
        shuffle.push(nums.splice(Math.floor(Math.random()*nums.length),1)[0])
    }
    const BonusNum = shuffle[shuffle.length-1]
    const winNum = shuffle.splice(0,6).sort((a,b)=>a-b) // 오름차순 정렬
    return [...winNum,BonusNum]
}

class Lotto extends React.Component{
    state={
        winNums:getNums(), // 당첨번호
        winBalls:[],
        bonus:null, // 보너스 공
        clickBtn:false
    }

    clickRandom=()=>{}
    render(){
        const {winBalls,bonus,clickBtn}=this.state
        return(
            <div>
                <h2>로또추첨기</h2>
                <div>
                    <h3>당첨숫자</h3>
                    {winBalls.map(props=><Ball key={props} number={props} />)}
                    <h4>보너스!</h4>
                    {bonus&&<Ball number={bonus} />}
                </div>
                <button onClick={clickBtn?this.clickRandom:()=>{}}>한번 더!</button>

            </div>

        )
    }
}

module.exports=Lotto