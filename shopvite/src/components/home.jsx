import React from 'react'

function home() {
  return (
    <div className='bg-white p-9'>
    <h2 className='text-7xl text-center p-10 font-bold'>This is my first vite website</h2>
    <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur totam beatae asperiores enim, labore tenetur, at modi veritatis sit incidunt! Totam, tempore. Asperiores at sequi animi minima, facilis corrupti!</p>
     <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam aperiam repellendus, laboriosam corrupti maxime quibusdam voluptatem similique temporibus rerum, autem vitae placeat itaque molestiae deserunt. Sapiente error quisquam commodi.</p>
    <div className='flex gap-9'>
      
      <div className='bg-white p-5 shadow-xl/20 rounded-xl'>
        <h1 className='text-2xl pb-4 text-blue-500'>COUNTRY</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit totam est dignissimos laudantium sunt pariatur officiis provident reiciendis atque earum asperiores voluptas fuga excepturi illo, architecto, aut soluta magni. Quod.</p>
      </div>
        <div className='bg-white p-5 shadow-xl/20 rounded-xl'>
            <h2 className='text-2xl pb-4 text-blue-500'>Sector</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ab quisquam magnam beatae error eius deserunt, commodi rerum accusantium consequatur animi natus, ducimus doloribus eaque necessitatibus a nostrum tempore quam.</p>
        </div>
         
         <div className='bg-white p-5 shadow-xl/20 rounded-xl'>
          <p className='text-2xl pb-4 text-blue-500'>   CELLS</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur non corrupti eaque accusantium accusamus quasi fugiat numquam, iusto explicabo, unde porro dolorem rerum eius reprehenderit voluptates rem! Sunt, delectus inventore?</p>
         </div>
    </div>
   
    </div>
  )
}

export default home
