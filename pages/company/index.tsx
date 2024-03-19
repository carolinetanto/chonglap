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
                <h1 className="text-5xl">Company</h1>
            </div>
        </div>
    </div>
  )
}

export default index