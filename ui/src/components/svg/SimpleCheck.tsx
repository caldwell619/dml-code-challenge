import { FC } from 'react'

const Check: FC<CheckProps> = ({ height = '14px', fillColor = '#FFFFFF', rotation = 0 }) => (
  <svg preserveAspectRatio='xMidYMid meet' transform={`rotate(${rotation})`} height={height} viewBox='0 0 64 64'>
    <g transform='translate(0.000000,64.000000) scale(0.100000,-0.100000)' fill={fillColor} stroke='none'>
      <path
        d='M364 438 c-76 -106 -138 -195 -140 -196 -1 -2 -30 15 -63 37 -33 23
-64 41 -68 41 -4 0 -17 -15 -29 -33 -11 -17 -28 -44 -38 -59 l-17 -27 120 -80
c66 -45 124 -81 128 -81 7 0 354 480 361 499 1 4 -24 27 -57 50 l-60 41 -137
-192z'
      />
    </g>
  </svg>
)

interface CheckProps {
  rotation?: number
  height?: string
  fillColor?: string
}

export default Check
