// 큰 수 출력하기
function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
}

// 선생님 답안
function solution(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));

// 다른 풀이
function solution(n, s) {
  let answer;
  return (answer = s.filter((item) => {
    if (item >= n) {
      return item;
    }
  }));
}
