import React,{useState} from 'react'
import Menucard from '../Components/Menucard'
import data from './data.js'
import './Menu.css'
function Menu() {

    const[items,setItems]=useState(data)

    //for filtering

    const filterItem=(categItem)=>{
        const updateItem=data.filter((currElem)=>{
            return currElem.category===categItem
          
        })

        setItems(updateItem)

    }

    //end filtering
    return (
        <div >
         <h1 className='text-center mt-5 font-sans bold text-4xl'>
         Order Your Food
         </h1>
         <br></br>
         <hr></hr>
         <div className='flex sm:justify-center sm:space-x-4 mt-5 sm:text-xl ml-8'>
                
         <button className='btn text-red-500'   onClick={()=>filterItem('breakfast')}>Breakfast</button> 
          <button className='btn text-red-500'  onClick={()=>filterItem('lunch')}>Lunch</button>           
           <button className='btn text-red-500'  onClick={()=>filterItem('evening')}>Evening</button>           
           <button className='btn text-red-500'  onClick={()=>filterItem('dinner')}>Dinner</button>           
           <button className='btn text-red-500' onClick={()=>setItems(data)}>All</button>           
        
         </div>
        
         <div className='grid  sm:grid-cols-4 justify-center mt-4 mb-12 '>
         {items.map((val)=>{

             return(
                 <div className='space-y-5'>
                 <br/>
                 <Menucard
                 name= {val.name}
                 image={val.image}
                 description={val.description}
                 price={val.price}

                 
                 
                 >
                 </Menucard>
                 </div>


             )
         })}
         
         </div>
         
        </div>
    )
}

export default Menu
