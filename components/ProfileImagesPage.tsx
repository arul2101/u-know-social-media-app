import Image from "next/image"
import Card from "./Card"

const ProfileImagesPage = () => {
  return (
    <Card noPadding={false}>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
          <Image
            src="https://placehold.co/1920x1080/png"
            alt="Image Photos"
            height={1920}
            width={1080}
          />
        </div>
        <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
          <Image
            src="https://placehold.co/1920x1080/png"
            alt="Image Photos"
            height={1920}
            width={1080}
          />
        </div>
        <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
          <Image
            src="https://placehold.co/1920x1080/png"
            alt="Image Photos"
            height={1920}
            width={1080}
          />
        </div>
        <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
          <Image
            src="https://placehold.co/1920x1080/png"
            alt="Image Photos"
            height={1920}
            width={1080}
          />
        </div>
      </div>
    </Card>
  )
}

export default ProfileImagesPage