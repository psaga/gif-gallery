<template>
  <div class="grid">
    <div class="gif" v-for="(gif, index) in gifs" :key="index" @click="$emit('showGif', index)" >
      <img height="200px" width="200px" :src="gif.images.preview_gif.url" />
    </div>
  </div>
</template>
<script src="./index.ts" lang="ts"></script>
<style lang="scss" src="./styles.scss" scoped></style>
