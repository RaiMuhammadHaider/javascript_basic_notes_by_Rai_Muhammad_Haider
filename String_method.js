// ---------- Template Literals ----------
const gmail = 'Ali@gmail.com';
const num = 24;

console.log(`Hey, your number is ${num} and your Gmail is ${gmail}.`);
console.log(`This is the value: ${num} and email: ${gmail}, Ali Haider.`);

// ---------- Trimming Whitespace ----------
const space = "     uefueef     ";
console.log("Original:", space);
console.log("Trimmed (both sides):", space.trim());
console.log("Trimmed Start:", space.trimStart());
console.log("Trimmed End:", space.trimEnd());

// ---------- String Object & Methods ----------
const rawString = "iudgu1iergfiu0";
console.log("Raw string:", rawString);

const game = new String(rawString); // Using String object to access methods as an object
console.log("As String Object:", game);
console.log("Length:", game.length);
console.log("Uppercase:", game.toUpperCase());
console.log("Lowercase:", game.toLowerCase());

console.log("Includes 'iudgu1':", game.includes('iudgu1'));
console.log("Includes 'not include':", game.includes('not include'));

console.log("Split by 'i':", game.split("i"));
console.log("Split by 'e':", game.split("e"));

console.log("Slice (1 to 9):", game.slice(1, 9));
console.log("Concatenated string:", game.concat(" | More info here"));
console.log("With variable in concat:", game.concat(` | Detailed info: ${num}`));

console.log("Replace first 'i':", game.replace('i', 'REPLACED'));
console.log("Character at index 1:", game[1]);
console.log("Index of 'e':", game.indexOf('e'));
console.log("Character at index 6:", game.charAt(6));

// ---------- More String Operations ----------
const messyString = '     Jameel_ka_kon_ha   ';

console.log("Uppercase:", messyString.toUpperCase());
console.log("Lowercase:", messyString.toLowerCase());
console.log("Character at index 3:", messyString.charAt(3));
console.log("Concatenated:", messyString.concat(` | Added: ${messyString.trim()}`));
console.log("Index of 'J':", messyString.indexOf('J'));
console.log("Slice (3 to 6):", messyString.slice(3, 6));
console.log("Substring (2 to 6):", messyString.substring(2, 6));
console.log("Starts with 'Jam':", messyString.startsWith("Jam")); // Will be false due to leading spaces
console.log("Ends with 'ha':", messyString.endsWith("ha"));       // Will be false due to trailing spaces
console.log("Includes 'xx':", messyString.includes('xx'));
console.log("Replace 'Jameel' with 'Haider':", messyString.replace('Jameel', 'Haider'));
console.log("Original string:", messyString);
console.log("Trimmed (both sides):", messyString.trim());
console.log("Trimmed Start:", messyString.trimStart());
console.log("Trimmed End:", messyString.trimEnd());
console.log("Split by '_':", messyString.split('_'));
console.log("Pad start (length 4, '777'):", messyString.padStart(4, '777')); // No effect, string is already long
