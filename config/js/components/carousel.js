import { fetchPosts } from "../backend/posts_api.js";

function createNewSlide(title, date, image, postContent, id) {
 // Creating a new slide
 const newSlide = document.createElement("div");
 newSlide.classList.add("slide-container");

 // Creating slide body
 const slideBody = document.createElement("div");
 slideBody.classList.add("slide-body");
 slideBody.id = "slide-body"

 // Creating slide header
 const slideHeader = document.createElement("div");
 slideHeader.classList.add("slide-header");
 slideHeader.id = "slide-header"

 // Setting the slide title
 const slideTitle = document.createElement("h3");
 slideTitle.classList.add("title-small");
 slideTitle.id = "slide-title"
 slideTitle.innerText = `${title}`;

 // Setting the slide date
 const slideDate = document.createElement("p");
 slideDate.classList.add("publish-date");
 slideDate.id = "slide-date"
 slideDate.innerText = date

 slideHeader.append(slideTitle, slideDate)

  // Creating slide image
  const slideImage = document.createElement("div");
  slideImage.classList.add("slide-image");
  slideImage.id = "slide-image"
  slideImage.style = image

 // Creating slide main
 const slideMain = document.createElement("div");
 slideMain.classList.add("slide-main");
 slideMain.id = "slide-main"
 slideMain.innerHTML = `<p> ${postContent} </p>`

 // Creating Slide footer
 const slideFooter = document.createElement("div");
 slideFooter.classList.add("slide-footer");
 slideFooter.id = "slide-footer"

 // Setting the slide anchor tag url
 const postDetailsUrl = document.createElement("a");
 postDetailsUrl.classList.add("btn");
 postDetailsUrl.id = "slide-link"
 postDetailsUrl.innerText = `Read more`
 postDetailsUrl.href = `/public/pages/post_details_page.html?post_id=` + id;

 // Appending elements
 slideFooter.append(postDetailsUrl);
 slideBody.append(slideImage, slideHeader, slideMain, slideFooter);
 newSlide.append(slideBody);

 return newSlide;
}
createNewSlide();

async function generateSlideElements() {
 const data = await fetchPosts();
 const slideContainer = document.querySelector(".container-slide-show");

 console.log(data);

 data.forEach((e) => {
    const postTitle = e.title.rendered;
    const postDate = e.date;
    const slideImage = `background-image: url(${e.featured_image_url})`;
   const postContent = e.excerpt.rendered
   const postId = e.id;

   const postResult = createNewSlide(postTitle, postDate, slideImage, postContent, postId)
   slideContainer.append(postResult);
 });
}
generateSlideElements();
