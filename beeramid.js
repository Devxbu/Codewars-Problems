function beeramid(bonus, price) {
    if (bonus < 0 || price <= 0) return 0;
    
    let beers = Math.floor(bonus / price);
    let level = Math.floor((Math.sqrt(1 + 8 * beers) - 1) / 2);
    
    while ((level * (level + 1) * (2 * level + 1)) / 6 > beers) {
      level--; 
    }
    
    return level;
  }