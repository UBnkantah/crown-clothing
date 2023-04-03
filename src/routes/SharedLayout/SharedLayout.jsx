import { Outlet } from "react-router-dom"
import NavigationComponent from "../Navigation/NavigationComponent"

const SharedLayout = () => {
  return (
    <div>
      <NavigationComponent />
      <Outlet />
    </div>
  )
}

export default SharedLayout
