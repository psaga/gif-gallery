<template>
  <nav class="pagination">
    <button 
      :disabled="currentPage === 1" 
      @click="changePage(currentPage - 1)">
      Previous
    </button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button 
      :disabled="currentPage === totalPages" 
      @click="changePage(currentPage + 1)">
      Next
    </button>
  </nav>
</template>
<script src="./index.ts" lang="ts"></script>
<style lang="scss" src="./styles.scss" scoped></style>
