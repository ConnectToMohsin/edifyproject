import Image from "next/image";
import logo from "../app/assets/logo.svg";
import media from "../app/assets/media.png";
import progressSvg from "../app/assets/Progress.svg";
import crossSvg from "../app/assets/cross.svg";
import eyeOf from "../app/assets/eye-off.svg";
import checkbox from "../app/assets/Checklist.svg";
import devider from "../app/assets/Devider.svg";
import google from "../app/assets/google.svg";
import apple from "../app/assets/apple.svg";

export default function Home() {
  return (
    <main className="flex w-full bg-black text-white">
      <div className="w-[50%]  flex flex-col bg-slate-900">
        <nav className="w-full h-13 justify-start">
        <Image className="relative top-0 left-20" src={logo} alt="logo" width={47} height={66} />
        </nav>
        <div className="my-20 w-[100%] flex justify-center"> 
        <Image className="" src={media} alt="logo" width={350} height={350} />
        </div>
        <h1 className="text-center text-4xl font-bold">Watch Premium Content</h1>
        <div className="flex flex-col justify-center items-center text-center w-full text-sm my-5">
    <span>Bgtv is one of a local svod Product from Malaysia Subscription </span>
    <span>video on demand. So we having our in-house video production.</span>
</div>
        <div className="flex flex-col justify-center items-center text-center w-full text-sm my-5">
        <Image className="" src={progressSvg} alt="logo" width={350} height={350} />
        </div>
      </div>

      {/* RIGHTSIDE */}
      
      <div className="w-[50%] flex bg-black text-white overflow-y-auto">
      <nav className="my-3">
        <Image className="relative top-0 left-[550px]" src={crossSvg} alt="logo" width={30} height={36}></Image>
        </nav>
        <div className="leading-[1.5] flex flex-col my-16 w-full">
       <div className="flex flex-col">
       <p className="mx-20 font-semibold text-gray-600">S I G N &nbsp;&nbsp;&nbsp;    U P</p>
        <h1 className="text-center font-bold  text-4xl flex my-4 mx-20">
          Create your account
          </h1>
        <p className="text-center mr-10 font-extralight ">Register your account to enjoy premium content from BGTV</p>
       </div>


       <div className="container mx-auto p-8 rounded shadow-md">
        <div className="flex space-x-5 ml-14">
          <div className="mb-4">
            <label htmlFor="firstName" className="block font-bold mb-2">First Name<span className="text-red-800">*</span></label>
            <input type="text" id="firstName" placeholder="First name" className="w-52 px-4 py-2 mb-2 rounded-lg bg-gray-800" />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block font-bold mb-2">Last Name<span className="text-red-800">*</span></label>
            <input type="text" id="lastName" placeholder="Last name" className="w-52 px-4 py-2 mb-2 rounded-lg bg-gray-800" />
          </div>
        </div>
        <div className="mb-4 ml-14">
            <label htmlFor="emailaddress" className="block font-bold mb-2">Email Address<span className="text-red-800">*</span></label>
            <input type="email" id="emailaddress" placeholder="Email Address" className="w-[435px] px-4 py-2 mb-2 rounded-lg bg-gray-800" />
          </div>
        <div className="mb-4 ml-14">
            <label htmlFor="username" className="block font-bold mb-2">Username<span className="text-red-800">*</span></label>
            <input type="text" id="username" placeholder="username" className="w-[435px] px-4 py-2 mb-2 rounded-lg bg-gray-800" />
          </div>
        <div className="mb-4 ml-14">
            <label htmlFor="phoneno" className="block font-bold mb-2">Phone No<span className="text-red-800">*</span></label>
            <input type="number" id="phoneno" placeholder="Phone" className="w-[435px] px-4 py-2 mb-2 rounded-lg bg-gray-800" />
          </div>
          <div className="mb-4 ml-14 relative">
    <label htmlFor="password" className="block font-bold mb-2">Password<span className="text-red-800">*</span></label>
    <input type="password" id="password" placeholder="Password" className="w-[435px] px-4 py-2 mb-2 rounded-lg bg-gray-800" />
    <div className="absolute -top-2 right-24 bottom-56 flex">
        <Image src={eyeOf} alt="Eye Icon" width={25} height={25} />
    </div>
    <div className="flex space-x-2 items-center mt-2">
    <Image src={checkbox} alt="Eye Icon" width={25} height={25} />
    <span className="text-gray-600">I agree to</span>
    <span><a className="underline text-white" href="#">Terms and conditions</a></span>
    <span className="text-gray-600">and</span>
    <span><a className="underline text-white" href="#">Privacy policy</a></span>
</div>
    <button className="w-[435px] px-4 py-2 mb-2 rounded-lg bg-blue-800 mt-7">Register</button>
    <div className="flex items-center gap-3 ml-3">
    <Image src={devider} className="text-white w-[150px]" alt="Eye Icon" width={25} height={25} />
    <a className=" text-gray-600" href="#">or sign up with</a>
    <Image src={devider} className="text-white w-[130px]" alt="Eye Icon" width={25} height={25} />
    </div>

    <div className="flex space-x-5 mt-5">
    <div className="mb-4">
        <button className="w-52 px-4 py-3 mb-2 rounded-lg bg-transparent border flex items-center justify-center">
            <Image src={google} className="mr-2" alt="Google Icon" width={25} height={25} />
            <span className="text-white">Google</span>
        </button>
    </div>
    <div className="mb-4">
        <button className="w-52 px-4 py-3 mb-2 rounded-lg bg-transparent border flex items-center justify-center">
            <Image src={apple} className="mr-2" alt="Apple Icon" width={25} height={25} />
            <span className="text-white">Apple</span>
        </button>
    </div>
</div>
<div className="flex space-x-2 items-center justify-center mt-2">
    <span className="text-gray-600">Already have an account?</span>
    <span><a className=" text-blue-700" href="#">Sign In.</a></span>
</div>


</div>
      </div>
        </div>
      </div>
    </main>
  );
  }

