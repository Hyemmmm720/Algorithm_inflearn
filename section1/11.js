// 대문자 찾기
function solution(s) {
  let answer = 0;
  // str에 문자열을 작성하고 그걸 s로 넘겨주기
  for (let x of s) {
    //for문과 if문을 사용해서 x가 toUpperCase면 참으로 해주기
    if (x === x.toUpperCase()) answer++;
  }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));

// 선생님 답안
function solution(s) {
  let answer = 0;
  for (let x of s) {
    //let num=x.charCodeAt();
    //if(num>=65 && num<=90) answer++;
    if (x === x.toUpperCase()) answer++;
  }

  return answer;
}
