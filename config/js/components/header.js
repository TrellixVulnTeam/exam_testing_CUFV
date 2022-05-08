export function generateHeader() {
 const header = document.querySelector("header");
 header.classList.add("page-header");

 const brandContainer = document.createElement("div");
 brandContainer.classList.add("company-brand")
 const brandLabel = document.createElement("label");
 brandLabel.classList.add("brand-name");
 brandLabel.innerHTML = `<a href="/index.html" class="nav-link">The world of conspiracy</a>`;


 const navSkip = document.createElement("a");
 navSkip.href = "#main";
 navSkip.classList.add("skip-nav");
 navSkip.innerHTML = "Skip navigation";

 // Setting up nav and nav links
 const nav = document.createElement("nav");
 nav.classList.add("page-navigation");
 brandContainer.append(brandLabel, nav);
 // Array with links and endpoints
 const pages = [
  {
   name: "Home",
   url: "/index.html",
  },
  {
   name: "My Posts",
   url: "/public/pages/post_listing.html",
  },
  {
   name: "About",
   url: "/public/pages/about.html",
  },
  {
   name: "Contact",
   url: "/public/pages/contact.html",
  },
 ];

 for (let i = 0; i < pages.length; i++) {
  const navLink = document.createElement("a");

  navLink.classList.add("nav-link");
  navLink.innerText += `${pages[i].name}`;
  navLink.href += `${pages[i].url}`;
  nav.append(navLink);
 }

 // Page title
 let pageTitle = document.title;
 pageTitle = "Home";

 function setPageTitle(type) {
  switch (type) {
   case "Home":
    break;

   default:
    break;
  }
 }
 setPageTitle();

 //  console.log("Pages:", pages);
 header.append(navSkip, brandContainer);
}
