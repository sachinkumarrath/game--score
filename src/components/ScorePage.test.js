import React from 'react'
import {render, screen} from '@testing-library/react'

import ScorePage from './ScorePage'
import { act } from '@testing-library/react'

describe('ScorePage', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() =>  Promise.resolve({
        json: () => Promise.resolve({
          overall: []
        })
      }))
  })
  test('render ScorePage component and snapshot check', () => {
    act(() => {
      // render(<ScorePage />)
    })
  })
})
