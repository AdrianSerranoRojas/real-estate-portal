import React from 'react'
import withLayout from '../../hoc/withLayout'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const {status, value, responses} = useSelector(state => state.search)
    console.log(value, responses )
  return (
    <div>Dashboard {status === "ok" ? value.Search : "loading"}</div>
  )
}

export default withLayout(Dashboard)