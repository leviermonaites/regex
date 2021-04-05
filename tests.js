import string from './stringTest.js';
const meAndMyBrothers = ['Llevi', 'Lucas', 'Lincoln'];
const HRtag = ['<HR          />', '<HR         SIZE    =      14   />'];
const repetitions =
  'Levi Lincoln Lucas Lincoln "Levi" "Levi" Levi Lucas Lincoln Lincoln Lucas Lucas ';

// Negated character
// console.log([...string.matchAll(/G[^o]/g)]);

// Replacing every word that begins with [Ss] followed by either a, or u, or e, or y,
// followed by a set of characters [a-z] until a blank or special character come accross.
// console.log(string.replace(/ ?[Ss][auey].[a-z]+/g, ' Levi'));

// Alternation
// console.log([...string.matchAll(/s|S/g)]);

// Ignoring Differences in Capitalization
// console.log([...string.matchAll(/g/gi)]);

// Matching any character
// console.log([...meAndMyBrothers.toString().match(/l./gi)]);

// Word boundaries
// console.log([...meAndMyBrothers.toString().match(/n\b/gi)]);

// Optional Items
// console.log([...meAndMyBrothers.toString().match(/\bl.{0,4},?/gi)]);
// console.log([...meAndMyBrothers.toString().match(/\bl.{0,4},{0,1}/gi)]); // {0,1} means the same as ?

// Repetition
// console.log([...meAndMyBrothers.toString().match(/\bl+/gi)]);
// console.log([...HRtag].toString().match(/<HR( *SIZE *= *[1-9]+)? *\/>/gi));
// console.log([...HTMLtags.toString().match(/<[a-z].{0,5}[0-9]? */,gi)]);

// console.log([...meAndMyBrothers.toString().match(/\bl/gi)]);
console.log(repetitions.match(/("?(l[a-z]+"?) *)\1+/gi));
