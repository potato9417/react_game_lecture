const React = require( "react")
const BrowserRouter = require( "react-router-dom").BrowserRouter
const Route = require( "react-router-dom").Route

const WordRelay = require( "./WordRelay")
const Gugudan = require( "./Gugudan")
const Nav = require( "./Nav")
const NumberBaseball = require("./NumberBaseball")


const App=()=>{
    return(
        <BrowserRouter>
            <Nav />
            <Route path="/" exact={true} />
            <Route path="/gugudan" component={Gugudan}/>
            <Route path="/word_relay" component={WordRelay}/>
            <Route path="/number_baseball" component={NumberBaseball} />
        </BrowserRouter>
    )
}

module.exports=App