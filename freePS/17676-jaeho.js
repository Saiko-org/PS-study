// 프로그래머스 / 17676 / [1차] 추석 트래픽 (Lv3 2018 KAKAO BLIND RECRUITMENT)
// https://school.programmers.co.kr/learn/courses/30/lessons/17676
// solve: 1시간

function solution(lines) {
  if (lines.length === 1) {
    return 1;
  }

  lines = lines.map((value) => value.split(" ").slice(1).join(" "));

  const ago = lines.map(
    (value) =>
      parseFloat(
        value.split(" ")[1].split("").reverse().slice(1).reverse().join("")
      ) *
        1000 -
      1
  );
  const start = lines.map((value, index) => {
    const [h, m, s] = value.split(" ")[0].split(":");
    return (
      (parseInt(h) * 3600 + parseInt(m) * 60 + parseFloat(s)) * 1000 -
      ago[index]
    );
  });

  let answer = 1;

  for (let i = 0; i < start.length; i++) {
    let endTime = start[i] + ago[i] + 1000;
    let cnt = 1;

    for (let j = i + 1; j < start.length; j++) {
      let curStartTime = start[j];

      if (curStartTime < endTime) {
        cnt++;
      }
    }

    answer = Math.max(answer, cnt);
  }

  return answer;
}
