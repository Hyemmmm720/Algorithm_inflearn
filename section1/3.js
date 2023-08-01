// 연필개수
function solution(n) {
  let answer = Math.ceil(n / 12); // 매개변수 % 12를 해서 몫이 있는 경우 반올림해줌
  return answer;
}

console.log(solution(25)); // 답 = 3
