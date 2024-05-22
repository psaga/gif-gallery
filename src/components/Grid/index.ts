import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GifsGrid',
  props: {
    gifs: {
      type: Array,
      required: true,
    },
  },
  emits: ['showGif']
});
