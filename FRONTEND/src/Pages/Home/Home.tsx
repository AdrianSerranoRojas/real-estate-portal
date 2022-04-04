import React from 'react'
import withLayout from '../../hoc/withLayout'
import SearchForm from "../../components/SearchForm"

const Home = () => {
  return (
    <div><SearchForm /></div>
  )
}

export default withLayout(Home)