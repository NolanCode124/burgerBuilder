import {createContext, ReactNode, useCallback, useContext, useMemo, useState} from "react";
import * as auth from './auth-provider'
import {useClearPersistedState} from "./util/util";
import {queryClient} from "./providers";

export type AuthForm = { name: string, password: string }

const AuthContext = createContext<{
  token: string,
  login: (params: AuthForm) => Promise<void>,
  logout: () => void
} | null>(null)

export const AuthProvider = ({children}: { children: ReactNode }) => {
  const clearPersistedState = useClearPersistedState()
  const [token, setToken] = useState(auth.getToken() || '')

  const login = useCallback(async (params: AuthForm) => {
    const token = await auth.login(params)
    setToken(token)
  }, []);

  const logout = useCallback(() => {
    auth.logout()
    clearPersistedState()
    queryClient.clear()
    setToken('')
  }, [clearPersistedState])

  const value = useMemo(() => ({token, login, logout}), [login, logout, token])
  return <AuthContext.Provider children={children} value={value}/>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}