import { Outlet } from 'react-router-dom'
import Directory from '../../components/Directory/Directory'

const HomeComponent = () => {

  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  )
}

export default HomeComponent
