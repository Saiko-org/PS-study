// 프로그래머스 / 42888 / 오픈채팅방 (Lv2 2019 KAKAO BLIND RECRUITMENT)
// https://school.programmers.co.kr/learn/courses/30/lessons/42888
// solve: 13분

function solution(record) {
  const answer = [];
  const map = new Map();

  // 최종 닉네임 저장하기
  record.forEach((value) => {
    const [command, id, nickname] = value.split(" ");

    if (command === "Enter" || command === "Change") {
      map.set(id, nickname);
    }
  });

  // 출력물 작성
  record.forEach((value) => {
    const [command, id, nickname] = value.split(" ");

    if (command === "Enter") {
      answer.push(`${map.get(id)}님이 들어왔습니다.`);
    }
    if (command === "Leave") {
      answer.push(`${map.get(id)}님이 나갔습니다.`);
    }
  });

  return answer;
}
