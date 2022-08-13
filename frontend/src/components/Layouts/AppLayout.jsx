import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Navbar'
import Footer from '../Footer'

function AppLayout({children}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </>
  )
}


AppLayout.propTypes = {
    children:PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
}

export default AppLayout