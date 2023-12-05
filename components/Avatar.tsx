import Image from "next/image"

type AvatarProps = {
  url: string;
}

const Avatar: React.FC<AvatarProps> = ({ url }) => {
  let width = 'w-12';
  return (
    <div className={`${width}`}>
      <div className="rounded-full overflow-hidden">
        <Image
          src={url}
          height={300}
          width={300}
          className="w-full"
          alt="image-test"
        />
      </div>
    </div>
  )
}

export default Avatar