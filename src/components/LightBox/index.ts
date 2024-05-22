import { defineComponent } from 'vue';
import IconChevronLeft from '@/components/Icons/IconChevronLeft.vue';
import IconChevronRight from '@/components/Icons/IconChevronRight.vue';
import IconClose from '@/components/Icons/IconClose.vue';

export default defineComponent({
  name: 'LightBox',
  components: {
    IconChevronLeft,
    IconChevronRight,
    IconClose
  },
  props: {
    gif: {
      type: Object,
    },
  },
  emits: ['hideLightBox', 'nextGif', 'prevGif']
});
