import {AUTO} from "./types";
import smoothscroll from "smoothscroll-polyfill";

export const nextSlide = (elmId, actionType=AUTO) => () => {
    const element = document.getElementById(elmId);
    smoothscroll.polyfill();
    window.scroll({
        top:element.offsetTop,
        behavior: "smooth"
    });
};


export const createPostList = (type, posts, num=3) => {
    return posts.filter(post => post.post_type === type).slice(0,num)
};
