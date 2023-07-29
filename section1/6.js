// 홀수 판별하기

function solution(arr) {
  let answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;
  for (let item of arr) {
    if (item % 2 === 1) sum += item; // 홀수
    if (item < min) min = item;

    console.log(min); // 77, 38, 38, 38, 12, 12, 12
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

arr = [77, 38, 41, 12, 53, 92, 85];
console.log(solution(arr));
