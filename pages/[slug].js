import reactx from "react";
import fs from 'fs'
import path from "path";

const Post = ({contents}) => {
  return (
    <h1>{contents}</h1>
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

export const getStaticProps = async ({params: {slug}}) => {
  const contents = fs.readFileSync(path.join('posts', slug + '.md')).toString()

  return {
    props: {
      contents
    }
  }
}

export default Post