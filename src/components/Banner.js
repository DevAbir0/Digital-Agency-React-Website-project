import React from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'

const Banner = () => {
  let[bannerData,setBannerData]=useState({});
 

  useEffect (()=>{
    async  function banner(){
         let bannerPart = await axios.get("https://bwfc-api.vercel.app/banner")
         setBannerData(bannerPart.data)
      }
      banner()
    },[])

    return (
      <>
      <div className='absolute'>
  
        <img src={bannerData.bannerbgshape}/>
      </div>
      <div className='max-w-container mx-auto relative '>
        <div className='flex mt-[145px]'>
          <div className='w-6/12'>
            <h1 className='font-man font-extrabold text-[60px]'>{bannerData.bannerheading}</h1>
            <p lassName="font-man font-normal text-lg text-[#64607D] w-[446px] mt-6">{bannerData.bannerparagraph}
            </p>
            <div>
              {bannerData.bannerButton &&(
                <a className='py-4 px-9 bg-primary inline-block mt-7 rounded-full text-white font-man font-bold text-base hover:bg-transparent  hover:text-primary transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' href='#'> {bannerData.bannerButton.text}</a>
              )}
            </div>
          </div>
          <div className='w-6/12'>
          <div>
                <img src={bannerData.bannerrightimg}/>
          </div>

          </div>
        </div>
      </div>
      </>
      
            
            )
    }

export default Banner