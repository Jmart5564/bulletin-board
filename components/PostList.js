

export default function createPostList(root) {
    return ({ posts }) => {
        root.innerHTML = '';

        for (const post of posts) {
            const div = PostCard({ post });
            root.append(div);
        }
    };
}

export function PostCard({ post }) {
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    div.classList.add('post-card');

    h3.textContent = post.title;
    p2.textContent = post.description;
    p3.textContent = post.contact;

    div.append(h3, p2, p3);

    return div;

}