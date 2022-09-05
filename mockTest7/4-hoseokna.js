// 프로그래머스 / 모의테스트7-4 / 110 옮기기
// https://school.programmers.co.kr/learn/courses/30/lessons/77886
// fail: 1시간

function solution(s) {
  const answer = []

  s.forEach((current) => {
    const remains = []
    let count = 0

    for (const third of current) {
      if (remains.length < 2) {
        remains.push(third)

        continue
      }

      const second = remains.pop()
      const first = remains.pop()

      if (first === '1' && second === '1' && third === '0') {
        count++

        continue
      }

      remains.push(first, second, third)
    }

    if (!count) {
      answer.push(current)

      return
    }

    const lastZeroIndex = remains.lastIndexOf('0')
    const oneOneZeros = new Array(count).fill('110')

    if (lastZeroIndex === -1) {
      answer.push([...oneOneZeros, ...remains].join(''))

      return
    }

    answer.push(
      [
        ...remains.slice(0, lastZeroIndex + 1),
        ...oneOneZeros,
        ...remains.slice(lastZeroIndex + 1),
      ].join('')
    )
  })

  return answer
}

/**
 * 18 ~ 21 시간 초과
 */
// function solution(s) {
//   const TARGET = '110'

//   const translateString = (string) => {
//     // 110이 아닌 문자열
//     let remainString = ''
//     let count = 0
//     let prevIndex = 0
//     let index = string.indexOf(TARGET, prevIndex)

//     while (index !== -1) {
//       count++
//       remainString += string.slice(prevIndex, index)
//       prevIndex = index + TARGET.length
//       index = string.indexOf(TARGET, prevIndex)
//     }

//     if (prevIndex < string.length) {
//       remainString += string.slice(prevIndex)
//     }

//     if (count === 0) {
//       return string
//     }

//     if (!remainString.includes('0')) {
//       return new Array(count).fill(TARGET).join('') + remainString
//     }

//     index = remainString.lastIndexOf('0')

//     return (
//       remainString.slice(0, index + 1) +
//       new Array(count).fill(TARGET).join('') +
//       remainString.slice(index + 1)
//     )
//   }

//   return s.map((string) => {
//     let prevString = string
//     let nextString = translateString(string)

//     while (prevString !== nextString) {
//       prevString = nextString
//       nextString = translateString(nextString)
//     }

//     return nextString
//   })
// }
