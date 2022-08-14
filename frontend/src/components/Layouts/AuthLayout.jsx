import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../Footer'

function AuthLayout({children}) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}


AuthLayout.propTypes = {
    children:PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
}

export default AuthLayout