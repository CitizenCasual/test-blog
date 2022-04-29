
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import fs from 'fs'

export default function Home({slugs}) {
  return (
    <div className={styles.container}>
      slugs:
      {slugs.map(slug => {
        return (
          <div key={slug}>
            <Link href="/[slug]" as={"/" + slug}>
              <a>{slug}</a>
            </Link>
          </div>
        )
      })}
      
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  return {
    props: {
      slugs: files.map(filename => filename.replace(".md", ""))
    }
  };
};
