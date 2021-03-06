import { FC } from 'react'
import styled from 'styled-components'

import { mobileBreakpoint } from 'constants/styles'

const ExclamationPoint: FC<Props> = ({ width = '140px', color = 'yellow' }) => {
  return (
    <StyledSvg width={width} x='0px' y='0px' viewBox='0 0 197.143 197.143'>
      <g>
        <g>
          <path
            fill={color}
            d='M195.031,166.074l-85.592-148.24c-2.226-3.89-6.403-6.306-10.89-6.306c-4.477,0-8.65,2.412-10.894,6.292L1.68,166.747c-2.24,3.876-2.24,8.689,0,12.565c2.24,3.887,6.413,6.302,10.887,6.302h172.01c6.929,0,12.565-5.644,12.565-12.58C197.143,170.447,196.377,167.956,195.031,166.074z M184.577,178.324H12.571c-1.882,0-3.643-1.009-4.585-2.645c-0.945-1.636-0.948-3.665,0-5.3L93.961,21.456c0.941-1.628,2.698-2.645,4.588-2.645c1.882,0,3.654,1.016,4.592,2.645l85.764,148.537c0.626,0.895,0.966,1.943,0.966,3.046C189.871,175.952,187.491,178.324,184.577,178.324z'
          />
          <polygon fill={color} points='102.504,134.938 104.486,67.255 89.709,67.255 91.681,134.938' />
          <path
            fill={color}
            d='M97.096,144.637c-5.146,0-8.879,3.905-8.879,9.28c0,5.39,3.733,9.294,8.879,9.294c5.229,0,8.886-3.815,8.886-9.294C105.982,148.452,102.328,144.637,97.096,144.637z'
          />
        </g>
      </g>
    </StyledSvg>
  )
}

const StyledSvg = styled.svg`
  width: ${({ width = '20px' }) => width};
  @media screen and (min-width: ${mobileBreakpoint}) {
    width: ${({ width = '20px' }) => `calc(${width} * 1.3)`};
  }
`
interface Props {
  color?: string
  width?: string
}

export default ExclamationPoint
