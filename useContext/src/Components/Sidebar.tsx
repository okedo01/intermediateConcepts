import type { User } from "../App";

interface SidebarProps {
    
}

const Sidebar = ({}: SidebarProps) => {
  return (
    <div>
        <p>{user.name}</p>
        <p>Subscription status: {user.isSubscribed}</p>
    </div>
  )
}

export default Sidebar