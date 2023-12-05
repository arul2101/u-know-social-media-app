import Image from "next/image"

type PostBodyProps = {
  image: string;
  body: string;
}

const PostBody: React.FC<PostBodyProps> = ({ image, body }) => {
  return (
    <div>
      <p className="my-3 text-sm">
        {body}
      </p>

      <Image
        src={image}
        alt="Image Post"
        width={1920}
        height={1080}
      />
    </div>
  )
}

export default PostBody