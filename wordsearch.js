const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (let l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        } else {
            for (let str of verticalJoin) {
                if (str.includes(word)) {
                    return true;
                }
            }
        }
    }
    return false;
}

const transpose = function(letters) {
    let result = [];
    for (let x = 0; x < letters.length; x ++) {
      for (let y = 0; y < letters[x].length; y++) {
        if (!result[y]) {
          result[y] = [];
        }
        result[y].push(letters[x][y]);
      }
    }
    return result;
  };
  
/*
console.log(wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'ALARR'));*/


module.exports = wordSearch