import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { GiArrowCursor } from "react-icons/gi";
import { FaPencil } from "react-icons/fa6";
import { LuEraser } from "react-icons/lu";
import { HiColorSwatch } from "react-icons/hi";
import { PiNotebookBold } from "react-icons/pi";
import { FaEnvelopeOpen } from "react-icons/fa";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { RxText } from "react-icons/rx";
import { FaRegImage } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa6";
import { GiSmokeBomb } from "react-icons/gi";
import { FaUndoAlt } from "react-icons/fa";
import { WiSmoke } from "react-icons/wi";
import { IoIosSettings } from "react-icons/io";
import { PiQuestionMarkBold } from "react-icons/pi";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { RiLoopRightFill } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";
import { FiTriangle } from "react-icons/fi";
import { FaStickyNote } from "react-icons/fa";
import { PiNotePencilDuotone } from "react-icons/pi";
import { IoMdPaper } from "react-icons/io";
import { IoIosThumbsUp } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";
import { HiFire } from "react-icons/hi2";
import { BsHeartFill } from "react-icons/bs";
import { BsBricks } from "react-icons/bs";
import { PiTrayLight } from "react-icons/pi";
import { IoFileTray } from "react-icons/io5";
import { FaSquare } from "react-icons/fa";




export default function Home() {
  return (
  <div>

    <div className="flex justify-center">
     <div className="bg-[#ccdffd] py-2 px-2 w-[1800px] h-20 rounded-t-3xl mt-6 flex justify-between items-center">
     
     <div className="flex">
       <img className="h-12 w-12 ml-8" src="brick.png" alt="" />
       <div className="flex px-3 items-center gap-2 bg-[#3684fd] rounded-ee-3xl">
            <img className="w-8 h-8" src="puzzle.png" alt="" />
             <h1 className="text-white text-2xl font-bold pr-3">Brain Visual System</h1>
      </div>
     </div>

     {/* nav links */}
      <div className=" flex gap-10 text-blsck text-2xl items-center px-2 py-1 ">
           <a className=" px-3 border-gray-400 border-r-1" href="">My Projects</a>
          <a className=" px-3 border-gray-400 border-r-1" href="">New Project</a>
           <a className=" px-3 border-gray-400 border-r-1" href="">Templates</a>
          <a className=" px-3 border-gray-400 border-r-1" href="">Open</a>
           <a className=" px-3 border-gray-400 border-r-1" href="">Save</a>
           <a className=" px-3 border-gray-400 border-r-1" href="">Export</a>
      </div>

         {/* button & settings */}
        <div className="flex gap-4 px-4">
         <h1 className="flex items-center text-black text-2xl gap-1 px-4 border-r-1"> <span className="text-[#657ebb] text-3xl border-r-1 px-4"><IoArrowBack /></span> <span className="text-orange-400 text-4xl"> <HiOutlineLightBulb /></span> Settings</h1>
         <a className="bg-[#37983e] px-5 py-2 rounded-lg text-white font-bold text-xl flex items-center gap-2" href=""> <IoShareSocialOutline />Share <span className="flex items-center"><RiArrowDropDownLine /></span></a>
        </div>
   
     </div>
    </div>

<div className="flex justify-start px-18 mt-2 gap-2">
  {/* Left navbar  */}
    <div className="">
       <div className=" bg-[#d1e0f9] pt-3 w-16 items-center rounded-2xl">
        <a className="text-[#a5bde6] text-3xl flex items-center border-b-2 pb-3" href="/"> <span className="flex justify-center pl-4 text-[#163b97]"><GiArrowCursor /></span></a> <br></br>
        <a className="text-[#a5bde6] text-3xl flex items-center border-b-2 pb-3" href=""><span className="flex justify-center pl-4 text-[#163b97]"><FaPencil /></span></a> <br></br>
        <a className="text-[#a5bde6] text-3xl flex items-center border-b-2 pb-3" href=""><span className="flex justify-center pl-4 text-[#163b97]"><LuEraser /></span></a> <br></br>
        <a className="text-[#a5bde6] text-3xl flex items-center border-b-2 pb-3" href=""><span className="flex justify-center pl-4 text-[#163b97]"><HiColorSwatch /></span></a> <br></br>
        <a className="text-[#a5bde6] text-3xl flex items-center border-b-2 pb-3" href=""><span className="flex justify-center pl-4 text-[#163b97]"><PiNotebookBold /></span></a> <br></br>
        <a className="text-[#a5bde6] text-3xl flex items-center border-b-2 pb-3" href=""><span className="flex justify-center pl-4 text-[#163b97]"><FaEnvelopeOpen /></span></a> <br></br>
        <a className="text-[#a5bde6] text-3xl flex items-center border-b-2 pb-3" href=""><span className="flex justify-center pl-4 text-[#163b97]"><CgArrowsExpandUpRight /></span></a> <br></br>
        <a className="text-[#a5bde6] text-3xl flex items-center border-b-2 pb-3" href=""><span className="flex justify-center pl-4 text-[#163b97]"><RxText /></span></a> <br></br>
        <a className="text-[#a5bde6] text-3xl flex items-center border-b-2 pb-3" href=""><span className="flex justify-center pl-4 text-[#163b97]"><FaRegImage /></span></a> <br></br>
        <a className="text-[#a5bde6] text-3xl flex items-center border-b-2 pb-3" href=""><span className="flex justify-center pl-4 text-[#163b97]"><RiDeleteBin6Fill /></span></a> <br></br>
        <a className="text-black text-xl flex items-center justify-center" href="">100%</a> <br></br>
       </div>
       <div className="mt-5 bg-[#d1e0f9] rounded-2xl">
          <a className="text-[#a5bde6] text-3xl flex items-center border-b-2 pb-3 pt-2" href=""><span className="flex justify-center pl-4 text-[#163b97]"><RiDeleteBin6Fill /></span></a> <br></br>
          <a className="text-black text-xl flex items-center justify-center -mt-5 -mb-2" href="">100%</a> <br></br>
       </div>
    </div>

    {/* Right Content */}
<div className="bg-[#d1e0f9] flex justify-between px-2 gap-2 w-[1800px] h-16 py-3 rounded-t-2xl">
  <div className="flex justify-center">
        <div className="text-3xl bg-[#d1e0f9] border-1 border-[#90b2ec] rounded-xl items-center flex py-1 px-2">
           <a className="text-[#2a70e9]" href=""><GiSmokeBomb /></a>
        </div>
        <div className="text-3xl bg-[#d1e0f9] border-1 border-[#90b2ec] rounded-xl border-l-3 items-center flex py-1 px-2">
           <a className="text-[#2a70e9]" href="/courses"><FaUndoAlt /></a> 
        </div>
  </div>
  <div className="flex justify-around gap-5 ">
           <a className="bg-[#3da036] items-center flex py-6 -mt-1 px-5 rounded-xl text-xl text-white font-bold gap-2" href="/">
            <span className="text-3xl text-[#fecb35]"><FaPlay /></span> Start</a>
           <a className="bg-[#f13c4e] items-center flex py-6 -mt-1 px-5 rounded-xl text-xl text-white font-bold gap-2" href="/">
            <span className="text-4xl"><IoIosSettings /></span> Action</a>
          <a className="bg-[#fe8d10] items-center flex py-6 -mt-1 px-5 rounded-xl text-xl text-white font-bold gap-2" href="/">
            <span className="text-4xl"><PiQuestionMarkBold /></span> Decision</a>
          <a className="bg-[#543bd2] items-center flex py-6 -mt-1 px-5 rounded-xl text-xl text-white font-bold gap-2" href="/">
            <span className="text-3xl"><FaFontAwesomeFlag /></span> Output</a>
          <a className="bg-[#f8548d] items-center flex py-6 -mt-1 px-5 rounded-xl text-xl text-white font-bold gap-2" href="/">
            <span className="text-3xl"><RiLoopRightFill /></span> Loop</a>
         <a className="bg-[#359236] items-center flex py-6 -mt-1 px-5 rounded-xl text-xl text-white font-bold gap-2" href="/">
            <span className="text-3xl"><FaPlay /></span> Run</a>
  </div>
  <div className="flex justify-center items-center">
        <div className="bg-[#d1e0f9] border-1 border-[#90b2ec] rounded-xl">
          <span className="text-5xl text-[#4786f3]  "> <WiSmoke /></span>
        </div>
        <div className="bg-[#d1e0f9] border-1 border-[#90b2ec] rounded-xl">
          <img className="w-10 h-10" src="boy.png" alt="" />
        </div>
        <div className="bg-[#d1e0f9] border-1 border-[#90b2ec] rounded-xl">
          <img className="w-10 h-10" src="child.png" alt="" />
        </div>
        <div className="bg-[#d1e0f9] border-1 border-[#90b2ec] rounded-xl">
          <img className="w-10 h-10" src="boy.png" alt="" />
        </div>
  </div>
</div>



</div>

<div className="flex justify-center">
  
<div className="bg-[#d1e0f9] flex justify-between px-2 w-[1700px] ml-16 -mt-16 h-16 py-3 rounded-b-2xl">
  <div className="flex justify-center bg-[#d1e0f9] border-1 border-[#90b2ec] rounded-xl">
        <div className="text-3xl  items-center flex py-1 px-2">
           <span className="text-[#2a70e9]"><FaRegCircle /></span>
        </div>
        <div className="text-3xl items-center flex py-1 px-2">
           <span className="text-[#2a70e9]"><FiTriangle /></span>
        </div>
        <div className="text-3xl items-center flex py-1 px-2">
           <span className="text-[#fed154]"><FaSquare /></span>
        </div>
        <div className="text-3xl items-center flex py-1 px-2">
           <span className="text-[#fa7ead]"><FaSquare /></span>
        </div>
        <div className="text-3xl  items-center flex py-1 px-2">
           <span className="text-[#46cdc8]"><FaStickyNote /></span>
        </div>
        <div className="text-3xl  items-center flex py-1 px-2">
           <span className="text-[#2a70e9]"><PiNotePencilDuotone /></span>
        </div>
        <div className="text-3xl  items-center flex py-1 px-2">
           <span className="text-[#2a70e9]"><IoMdPaper /></span>
        </div>
  </div>
  <div className="flex justify-around gap-2">
           <a className="bg-[#3da036] items-center flex py-6 -mt-1 px-5 rounded-xl text-xl text-white font-bold gap-2" href="/">
            <span className="text-3xl text-[#fecb35]"><FaPlay /></span> Start</a>
           <a className="bg-[#f13c4e] items-center flex py-6 -mt-1 px-5 rounded-xl text-xl text-white font-bold gap-2" href="/">
            <span className="text-4xl"><IoIosSettings /></span> Action</a>
          <a className="bg-[#fe8d10] items-center flex py-6 -mt-1 px-5 rounded-xl text-xl text-white font-bold gap-2" href="/">
            <span className="text-4xl"><PiQuestionMarkBold /></span> Decision</a>
          <a className="bg-[#543bd2] items-center flex py-6 -mt-1 px-5 rounded-xl text-xl text-white font-bold gap-2" href="/">
            <span className="text-3xl"><FaFontAwesomeFlag /></span> Output</a>
          <a className="bg-[#f8548d] items-center flex py-6 -mt-1 px-5 rounded-xl text-xl text-white font-bold gap-2" href="/">
            <span className="text-3xl"><RiLoopRightFill /></span> Loop</a>
  </div>
  <div className="flex justify-center items-center bg-[#d1e0f9] border-1 border-[#90b2ec] rounded-xl">
        <div className="">
          <span className="text-4xl text-[#e7bb35]  "><IoIosThumbsUp /></span>
        </div>
         <div className="text-3xl items-center flex py-1 px-2">
           <span className="text-[#f0a91b]"><FaHandshake /></span>
        </div>
        <div className="text-3xl items-center flex py-1 px-2">
           <span className="text-[#4faaf5]"><HiFire /></span>
        </div>
        <div className="text-3xl  items-center flex py-1 px-2">
           <span className="text-[#fd4e50]"><BsHeartFill /> </span>
        </div>

  </div>
  <div className="flex justify-center items-center bg-[#d1e0f9] border-1 border-[#90b2ec] rounded-xl">
     <div className="text-3xl  items-center flex py-1 px-2">
           <span className="text-[#2a70e9]"><PiTrayLight /> </span>
        </div>
        <div className="text-2xl  items-center flex py-1 px-2">
           <span className="text-[#2a70e9]"><BsBricks /></span>
        </div>
        <div className="text-3xl  items-center flex py-1 px-2">
           <span className="text-[#2a70e9]"><IoFileTray /></span>
        </div>
  </div>
</div>

</div>

  </div>
  );
}
