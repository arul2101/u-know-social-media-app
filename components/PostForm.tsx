import Avatar from "./Avatar"
import Card from "./Card"

import { SlPicture } from "react-icons/sl";


const PostForm: React.FC = () => {
  return (
    <Card noPadding={false}>
      <div className="flex gap-2">
        <div>
          <Avatar url='https://i.pravatar.cc/300' />
        </div>
        <textarea
          className="grow p-3 h-14 resize-none focus:outline-none" placeholder={`Whats on your mind, John Doe?`}
        />
      </div>
      <div className="flex gap-5 items-center mt-2">
        <div className="flex gap-2 items-center text-[1.2rem] cursor-pointer">
          <input type="file" className="hidden" multiple />
          <span>
            <SlPicture />
          </span>
          <span className="hidden md:block">Photos</span>
        </div>
        <div className="grow text-right">
          <button className="bg-socialBlue text-white px-6 py-1 rounded-md">Post</button>
        </div>
      </div>
    </Card>
  )
}

export default PostForm