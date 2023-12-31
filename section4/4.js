// 졸업선물
// 선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 한다. 학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품을 가격과 배송비를 제출하라고 했다.
// 선생님이 갖고있는 예산은 한정적인데 현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하시오
// 상품 하나를 50% 할인해서 살 수 있는 쿠폰을 갖고 있으며 배송비는 할인에 포함되지 않는다.

// 내 풀이
function solution(m, product) {
  let answer = 0;
  let n = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < n; i++) {
    let price = product[i][0] / 2 + product[i][1];
    let count = 1;

    for (let j = 0; j < n; j++) {
      if (i !== j && price + (product[j][0] + product[j][1]) <= m) {
        price += product[j][0] + product[j][1];
        count++;
      }
    }

    answer = Math.max(answer, count);
  }
  return answer;
}

let arr1 = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr1));

// 선생님 풀이
function solution(m, product) {
  let answer = 0;
  let n = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
