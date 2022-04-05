import React from 'react'
import withLayout from '../../hoc/withLayout'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const {status, value} = useSelector(state => state.search)
    console.log(value)
  return (
    <div>Dashboard {status === "ok" ? value.Search : "loading"}</div>
  )
}

export default withLayout(Dashboard)