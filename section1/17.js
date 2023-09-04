// 중복 단어 제거
// n개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하기(출력하는 문자열은 원래 입력순서를 유지)

//
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
