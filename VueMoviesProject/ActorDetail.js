export default {
    name: 'ActorDetail',
    template: `
      <div class="actor-detail-card" v-if="actor">
    <div class="actor-photo">
        <img :src="actor.image" :alt="actor.name">
    </div>
    <div class="actor-info">
        <h2>{{ actor.name }}</h2>
        <h3>Character: {{ actor.character }}</h3>
        <p class="actor-birthdate">Birthdate: {{ actor.birthdate }}</p>
        <p class="actor-height">Height: {{ actor.height }}</p>
        <p class="actor-description">{{ actor.bio }}</p>
        <button @click="goToMovies">See More Movies</button> <!-- Düğme Eklendi -->
    </div>
  </div>
</div>

    `,
    data() {
        return {
          actor: null
        };
      },
      created() {
        const actorSlug = this.$route.params.slug;
        fetch('./movie.json') // Bu URL, gerçek veri kaynağınıza göre değiştirilmelidir.
          .then(response => response.json())
          .then(data => {
            for (const movie of data.movies) {
              const actor = movie.cast.find(actor => actor.slug === actorSlug);
              if (actor) {
                this.actor = actor;
                break;
              }
            }
          });
      },
      methods: {
        goToMovies() {
          this.$router.push('/'); // Bu yöntemi kullanarak, kullanıcının daha fazla filme gitmesi sağlanabilir.
        }
      }
  };
  