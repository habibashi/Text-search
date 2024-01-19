import Post from "./Post"

const Posts = ({ searchText, filteredPosts }) => {
    return (
        <>
            <p className="mt-5 mb-12"><span className="font-bold text-md">{filteredPosts.length} posts</span> were found.</p>
            {filteredPosts.map((post, index) => (
                <Post key={index} post={post} searchText={searchText} />
            ))}
        </>
    )
}

export default Posts