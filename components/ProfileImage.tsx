import Image from "next/image"

const ProfileImage: React.FC = () => {
  return (
    <div className="absolute top-24 left-4 z-20">
      <Image
        src="https://i.pravatar.cc/300"
        alt="Image Profile"
        width={1920}
        height={1080}
        className="w-36 h-36 rounded-full"
      />
    </div>
  )
}

export default ProfileImage