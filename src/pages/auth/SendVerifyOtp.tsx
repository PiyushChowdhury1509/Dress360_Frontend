import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { Loader2 } from "lucide-react";

function SendVerifyOtp() {
  let [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const url =
        import.meta.env.VITE_BACKEND_URL + "/api/v1/user/sendVerifyOtp";
      const response = axios.post(url, {});

      toast.promise(
        response,
        {
          pending: "sending otp...",
          success: "otp sent successfully",
          error: "some error occurred",
        },
        { transition: Bounce }
      );

      const result = await response;
      setLoading(false);
      if (result.data.success) {
        setTimeout(() => navigate("/verifyEmail"), 1500);
      }
    } catch (err) {
        setLoading(false);
        console.log('some error occurred while sending otp: ',err);
    }
  };

  return (
    <div className="w-full h-screen bg-purple-950 flex items-center justify-center">
      <div className="min-h-lg min-w-xl bg-gray-200">
        <div className="p-6">
          <div className="text-center mb-7">
            <h1 className="text-3xl font-bold">Send Verification OTP</h1>
          </div>
          <div>
            { loading === false ? (<Button
              onClick={handleSubmit}
              className="w-full bg-purple-800 text-gray-200 hover:bg-gray-200 hover:border-2 hover:border-purple-700 hover:text-purple-700"
            >
              Send OTP
            </Button>) : (<Button disabled className="bg-purple-500 text-white w-full">Sending OTP... <Loader2 className="mr-2 h-14 w-14 animate-spin"/></Button>)}
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default SendVerifyOtp;
