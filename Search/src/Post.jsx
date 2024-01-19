import HighlightedText from "./HighlighedText";

const Post = ({ post, searchText }) => {
    return (
        <div className="mb-4 py-3 w-6/12" >
            <h2 className="pb-2 font-bold text-3xl">
                <HighlightedText text={post.title} highlight={searchText} />
            </h2>
            <span className="font-style: italic">{post.date}</span>
            <p className="pt-4">
                <HighlightedText text={post.paragraph} highlight={searchText} />
            </p>
        </div>
    );
};

export default Post