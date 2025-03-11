'use client'

import { Button } from "@/components/ui/button";
import VerifyEmail from "@/pages/auth/verifyEmail";
import { MailCheck, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen w-full bg-gray-300 flex items-center justify-center">
      <div className=" bg-gray-100 min-h-lg min-w-lg shadow-lg">
        <div className="px-7 py-7">
          <h1 className="text-3xl font-bold my-10 text-center">Verify your Email</h1>
          <div className="flex justify-center text-blue-500 my-10">
            <MailCheck className="h-28 w-28"/>
          </div>
          <h1 className="font-semibold my-6 text-center text-2xl">Dear user,</h1>
          <div className="space-y-1 text-center my-4">
            <h1>We sent an OTP to your email address</h1>
            <h1>Please put the OTP below</h1>
          </div>
          <div className="flex justify-center mb-6">
            <VerifyEmail/>
          </div>
          <Button className="mb-2 bg-blue-600 text-gray-100 w-full text-lg font-semibold hover:bg-gray-100 hover:text-blue-600 hover:border-2 hover:border-blue-600">Submit</Button>
          <div className="flex justify-center mb-8">
            <Clock className="text-blue-700 h-5 w-5 mr-2"/>
            <h1>time</h1>
          </div>
          <h1 className="text-center">Didn't recieve the code? <span className="text-blue-600 hover:text-blue-500 hover:underline cursor-pointer">Send again</span></h1>
        </div>
      </div>
    </div>
  );
}
