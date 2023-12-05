type FeedbackButtonCommentProps = {
  icon: React.ReactNode,
  data: number;
}

const FeedbackButtonComment: React.FC<FeedbackButtonCommentProps> = ({ icon, data }) => {
  return (
    <div className="flex gap-2 items-center">
      <span className="text-[1.5rem] cursor-pointer">
        {icon}
      </span>
      <span className="">
        {data}
      </span>
    </div>

  )
}

export default FeedbackButtonComment