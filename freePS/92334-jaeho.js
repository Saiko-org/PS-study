// 프로그래머스 / 92334 / 신고 결과 받기 (Lv1 22 카카오 인턴십)
// https://school.programmers.co.kr/learn/courses/30/lessons/92334
// solve: 20분

function solution(id_list, report, k) {
  const answer = [];

  const reportObject = {}; // key: 신고자id, value: 신고자가 신고한 사람id 명단
  const countOfReportMap = new Map(); // key: 사람id, value: 신고당한 횟수

  // 신고당한 횟수 초기화
  for (const id of id_list) {
    reportObject[id] = [];
    countOfReportMap.set(id, 0);
  }

  // reportObject, countOfReportMap 만들기
  for (const r of [...new Set(report)]) {
    // Set으로 중복 신고 제거
    const [from, to] = r.split(" ");
    reportObject[from].push(to);
    const currentCount = countOfReportMap.get(to);
    countOfReportMap.set(to, currentCount + 1);
  }

  // k 횟수를 넘는 게시판 이용 정지 대상자 id 명단
  const blackList = Array.from(countOfReportMap)
    .filter(([_, count]) => k <= count)
    .map(([name]) => name);

  // 신고자id의 신고대상자 명단에 정지 대상자가 있는지 확인하여 몇명인지 추출
  for (const id in reportObject) {
    answer.push(
      reportObject[id].filter((element) => blackList.includes(element)).length
    );
  }

  return answer;
}
