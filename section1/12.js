// 대문자로 통일하기
// 대문자, 소문자가 있는 문자열을 받아 대문자로 모두 통일해서 문자열 출력하기

// 내 풀이
function solution(s) {
  let answer = "";
  for (let x of s) {
    // 문자열에 소문자를 찾아내서 대문자로 변경
    if (x === x.toLowerCase()) answer += x.toUpperCase();
    else answer += x;
  }

  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));

// 선생님 답안 (아스키넘버)
function solution(s) {
  let answer = "";
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;
  }

  return answer;
}
