import React from 'react'
import { useAppContext } from '../../useContextHook/useContextApi'
import { useTheme } from '../../useContextHook/useTheme'
import {categories, menuItems} from '../../utils/constant'
import Menuitems from './Menuitems'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const {mobileMenu, selectedCategory, setSelectedCategory} = useAppContext()
  const {isDarkMode} = useTheme()
  const navigate = useNavigate();
  
  const hanleCategoryClick = (id, name) =>{
    setSelectedCategory(id)
    if(name === 'Home'){
      navigate('/')
    }
  }


  return (
    <div className={`md:block overflow-y-auto h-full py-4 w-[300px] mt-2 absolute md:relative z-10 
    ${mobileMenu?"block":"hidden"} 
    ${isDarkMode?"bg-gray-900 border-gray-700":"bg-white border-gray-200"}
    ${mobileMenu?"z-10": "z-auto"}`}>
      <div className='flex flex-col px-5 mb-20'>
        {
          categories.map((item)=>(
            <Menuitems key={item.id} 
            item={item}
            isSelected = {item.id === selectedCategory} 
            onclick={()=>hanleCategoryClick(item.id, item.name)}
            />
          ))
        }
        <hr className={`my-3 ${isDarkMode?"border-gray-600":"border-gray-300"}`} />
        {
          menuItems.map((item)=>(
            <Menuitems
            key={item.name}
            item = {item}
            isSelected={false} />
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar
