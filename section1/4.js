// 1부터 n까지의 합 출력하기
// 자연수 n의 값을 입력받아 1부터 n까지의 합을 출력하기

// 내 풀이
function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    //i가 매개변수보다 작거나 같을 때까지 반복하고 그 결과값들을 합치기
    answer += i;
  }
  return answer;
}

console.log(solution(6)); // 21출력

// 선생님 답안
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer = answer + i;
  }

  return answer;
}
