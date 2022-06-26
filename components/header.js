import React from 'react'
import Image from 'next/image'
import Search from '../assets/svg/search'

const styles = { header: 'bg-[#991b1b] text-white h-20 flex gap-[100px] w-full p-[10px]',
                  headerwrapper: 'flex justify-center h-full max-w-screen-xl mx-auto px-4',
                  nav: 'flex justify-center items-center gap-[20px]',
                  navItem: 'relative mr-1 cursor-pointer hover:opacity-60',
                  badge: 'rounded-full bg-sky-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-2 ring-sky-600',
                  inputContainer: 'flex items-center justify-center p-2 rounded bg-[#7f1d1d]',
                  input: 'bg-transparent outline-none text-white w-70 mL-3'
                }

const header = () => {
  return (
    <div className={styles.header}>
      <Image src='/burgundylogo.png'
        alt='logo'
        width={220}
        height={250}
      />

      <div className={styles.headerwrapper}>
        <nav className={styles.nav}>
          <div className={styles.navItem}>
            <div className={styles.navLink}> Cryptocurrency
            </div>
            <div className={styles.badge}/>
          </div>
          
          
          <div className={styles.navItem}>
            <div className={styles.navLink}> Exchanges
            </div>
          </div>
         
         
          <div className={styles.navItem}>
            <div className={styles.navLink}> NFT
            </div>
            <div className={styles.badge}/>
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}> Albustown16
            </div>
            <div className={styles.badge}/>
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}> Portfolio
            </div>
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}> Watchlist
            </div>
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}> Products
            </div>
            <div className={styles.badge}/>
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}> Learn
            </div>
          </div>
          

        </nav>

        <div className='flex items-center'>
        {/* <connectButton/> */}
        <div className={styles.inputContainer}>
          <Search />
          <input className={styles.input} placeholder =
          'Search' /> 
        </div>


        </div>
      </div>
    </div>
  )
}

export default header