const React=require("react")
const Ball=require("./Ball")

const getNums=()=>{
    console.log("getNUm")
    const nums=Array(45).fill().map((current,index)=>index+1)
    const shuffle=[]
    while(nums.length>0){
        shuffle.push(nums.splice(Math.floor(Math.random()*nums.length),1)[0])
    }
    const BonusNum = shuffle[shuffle.length-1]
    const winNums = shuffle.splice(0,6).sort((a,b)=>a-b) // 오름차순 정렬
    return [...winNums,BonusNum]
}

const Lotto=()=>{
    // useMemo => 복잡함 함수의 결과값을 기억
    // useRef => 일반 값을 기억
    const lottoNums=React.useMemo(()=>getNums(),[])
    const [winNums,setWinNums]=React.useState(lottoNums)
    const [winBalls,setWinBalls]=React.useState([])
    const [bonus,setBonus]=React.useState(null)
    const [showBtn,setShowBtn]=React.useState(false)
    const timeouts=React.useRef([])

    React.useEffect(()=>{
        console.log("useEffect",winNums)
        for(let i=0;i<winNums.length-1;i++){
            console.log("i : ",i," winNUm : ",winNums[i])
            timeouts.current[i]=setTimeout(()=>{
                console.log("안에있음","i : ",i," winNUm : ",winNums[i])
                setWinBalls((prevBalls)=>[...prevBalls,winNums[i]])
            },(i+1)*1000)

            console.log(winBalls)
        }
    
        timeouts.current[6]=setTimeout(()=>{
            setBonus(winNums[6])
            setShowBtn(true)
        },7000)

        return()=>{
            timeouts.current.forEach(v=>{
                clearTimeout(v)
            })
        }
    },[timeouts.current]) 
    // 배열에 요소가 없으면 componentDidMount와 동일
    // 배열에 요소가 있으면 componentDidMount와 componentDidUpdate 둘다 수행
    // return()=>{}이 있으면 componentWillUnmount 역할 수행
    

    const clickRandom=()=>{
        console.log("click")
        setWinNums(getNums())
        setWinBalls([])
        setBonus(null)
        setShowBtn(false)
        timeouts.current=[]
    }


    return(
        <div>
            <h2>로또추첨기</h2>
            <div>
                <h3>당첨숫자</h3>
                {winBalls.map(value=><Ball key={value} number={value} />)}
                <h4>보너스!</h4>
                {bonus&&<Ball number={bonus} />}
            </div>
            {showBtn&&<button onClick={clickRandom}>한번 더!</button>}
        </div>
    )
}

module.exports=Lotto