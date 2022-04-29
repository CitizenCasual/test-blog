import reactx from "react";
import fs from 'fs'
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

const Post = ({contents, data}) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <pre>{contents}</pre>
    </>
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
  const markdownWithMetadata = fs.readFileSync(path.join('posts', slug + '.md')).toString()

  const parsedMarkdown = matter(markdownWithMetadata)

  return {
    props: {
      contents: parsedMarkdown.content,
      data: parsedMarkdown.data
    }
  }
}

export default Post