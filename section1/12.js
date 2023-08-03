// 대문자로 통일하기
function solution(s) {
  let answer = "";
  for (let x of s) {
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