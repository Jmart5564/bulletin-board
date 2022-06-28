

export default function createSignOut(root, { handleSignOut }) {

    root.addEventListener('click', () => {
        root.classList.add('hidden');
        alert('Signing Out');
        handleSignOut();
    });

    return ({ email }) => {
        root.textContent = `Sign out ${email}`;
    };
}