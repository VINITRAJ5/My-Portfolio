import React from "react";
import pic from '../Data/pic.png';

const UILayer = () => {
  return (
    <div className="box-content border-green-400 h-[700px] w-[400px] p-2 mx-[30px] my-[30px] border-[3px] rounded-lg bg-slate-200 ">
      <div class="flex flex-wrap justify-center">
        <div class="w-6/12 sm:w-4/12 px-4">
        <img src={pic} alt="me"
            class="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
          />
        <h3 class="text-base-content text-xl font-semibold text-center mt-3 dark:text-black">Vineet Raj</h3>
        <p class="text-xs font-medium bg-red-400 text-white rounded-3xl px-7 w-[170px] mt-3 mx-[-35px] py-1">Frontend Developer</p>
        <p class="text-xs font-medium bg-blue-500 text-white rounded-3xl px-7 w-[400px] mt-10 mx-[-150px] py-1">Name:-  <span class="px-20">Vineet Raj</span></p>
        <p class="text-xs font-medium bg-blue-500 text-white rounded-3xl px-7 w-[400px] mt-3 mx-[-150px] py-1">Email:-  <span class="px-20">vinitrajiit2016@gmail.com</span></p>
        <p class="text-xs font-medium bg-blue-500 text-white rounded-3xl px-7 w-[400px] mt-3 mx-[-150px] py-1">City:- <span class="px-20">Gurgaon,Haryana</span></p>
        <p class="text-xs font-medium bg-blue-500 text-white rounded-3xl px-7 w-[400px] mt-3 mx-[-150px] py-1">Language Known:-   <span class="px-10">Hindi,English</span></p>
        <p class="mt-5">Top Skills :</p>
        
        <p class="text-xs font-medium bg-lime-600 text-white rounded px-7 w-[400px] mt-10 mx-[-150px] py-2">JavaScript:-  <span class="px-[120px]">70%</span></p>
        <p class="text-xs font-medium bg-lime-600 text-white rounded px-7 w-[400px] mt-3 mx-[-150px] py-2">React:-  <span class="px-20">60%</span></p>
        <p class="text-xs font-medium bg-lime-600 text-white rounded px-7 w-[400px] mt-3 mx-[-150px] py-2">HTML,CSS:- <span class="px-20">80%</span></p>
        <p class="text-xs font-medium bg-lime-600 text-white rounded px-7 w-[400px] mt-3 mx-[-150px] py-2">Redux:-   <span class="px-10">65%</span></p>        
        </div>
      </div>
    </div>
  );
};

export default UILayer;
