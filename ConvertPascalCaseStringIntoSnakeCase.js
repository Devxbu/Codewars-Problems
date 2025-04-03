function toUnderscore(string) {
    let ans = "";
  
    if (typeof string === "number") {
      string = string.toString();
    }
  
    if (string !== "" && typeof string === "string") {
      ans += string[0].toLowerCase(); 
    }
  
    for (let i = 1; i < string.length; i++) {
      if (string[i].charCodeAt(0) >= 65 && string[i].charCodeAt(0) <= 90) {  
        ans += "_"; 
        ans += string[i].toLowerCase();  
      } else {
        ans += string[i]; 
      }
    }
    return ans;
  }
  