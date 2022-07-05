import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

// import matter from "grey-matter";
const matter = require("gray-matter");

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // get file names from the posts directory
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // remove extension to get the file name
    const id = fileName.replace(/\.md$/, " ");

    // get markdown as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // grey matter to parse meta section
    const matterResult = matter(fileContents);

    // combine data and id
    return {
      id,
      ...matterResult.data,
    };
  });
  // sort by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
