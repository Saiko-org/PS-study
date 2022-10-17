// 프로그래머스 / 42860 / 조이스틱 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/42860
// solve: 50분

function solution(name) {
  const LEN = name.length;

  let countOfUpAndDown = 0;
  const isDestinationList = name.split("").map((value) => {
    const gap = value.charCodeAt(0) - "A".charCodeAt(0);
    countOfUpAndDown += gap <= 13 ? gap : 26 - gap;
    return gap === 0 ? false : true;
  });
  isDestinationList[0] = false;

  let countOfLeftAndRight = Infinity;
  const dfs = (current, total) => {
    if (!isDestinationList.includes(true)) {
      if (total < countOfLeftAndRight) {
        countOfLeftAndRight = total;
      }
      return;
    }

    const firstIndex = isDestinationList.indexOf(true);
    const lastIndex = isDestinationList.lastIndexOf(true);

    if (firstIndex) {
      if (current < firstIndex) {
        isDestinationList[firstIndex] = false;
        dfs(firstIndex, total + firstIndex - current);
        isDestinationList[firstIndex] = true;

        isDestinationList[lastIndex] = false;
        dfs(lastIndex, total + (LEN - lastIndex + current));
        isDestinationList[lastIndex] = true;
      } else {
        isDestinationList[firstIndex] = false;
        dfs(firstIndex, total + (LEN - current + firstIndex));
        isDestinationList[firstIndex] = true;

        isDestinationList[lastIndex] = false;
        dfs(lastIndex, total + (current - lastIndex));
        isDestinationList[lastIndex] = true;
      }
    }
  };

  dfs(0, 0);

  return countOfUpAndDown + countOfLeftAndRight;
}
