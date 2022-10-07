// 프로그래머스 / 12899 / 124 나라의 숫자 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/12899
// solve: 30분

function solution(n) {
  n = n.toString(3).split("");

  // 0이 있는 index 찾아서
  while (n.includes("0")) {
    let index = n.lastIndexOf("0");
    if (index === 0) {
      // (맨 앞자리 0은 예외처리)
      break;
    }

    // 4로 바꿔준다음에
    n[index] = "4";
    index -= 1;
    // 그 바로 앞자리의 연속된 0들을 2로 바꿔줌
    while (n[index] === "0") {
      n[index] = "2";
      index -= 1;
    }
    // 0이 아닌 숫자를 만나게되면 1아니면 2일테니 -1해줌
    if (0 <= index) {
      n[index] = (parseInt(n[index]) - 1).toString();
    }
  }

  // 맨 앞자리 0일 수 있으니 숫자로 한번 변환후 다시 문자열로 만들기
  return parseInt(n.join("")).toString();
}
