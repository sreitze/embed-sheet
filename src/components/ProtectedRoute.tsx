import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const isAuthenticated = !!localStorage.getItem('authUser')
  return isAuthenticated ? children : <Navigate to="/login" replace />
}
