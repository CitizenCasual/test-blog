import reactx from "react";
import fs from 'fs'

const Post = () => {
  return (
    <h1>Hello</h1>
  )
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync('posts')
  console.log('files: ', files);
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace(".md", "")
    }
  }))
  console.log("paths: ", paths);

  return {
    paths,
    fallback: false,
  }
}

export default Post