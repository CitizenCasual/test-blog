import reactx from "react";
import fs from 'fs'

const Post = () => {
  return (
    <h1>Hello</h1>
  )
}

export const getStaticPaths = async () => {

  const files = fs.readdirSync('posts')

  return {
    paths: files.map(filename => ({
      params: {
        slug: filename.replace(".md", "")
      }
    })),
    fallback: false,
  }
}

export default Post