import { Reply } from "./Reply";

export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  if (likeNum == 0) {
    return (
      <div>
        <div className="d-flex gap-2 my-2">
          <img
            src={userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              {username}
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>{commentText}</span>
          </div>
        </div>
        {replies.map((replies) => (
          <Reply
            key={replies.key}
            username={replies.username}
            userImagePath={replies.userImagePath}
            replyText={replies.replyText}
            likeNum={replies.likeNum}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <div className="d-flex gap-2 my-2">
          <img
            src={userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              {username}
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>{commentText}</span>
            <div className={"d-flex align-items-center gap-1"}>
              <img src="/like.svg" width={20}></img>
              <span style={{ color: "#B0B3B8" }}>{likeNum} คน</span>
            </div>
          </div>
        </div>
        {replies.map((replies) => (
          <Reply
            username={replies.username}
            userImagePath={replies.userImagePath}
            replyText={replies.replyText}
            likeNum={replies.likeNum}
          />
        ))}
      </div>
    );
  }
};
