module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0)
    return false;
  debugger;
  var pairs = new Array(str.length / 2);
  for(var i = 0; i < pairs.length; i++){
    pairs[i] = new Array(2);
  }

  var iteratorPairs = 0;

  for (var i=0; i < str.length; i++) {
    for (var j=0; j < bracketsConfig.length; j++)
      if (str[i] == bracketsConfig[j]) {
        if (j % 2 != 0) {  // для закрывающих скобок
          if (pairs[iteratorPairs][0] == 0) //если текущая пара скобок начинается с закрывающей => конец
            return false;
          pairs[iteratorPairs][1]++;    //заполнение этой пары флагом для закрывающей скобки
          iteratorPairs++; // переход в следующую ячейку для пар
        }
        else {
          if (!iteratorPairs) { // для первого вхождения
            pairs[iteratorPairs][0]++;
            continue;
          }
          if (pairs[iteratorPairs][0] == 1 && pairs[iteratorPairs][1] == 1) { //проверка на заполненность последней пары
            iteratorPairs++;
            pairs[iteratorPairs][0]++;
          }
          else
            return false;
        }
      }
  }

  return true;
}
