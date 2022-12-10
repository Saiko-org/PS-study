// 프로그래머스 / 70130 / 스타 수열 (Lv3)
// https://school.programmers.co.kr/learn/courses/30/lessons/70130
// solve: 1시간

function solution(a) {
  if (a.length < 2) {
    return 0;
  }

  let answer = 0;
  const map = new Map();

  a.forEach((key, index) => {
    if (map.has(key)) {
      map.get(key).push(index);
    } else {
      map.set(key, [index]);
    }
  });

  for (const [key, indexs] of map) {
    if (indexs.length <= answer) {
      continue;
    }

    let count = 0;
    let enableIndex = 0;
    for (const index of indexs) {
      if (index === 0) {
        enableIndex = 2;
        count += 1;
      } else if (index < enableIndex) {
        continue;
      } else if (index === enableIndex) {
        if (index === a.length - 1) {
          continue;
        }
        while (a[enableIndex] === a[enableIndex + 1]) {
          enableIndex += 1;
        }
        enableIndex += 2;
        count += 1;
      } else {
        enableIndex = index + 1;
        count += 1;
      }
    }

    if (answer < count) {
      answer = count;
    }
  }

  return answer * 2;
}
