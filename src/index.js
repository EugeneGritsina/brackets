module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0)
    return false;
  
  let pairs = new Array(str.length / 2);
  for(let i = 0; i < pairs.length; i++){
    pairs[i] = new Array(2).fill(0);
  }

  let iteratorOpen = 0;
  let currentOpenedBracket = Array(); // хранит тип скобки по номеру ячейки в bracketsConfig
  let isEqualSymbolsMet = 0;

  for (let i=0; i < str.length; i++) {
    for (let j=0; j < bracketsConfig.length; j++)
      if (str[i] == bracketsConfig[j][0]) { // для открывающих скобок
        if (bracketsConfig[j][0] == bracketsConfig[j][1]) { //для одинаковых символов
          if (isEqualSymbolsMet) {  // если уже встречался, то увеличить в pairs ячейку для закрывающей
            pairs[iteratorOpen-1][1]++;
            iteratorOpen--;
            currentOpenedBracket.pop();
            isEqualSymbolsMet--;
            continue;
          }
          isEqualSymbolsMet++;
        }
        pairs[iteratorOpen][0]++;
        iteratorOpen++;
        currentOpenedBracket.push(j);
        continue;
      }
      else 
      if (str[i] == bracketsConfig[j][1]) {
        if (iteratorOpen-1 < 0) // если до этого не была заполнена ячейка с соответсвующей открывающей
          return false;
        if (currentOpenedBracket[currentOpenedBracket.length-1] != j)
          return false;
        pairs[iteratorOpen-1][1]++;
        iteratorOpen--;
        currentOpenedBracket.pop();
        continue;
      }
  }

  if (iteratorOpen == 0)
    return true;
  else
    return false;
}
