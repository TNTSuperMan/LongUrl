<script setup lang="ts">
import { ref } from 'vue';
import { longify } from './longify';
import SettingForm from './components/SettingForm.vue';

const result = ref("")

</script>
<template>
  <h2>LongUrl</h2>
  <p>LongURLとは、URLを延長するサービスです。</p>
  <SettingForm @long="(...arg:[string,boolean,number])=>result=longify(...arg)" />

  <h2>結果</h2>
  長さ：{{ result.length }}<br>
  <a :href="result">{{ result }}</a>
  <br><br><small>Developed by TNTSuperMan.<br>Powered by Vite/Vue</small>
</template>

<style scoped>
</style>
