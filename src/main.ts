import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'

if(location.hash){
  try{
    const json:unknown = JSON.parse(atob(decodeURIComponent(location.hash.substring(1))))
    if(json instanceof Array){
      if(json.length < 2) throw 0;
      const padding: number = json[0];
      const content: string = atob(json[1]);
      let url = "";
      for(let i = 0;i < content.length;i++)
        i % padding == 0 ? (url += content[i]) : 0;
      console.log(url)
    }else{
      throw 0;
    }
    
    console.log(json)
  }catch{
    location.href = "https://bing.com"
  }
}else{
  createApp(App).mount('#app')
}
