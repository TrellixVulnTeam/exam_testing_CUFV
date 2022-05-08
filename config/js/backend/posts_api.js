const base_url = `https://christopher-tonnesland.no/School-projects/project_exam_site/wp-json`;

const end = {
 po: `/wp/v2/posts`,
 pg: `/wp/v2/pages`,
 co: `/wp/v2/comments`,
 me: `/wp/v2/media`,
 nav: `/wp/v2/navigation`,
 tag: `/wp/v2/tags`,
 cat: `/wp/v2/categories`,
};

// Fetching post data
export async function fetchPosts() {
 try {
  const request = await fetch(base_url + `/wp/v2/posts`);
  const response = await request.json();
  return response;
 } catch (err) {
  console.error(err);
 }
}