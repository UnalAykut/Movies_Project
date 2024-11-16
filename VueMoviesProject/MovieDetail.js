import { getStarRating } from './utils.js'; // utils.js dosyasından getStarRating fonksiyonunu içe aktarın

export default {
  name: 'MovieDetail',
  template: `
     <div class="content" v-if="movie">
    <div class="movie-detail-container" :style="{ backgroundImage: 'url(' + movie.image + ')' }">
      <div class="movie-detail-overlay">
        <div class="movie-header">
          <h1>{{ movie.name }}</h1>
          <p>Film • {{ movie.year }}</p>
          <p>Rating: <span class="stars" v-html="getStarRating(movie.score)"></span></p>
        </div>
        <div class="movie-actions">
          <button class="join-button">Üye Ol</button>
          <button class="watch-button">Hemen İzle</button>
        </div>
      </div>
    </div>
    <div class="movie-description">
    <h2>Movie Description</h2>
    <p>{{ movie.description }}</p>
    <div class="duration">
        <img src="/images/hourglass.png" alt="Duration Icon"> <!-- Resim olarak saat ikonu eklendi -->
        {{ movie.time }}
    </div>
</div>
   <h3></h3>
    <div class="cast-list">
      <div class="actor-card" v-for="actor in movie.cast" :key="actor.slug" @click="goToActorDetail(actor.slug)">
        <img :src="actor.image" :alt="actor.name" class="actor-img">
        <p class="actor-name">{{ actor.name }}</p>
        <p class="actor-character">as {{ actor.character }}</p>
      </div>
    </div>
    <h3></h3>
    <div class="comments">
      <div class="comment-card" v-for="comment in movie.comments" :key="comment.title">
        <div class="comment-header">
          <img src="/images/user_icon.png" alt="User Icon" class="user-icon">
          <div>
            <h4>{{ comment.title }}</h4>
            <div class="stars" v-html="getStarRating(movie.score)"></div>
          </div>
        </div>
        <p class="comment-description">{{ comment.description }}</p>
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      movie: null
    };
  },
  created() {
    const movieId = parseInt(this.$route.params.id);
    fetch('./movie.json')
      .then(response => response.json())
      .then(data => {
        this.movie = data.movies.find(movie => movie.id === movieId);
      });
  },
  methods: {
    goToActorDetail(slug) {
      this.$router.push(`/actor/${slug}`);
    },
    getStarRating(score) {
      return getStarRating(score); // Burada utils.js'den içe aktarılan getStarRating fonksiyonunu kullanıyoruz
    }
  }
};
