"use client";
import { PostOwner } from "@/components/PostOwner";
import { Comment } from "@/components/Comment";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwner
          key
          img="/profileImages/Bank.jpeg"
          name="Sirawit Kongkham"
          id="650610814"
          post="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
          like="100"
        />

        {/* Comment Example */}
        {comments.map((comments) => (
          <Comment
            userImagePath={comments.userImagePath}
            username={comments.username}
            commentText={comments.commentText}
            likeNum={comments.likeNum}
            replies={comments.replies}
            key={comments.key}
          />
        ))}

        {/* Reply Example */}

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
