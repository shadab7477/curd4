import React from 'react'

const Tailwindprac = () => {
  return (
    <div>
      
    <h1 className='text-5xl sm:text-primary font-thin sm:font-bold text-center m-3 text-primary py-4 hover:bg-blue-950 uppercase rounded-2xl border-1 shadow-2xl bg-blue-900   font-uppercase ' >responsive flex</h1>
    
    <div className='mx-4 gap-4  items-center  h-full justify-center flex  flex-wrap text-center sm:flex-row flex-col ' >
      
      <div className='h-40  items-center  font-bold text-xl w-100  sm:w-80  bg-slate-800 rounded-lg text-center text-white   ' >
        FIRST
      </div>
      <div className='h-40 font-bold  content-center  hover:-translate-y-1 hover:scale-105 transition ease-in-out delay-150 duration-300 text-center text-white uppercase text-xl w-100 sm:w-80 bg-red-600 rounded-lg' >
        second
      </div>
      <div className='h-40 font-bold  text-center text-white uppercase text-xl w-100 sm:w-80 bg-green-900 rounded-lg' >
        third
        </div>
        <div className='h-40 font-bold  text-center text-white uppercase text-xl w-100 sm:w-80 bg-purple-900 rounded-lg' >
        forth
        </div>
        <div className='h-40 font-bold  text-center text-white uppercase text-xl w-full bg-yellow-500 rounded-lg' >
        fifth
        </div>

    </div>
    
<hr/>
<br/>
<h1 className='text-2xl text-center  bg-rose-700 text-white py-2 uppercase font-bold' >
  make buttons
</h1>

<div className='bg-red-700 text-white hover:-translate-y-1  uppercase font-bold shadow-md cursor-pointer hover:scale-106  transition ease-in-out  duration-100 w-40 p-1 text-center m-5 rounded-md  ' >
Submit  
</div>

<div className='w-40 m-5 text-center text-white p-1 rounded-full font-bold bg-sky-700 cursor-pointer hover:bg-sky-800  ' >
  LOG-IN
</div>


<h1 className='text-center text-white font-bold  text-2xl uppercase py-2  bg-slate-900 w-full ' >
Cards

</h1>
<div  className='cards-row  gap-5 m-5  justify-center flex flex-col sm:flex-row  ' >
  
  <div  className=' w-100 sm:w-80 h-90 p-6 bg-slate-900 rounded-md shadow-lg  border-2 border-slate-400 '  >
    
<img  className='rounded-full  w-70 h-70'  src="https://cdna.artstation.com/p/assets/images/images/021/935/626/large/irina-nikiforova-purple.jpg?1573507084" alt=""/>
<div className='text-center uppercase text-xl font-bold  text-white ' >
  joe russo
</div>
<div className='text-center font-xl bg-white mt-3  rounded-full font-bold py-1 uppercase ' >
  Explore..
</div>

  </div>

{/* second */}
<div  className='w-80 h-90 p-6 bg-slate-900 rounded-md shadow-lg  border-2 border-slate-400 '  >
    
    <img  className='rounded-full  w-70 h-70'  src="https://cdna.artstation.com/p/assets/images/images/021/935/626/large/irina-nikiforova-purple.jpg?1573507084" alt=""/>
    <div className='text-center uppercase text-xl font-bold  text-white ' >
      joe russo
    </div>
    <div className='text-center font-xl bg-white mt-3  rounded-full font-bold py-1 uppercase ' >
      Explore..
    </div>
    
      </div>
    {/*third  */}
    <div  className='w-80 h-90 p-6 bg-slate-900 rounded-md shadow-lg  border-2 border-slate-400 '  >
    
    <img  className='rounded-full  w-70 h-70'  src="https://cdna.artstation.com/p/assets/images/images/021/935/626/large/irina-nikiforova-purple.jpg?1573507084" alt=""/>
    <div className='text-center uppercase text-xl font-bold  text-white ' >
      joe russo
    </div>
    <div className='text-center font-xl bg-white mt-3  rounded-full font-bold py-1 uppercase ' >
      Explore..
    </div>
    
      </div>
    

</div>


    </div>
  )
}

export default Tailwindprac
