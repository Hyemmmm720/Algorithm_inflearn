// 문제 1. 세 수 중 최소값

// 내 답안
function main(a, b, c) {
  console.log(Math.min(a, b, c));
}

// 선생님 답안
function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;

  return answer;
}
console.log(solution(6, 5, 11));
