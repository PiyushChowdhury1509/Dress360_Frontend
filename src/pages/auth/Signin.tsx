import { Mail, LockKeyholeIcon, Loader2 } from "lucide-react";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Separator } from "../../components/ui/separator";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { signinSchemaType, signinSchema } from "@/types/signinSchema";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

function LoginPage() {

  const navigate = useNavigate();

  let[ data, setData ] = useState<signinSchemaType>({
    email: "",
    password: ""
  });

  let[ error, setError ] = useState<Partial<signinSchemaType>>({});

  let[ loading, setLoading ] = useState<boolean>(false);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({...data, [name]: value});
  }

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const parseResult = signinSchema.safeParse(data);
    if(!parseResult.success){
      const errors = parseResult.error?.formErrors.fieldErrors;
      setError(errors as Partial<signinSchemaType>);
      return;
    }

    setLoading(true);
    try{
      const url = import.meta.env.VITE_BACKEND_URL;
      const response = axios.post(url+"/user/signin", {
        email: parseResult.data.email,
        password: parseResult.data.password
      });

      toast.promise(response, {
        pending: "signing in",
        success: "sign in successfull",
        error: "wrong credentials"
      })

      setLoading(false);
      const result = await response;

      if(!result.data.success){
        console.log(result.data);
      }
      else{
        setTimeout(()=>navigate('/verifyEmail'),1000);
      }
    } catch(err){
      console.log("couldn't signin, error: ",err);
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={submitHandler} className="px-8 border-4 border-gray-900 rounded-lg shadow-xl min-w-lg min-h-lg">
        <div className="m-4 my-7">
          <div className="space-y-14">
            <div className="mb-7">
              <h1 className="font-bold text-orange-600 mb-3 text-4xl text-center">
                Sign In
              </h1>
            </div>
            <div className="mb-5">
              <Label className="mb-2">Email</Label>
              <div className="relative">
                <Input
                  type="email"
                  placeholder="your email"
                  name="email"
                  value={data.email}
                  onChange={changeHandler}
                  className="pl-10 focus-visible:ring-2"
                />
                <Mail className="absolute inset-y-2 left-2 text-gray-500" />
              </div>
              { error.email && <span className="text-sm text-red-700">{error.email}</span>}
            </div>
            <div className="mb-5">
              <Label className="mb-2">Password</Label>
              <div className="relative">
                <Input
                  type="password"
                  placeholder="your password"
                  name="password"
                  value={data.password}
                  onChange={changeHandler}
                  className="pl-10 focus-visible:ring-2"
                />
                <LockKeyholeIcon className="absolute inset-y-2 left-2 text-gray-500" />
              </div>
              { error.password && <span className="text-sm text-red-700">{error.password}</span>}
            </div>
          </div>
          <Separator />
          <div className="mt-5">
            { loading ? (<Button disabled className="bg-orange-400 text-white mb-2 w-full border-2 cursor-not-allowed">
              <Loader2 className="h-14 w-14 animate-spin mr-2"/>
              signing in...
            </Button>) : (<Button type="submit" className="bg-orange-600 text-white mb-2 w-full hover:text-orange-700 hover:bg-gray-100 hover:border-orange-700 border-2 cursor-pointer">
              Sign In
            </Button>)}
            <p>
              Don't have an account?{" "}
              <Link to={"/signup"} className="text-orange-600 cursor-pointer hover:underline">Create an account</Link>
            </p>
          </div>
        </div>
      </form>
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

export default LoginPage;
