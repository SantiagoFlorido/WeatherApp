import React from 'react'
import { DotSpinner } from '@uiball/loaders'

const Loading = () => {

  return (
    <DotSpinner
      size={40}
      speed={0.9}
      color="black"
    />
  )
}

export default Loading  