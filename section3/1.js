// 회문문자열 (앞에서 읽을 때나 뒤에서 읽을 떄나 같은 문자열)
// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 하는데
// 문자열이 입력되면 해당 문자열이 회문 문자열이면 'YES', 회문 문자열이 아니면 'NO'를 출력하는 프로그램을 작성하시오(회문을 검사할 때 대소문자를 구분하지 않는다)

// 내 풀이
function solution(s) {
  let string = s.toLowerCase();
  let answer;
  let n = string.length;
  for (let i = 0; i < n; i++) {
    string[i] === string[n - 1 - i] ? (answer = "YES") : (answer = "No");
  }
  return answer;
}
const s = "gooG";
const s2 = "abbb";
console.log(solution(s));
console.log(solution(s2));

// 선생님 풀이
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] != s[len - i - 1]) return "NO";
  }
  return answer;
}

// 다른 풀이 (reverse(), join()메서드 이용하기)
function solution(s) {
  let answer = "Yes";
  s = s.toLowerCase();
  if (s.split("").reverse().join("") !== s) return "No";
  return answer;
}
