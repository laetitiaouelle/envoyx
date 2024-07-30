import React, { useContext } from 'react'
import Layout from '../../components/dashboard/Layout'
import Home from '../../src/dashboard/Home/Home'
import { DashboardRouterContext, DashboardRouterProvider } from '../../src/context/DashboardRouterContext'
import Invoices from '../../src/dashboard/Ivoices'
import Clinics from '../../src/dashboard/Clinics'
import Insurances from '../../src/dashboard/Insurances'

function DashBoard() {

  const {routerState} = useContext(DashboardRouterContext)

  return (
      <div>
        <Layout>
            <div>
              
              {
                routerState ==="DASHBOARD" && (<Home/>) ||
                routerState ==="INVOICES" && (<Invoices/>)  ||
                routerState ==="CLINICS" && (<Clinics/>)   ||
                routerState ==="INSURANCES" && (<Insurances/>)
              }
            </div>
        </Layout>
      </div>
  )
  
}

export default DashBoard