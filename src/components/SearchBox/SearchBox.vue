<template>
  <div class="search">
    <input v-model="searchTerm"></input>
    <button type="button" @click="$emit('changeBox', searchTerm)"><IconSearch /></button>
  </div>
</template>
<script src="./index.ts" lang="ts"></script>
<style lang="scss" src="./styles.scss" scoped></style>
