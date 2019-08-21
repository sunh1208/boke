import { get } from "./require.js";
console.log(get)
export let getBlogListInfo = () => {
    return get("/blog/allBlog")
}