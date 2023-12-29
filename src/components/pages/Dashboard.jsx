import React, { useEffect } from 'react'
import apiConnection from '../../apiConnection'
import { apiEndpoints, httpMethods } from '../../constants'

export default function Dashboard() {

  useEffect(()=>{
    apiConnection(apiEndpoints.GET_USER_ENDPOINT,httpMethods.GET)
},[])

  return (
    <div>Dashboard</div>
  )
}
