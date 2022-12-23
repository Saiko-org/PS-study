// 프로그래머스 / 134239 / 우박수열 정적분 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/134239
// solve: 30분

function solution(k, ranges) {
  const getArr = () => {
    const arr = [k];
    let last = k;
    while (1 < last) {
      if (last % 2 === 0) {
        last = last / 2;
      } else {
        last = last * 3 + 1;
      }
      arr.push(last);
    }
    return arr;
  };
  const getArea = (left, right) => {
    const low = Math.min(left, right);
    const high = Math.max(left, right);

    return low + (high - low) / 2;
  };
  const arr = getArr();

  return ranges.map((value) => {
    const [left, right] = value;
    if (arr.length + right <= left) {
      return -1;
    }
    let result = 0;
    for (let l = left; l < arr.length + right - 1; l++) {
      result += getArea(arr[l], arr[l + 1]);
    }
    return result;
  });
}
