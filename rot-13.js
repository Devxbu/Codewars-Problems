function rot13(str) {
    return str.replace(/[A-Za-z]/g, function(char) {
          const start = char <= 'Z' ? 65 : 97; // Büyük harfler için 'A' (65), küçük harfler için 'a' (97)
          return String.fromCharCode(((char.charCodeAt(0) - start + 13) % 26) + start);
      });
  }