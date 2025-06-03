import { useState } from "react";
import Dashboard from "./Components/Dashboard"

export interface User {
  isSubscribed: boolean;
  name: string;
}

interface DemoProps {}

const App = ({}: DemoProps) => {
  const [ user ] = useState<User>({
    isSubscribed: true,
    name: "Okedo"
  })
  return (
    <div>
      <Dashboard user={user}/>
    </div>
  )
}

export default App