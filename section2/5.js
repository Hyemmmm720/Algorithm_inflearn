// 등수구하기
function solution(arr, n) {
  let answer = [1, 1, 1, 1, 1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i] < arr[j]) {
        answer[i]++;
      }
    }
  }
  return answer;
}

const arr = [87, 89, 92, 100, 76];
const n = 5;

console.log(solution(arr, n));

// 선생님 답안
function solution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}
