// 프로그래머스 / 모의테스트7-4
// fail: 1시간

function solution(s) {
  const TARGET = '110'

  return s.map((string) => {
    let prevIndex = 0
    let index = string.indexOf(TARGET, prevIndex)

    while (index !== -1 && prevIndex !== index) {
      let destination = -1

      for (let i = index - 1; i >= 0; i--) {
        if (string[i] === '1') {
          continue
        }

        destination = i
        break
      }

      if (index === destination) {
        return
      }

      string =
        destination === -1
          ? TARGET +
            string.slice(0, index) +
            string.slice(index + TARGET.length)
          : string.slice(0, destination + 1) +
            TARGET +
            string.slice(destination + 1, index) +
            string.slice(index + TARGET.length)

      prevIndex = index
      index = string.indexOf(TARGET, prevIndex)
    }

    return string
  })
}
