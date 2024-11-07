import React from 'react'

function Hired() {
    const carddata =[
        {
            icon: <i class="fa fa-user"></i>,
            action:"Create an Account",
            content:"Join our vibrant community. Create your account and unlock boundless opportunities."
        },
        {
            icon:<i class="fa-solid fa-magnifying-glass"></i>,
            action:"Upload CV/Resume",
            content:"Discover your ideal job. Our intuitive search feature makes job hunting effortless."
        },
        {
            icon: <i class="fa-solid fa-file"></i>,
            action:"Create an Account",
            content:"Showcase your expertise. Upload your CV or resume and stand out to employers."
        },
        {
            icon: <i class="fa-solid fa-suitcase"></i>,
            action:"Get a Job",
            content:"Achieve your career goals. Apply for jobs and embark on your next adventure."
        },
    ]
  return (
    <div className='container-fluid'>
       <div className=' wrapper items-center text-center items-center justify-center py-40 px-64  '>
            <div>

            <h1 ><span className='text-black '>Get Hired In 4</span> Quick Easy Steps</h1>
            <p className='text-2xl font-normal '>The quickest and the most effective way to get hired by the top firm.</p>
           </div>
             <div className='boxA flex flex-wrap mt-24  mb-18'>

                {
                    carddata.map((data)=>(

                    <div className='card1 flex flex-col items-center text-center justify-center gap-2 '>
                         

                          <a >{data.icon}</a>
                        
                          <h3 className='font-bold text-xl'>{data.action}</h3>
                          <p className='font-noraml'>{data.content}</p>
                     </div>
                    ))
                }
                 

             </div>



        </div>


    </div>
  )
}

export default Hired