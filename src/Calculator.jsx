import { useState } from 'react'
import { evaluate } from 'mathjs'

export const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
export const operations = ['+', '-', '*', '/']
const equalSign = '='
const rows = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [0]
]

export const Calculator = () => {
  const [value, setValue] = useState('')

  const createHandleClick = op => () => setValue(value.concat(op))

  return (
    <section>
      <h1>Calculator</h1>
      <input value={value} readOnly />
      <div role='grid'>
        {rows.map((row, index) => (
          <div key={index} role='row'>
            {row.map(number =>
              <button onClick={createHandleClick(number)} key={number}>
                {number}
              </button>
            )}
          </div>
        ))}
        {
            operations.map(operation => (
              <button onClick={createHandleClick(operation)} key={operation}>{operation}</button>
            ))
          }
        <button onClick={() => setValue(evaluate(value))}>{equalSign}</button>
      </div>
    </section>
  )
}
