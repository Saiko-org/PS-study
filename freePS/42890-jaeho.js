// 프로그래머스 / 42890 / 후보키 (Lv2 2019 KAKAO BLIND RECRUITMENT)
// https://school.programmers.co.kr/learn/courses/30/lessons/42890
// solve: 1시간

function solution(relation) {
  const board = [];
  const COLUMN_LEN = relation[0].length;
  const ROW_LEN = relation.length;

  // 유일성 찾기
  const dfs = (index, usedColumn) => {
    if (usedColumn.length !== 0) {
      const filteredColumn = relation.map((row) =>
        usedColumn.map((column) => row[column]).join("")
      );
      const filteredColumnSet = new Set(filteredColumn);

      if (filteredColumn.length === filteredColumnSet.size) {
        board.push(usedColumn.join("-"));
        return;
      }
    }

    for (let i = index; i < COLUMN_LEN; i++) {
      usedColumn.push(i);
      dfs(i + 1, usedColumn);
      usedColumn.pop();
    }
  };

  dfs(0, []);

  // 최소성 찾기
  const answer = Array.from({ length: board.length }, () => true);
  board.sort((a, b) => a.length - b.length);

  for (let index = 0; index < board.length; index++) {
    if (answer[index]) {
      const keywords = board[index].split("-");

      for (let i = index + 1; i < board.length; i++) {
        const isMinimality = keywords.every((keyword) =>
          board[i].includes(keyword)
        );
        if (isMinimality) {
          answer[i] = false;
        }
      }
    }
  }

  return answer.filter((value) => value).length;
}
