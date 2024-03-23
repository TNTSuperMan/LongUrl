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
                    65 + 
                        Math.floor(Math.random() * 25) + 
                        Math.round(Math.random()) * 32
                    
                )
            }
            resd += "=";
            for(let i = 0;i < (addlen - 9);i++){
                resd += String.fromCharCode(
                    65 + 
                        Math.floor(Math.random() * 25) + 
                        Math.round(Math.random()) * 32
                    
                )
            }
            app.res = app.ourl + resd;
        }
    }
});