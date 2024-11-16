export function getStarRating(score) {
    const rating = Math.round(score);
    let stars = '';
  
    for (let i = 1; i <= 5; i++) {
      if (i <= rating / 2) {
        stars += '★'; // Dolu yıldız
      } else {
        stars += '☆'; // Boş yıldız
      }
    }
  
    return stars;
  }
  