const React=require("react")

class Ball extends React.PureComponent{
    render(){
        const {number}=this.props
        let background;

        if(number<=10){
            background="red"
        }
        else if(number<=20){
            background="orange"
        }
        else if(number<=30){
            background="yellow"
        }
        else if(number<=40){
            background="green"
        }
        else{
            background="blue"
        }
        return (
            <div className="ball" style={{background}}>{number}</div>
        )
    }
}

module.exports=Ball