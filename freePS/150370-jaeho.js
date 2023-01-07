// 프로그래머스 / 150370 / 개인정보 수집 유효기간 (Lv1 2023 KAKAO BLIND RECRUITMENT)
// https://school.programmers.co.kr/learn/courses/30/lessons/150370
// solve: 15분

function solution(today, terms, privacies) {
  const map = new Map();

  terms.forEach((term) => {
    const [key, period] = term.split(" ");
    map.set(key, parseInt(period) * 28);
  });

  const calculateDate = (date) => {
    const [year, month, day] = date.split(".").map((v) => parseInt(v));
    return year * 12 * 28 + month * 28 + day;
  };

  const getExpireDay = (privacy) => {
    const [startDate, key] = privacy.split(" ");
    const term = map.get(key);
    return calculateDate(startDate) + term - 1;
  };

  const result = [];
  const todayDays = calculateDate(today);
  const expireDays = privacies.map((p) => getExpireDay(p));

  expireDays.forEach((days, index) => {
    if (days < todayDays) {
      result.push(index + 1);
    }
  });

  return result;
}
