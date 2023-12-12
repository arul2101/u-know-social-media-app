import Image from "next/image"
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const Login: React.FC = () => {
  return (
    <div className="max-w-[1200px] flex justify-center h-[100%] px-2 mt-20">
      <div className="bg-white shadow-md shadow-gray-300 py-4 px-8 rounded-m w-[400px]">
        <div className="flex flex-col items-center mb-6">
          <Image
            src='/logo.png'
            alt="Logo Brand"
            className="w-[120px]"
            width={300}
            height={100}
          />
        </div>

        <form action="" className="flex flex-col items center">
          <input
            type="text"
            className="border shadow-lg rounded-lg px-4 py-2 w-full mb-4 focus:outline-none focus:shadow-gray-600 transition-all"
            id="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
          />
          <input
            type="password"
            className="border shadow-lg rounded-lg px-4 py-2 w-full mb-4 focus:outline-none focus:shadow-gray-600 transition-all"
            id="password"
            name="password"
            placeholder="Password"
          />

          <p className="text-gray-600 text-[.9rem] font-light">Dont have an account? <Link href="/register" className="hover:underline text-socialBlue">Register here!</Link></p>

          <button className="text-white bg-socialBlue py-2 text-xl rounded-lg mt-5">Login</button>
        </form>


        <div className="rounded-md mt-4">
          <button className="flex w-full gap-4 items-center justify-center p-2 border-b border-b-gray-100 shadow-md hover:bg-socialBlue hover:text-white hover:border-b-socialBlue hover:rounded-md hover:shadow-md hover:shadow-gray-300 transition-all hover:scale-110">
            <span className="text-[1.8rem]">
              <FaGoogle />
            </span>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login