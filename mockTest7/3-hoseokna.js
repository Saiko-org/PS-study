// 프로그래머스 / 모의테스트7-3
// fail: 1시간

function solution(numbers) {
  const answer = []

  numbers.forEach((number) => {
    const binary = number.toString(2)
    let nextNumber = number + 1

    while (true) {
      const nextBinary = nextNumber.toString(2)
      let count = 0
      let pivot = 0

      for (; pivot < binary.length; pivot++) {
        if (
          binary[binary.length - 1 - pivot] !==
          nextBinary[nextBinary.length - 1 - pivot]
        ) {
          count++
        }
      }

      if (pivot < nextBinary.length) {
        count += nextBinary.length - pivot
      }

      if (count <= 2) {
        answer.push(nextNumber)

        return
      }

      nextNumber += 1
    }
  })

  // numbers.forEach((number) => {
  //   const binary = number.toString(2)

  //   if (!binary.includes('0')) {
  //     const nextBinary = '10' + binary.slice(1)

  //     answer.push(parseInt(nextBinary, 2))

  //     return
  //   }

  //   if (binary[binary.length - 1] === '0') {
  //     const nextBinary = binary.slice(0, binary.length - 1) + '1'

  //     answer.push(parseInt(nextBinary, 2))

  //     return
  //   }

  //   if (binary[binary.length - 2] === '0') {
  //     const nextBinary = binary.slice(0, binary.length - 2) + '10'

  //     answer.push(parseInt(nextBinary, 2))

  //     return
  //   }

  //   for (let i = 0; i < binary.length; i++) {
  //     if (binary[binary.length - 1 - i] === '0') {
  //       const nextBinary =
  //         binary.slice(0, binary.length - 1 - i) +
  //         '1' +
  //         binary.slice(binary.length - 1 - i + 1)

  //       answer.push(parseInt(nextBinary, 2))

  //       return
  //     }
  //   }
  // })

  return answer
}

/*

101 5
110 6
111 7
1000 8
1001 9
1010 10
1011 11
1100 12
1101 13
1110 14
01111 15
10000 16
10001 17
10010 18
10011 19
10100 20
10101 21
10110 22
10111 23

*/
