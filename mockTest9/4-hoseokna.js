// 프로그래머스 / 모의테스트9-4 / 광고 삽입
// https://school.programmers.co.kr/learn/courses/30/lessons/72414
// fail: 1시간

function solution(play_time, adv_time, logs) {
  const convertTimeStringToSeconds = (timeString) => {
    const [hh, mm, ss] = timeString.split(':')

    return 60 * 60 * parseInt(hh, 10) + 60 * parseInt(mm, 10) + parseInt(ss, 10)
  }

  const MAX_SECONDS = convertTimeStringToSeconds(play_time)
  const sums = new Array(MAX_SECONDS + 1).fill(0)

  logs.forEach((log) => {
    const [startTimeString, finishTimeString] = log.split('-')

    const startSeconds = convertTimeStringToSeconds(startTimeString)
    const finishSeconds = convertTimeStringToSeconds(finishTimeString)
    const playingTime = finishSeconds - startSeconds

    for (let i = startSeconds + 1; i <= finishSeconds; i++) {
      sums[i] += 1
    }

    sums[finishSeconds + 1] -= playingTime
  })

  for (let i = 0; i < sums.length - 1; i++) {
    sums[i + 1] += sums[i]
  }
}
