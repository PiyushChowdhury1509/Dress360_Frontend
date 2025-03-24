import { Button } from "@/components/ui/button"
import { useRef } from "react"

const Getstyle = () => {
    const fileRef=useRef<any>(null);
    const handleClick=()=>{
        fileRef.current?.click();
    }
    return(
        <>
        <div className="header">
            <h2>Get the style!</h2>
        </div>
        <div className="container">
            <input type="file" ref={fileRef} />
           <Button onClick={handleClick}>Upload your Image!</Button>
        </div>
        










        </>
        
    
    )
}

export default Getstyle