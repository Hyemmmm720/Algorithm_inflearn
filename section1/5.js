// 최솟값 구하기
// 배열로 7개의 수가 주어지면, 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하기

// 내 풀이
function solution(array) {
  let answer = Math.min(...array);
  return answer;
}

let array = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(array));

// 선생님 답안
function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  // Number.MAX_SAFE_INTEGER 상수는 JavaScript에서 안전한 최대 정수값을 나타냄
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));

// 선생님 답안 2
function solution(arr) {
  let answer = Math.min.apply(null, arr); //.apply()를 사용해서 배열의 각 요소를 개별 인수로 전달 (하지만 스프레드 문법 권장)
  return answer;
}
