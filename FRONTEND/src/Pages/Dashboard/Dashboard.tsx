import React from 'react'
import withLayout from '../../hoc/withLayout'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const {status, value} = useSelector(state => state.search)
  return (
    <div>Dashboard {value} {status === "ok" ? value : "loading"}</div>
  )
}

export default withLayout(Dashboard)