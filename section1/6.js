// 홀수 판별하기
// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성해보기

//내 풀이
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
