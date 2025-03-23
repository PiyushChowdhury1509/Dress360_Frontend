import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { SignupSchema, SignupSchemaType } from "@/types/signupSchema"; 
import { Loader2, LockKeyhole, UserPen, MailPlus } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { Bounce, ToastContainer,toast } from "react-toastify";

type Props = {};

function Signup({}: Props) {
    const navigate = useNavigate();

  let [data, setData] = useState<SignupSchemaType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  let [loading, setLoading] = useState<boolean>(false);
  let [error, setError] = useState<Partial<SignupSchemaType>>({});

  const handleEventChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = SignupSchema.safeParse(data);
    if (!result.success) {
      const errors = result.error.formErrors.fieldErrors;
      setError(errors as Partial<SignupSchemaType>);
      return;
    }
    setLoading(true);

    try{
        const url = import.meta.env.VITE_BACKEND_URL!+"/api/v1/user/signup";
        const response = axios.post(url, {
            name: data.firstName + " " + data.lastName,
            email: data.email,
            password: data.password
        },);

        setLoading(false);
        toast.promise(response,{
          pending: "signing up",
          success: "successfully signed up",
          error: "invalid credentials"
        }, { transition: Bounce })
        const result = await response;
        if(result.data.success){
            setTimeout(()=>navigate('/verifyEmail'),1700);
        }
    } catch(err){
        console.log("couldn't sign up, error: ",err);
    }
  };

  return (
    <div className="relative h-screen w-full bg-gray-100">
      <div className="inset-x-44 inset-y-14 absolute shadow-xl grid grid-cols-11">
        <div className="col-span-4 bg-gradient-to-b from-orange-600 via-orange-400/80 to-transparent text-transparent">
          hi
        </div>
        <div className="col-span-7 bg-white relative">
          <div className="absolute inset-12 min-w-lg mr-36">
            <div className="mb-12">
              <h1 className="text-3xl font-bold mb-3">New User?</h1>
              <h1 className="font-semibold text-gray-700">
                This form should only be filled by team leaders only
              </h1>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 mb-11">
              <div className="flex space-x-10 justify-between">
                <div>
                  <Label className="font-semibold mb-2 text-gray-800">
                    First Name
                  </Label>
                  <div className="relative">
                    <UserPen className="h-5 w-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600" />
                    <Input
                      type="text"
                      placeholder="First Name"
                      value={data.firstName}
                      name="firstName"
                      onChange={handleEventChange}
                      className="focus-visible:ring-2 font-semibold pl-8 w-60 text-lg border-gray-600 text-gray-500"
                    />
                  </div>
                  {error.firstName && <span className="text-sm text-red-700">{error.firstName}</span>}
                </div>
                <div>
                  <Label className="font-semibold mb-2 text-gray-800">
                    Last Name
                  </Label>
                  <div className="relative">
                    <UserPen className="h-5 w-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600" />
                    <Input
                      type="text"
                      placeholder="Last Name"
                      value={data.lastName}
                      name="lastName"
                      onChange={handleEventChange}
                      className="focus-visible:ring-2 font-semibold pl-8 w-60 text-lg border-gray-400 text-gray-500"
                    />
                  </div>
                  {error.lastName && <span className="text-sm text-red-700">{error.lastName}</span>}
                </div>
              </div>
              <div>
                <Label className="font-semibold mb-2">Email ID</Label>
                <div className="relative">
                  <MailPlus className="h-5 w-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600" />
                  <Input
                    type="email"
                    className="font-semibold w-full text-lg focus-visible:ring-2 border-gray-400 text-gray-500 pl-8"
                    value={data.email}
                    name="email"
                    onChange={handleEventChange}
                    placeholder="Enter your email id"
                  />
                </div>
                {error.email && <span className="text-sm text-red-700">{error.email}</span>}
              </div>
              <div className="flex space-x-10 justify-between">
                <div>
                  <Label className="font-semibold mb-2 text-gray-800">
                    Password
                  </Label>
                  <div className="relative">
                    <LockKeyhole className="h-5 w-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600" />
                    <Input
                      type="password"
                      placeholder="Password must be at least 6 characters long"
                      value={data.password}
                      name="password"
                      onChange={handleEventChange}
                      className="focus-visible:ring-2 font-semibold pl-8 w-60 text-lg border-gray-400 text-gray-500"
                    />
                  </div>
                  {error.password && <span className="text-sm text-red-700">{error.password}</span>}
                </div>
                <div>
                  <Label className="font-semibold mb-2 text-gray-800">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <LockKeyhole className="h-5 w-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600" />
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      className="focus-visible:ring-2 font-semibold pl-8 w-60 text-lg border-gray-400 text-gray-500"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                {loading ? (
                  <Button className="font-semibold bg-orange-500 text-gray-100 text-lg mt-14 w-52" disabled>
                    <Loader2 className="h-14 w-14 animate-spin" />
                  </Button>
                ) : (
                  <Button className="font-semibold bg-orange-700 text-gray-100 text-lg mt-14 w-52 cursor-pointer" type="submit">
                    Sign up
                  </Button>
                )}
              </div>
            </form>
            <Separator className="my-6 text-gray-800" />
            <h1 className="text-center">Already have an account? <Link to="/login" className="text-blue-600 hover:text-blue-700 hover:underline cursor-pointer">Login</Link></h1>
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
        theme="light"
      />
    </div>
  );
}

export default Signup;