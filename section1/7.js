// 10부제
// 날짜의 일의 자리 숫자가 주어지고 7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때 위반하는 자동차의 대수를 출력하는 프로그램을 작성하기

// 내 풀이
function solution(day, car) {
  let answer = 0;

  for (let i = 0; i < 7; i++) {
    if (car[i] % 10 === day) {
      // 10으로 나눠서 몫으로 앞자리를 없애고 나머지로 판단!
      answer++;
    }
  }

  return answer;
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33])); // 3개 출력

// 선생님 답안
function solution(day, arr) {
  let answer = 0;
  for (let x of arr) {
    if (x % 10 == day) answer++;
  }

  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
