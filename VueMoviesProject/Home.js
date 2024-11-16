import { getStarRating } from './utils.js';

export default {
  name: 'Home',
  template: `
    <div class="content">
      <div class="movie-gallery">
        <div class="movie-card" v-for="movie in movies" :key="movie.id" @click="goToMovieDetail(movie.id)">
          <img :src="movie.image" :alt="movie.name" v-if="movie.image">
          <div class="movie-info">
            <h3>{{ movie.name }}</h3>
            <p>Rating: <span class="stars" v-html="getStarRating(movie.score)"></span>\t{{movie.score}}</p>
            <p>Comments: {{ movie.comments.length }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      movies: []
    };
  },
  created() {
    fetch('./movie.json')  // Bu URL, gerçek veri kaynağınıza göre değiştirilmelidir.
      .then(response => response.json())
      .then(data => {
        this.movies = data.movies;
      });
  },
  methods: {
    goToMovieDetail(id) {
      this.$router.push(`/movie/${id}`);
    },
    getStarRating(score) {
      return getStarRating(score); // Burada utils.js'den içe aktarılan getStarRating fonksiyonunu kullanıyoruz
    }
  }
};
