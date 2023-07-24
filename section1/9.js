// A를 #으로
function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x === "A") answer += "#";
    else answer += x;
  }
  return answer;
}

// 선생님 답안
function solution(s) {
  let answer = s;
  answer = answer.replace(/A/g, "#"); // 정규표현식
  return answer;
}
