const path = require("path") // 경로 쉽게 변경할수 있도록

module.exports={
    name: "word-relay-setting",
    mode: "development", // 실제 배포할때  production 으로 변경
    devtool: "eval", // 속도빠르게 한다는 뜻
    resolve: {
        extensions: ['.js', '.jsx']
    }, // entry에 입력하지않은 확장자를 알아서 찾아서 웹팩해줌

    // 중요!
    entry:{
        app: ["./client"] // client.jsx에서 다른파일을 불러왔기때문에 다른파일을 넣지않아도된다
    }, // 입력

    module:{
        rules: [{
            test: /\.jsx?$/,
            loader: "babel-loader",
            options:{
                presets:["@babel/preset-env", "@babel/preset-react"],
                plugins:["@babel/plugin-syntax-class-properties","@babel/plugin-proposal-class-properties"]
            } // preset : plugin의 모음
        }]
    }, // entry와 output사이를 연결해주는 (규칙)연결고리같은 것

    output:{
        path: path.join(__dirname,"dist"), // 경로찾기 : 현재 폴더 안에 들어있는 dist폴더를 찾아줌
        filename: "app.js" // 저장하고 싶은 파일 이름
    } // 출력
};

// 이대로는 실행이 안되고 위처럼 입력 후 webpack사용하는 방법
// 1. package.json에 가서 script부분에 dev: "webpack" 입력 
//    => webpack이 명령어로 등록되어있지않아서 입력하지않으면 webpack실행안됨 => npm run dev 입력
// 2. npx webpack을 입력

// webpack은 기본 js기반이라 babel을 통해 jsx를 인식시켜줘야함
// npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader