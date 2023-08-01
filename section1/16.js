// 중복 문자 제거
function solution(s) {
  let answer = "";
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
