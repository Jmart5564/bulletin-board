// import services and utilities
import { getPosts, getUser, signOut } from '../services/bulletin-services.js';
// import component creators
import createPostList from './components/PostList.js';
import createSignOut from '../components/SignOut.js';

const loginButton = document.getElementById('login-button');
const createButton = document.getElementById('create-post-button');
// declare state variables
let posts = [];
let user = null;

// write handler functions
async function handlePageLoad() {
    posts = await getPosts();
    user = await getUser();

    display();
}

async function handleSignOut() {
    await signOut();
    display();
}


loginButton.addEventListener('click', () => {
    location.replace('./auth');
});

createButton.addEventListener('click', () => {
    location.replace('./create');
});


// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
const PostList = createPostList(document.querySelector('#bulletin-board'));
const SignOut = createSignOut(document.querySelector('#sign-out'), { handleSignOut });
// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    PostList({ posts });
    SignOut({ email: user.email });
}

// Call display on page load
handlePageLoad();
