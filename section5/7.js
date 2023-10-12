// 아나그램(해쉬)
// Anagram이란 두 문자열이 알파벳의 나열 순서는 다르지만 그 구성이 일치하면 두 단어는 아나그램이라고 한다.
// 즉 어느 한 단어를 재배열하면 상대편 단어가 될 수 있는 것을 아나그램이라 한다.
// 길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판단하는 프로그램을 작성하시오.
// 아나그램 판별시 대소문자가 구분된다.

function solution(str1, str2) {
  let answer = "YES";
  let sH = new Map();

  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }

  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) === 0) return "NO";
    sH.set(x, sH.get(x) - 1);
  }

  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
