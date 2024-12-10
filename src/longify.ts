export const longify = (url:string, is_deploy:boolean, size:number):string => {
    const rand = () => {
        let r = "";
        for(let i = 0;i < size;i++)
            r += String.fromCharCode(32+((Math.random() * 10000000000000000) % 90));
        return r;
    }
    if(is_deploy){
        const padded = url.split("").map(e=>e+rand()).join("");
        return "https://tntsuperman.github.io/LongUrl/#" +
            encodeURIComponent(btoa(JSON.stringify([size, btoa(padded)])))
    }else{
        let r = "";
        for(let i = 0;i < 20;i++)
            r += String.fromCharCode(65+((Math.random() * 10000000000000000) % 26));
        if(url.search(/\?/) != -1){
            return url + "&"+r+"=" + encodeURIComponent(rand());
        }else{
            return url + "?"+r+"=" + encodeURIComponent(rand());
        }
    }
}