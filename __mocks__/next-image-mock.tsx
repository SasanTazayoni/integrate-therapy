import React from 'react'

type MockImageProps = {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
  fill?: boolean
  [key: string]: unknown
}

export default function MockImage({ src, alt, className, width, height, priority: _priority, fill: _fill, ...rest }: MockImageProps) {
  return React.createElement('img', { src, alt, className, width, height, ...rest })
}
