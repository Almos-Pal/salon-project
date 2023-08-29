import { SvgProps } from '@/typings'
import React from 'react'

const Svgs: React.FC<SvgProps> = ({className, viewBox,dProps}) => {
  return (
    <svg  className={className} viewBox={viewBox} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path   d={dProps} />
</svg>
)
}

export default Svgs