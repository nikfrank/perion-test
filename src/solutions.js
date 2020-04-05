// assumptions:

// we don't care about anything that isn't a [] {} or () char

// although tempted to solve this with a regex... I will solve it with a stack
const closers = { '{': '}', '[': ']', '(': ')' };

export const areBracketsEven = (input='')=> {
  const { isEven, stack } =
    input
      .split('')
      .filter(char => '(){}[]'.indexOf(char) > -1)
      .reduce(({ stack, isEven }, char)=>
        '({['.indexOf(char) > -1 ? (
          { stack: [...stack, char], isEven }
        ) : (
          closers[stack.pop()] === char ? (
            { stack, isEven }
          ) : (
            { stack, isEven: false }
          )
        ), {
          stack: [],
          isEven: true,
        });

  return isEven && !stack.length;
};

// assumptions:

// we don't care about whitespace or punctuation or case (A / a)

const primes = {
  a: 2, b: 3, c: 5, d: 7, e: 11, f: 13, g: 17, h: 19, i: 23, j: 29, k: 31,
  l: 37, m: 41, n: 43, o: 53, p: 59, q: 61, r: 67, s: 71, t: 73, u: 79,
  v: 83, w: 89, x: 97, y: 101, z: 103,
};

export const areWordsAnagrams = (word1, word2)=>
  word1.split('').reduce((total, char)=> total * (primes[char.toLowerCase()] || 1), 1) ===
    word2.split('').reduce((total, char)=> total * (primes[char.toLowerCase()] || 1), 1);

// the following solution cares about all chars, hypersensitive

const binChars = string =>
  string.split('').reduce((chars, char)=> ({
    ...chars,
    [char]: (chars[char] || 0) + 1,
  }), {})

export const areStringsAnagrams = (string1, string2)=>{
  const firstChars = binChars(string1);
  const secondChars = binChars(string2);

  return (
    Object.keys(firstChars).length === Object.keys(secondChars).length
  ) && Object.keys(firstChars)
             .reduce(( isEqual, char )=>
               isEqual && firstChars[char] === secondChars[char], true);
}
