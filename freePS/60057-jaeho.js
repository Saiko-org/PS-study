// 프로그래머스 / 60057 / 문자열 압축 (Lv2 2020 KAKAO BLIND RECRUITMENT)
// https://school.programmers.co.kr/learn/courses/30/lessons/60057
// solve: 1시간
// 참고 코드로 대체함 (작성한 코드 잃어버림)

function solution(s) {
  let answer = s.length;

  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    let str = "";
    let cnt = 1;
    let tempStr = s.substr(0, i);
    let idx = 0;

    for (idx = i; idx <= s.length; idx += i) {
      let nextStr = s.substr(idx, i);

      if (tempStr === nextStr) {
        cnt += 1;
      } else {
        if (cnt === 1) str = str + tempStr;
        else str = str + cnt + tempStr;

        cnt = 1;
        tempStr = nextStr;
      }
    }
    if (cnt === 1) str = str + tempStr;
    else str = str + cnt + tempStr;
    answer = Math.min(answer, str.length);
  }

  return answer;
}
