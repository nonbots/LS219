/*
Write a function that selects all words that have all the same vowels (in any order and/or number) as the first word, including the first word.

Examples
sameVowelGroup(["toe", "ocelot", "maniac"]) ➞ ["toe", "ocelot"]

sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]) ➞ ["many"]

sameVowelGroup(["hoops", "chuff", "bot", "bottom"]) ➞ ["hoops", "bot", "bottom"]
Notes
Words will contain only lowercase letters, and may contain whitespaces.
Frequency does not matter (e.g. if the first word is "loopy", then you can include words with any number of o's, so long as they only contain o's, and not any other vowels). 
*/
/*
- rules:
  - selects all words that have all the same vowel (in any order or number as the first word) includeing the first word
- input:
  - array of words
- output: 
  -array of words that have all the vowels in the first word
- ex
  - toe => o,e => o, e ... a,i => toe, ocelot 
  - many => a => aie, ... e,i, .. a,i,o, ... a, i => many
  - hoops => o => , ... , o ...., o => hoops, bot, bottom
- mental model 
- get all the unique vowels of the first word
- get unique vowels for each word 
  - if the word has exactly on the vowel in the other word, select the word
    all elements in this set is in the given set and all elemnt in the given set is in this set
  - return selected word that evaluates to true
 */

function sameVowelGroup(words) {
  const uniqueVowels = getUniqueVowels(words[0]);
  return words.filter(word => {
    const curUniqueVowels = getUniqueVowels(word);
    return uniqueVowels.isSubsetOf(curUniqueVowels) && curUniqueVowels.isSubsetOf(uniqueVowels) ? true : false;
  });
}
function getUniqueVowels (word) {
  const vowels = word.split("").filter(char => 'aeiou'.includes(char));
  return new Set(vowels);
}
console.log(sameVowelGroup(["toe", "ocelot", "maniac"]))// ➞ ["toe", "ocelot"]

console.log(sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]))// ➞ ["many"]

console.log(sameVowelGroup(["hoops", "chuff", "bot", "bottom"]))// ➞ ["hoops", "bot", "bottom"]
