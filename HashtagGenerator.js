function generateHashtag (str) {
    const hash = str.trim() === "" ? false : "#" + str.trim().split(' ').filter(w => w !== '').map(w => w[0].toUpperCase() + w.slice(1)).join('');
    return hash.length > 140 ? false : hash;
}

console.log(generateHashtag("Hello World")); // => "#HelloWorld"
console.log(generateHashtag("I love coding")); // => "#ILoveCoding"
console.log(generateHashtag("")); // => false