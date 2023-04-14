import React from 'react'
import Header from '../../Components/Header/Header'
import CommingSoonPage from '../../Components/OtherComponent/CommingSoonPage'
import useDocumentTitle from '../../PageTitle'

const CommingSoon = () => {
  useDocumentTitle("TRooStudy Comming Soon")
  return (
    <div className="coming-soon-page sub-page">
        <Header/>
        <CommingSoonPage/>
    </div>
  )
}

export default CommingSoon