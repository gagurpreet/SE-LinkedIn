import React from 'react'

function PostList({ posts, deletePost }) {
	const renderPosts = () => {
		return posts.map(post => (
			<section className='post' key={post.id}>
				<header>
					<h2>{post.name}</h2>
					<span className="material-symbols-outlined delete" 
					onClick={() => deletePost(post.id)}>delete</span>
				</header>
				<p>{post.message}</p>
				<p>{post.skills}</p>
			</section>
		))
	}

	return(
		<section className='post-list'>
			<PostList posts={posts} deletePost={deletePost} />
			{renderPosts()}
		</section>
	);
}

export default PostList;