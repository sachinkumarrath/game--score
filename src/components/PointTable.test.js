import React from 'react'
import { render, screen } from '@testing-library/react'

import PointTable from './PointTable'

describe('PointTable component', () => {
  test('renders PointTable and check snapshot', () => {
    const container = render(<PointTable pointsTableData={[]}/>)
    expect(container).toMatchSnapshot()
  })

  test('renders PointTable and check snapshot', () => {
    const container = render(<PointTable pointsTableData={[]}/>)
    screen.debug();
  })
})
