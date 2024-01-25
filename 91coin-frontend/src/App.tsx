import * as React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
const Home = React.lazy(() => import('./pages/Home'))
const ComingSoon = React.lazy(() => import('./pages/ComingSoon'))
const Verify = React.lazy(() => import('./pages/Verify'))
const Dashboard = React.lazy(() => import('./pages/Dashboard'))
const Referral = React.lazy(() => import('./pages/Referral'))
const DashboardComingSoon = React.lazy(() => import('./pages/DashboardComingSoon'))
import './App.scss'
import './scss/style.scss'

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<React.Suspense>
                <Home />
              </React.Suspense>} />
            <Route path='about' element={<React.Suspense>
                <ComingSoon />
              </React.Suspense>} />
            <Route path='whitepaper' element={<React.Suspense>
                <ComingSoon />
              </React.Suspense>} />
            <Route path='exchange' element={<React.Suspense>
                <ComingSoon />
              </React.Suspense>} />
            <Route path='contacts' element={<React.Suspense>
                <ComingSoon />
              </React.Suspense>} />
            <Route path='verify' element={<React.Suspense>
                <Verify />
              </React.Suspense>} />
            <Route path='dashboard'>
              <Route index element={<React.Suspense>
                  <Dashboard />
              </React.Suspense>} />
              <Route path='referral' element={<React.Suspense>
                  <Referral />
              </React.Suspense>} />
              <Route path='*' element={<React.Suspense>
                  <DashboardComingSoon />
              </React.Suspense>} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
