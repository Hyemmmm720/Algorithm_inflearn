// 중복 문자 제거
// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하기(제거된 문자열의 각 문자들은 원래 문자열의 순서를 유지!)

// 내 풀이
function solution(s) {
  let answer = "";
  // 반복문을 돌려서 indexOf값에 해당 글자가 있다면 제거!
  for (let i = 0; i < s.length; i++) {
    console.log(s[i], i, s.indexOf(s[i]));
    if (i === s.indexOf(s[i])) {
      answer += s[i];
    }
  }
  return answer;
}

let letter = "ksekkset";
console.log(solution(letter));

// 선생님 풀이
function solution(s) {
  let answer = "";
  //console.log(s.indexOf("K"));
  for (let i = 0; i < s.length; i++) {
    //console.log(s[i], i, s.indexOf(s[i]));
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}

// set 메서드 사용 (훨씬 간결해짐!)
function solution(s) {
  let answer = [...s];
  const set = new Set(answer);
  const uniqueArr = [...set];
  return uniqueArr;
}
