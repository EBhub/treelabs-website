import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
const postsDirectory = process.cwd() + '/content/blogs/'

function importAll(r) {
    return r.map((fileName) => {
      const fileContents = fs.readFileSync(postsDirectory + fileName, 'utf8')
      const { data, content } = matter(fileContents)
      return {
        slug: fileName.slice(0, -4),
        ...data
      }
    });
  }
  
export const getAllPosts = () => {
  const files = fs.readdirSync(path.join(postsDirectory))
  return importAll(
      files
    );
}

export function getPostBySlug(slug) {
 // const realSlug = slug.replace(/\.md$/, '')
  const fullPath = postsDirectory + `${slug}.mdx`
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return { slug: slug, meta: data, content }
}

