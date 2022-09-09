// 프로그래머스 / 모의테스트9-4 / 광고 삽입
// https://school.programmers.co.kr/learn/courses/30/lessons/72414
// fail: 1시간

function solution(play_time, adv_time, logs) {
  const convertTimeStringToSeconds = (timeString) => {
    const [hh, mm, ss] = timeString.split(':')

    return 60 * 60 * parseInt(hh, 10) + 60 * parseInt(mm, 10) + parseInt(ss, 10)
  }

  const convertSecondsToTimeString = (seconds) => {
    const hh = Math.floor(seconds / (60 * 60))
    const mm = Math.floor((seconds - hh * 60 * 60) / 60)
    const ss = seconds - hh * 60 * 60 - mm * 60

    return `${hh < 10 ? '0' + hh : hh}:${mm < 10 ? '0' + mm : mm}:${
      ss < 10 ? '0' + ss : ss
    }`
  }

  const playSeconds = convertTimeStringToSeconds(play_time)
  const advSeconds = convertTimeStringToSeconds(adv_time)
  const sums = new Array(playSeconds + 1).fill(0)

  logs.forEach((log) => {
    const [startTimeString, finishTimeString] = log.split('-')

    const startSeconds = convertTimeStringToSeconds(startTimeString)
    const finishSeconds = convertTimeStringToSeconds(finishTimeString)

    sums[startSeconds]++
    sums[finishSeconds]--
  })

  for (let i = 0; i < sums.length - 1; i++) {
    sums[i + 1] += sums[i]
  }

  for (let i = 0; i < sums.length - 1; i++) {
    sums[i + 1] += sums[i]
  }

  let max = sums[advSeconds]
  let startSeconds = 0

  for (let time = advSeconds + 1; time < playSeconds; time++) {
    if (max < sums[time] - sums[time - advSeconds]) {
      max = sums[time] - sums[time - advSeconds]
      startSeconds = time - advSeconds + 1
    }
  }

  return convertSecondsToTimeString(startSeconds)
}
