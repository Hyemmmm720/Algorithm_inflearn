// 최솟값 구하기

function solution(arr) {
  let answer = Math.min(...arr);
  return answer;
}

let array = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(array));

// 선생님 답안

function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
