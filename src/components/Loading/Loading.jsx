import './Loading.css'

import React from 'react'
import { BiLoaderAlt } from 'react-icons/bi'

const Loading = () => {
  return (
    <div className="loading">
      <BiLoaderAlt className="loading__icon" />
    </div>
  )
}

export default Loading
