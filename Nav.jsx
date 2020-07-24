const React = require("react");
const Link = require("react-router-dom").Link;

const Nav=()=>{
    return(
        <div>
            <Link to="/">홈</Link>
            <Link to="/gugudan">구구단</Link>
            <Link to="/word_relay">끝말잇기</Link>
            <Link to="/number_baseball">숫자야구</Link>
            <Link to="/response_check">반응속도체크</Link>
            <Link to="/rsp">가위바위보</Link>
            <Link to="/lotto">로또추첨기</Link>
        </div>
    )
}

module.exports = Nav;