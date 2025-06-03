import type { User } from "../App";

interface SidebarProps {
    user: User;
}

const Sidebar = ({user}: SidebarProps) => {
  return (
    <div>
        <p>{user.name}</p>
        <p>Subscription status: {user.isSubscribed}</p>
    </div>
  )
}

export default Sidebar