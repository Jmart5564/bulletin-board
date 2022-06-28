// import services and utilities
import { getPosts, getUser } from '../services/bulletin-services.js';
// import component creators
import createPostList from './components/PostList.js';

const loginButton = document.getElementById('login-button');
// declare state variables
let posts = [];

// write handler functions
async function handlePageLoad() {
    posts = await getPosts();
    display();
}

window.addEventListener('load', async() => {
    const user = await getUser();

    if (user) {
        loginButton.addEventListener('click', logout);
        loginButton.textContent = 'Logout';
    } else {
        loginButton.addEventListener('click', () => {
            location.replace('./auth');
        });
    }

}); 
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
