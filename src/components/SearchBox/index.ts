import { defineComponent } from 'vue';
import IconSearch from '@/components/Icons/IconSearch.vue';

export default defineComponent({
  name: 'SearchBox',
  components: {
    IconSearch,
  },
  data() {
    return {
      searchTerm: '',
    };
  },
  emits: ['changeBox']
});
