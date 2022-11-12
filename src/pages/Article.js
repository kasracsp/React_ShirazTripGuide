import React from 'react'
import { useParams } from 'react-router-dom'

const Article = () => {
  const {slug}=useParams()
  console.log(slug)
  return (
    <div>{slug}</div>
  )
}

export default Article