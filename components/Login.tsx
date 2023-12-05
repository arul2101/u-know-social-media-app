import Image from "next/image"
import { FaGoogle } from "react-icons/fa";

const Login: React.FC = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="bg-white shadow-md shadow-gray-300 md:w-[600px] w-[80%] py-12 px-8 rounded-md">
        <div className="flex flex-col items-center mb-6">
          <Image
            src='/logo.png'
            alt="Logo Brand"
            className="md:w-[300px]"
            width={200}
            height={100}
          />


          <h2 className="mt-4 text-[1.4rem]">Login Your Account</h2>
        </div>

        <form action="" className="flex flex-col items center">
          <input
            type="text"
            className="border shadow-lg rounded-lg px-4 py-4 w-full mb-4 focus:outline-none"
            id="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
          />
          <input
            type="password"
            className="border shadow-lg rounded-lg px-4 py-4 w-full mb-4 focus:outline-none"
            id="password"
            name="password"
            placeholder="Password"
          />

          <button className="text-white bg-socialBlue py-4 text-xl rounded-lg">Login</button>
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