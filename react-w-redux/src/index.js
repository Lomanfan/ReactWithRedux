import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const { faker } = require("@faker-js/faker");

const App = () => {
  const Segment = (props) => {
    return <div className="ui container comments">{props.children}</div>;
  };

  return (
    <Segment>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="Nice blog post"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00AM"
          content="I like the subject"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          content="I like the writing"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </Segment>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
