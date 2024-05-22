import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PaginationComponent',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  methods: {
    changePage(page: number) {
      this.$emit('pageChanged', page);
    }
  }
});
