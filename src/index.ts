import { defineComponent } from 'vue';
import Grid from './components/Grid/Grid.vue';
import LightBox from './components/LightBox/LightBox.vue';
import SearchBox from './components/SearchBox/SearchBox.vue';
import Pagination from './components/Pagination/Pagination.vue';
import ApiService from './services/api';

export default defineComponent({
  name: 'App',
  components: {
    SearchBox,
    Grid,
    LightBox,
    Pagination,
  },
  data() {
    return {
      gifs: [],
      searchTerm: '',
      lightBoxGif: null,
      currentIndex: 0,
      currentPage: 1,
      totalPages: 0,
      limit: 20,
      apiService: new ApiService(),
    };
  },
  methods: {
    handleChangeBox(searchTerm: string) {
      this.searchTerm = searchTerm;
      this.currentPage = 1;
      this.gifs = [];
      this.loadGifs();
    },
    handleShowLightBox(index: number) {
      this.currentIndex = index;
      this.lightBoxGif = this.gifs[index]
    },
    handleHideLightBox() {
      this.lightBoxGif = null;
    },
    async handleNextGif() {
      if (this.currentIndex < this.gifs.length - 1) {
        this.currentIndex++;
      } else if (this.currentPage < this.totalPages) {
        this.currentPage++;
        await this.loadGifs();
        this.currentIndex = 0;
      }
      this.lightBoxGif = this.gifs[this.currentIndex]
    },
    async handlePrevGif() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else if (this.currentPage > 1) {
        this.currentPage--;
        await this.loadGifs();
        this.currentIndex = this.limit - 1;
      }
      this.lightBoxGif = this.gifs[this.currentIndex];
    },
    handlePageChange(newPage: number) {
      this.currentPage = newPage;
      this.loadGifs();
    },
    async loadGifs() {
      const offset = (this.currentPage - 1) * this.limit;
      const { data, pagination } = await this.apiService.fetchData('search', {
        q: this.searchTerm,
        limit: this.limit,
        offset: offset,
      });
      this.gifs = data;
      this.totalPages = Math.ceil(pagination.total_count / this.limit);
    },
  },
  mounted() {
    this.loadGifs();
  },
});
