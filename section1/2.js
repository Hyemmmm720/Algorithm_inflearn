// 삼각형 판별하기
// 길이가 서로 다른 A, B, C 세 개의 막대로 삼각형을 만들 수 있으면 "Yes"를 출력하고, 아니면 "No"를 출력하기

// 내 풀이
function solution(a, b, c) {
  let max = Math.max(a, b, c); // 가장 긴 변 구하기
  let sum = a + b + c;

  // 모든 변의 합과 가장 긴 변의 합을 뺀 나머지가 가장 긴 변보다 크면 삼각형이 가능!
  if (sum - max <= max) {
    answer = "No"; // 가장 긴 변보다 작거나 같으면 No 출력
  } else {
    answer = "Yes"; // 가장 긴 변보다 길면 Yes 출력
  }
  return answer;
}

console.log(solution(13, 33, 25));

// 선생님 답안
function solution(a, b, c) {
  let answer = "YES",
    max;
  let total = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (total - max <= max) answer = "NO";
  return answer;
}
