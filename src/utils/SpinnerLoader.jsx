import React, {useState, useEffect} from 'react'

function SpinnerLoader() {
    const [currentProgress, setCurrentProgress] = useState(0);

    useEffect(()=>{
        let loader = setInterval(()=>{
            setCurrentProgress((prevProgress)=>{
                let newProgress = prevProgress + Math.random() * 40;
                if(newProgress>100) newProgress = 100;
                if(newProgress === 100) clearInterval(loader)
                    return newProgress;
            })            
        }, 4000)
        return ()=>clearInterval(loader);
    },[])

  return (
    <div className='h-1 left-0 bg-red-500 transition-all duration-150 absolute z-40 top-0' style={{width: `${currentProgress}%`}}>
      
    </div>
  )
}

export default SpinnerLoader
