// 문제 1. 세 수 중 최소값
// 100 이하의 자연수 A, B, C 중 가장 작은 값 출력하기

// 내 풀이
function main(a, b, c) {
  console.log(Math.min(a, b, c)); // Math.min() 함수는 주어진 숫자들 중 가장 작은 값을 반환
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
