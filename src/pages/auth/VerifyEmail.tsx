import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";

function VerifyEmail() {
  const [value, setValue] = useState<string>("");

  return (
    <div className="h-screen w-full flex items-center justify-center bg-green-700 relative">
      <div className="bg-gray-100 min-w-xl min-h-lg shadow-lg space-y-5">
        <div className="p-6">
          <div className="flex justify-center">
            <img src="/mail_svg.svg" className="h-28 w-28" />
          </div>
          <div className="text-center mb-6">
            <h1 className="font-bold text-2xl mb-3">Enter Verification Code</h1>
            <h1 className="">
              The OTP has been sent to your email address{" "}
              <span className="font-semibold">Email ID</span>
              <br />
              Kindly verify the OTP
            </h1>
          </div>
          <div className="flex justify-center mb-6">
            <InputOTP
              maxLength={6}
              value={value}
              onChange={(value) => setValue(value)}
            >
              <InputOTPGroup className="space-x-4">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <div className="text-center mb-3.5">
            <h1 className="text-lg">Click Verify after writing the OTP</h1>
          </div>
          <div className="px-7">
            <Button className="w-full mb-5 text-lg cursor-pointer text-gray-100 bg-green-600 hover:border-2 hover:border-green-800 hover:bg-gray-100 hover:text-green-700">
              Verify
            </Button>
          </div>
          <div className="text-center mb-4">
            <h1 className="font-semibold">
              Didn't receive the OTP?{" "}
              <span className="text-green-700 cursor-pointer hover:underline">
                RESEND OTP
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-green-950 via-green-800/80 to-transparent"></div>
    </div>
  );
}

export default VerifyEmail;
