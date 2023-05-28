import { useRouter } from "next/router";


const SidebarLogo = () => {
  const router = useRouter();
  
  return (
    <div className="flex items-center">
    <div 
      onClick={() => router.push('/')}
      className="
        rounded-full 
        h-14
        w-14
        p-4 
        flex 
        items-center 
        justify-center 
        hover:bg-green-500 
        hover:bg-opacity-20 
        cursor-pointer
    ">
      <img src="../images/image2.png" alt="" />
    </div>
    <h1 onClick={() => router.push('/')} 
        className="
          rounded-full  
          hidden
          font-bold 
          lg:block 
          p-2.5
          cursor-pointer
          hover:bg-green-500 
          hover:bg-opacity-20 
          text-xl"
          >Social Verse</h1>
    </div>
    
  );
};

export default SidebarLogo;
