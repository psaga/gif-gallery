<template>
  <div class="lightbox">
    <div class="header">
      <IconClose @click="$emit('hideLightBox')" />
    </div>
    <div class="body">
      <IconChevronLeft @click="$emit('prevGif')" />
      <img :src="gif?.images.original.url"></img>
      <IconChevronRight @click="$emit('nextGif')" />
    </div>
  </div>
</template>
<script src="./index.ts" lang="ts"></script>
<style lang="scss" src="./styles.scss" scoped></style>
