// 유효한 팰린드롬
// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 한다
// 문자열이 입력되고 해당 문자열이 팰린드롬이라면 Yes, 아니면 No를 출력하는 프로그램을 작성하시오(회문을 검사할 때 알파벳만 가지고 검사하며, 대소문자를 구분하지 않고 알파벳 이외의 문자들은 무시한다.)

function solution(s) {
  let answer = "YES";
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
