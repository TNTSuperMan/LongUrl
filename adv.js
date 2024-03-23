function r(max){
    return Math.round(Math.random() * max);
}
let app = new Vue({
    el:"#app",
    data:{
        ourl:null,
        res:null,
        length:10
    },
    methods:{
        longify:e=>{
            if(app.length < 10){
                alert("増やすURLの長さは10以上にしてください。");
                return;
            }
            if(app.ourl == null){
                alert("URLを入力してください。");
                return;
            }
            let addlen = app.length;
            let resd = app.ourl.indexOf("?") !== -1 ? "&" : "?";
            for(let i = 0;i < 7;i++){
                resd += String.fromCharCode(
                    65 + r(25) + r(1) * 32
                )
            }
            resd += "=";
            for(let i = 0;i < (addlen - 9);i++){
                switch(r(2)){
                    case 0: //alphabet
                        resd += String.fromCharCode(
                            65 + r(25) + r(1) * 32
                        )
                        break;
                    case 1: //num
                        resd += String.fromCharCode(
                            48 + r(9)
                        )
                        break;
                    case 2: //-._~
                        switch(r(3)){
                            case 0:
                                resd += "-";
                                break;
                            case 1:
                                resd += ".";
                                break;
                            case 2:
                                resd += "_";
                                break;
                            case 3:
                                resd += "~";
                                break;
                        }
                        break;
                }
            }
            app.res = app.ourl + resd;
        }
    }
});