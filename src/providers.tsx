import {ReactNode} from "react";
import {AuthProvider} from "./auth-context";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

export const queryClient = new QueryClient()
export const Providers = ({children}: { children: ReactNode }) => {
  return <QueryClientProvider client={queryClient}>
    <AuthProvider>
      {children}
    </AuthProvider>
  </QueryClientProvider>
}