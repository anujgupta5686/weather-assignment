import { CreateTable } from "@/components/commonComponent/createTable"
const Homepage = () => {
  return (
    <div className='w-full'>
      <div className='sticky'>
        <p className='text-center font-serif lg:text-[1.7rem] text-lg font-extralight text-white py-5 transition-all'>Detect Weather Information</p>
      </div>
      <div className='md:w-10/12 w-full transition-all mx-auto mt-5 rounded-sm p-2 shadow-lg' style={{ background: 'rgba(0,0,0,0.05)' }}>

        <CreateTable />
      </div>
    </div>
  )
}

export default Homepage
