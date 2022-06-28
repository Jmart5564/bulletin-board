

export default function createPostList(root) {
    return ({ posts }) => {
        root.innerHTML = '';

        for (const post of posts) {
            const li = PostCard({ post });
            root.append(li);
        }
    };
}

export function PostCard({ post }) {
    const li = document.createElement('li');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p'); 

    li.classlist.add('post-card');

    p1.textContent = post.title;
    p2.textContent = post.description;
    p3.textContent = post.contact;
    p4.textContent = post.timestamptz;

    li.append(p1, p2, p3, p4);

    return li;

}