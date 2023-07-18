// 삼각형 판별하기
function solution(a, b, c) {
  let max = Math.max(a, b, c); // 가장 긴 변 구하기
  let sum = a + b + c;

  // 모든 변의 합과 가장 긴 변의 합을 뺀 나머지가 가장 긴 변보다 크면 삼각형이 가능!
  if (sum - max <= max) {
    answer = "No";
  } else {
    answer = "Yes";
  }
  return answer;
}

console.log(solution(13, 33, 25));

// 선생님 답안
function solution(a, b, c) {
  let answer = "YES",
    max;
  let tot = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (tot - max <= max) answer = "NO";
  return answer;
}
