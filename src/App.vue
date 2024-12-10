<script setup lang="ts">
import { ref } from 'vue';
import { toCanvas } from 'qrcode';
import { longify } from './longify';
import SettingForm from './components/SettingForm.vue';

const result = ref("")
const canvas = ref<HTMLCanvasElement|undefined>();
const dlurl = ref<HTMLAnchorElement|undefined>();

function long(...arg:[string, boolean, number]){
  result.value=longify(...arg);
  toCanvas(canvas.value, result.value, e=>{
    if(e)alert("二次元コードの生成に失敗しました")
  });
}
function download(){
  canvas.value?.toBlob(e=>{
    if(e){
      dlurl.value?.setAttribute("href", URL.createObjectURL(e));
      dlurl.value?.click();
    }
  });
}
</script>
<template>
  <h2>LongUrl</h2>
  <p>LongURLとは、URLを延長するサービスです。</p>
  <SettingForm @long="long" />

  <h2>結果</h2>
  長さ：{{ result.length }}<button @click="download" class="btn">ダウンロード</button><br>
  <canvas ref="canvas"></canvas><br>
  <a :href="result" target="_blank">{{ result }}</a>
  <br><br><small>Developed by TNTSuperMan.<br>Powered by Vite, Vue, soldair/node-qrcode</small>
  <a ref="dlurl" download="qr.png" v-show="false"></a>
</template>

<style scoped>
</style>
