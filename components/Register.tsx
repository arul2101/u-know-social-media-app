import Image from "next/image"
import Link from "next/link"

const Register: React.FC = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="bg-white shadow-md shadow-gray-300 md:w-[600px] w-[80%] py-12 px-8 rounded-md">
        <div className="flex flex-col items-center mb-6">
          <Image
            src='/logo.png'
            alt="Logo Brand"
            className="w-[200px]"
            width={200}
            height={100}
          />


          <h2 className="mt-4 text-[1.4rem]">Register Your Account</h2>
        </div>

        <form action="" className="flex flex-col items center">
          <input
            type="text"
            className="border shadow-lg rounded-lg px-4 py-4 w-full mb-4 focus:outline-none focus:shadow-gray-600 transition-all"
            id="full_name"
            name="full_name"
            placeholder="Full Name"
            autoComplete="off"
          />
          <input
            type="email"
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
          <input
            type="password"
            className="border shadow-lg rounded-lg px-4 py-4 w-full mb-4 focus:outline-none focus:shadow-gray-600 transition-all"
            id="repeat_password"
            name="repeat_password"
            placeholder="Repeat Password"
          />
          <p className="text-gray-600 text-[.9rem] font-light">Already have an account? <Link href="/login" className="hover:underline text-socialBlue">Login here!</Link></p>

          <button className="text-white bg-socialBlue py-4 text-xl rounded-lg mt-10">Create</button>
        </form>
      </div>
    </div>
  )
}

export default Register