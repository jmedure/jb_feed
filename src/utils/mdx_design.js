import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { sync } from 'glob';

const articlesPath = path.join(process.cwd(), '/data/design');

// get unique article, when it is clicked on, by the user
// on the blog page
export async function getSlug() {
  const paths = sync(`${articlesPath}/*.mdx`);

  return paths.map((path) => {
    // holds the paths to the directory of the article
    const parts = path.split('/');
    const fileName = parts[parts.length - 1]; // gets the last part of path with /name.mdx
    const [slug, _extension] = fileName.split('.');

    return slug;
  });
}

export async function getArticleFromSlug(slug) {
  const articleDir = path.join(articlesPath, `${slug}.mdx`);
  const source = fs.readFileSync(articleDir);
  const { content, data } = matter(source);

  // console.log(data)

  return {
    content,
    frontmatter: {
      slug,
      description: data.description,
      title: data.title,
      image: data.image,
      alt: data.alt,
      date: data.date,
      lastEdited: data.lastEdited,
      readingTime: readingTime(source).text,
      // color: data.color,
      tile: data.tile,
      ...data,
    },
  };
}

// get the path that stores all the articles or blog post
export async function getAllArticles() {
  const articles = fs.readdirSync(path.join(process.cwd(), '/data/design'));

  return articles.reduce((allArticles, articleSlug) => {
    // get parsed data from mdx files in the "articles" dir
    const source = fs.readFileSync(
      path.join(process.cwd(), '/data/design', articleSlug),
      'utf-8'
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: articleSlug.replace('.mdx', ''),
        readingTime: readingTime(source).text,
      },
      ...allArticles,
    ];
  }, []);
}
