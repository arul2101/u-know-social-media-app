import Link from "next/link"
import Card from "./Card"
import Avatar from "./Avatar"
import Image from "next/image"

import { GoHeart, GoComment } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import Comment from "./Comment";
import LoadMoreComment from "./LoadMoreComment";
import FormComment from "./FormComment";
import FeedbackButtonComment from "./FeedbackButtonComment";
import PostBody from "./PostBody";
import PostHeader from "./PostHeader";

const PostItem: React.FC = () => {
  return (
    <Card noPadding={false}>
      <PostHeader
        avatar="https://i.pravatar.cc/300"
        user="John Doe"
        time="5 Minutes ago"
      />

      <PostBody
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minima necessitatibus, labore architecto at laboriosam quam in, culpa facilis, cumque fugit eaque vero ad accusantium modi animi. Atque dignissimos vero magni harum sit itaque? Harum optio minus iste esse molestias delectus animi est doloremque, nesciunt cupiditate qui quo earum. Fugit!"
        image="https://placehold.co/1920x1080/png"
      />

      <div className="mt-5 flex gap-8">
        <FeedbackButtonComment
          data={11}
          icon={<GoHeart />}
        />

        <FeedbackButtonComment
          data={7}
          icon={<GoComment />}
        />
      </div>

      <FormComment />
      <LoadMoreComment />
      <Comment
        label="I love this post"
        time="5 Minutes ago"
        user="John Doe"
      />
      <Comment
        label="I love this post"
        time="5 Minutes ago"
        user="John Doe"
      />
    </Card>
  )
}

export default PostItem