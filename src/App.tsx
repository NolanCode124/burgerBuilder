import React from 'react';
import {useAuth} from "./auth-context";
import {FullPageSpinner} from "./components/full-page-spinner";
import {AuthenticatedApp} from "./authenticated-app";
import {UnauthenticatedApp} from "./unauthenticated-app";

function App() {
  const {token} = useAuth()
  return (
    <React.Suspense fallback={<FullPageSpinner/>}>
      {token ? <AuthenticatedApp/> : <UnauthenticatedApp/>}
    </React.Suspense>
  );
}

export default App;
