// import services and utilities
import { getPosts } from '../services/bulletin-services.js';
// import component creators
import createPostList from './components/PostList.js';
// declare state variables
let posts = [];

// write handler functions
async function handlePageLoad() {
    posts = await getPosts();
console.log(posts);
    display();
}
// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
const PostList = createPostList(document.querySelector('#bulletin-board'));
// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    PostList({ posts });
}

// Call display on page load
handlePageLoad();
