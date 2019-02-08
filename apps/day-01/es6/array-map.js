
const posts = [
   { title: 'post 1', author: 'hari' },
   { title: 'post 2', author: 'krish' },
   { title: 'post 3', author: 'shiv' },
   { title: 'post 4', author: 'bob' }
];

const postsStr = posts.map((post) => {
   return `<li>${post.title} - ${post.author}</li>`;
})


console.log(posts);
console.log(postsStr);
