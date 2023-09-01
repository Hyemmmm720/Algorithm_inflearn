// 가장 긴 문자열
// n개의 문자열을 입력 받고 그 중 가장 긴 문자열을 출력하기

//내 풀이
function solution(s) {
  let answer = "",
    max = 0;
  for (let x of s) {
    if (x.length > max) {
      //반복문 돌리고 조건문 속에서 가장 긴 문자열이 있으면 max로 정하고 그 길이를 구하기
      max = x.length;
      answer = x;
    }
  }
  return answer;
}
