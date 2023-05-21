import * as postMethods from "../api/posts/index.mjs";
import * as templates from "../templates/index.mjs";

export function setSearchAndFilterListener() {
    setSortTypeListener();
    setFilterByTagListener();
  }
  
  export function setSortTypeListener() {
    const form = document.querySelector("#sortPostsForm");
  
    const container = document.querySelector("#posts");

    if (!form || !container) {
      return;
    }
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const values = Object.fromEntries(formData.entries());
      const sortType = values.sortType;
  
      // send to API
      const returnedPosts = await postMethods.getPosts("", sortType);
          const container = document.querySelector("#posts");
      templates.renderPostTemplates(returnedPosts, container);
    });
  }
  
  export function setFilterByTagListener() {
    const form = document.querySelector("#filterByTagForm");
  
    const container = document.querySelector("#posts");

    if (!form || !container) {
      return;
    }
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const values = Object.fromEntries(formData.entries());
      const filterTag = values.filterByTag;
    console.log(formData);
      // send to API
      const returnedPosts = await postMethods.getPosts(filterTag, "");
      templates.renderPostTemplates(returnedPosts, container);
    });
  }