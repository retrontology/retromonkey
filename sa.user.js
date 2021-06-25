// ==UserScript==
// @name     SA ATP
// @version  1
// @include https://forums.somethingawful.com/*
// @include http://forums.somethingawful.com/*
// @grant    none
// ==/UserScript==

function makeThreadPostsButton(threadid, userid)
{
    var threadposts = document.createElement('li');
    var link = document.createElement('a');
    link.href = `https://forums.somethingawful.com/showthread.php?threadid=${threadid}&userid=${userid}&perpage=40`;
    link.text = 'ATP';
    threadposts.appendChild(link);
    return threadposts;
}

const threadid = document.body.getAttribute("data-thread");
var posts = document.getElementsByClassName('post');
for (const post of posts)
{
    const userid = post.getElementsByClassName('userinfo').item(0).classList[1].slice(7);
    var buttons_element = post.getElementsByClassName('profilelinks').item(0);
    buttons_element.insertBefore(makeThreadPostsButton(threadid, userid), buttons_element.childNodes[buttons_element.childNodes.length - 2]);
}