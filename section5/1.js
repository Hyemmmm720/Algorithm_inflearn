// 공통원소 구하기
// A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로그램을 작성하시오.

function solution(arr1, arr2) {
  let answer = [];
  let N = arr1.length;
  let M = arr2.length;
  let p1 = 0,
    p2 = 0;

  while (p1 < N && p2 < M) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }

  while (p1 < N) answer.push(arr1[p1++]);
  while (p2 < M) answer.push(arr2[p2++]);

  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
