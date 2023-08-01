// 문자 찾기
function solution(s, t) {
  let arr = s.split("");
  let answerArr = arr.filter((v) => v === t);
  let answer = answerArr.length;
  return answer;
}
const str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));

// 선생님 풀이
function solution(s, t) {
  let answer = s.split(t).length;
  return answer - 1;
}
