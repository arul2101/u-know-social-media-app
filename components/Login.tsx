import Image from "next/image"
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const Login: React.FC = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="bg-white shadow-md shadow-gray-300 md:w-[600px] w-[80%] py-12 px-8 rounded-md">
        <div className="flex flex-col items-center mb-6 w-full">
          <Image
            src='/logo.png'
            alt="Logo Brand"
            className="w-[200px]"
            width={300}
            height={100}
          />

          <h2 className="mt-4 text-[1.2rem]">Login Your Account</h2>
        </div>

        <form action="" className="flex flex-col items center">
          <input
            type="text"
            className="border shadow-lg rounded-lg px-4 py-4 w-full mb-4 focus:outline-none focus:shadow-gray-600 transition-all"
            id="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
          />
          <input
            type="password"
            className="border shadow-lg rounded-lg px-4 py-4 w-full mb-4 focus:outline-none focus:shadow-gray-600 transition-all"
            id="password"
            name="password"
            placeholder="Password"
          />

          <p className="text-gray-600 text-[.9rem] font-light">Dont have an account? <Link href="/register" className="hover:underline text-socialBlue">Register here!</Link></p>

          <button className="text-white bg-socialBlue py-4 text-xl rounded-lg mt-5">Login</button>
        </form>


        <div className="rounded-md mt-8">
          <button className="flex w-full gap-4 items-center justify-center p-4 border-b border-b-gray-100 shadow-md hover:bg-socialBlue hover:text-white hover:border-b-socialBlue hover:rounded-md hover:shadow-md hover:shadow-gray-300 transition-all hover:scale-110">
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