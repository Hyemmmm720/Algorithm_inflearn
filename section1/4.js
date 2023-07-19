// 1부터 n까지의 합 출력하기

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

console.log(solution(10));
