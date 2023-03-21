import axios from 'axios'
import {useEffect,useState} from 'react'
import {FaAngleDown} from "react-icons/fa"

const Navbar = () => {
    let[navbarData,setNavbarData]=useState({})
   let[loading,setLoading] = useState(true)

    useEffect (()=>{
      async  function nav(){
           let navbar = await axios.get("https://bwfc-api.vercel.app/navbar")
           console.log(navbar.data.navItems)
           setNavbarData(navbar.data)
           setLoading(false)
           
        }
        nav()
      },[])

      if(loading){
        return<h1>loading....</h1>
      }

  return (
    <div className="max-w-container mx-auto mt-7">
    <div className='flex justify-between items-center'>
      <div className='w-[10%]'>
          <img src={navbarData.logo}/></div>

      <div className='w-[56%]'> 
            <ul className='flex gap-x-10 justify-center  font-man font-normal font-normal text-sm items-center'>
                {navbarData.navItems.map(nitems=>(
                <li className=' hover:text-primary transition ease-in-out delay-150'>{nitems.item}
                {nitems.dropDown &&
                
                  <>
                  <FaAngleDown/>
                  <ul>
                  {nitems.dropDownItem.map(ditem=>(
                    <li>{ditem.dropItem}</li>
                  ))}
                  </ul>
                  </>
                
                }
                </li>
    ))}
            </ul>
     </div>

      <div className='w-[34%] flex justify-end gap-x-2.5  '>

            {navbarData.buttonOne.visibility &&
            <a className='py-4 px-9 inline-block text-primary font-man text-sm font-semibold rounded-lg hover:bg-primary hover:text-white  transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' href='#'>{navbarData.buttonOne.text}</a>}
            
            {navbarData.buttonTwo.visibility &&
            <a className='bg-primary py-4 px-9 inline-block text-white font-man text-sm font-semibold rounded-lg
            border border-solid border-primary hover:bg-transparent hover:text-primary transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' href='#'>{navbarData.buttonTwo.text}</a>}

          {navbarData.buttonThree.visibility &&
            <a className='bg-primary py-4 px-9 inline-block text-white font-man text-sm font-semibold rounded-lg
            border border-solid border-primary hover:bg-transparent hover:text-primary transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' href='#'>{navbarData.buttonThree.text}</a>}
           </div>
    </div>
    
</div>
  )
}

export default Navbar