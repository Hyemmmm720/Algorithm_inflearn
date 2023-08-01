// 중복 단어 제거
function solution(str) {
  let answer = [];
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i] === i)) answer += str[i];
  }
  return answer;
}

console.log(solution(str));
// 선생님 풀이
function solution(s) {
  let answer;
  //console.log(s.indexOf("time"));
  answer = s.filter(function (v, i) {
    return s.indexOf(v) === i;
  });
  return answer;
}
let str = ["good", "time", "good", "time", "student"];

// set 메서드 사용
function solution(s) {
  const set = new Set(s);
  const newArr = [...set];
  return newArr;
}
