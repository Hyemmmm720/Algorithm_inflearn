// 연필개수
// 연필 1다스는 12자루이고, 학생 1인당 연필을 1자루씩 나눠 주어야 하는데 n명의 학생 수를 입력받았을 때 필요한 연필의 다스 수를 계산하기

// 내 풀이
function solution(n) {
  let answer = Math.ceil(n / 12); // 매개변수 % 12를 해서 몫이 있는 경우 반올림해줌
  return answer;
}

console.log(solution(25)); // 답 = 3
