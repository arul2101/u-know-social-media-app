import Image from "next/image"

const Cover: React.FC = () => {
  return (
    <div className="h-36 overflow-hidden flex justify-center items-center relative">
      <div>
        <Image
          src="https://placehold.co/1920x1080/png"
          alt="Image Cover"
          width={1920}
          height={1080}
        />
      </div>
    </div>
  )
}

export default Cover