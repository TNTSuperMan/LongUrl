<script lang="ts" setup>
import { ref } from 'vue';

const type_isDeploy = ref(false);
const url = ref("")
const volume = ref(1);
const space = ref(1)
</script>
<template>
  <div>
    URL：<input type="url" v-model="url"><br><br>
    タイプ：
    <button :class="type_isDeploy?'active':''"
      @click="type_isDeploy=true">展開モード</button>
    <button :class="type_isDeploy?'':'active'"
      @click="type_isDeploy=false">GETモード</button><br>
    <small>※GETモードは一部のサイトで動作しない場合があります。
      <br>&nbsp;&nbsp;例えばこのサイトです。</small><br>
    <small>※展開モードはURLが間違っていたりする場合はBingにリダイレクトされます。</small><br>
    増やす量：<input type="number" min="1" :readonly="type_isDeploy" v-model="volume"><br>
    余白量：<input type="number" min="1" :readonly="!type_isDeploy" v-model="space"><br>

    <button class="btn" @click="$emit('long', url, type_isDeploy, type_isDeploy?space:volume)">延長</button>
  </div>
</template>

<style scoped>
</style>
