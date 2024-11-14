import React from "react";
import Image from "next/image";

export default function IDCard() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow flex items-center justify-center p-24">
        <div className="bg-slate-200 p-12 rounded-lg shadow-lg max-w-4xl w-full flex items-center justify-center border-4 border-sky-300 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-[350px] max-h-[400px] ">
              <Image
                src="/images/background.jpg"
                alt="background image"
                layout="fill"
                objectFit="cover"
                className="opacity-10"
              />
            </div>
          </div>

          <div className="  w-2/3 pr-4 pt-16 relative z-10">
            <img
              src="/images/logo.png"
              alt="logo"
              className="absolute top-[-40px] left-0 w-16 h-18 z-10"
            />
            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong> Name: </strong>
              </span>
              <span className=" text-black">Mariam Aamir</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong> Roll No: </strong>
              </span>
              <span className=" text-black">00182459</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong> Distance Learning: </strong>
              </span>
              <span className=" text-black">No</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong> city: </strong>
              </span>
              <span className=" text-black">Karachi</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong> Center: </strong>
              </span>
              <span className=" text-black">Governer House Karachi</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong> Campus: </strong>
              </span>
              <span className=" text-black">Main</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong> Days Timings: </strong>
              </span>
              <span className=" text-black">Monday 2-5</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong> Batch: </strong>
              </span>
              <span className=" text-black">Q-2</span>
            </p>

            <div className="flex flex-col mt-4">
              <button className="relative w-full p-1 rounded-lg border border-grey-300 bg-blue-900 text-white items-center justify-center flex">
                <span
                  className="absolute inset-0 bg-slate-500"
                  style={{ width: "50%" }}
                ></span>
                <span className="relative z-10">Q2 & WMD</span>
              </button>
            </div>
          </div>

          <div className="w-0/3  text-center relative z-0">
            <Image
              src={"/images/image.jpg"}
              alt="Mariam Aamir"
              width={150}
              height={100}
              className="rounded-lg mb-6 w-full border border-sky-500"
            />
            <p className="border-t-2 border-t-slate-400 p-2-font-bold text-sky-500 mt-10 text-2xl">
              {" "}
              Authorized Signature
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
