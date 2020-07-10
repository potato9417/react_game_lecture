const React = require("react");
const Link = require("react-router-dom").Link;

const Nav=()=>{
    return(
        <div>
            <Link to="/">홈</Link>
            <Link to="/gugudan">구구단</Link>
            <Link to="/word_relay">끝말잇기</Link>
            <Link to="/number_baseball">숫자야구</Link>
        </div>
    )
}

module.exports = Nav;