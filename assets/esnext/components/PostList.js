import { Post } from './Post';

/**
 * PostList Component
 * @param object props - Component props.
 * @returns {*}
 * @constructor
 */
export const PostList = props => {
    const { filtered = false, loading = false, posts = [], action = () => {}, icon = null } = props;

    if (loading) {
        return <p className="loading-posts">Loading posts...</p>;
    }

    if (filtered && posts.length < 1) {
        return (
            <div className="post-list">
                <p>Your query yielded no results, please try again.</p>
            </div>
        );
    }

    if ( ! posts || posts.length < 1 ) {
        return <p className="no-posts">No posts.</p>
    }

    return (
        <div class="post-list">
            {posts.map((post) => <Post key={post.id} {...post} clickHandler={action} icon={icon} />)}
        </div>
    );
};