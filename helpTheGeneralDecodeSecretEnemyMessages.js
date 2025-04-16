encoder = function(i){
    return "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa".substr(i+1);
  }
  
  device.decode = function (w) {
    return w.split('').map(function(a, i){
      let encoded = encoder(i);
      return device.encode(encoded + a)[64-i]
    }).join("");
  }
  