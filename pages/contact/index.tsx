import React from 'react'

const index = () => {
  return (
    <div className="container mx-auto py-8 px-8">
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
                <h1 className="text-5xl">Contact</h1>
            </div>
        </div>
        <div className="contact-content mt-5">
          <h1 className="text text-5xl">Hong Kong</h1>
          <br></br>
          <p className='address'>Unit 501-502, 5/F, New East Ocean Centre 9 Science Museum Road, Tsim Sha Tsui East, Tsim Sha Tsui</p>
          <p>Tel: +852 12345678</p>
          <p>Fax: +852 12345679</p>
          <br></br>
          <p>chonglap.hk@gmail.com</p>
        </div>
    </div>
  )
}

export default index