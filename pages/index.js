
import { useSession } from "next-auth/react";


export default function Home() {
  const { data: session } = useSession()
  if (!session){
    return "not logged in";
  }
  return (
    <div className='bg-blue-800 w-screen h-screen flex items-center'>
      <div className='text-center w-full'>
        <button className='bg-white p-2 rounded-lg'>click me</button>
      </div>
    </div>
  )
}
