// K번째 큰 수
// 현수는 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있고 같은 숫자의 카드가 여러장 있을 수 있다.
// 현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려고 한다. 3장을 뽑을 수 있는 모든 경우를 기록한다.
// 기록한 값 중 K번째로 큰 수를 출력하는 문제이다.

function solution(n, k, card) {
  let answer;
  let tmp = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }
  let a = Array.from(tmp).sort((a, b) => b - a);
  answer = a[k - 1];

  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
