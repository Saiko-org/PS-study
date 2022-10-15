// 프로그래머스 / 92341 / 주차 요금 계산 (Lv2 2022 KAKAO BLIND RECRUITMENT)
// https://school.programmers.co.kr/learn/courses/30/lessons/92341
// solve: 30분

function solution(fees, records) {
  // 요금표 구조 분해 할당
  const [baseTime, baseFee, extraTime, extraFee] = fees;

  // 두 시간 사이의 주차 시간 계산
  const getTimeBetween = (startTime, endTime) => {
    const [startHour, startMinutes] = startTime
      .split(":")
      .map((value) => parseInt(value));
    const [endHour, endMinutes] = endTime
      .split(":")
      .map((value) => parseInt(value));

    if (startHour === endHour) {
      return endMinutes - startMinutes;
    }
    if (startHour !== endHour) {
      if (startMinutes <= endMinutes) {
        return (endHour - startHour) * 60 + (endMinutes - startMinutes);
      }

      if (endMinutes < startMinutes) {
        return (
          (endHour - startHour - 1) * 60 + (60 - startMinutes + endMinutes)
        );
      }
    }
  };

  // 주차 요금 계산
  const calculateCharge = (minutes) => {
    if (minutes <= baseTime) {
      return baseFee;
    }

    return baseFee + Math.ceil((minutes - baseTime) / extraTime) * extraFee;
  };

  // 차량 번호 목록
  const set = new Set();
  records.forEach((record) => set.add(record.split(" ")[1]));

  // 차량 번호 목록 (오름차순)
  const carIds = Array.from(set).sort((a, b) => parseInt(a) - parseInt(b));

  return carIds.map((carId) => {
    let total = 0;
    // 해당 차량의 주차의 입출차 기록
    const carIdRecords = records.filter(
      (record) => carId === record.split(" ")[1]
    );

    // 입출차 내역에 따른 누적 주차 시간 알아내기
    let startTime = null;
    carIdRecords.forEach((record) => {
      const [time, id, status] = record.split(" ");

      if (status === "IN") {
        startTime = time;
      }
      if (status === "OUT") {
        total += getTimeBetween(startTime, time);
        startTime = null;
      }
    });

    // 23:59까지 출차하지 않은 경우
    if (startTime !== null) {
      total += getTimeBetween(startTime, "23:59");
    }

    // 주차 요금 계산해서 반환
    return calculateCharge(total);
  });
}
