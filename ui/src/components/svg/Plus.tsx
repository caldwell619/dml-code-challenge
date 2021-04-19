import { FC } from 'react'

import { brandColor } from 'constants/styles'

const PlusIcon: FC<Props> = ({ height = '20px', color = brandColor }) => {
  return (
    <svg height={height} viewBox='0 0 192.000000 192.000000' preserveAspectRatio='xMidYMid meet'>
      <g transform='translate(0.000000,192.000000) scale(0.100000,-0.100000)' fill={color} stroke='none'>
        <path
          d='M770 1535 l0 -385 -385 0 -385 0 0 -190 0 -190 385 0 385 0 0 -385 0
-385 190 0 190 0 0 385 0 385 385 0 385 0 0 190 0 190 -385 0 -385 0 0 385 0
385 -190 0 -190 0 0 -385z'
        />
      </g>
    </svg>
  )
}

interface Props {
  height?: string
  color?: string
  isFocused?: boolean
}

export default PlusIcon
