import type { NextPage } from 'next'
import  Header from '../components/header'

const Home: NextPage = () => {
  return (
    <div className='min-h-screen'> 
      <Header />
      <div className='mt-10'/>
      {/* <trending /> */}
      <div className='mt-20'/>
      {/* <bmctable /> */}
    </div>
  )
}

export default Home
