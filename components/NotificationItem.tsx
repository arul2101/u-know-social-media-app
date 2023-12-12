import Link from "next/link"
import Avatar from "./Avatar"

const NotificationItem: React.FC = () => {
  return (
    <div className="flex gap-2 items-center border-b border-b-gray-100 p-4">
      <Link href={'/profile'}>
        <Avatar url="https://i.pravatar.cc/300" />
      </Link>
      <div>
        <Link href={'/profile'} className={'font-semibold mr-1 hover:underline'}>John Doe</Link>
        liked
        <Link href={''} className={'ml-1 text-socialBlue hover:underline'}>your photo</Link>
      </div>
    </div>
  )
}

export default NotificationItem