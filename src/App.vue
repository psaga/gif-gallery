<template>
  <SearchBox @changeBox="handleChangeBox" />
  <Grid :gifs="gifs" @showGif="handleShowLightBox" />
  <Pagination v-show="totalPages > 0" :currentPage="currentPage" :totalPages="totalPages" @pageChanged="handlePageChange" />
  <LightBox
    :gif="lightBoxGif"
    v-show="lightBoxGif"
    @hideLightBox="handleHideLightBox"
    @nextGif="handleNextGif"
    @prevGif="handlePrevGif"
  />
</template>
<script src="./index.ts" lang="ts"></script>
