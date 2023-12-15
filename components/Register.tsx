import Image from "next/image"
import Link from "next/link"

const Register: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen px-2">
      <div className="bg-white shadow-md shadow-gray-300 p-8 rounded-lg w-[400px]">
        <div className="flex justify-center mb-6">
          <Image
            src='/logo.png'
            alt="Logo Brand"
            className="w-[120px]"
            width={200}
            height={100}
          />
        </div>

        <form action="" className="flex flex-col items center">
          <input
            type="text"
            className="border shadow-lg rounded-lg px-4 py-2 w-full mb-4 focus:outline-none focus:shadow-gray-600 transition-all"
            id="full_name"
            name="full_name"
            placeholder="Full Name"
            autoComplete="off"
          />
          <input
            type="email"
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
          <input
            type="password"
            className="border shadow-lg rounded-lg px-4 py-2 w-full mb-4 focus:outline-none focus:shadow-gray-600 transition-all"
            id="repeat_password"
            name="repeat_password"
            placeholder="Repeat Password"
          />
          <p className="text-gray-600 text-[.9rem] font-light">Already have an account? <Link href="/login" className="hover:underline text-socialBlue">Login here!</Link></p>

          <button className="text-white bg-socialBlue py-2 text-xl rounded-lg mt-5">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register