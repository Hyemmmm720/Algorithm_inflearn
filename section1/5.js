// 최솟값 구하기

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
  let answer = Math.min.apply(null, arr);
  return answer;
}
