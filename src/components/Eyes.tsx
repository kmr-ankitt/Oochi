import { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  const [transformX, setTransformX] = useState(0)
  const [transformY, setTransformY] = useState(0)
  useEffect(()=>{
      window.addEventListener('mousemove', (e)=>{
          const mouseX = e.clientX
          const mouseY = e.clientY
          const deltaX = mouseX - window.innerWidth/2
          const deltaY = mouseY - window.innerHeight/2
          const angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
          setRotate(angle - 180)
          setTransformX(deltaX/30)
          setTransformY(deltaY/30)  
      })
  })

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className="w-full h-full bg-cover bg-center relative bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="flex items-center justify-center  w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div style={{transform: `translateX(${transformX}%) translateY(${transformY}%)`}} className="relative w-3/5 h-3/5 rounded-full bg-zinc-900">


              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-10 ">
                <div className=" w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div style={{transform: `translateX(${transformX}%) translateY(${transformY}%)`}} className="relative w-3/5 h-3/5 rounded-full bg-zinc-900">


              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-10 ">
                <div className=" w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
