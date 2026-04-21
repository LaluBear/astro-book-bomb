import { useState } from "react";

const Likes = () => {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {

        setLikes(likes + 1);
    };

    return (
        <div className="likes">
            <button onClick={handleLike} className="px-4 py-2 bg-blue-500 text-white rounded">
                Like
            </button>
            <p>{likes} {likes === 1 ? "like" : "likes"}</p>
        </div>
    );
}

export default Likes;