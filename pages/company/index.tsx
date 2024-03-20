import React from 'react'

const index = () => {
  return (
    <>
      <div className="mx-auto py-8 px-8">
        <div className="page-header relative flex flex-col justify-center w-full min-h-[300px] rounded-md"
            style={{
            backgroundImage: `url("https://images.theconversation.com/files/369567/original/file-20201116-23-18wlnv.jpg?ixlib=rb-1.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div
            className="absolute w-full h-full z-10 rounded-md"
            style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
            ></div>
            <div className="z-20 pl-6">
                <h1 className="text-5xl">About Us</h1>
            </div>
        </div>
        <div className="taiwan-content mt-5">
          <h1 className="text text-5xl">Company profile</h1>
          <br></br>
          <p className='address'>Chong Lap is a leader in pharmaceutical and medical device distribution in Hong Kong since 2000. We specialize in promoting and introducing new medical technology to the local medical community by sponsoring and participating in different medical conferences and initiating local clinical studies. </p>
        </div>
      </div>
      <div className="spliter justify-center w-full min-h-[200px]" style={{
            backgroundImage: `url("https://images.theconversation.com/files/369567/original/file-20201116-23-18wlnv.jpg?ixlib=rb-1.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}></div>
      <div className="mx-auto py-8 px-8 object-strategy grid grid-cols-2 gap-6">
        <div className="objective">
          <h1 className="text text-3xl lg:text-5xl">Objective</h1>
          <ul className='mt-5'>
            <li><p>Expand service network and strengthen existing business partnerships</p></li>
            <li><p>Recognize gaps in the market and develop innovative ideas to seize market opportunities</p></li>
            <li><p>Understand customer needs and provide efficient and professional services to meet customer needs</p></li>
          </ul>
        </div>
        <div className="strategy">
          <h1 className="text text-3xl lg:text-5xl">Strategy</h1>
          <ul className='mt-5'>
            <li><p>Respect customers’ different perspectives and promote cultural communication between local and overseas countries in the healthcare field</p></li>
            <li><p>Use network connections to increase investment opportunities</p></li>
            <li><p>Develop marketing strategies such as sponsorship and participation in academic exchanges, and create and strengthen business ties with relevant international fields</p></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default index