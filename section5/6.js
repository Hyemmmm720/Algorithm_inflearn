// 학급 회장(해쉬)
// 투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)이 쓰여져 있다
// 선생님의 결과 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지를 출력하는 프로그램을 작성하시오.
// 반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정한다.

function solution(s) {
  let answer;
  let map = new Map();

  for (let x of s) {
    if (map.has(x)) {
      map.set(x, map.get(x) + 1);
    } else map.set(x, 1);
  }

  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, value] of map) {
    if (max < value) {
      max = value;
      answer = key;
    }
  }

  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
