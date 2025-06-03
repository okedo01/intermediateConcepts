import { useState } from "react";
import Dashboard from "./Components/Dashboard"

export interface User {
  isSubscribed: boolean;
  name: string;
}

const App = () => {
  const [ user ] = useState<User>({
    isSubscribed: true,
    name: "Okedo"
  })
  return (
    <div>
      <Dashboard />
    </div>
  )
}

export default App