// 대문자로 통일
// 대문자, 소문자가 존재하는 문자열을 받아 대문자는 소문자로, 소문자는 대문자로 바꿔 문자열을 출력하기
function solution(s) {
  let answer = "";

  for (let x of s) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }

  return answer;
}

console.log(solution("ItisTimeToStudy"));

// 선생님 답안
function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }
  return answer;
}
