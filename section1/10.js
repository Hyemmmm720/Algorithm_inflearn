// 문자 찾기
// 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램 작성하기 (문자열은 100을 넘지 않음)

// 내 풀이
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
