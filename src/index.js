
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];

if ((!matrix) || (matrix.length == -1)) return [];
    for (let i = 0; i < matrix.length; i++){
        if (i & 1) {matrix[i].reverse();}
            
            for (let j = 0; j < Array.from(matrix[i]).length; j++){
                result.push(matrix[i][j]);
            }
    }
  return result;
}
