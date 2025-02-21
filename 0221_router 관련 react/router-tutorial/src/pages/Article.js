import React from 'react'
import { useParams } from 'react-router'

const Article = () => {
  const {id} = useParams()
  return (
    <div>
      <h3>게시글 : {id}</h3>
    </div>
  )
}

export default Article
