import Link from "next/link"
import Card from "./Card"
import Avatar from "./Avatar"
import Image from "next/image"

import { GoHeart, GoComment } from "react-icons/go";

const PostItem: React.FC = () => {
  return (
    <Card noPadding={false}>
      <div className="flex gap-3">
        <div>
          <Link href="/belom">
            <span className="cursor-pointer">
              <Avatar url='https://i.pravatar.cc/300' />
            </span>
          </Link>
        </div>

        <div className="grow">
          <p>
            <Link href="/belom">
              <span className="mr-1 font-semibold cursor-pointer hover:underline">
                John Doe
              </span>
            </Link>
            Shared a post
          </p>

          <p className="text-gray-500 text-sm">
            5 minutes ago
          </p>
        </div>

        <div>
          <button className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </button>
        </div>
      </div>

      <div>
        <p className="my-3 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minima necessitatibus, labore architecto at laboriosam quam in, culpa facilis, cumque fugit eaque vero ad accusantium modi animi. Atque dignissimos vero magni harum sit itaque? Harum optio minus iste esse molestias delectus animi est doloremque, nesciunt cupiditate qui quo earum. Fugit!
        </p>

        <Image
          src="https://placehold.co/1920x1080/png"
          alt="Image Post"
          width={1920}
          height={1080}
        />
      </div>

      <div className="mt-5 flex gap-8">
        <button className="flex gap-2 items-center">
          <span className="text-[1.5rem]">
            <GoHeart />
          </span>
          11
        </button>

        <button className="flex gap-2 items-center">
          <span className="text-[1.5rem]">
            <GoComment />
          </span>
          7
        </button>
      </div>

      <div className="flex mt-4 gap-3">
        <div>
          <Avatar url='https://i.pravatar.cc/300' />
        </div>
        <div className="border relative grow rounded-full">
          <form>
            <input
              className="block w-full p-3 px-4 overflow-hidden h-12 rounded-full focus:outline-none" placeholder="Leave a comment" />
          </form>
          <button className="absolute top-3 right-3 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </button>
        </div>
      </div>
    </Card>
  )
}

export default PostItem