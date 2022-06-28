import { getUser, signIn, signUp } from '../services/bulletin-services.js';

import createAuthForm from '../components/AuthForm.js';
import createAuthError from '../components/AuthError.js';

let errorMessage = '';

async function handlePageLoad() {
    const user = await getUser();
    if (user) {
        location.replace('./');
        return;
    }
    
    display();
}

async function handleSignIn(email, password) {
    

    const response = await signIn(email, password);
    checkAuth(response);
}

async function handleSignUp(email, password) {
    const response = await signUp(email, password);
    checkAuth(response);

}

function checkAuth(response) {

    if (response?.error) {
        // eslint-disable-next-line no-console
        console.log(response.error);
        errorMessage = response.error.message;

        display();
    }
    else {
        location.replace('./auth');
    }
}


const SignInForm = createAuthForm(document.querySelector('#sign-in'), { handleAuth: handleSignIn });

const SignUpForm = createAuthForm(document.querySelector('#sign-up'), { handleAuth: handleSignUp });

const AuthError = createAuthError(document.querySelector('#auth-error'));

function display() {
    SignInForm();
    SignUpForm();
    AuthError({ errorMessage });
}

handlePageLoad();
