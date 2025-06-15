import { useEffect, useState } from "react"
import {useNavigate}  from "react-router-dom"

const NoContent = () => {
        const [second , setSecond] = useState(10);
        const navigate = useNavigate()

useEffect(() => {
    const timer = setInterval(() => {
      setSecond(prevSecond => {
        if (prevSecond <= 1) {
          clearInterval(timer)
          navigate("/")
          return 0
        } else {
          return prevSecond - 1
        }
      })
    }, 1000)

    return () => clearInterval(timer) 
  }, [])
    return (
        <>
            <div className="w-full h-screen flex justify-center items-center gap-10 flex-col">
                <p className=" w-[90%] md:w-[60%] mx-auto text-4xl font-serif text-center">Page you want to access not found</p>
                <p>Redirection to Home page in {second} seconds...</p>
            </div>
        </>
    )
}

export default NoContent