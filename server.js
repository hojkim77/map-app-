const express = require("express"); //express 사용
const app = express(); // express를 use에 담아줌
const cors = require("cors");// cors 사용
const session = require("express-session")
const connect = require("./schemas");
connect();

const corsOptions = {
    /*headers:{
        "preflightContinue": false,
        'Access-Control-Allow-Originigin':'https://api.openweathermap.org',
    }*/
    "origin":true,
    "credential":true,


}

app.use( //session 관련된 설정을 해줌
    session({
        resave: false,
        saveUninitialized: true,
        secret:"ghwndrla",
        cookie:{
            httpOnly:true,
            secure: false
        }
    })
)
app.use(cors(corsOptions));

app.use(express.json()); // express에서 json형식을 사용하기 위함
app.use(express.urlencoded({extended:true})); //express에서 다양한 구조 자료형들을 사용하기 위함

app.use('/member', require('./routes/memberRouter')) // 서버의 역할을 route를 사용하여 나눠줌

app.listen(8080, () => {
    console.log("success listening 8080!!")
})