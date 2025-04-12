class User {
    constructor() {
      this.rank = -8;
      this.progress = 0;
    }
    
    incProgress(rank) {
      if (rank > 8 || rank < -8 || rank == 0) {
        throw new Error("Invalid rank");
      } 
      
      // Rankları normal sayı çizgisine çevir (-1, 1 sorununu çözmek için)
      let activityRank = rank;
      let userRank = this.rank;
      
      // 0'ı atlayarak gerçek farkı hesapla
      if (activityRank > 0) activityRank--;
      if (userRank > 0) userRank--;
      
      let d = activityRank - userRank;
      
      // Progress hesapla
      if (d > 0) {
        this.progress += 10 * d * d;
      } else if (d == 0) {
        this.progress += 3;
      } else if (d == -1) {
        this.progress += 1;
      }
      // d <= -2 olduğunda hiçbir şey yapmıyoruz (çok düşük seviyedeki aktiviteler)
      
      // Progress 100'ü geçtiğinde rankı güncelle
      while (this.progress >= 100) {
        if (this.rank == -1) {
          this.rank = 1; // -1'den sonra 1 gelir (0 yok)
        } else {
          this.rank++;
        }
        this.progress -= 100;
        
        // Rank 8'e ulaştı mı kontrol et
        if (this.rank == 8) {
          this.progress = 0;
          break; // Döngüden çık, daha fazla ilerleme yok
        }
      }
    }
  }

  const user = new User();
  user.incProgress(1);
  console.log(user.rank); // 1
  console.log(user.progress); // 0
  