const ukrainian = `ЙйЦцУуКкЕеНнГгШшЩщЗзХхЇїФфІіВвАаПпРрОоЛлДдЖжЄєЯяЧчСсМмИиТтЬьБбЮю,.`;
const russian   = `ЙйЦцУуКкЕеНнГгШшЩщЗзХхЪъФфЫыВвАаПпРрОоЛлДдЖжЄєЯяЧчСсМмИиТтЬьБбЮю,.`;
const english   = `QqWwEeRrTtYyUuIiOoPp{[}]AaSsDdFfGgHhJjKkLl:;"'ZzXxCcVvBbNnMm<,>.?/`;

function fixGibberish(string, from = english, to = ukrainian) {
  let result = [];
  let searchValue;
  for (let i = 0; i < string.trim().split('').length; i++) {
    switch (string[i]) { // conflicting chars with RegEx in search(): [ ? .
      case '[': {
        searchValue = from[21];
        break;
      }
      case '.': {
        searchValue = from[63];
        break;
      }
      case '?': {
        searchValue = from[64];
        break;
      }
      default: {
        searchValue = from.search(string[i]); // use RegEx here..?
        break;
      }
    }
    result[i] = searchValue === -1 ? string.trim().split('')[i] : to[searchValue];
  }
  return result.join('');
}

// console.log(fixGibberish(`qwerttyuiop[]asdfghjkl;'zxcvbnm,.? QWERTYUIOP{}ASDFGHJKL:"ZXCVBNM<>?`, english, ukrainian))
// console.log(fixGibberish(`йцукеенгшщзхїфівапролджєячсмитьбю, ЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМИТЬБЮ,`, ukrainian, english))
