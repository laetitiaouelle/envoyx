import React, { useContext } from 'react'
import { ClinicDashboardRouterContext } from '../../../src/context/ClinicDashboardRouterContext'
import Layout from '../../../components/clinic-dashboard/Layout'
import Home from '../../../src/clinics-dashboard/Home/Home'
import Invoices from '../../../src/clinics-dashboard/Ivoices'
import Insurances from '../../../src/clinics-dashboard/Insurances'

function ClinicDashboard() {
    const {clinicRouterState} = useContext(ClinicDashboardRouterContext)

    return (
        <div>
          <Layout>
              <div className='' >
                {
                  clinicRouterState ==="DASHBOARD" && (<Home/>) ||
                  clinicRouterState ==="INVOICES" && (<Invoices/>)  ||
                  clinicRouterState ==="SALARIES" && (<Insurances/>)
                }
              </div>
          </Layout>
        </div>
    )
}

export default ClinicDashboard