import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import EventRequests from '../Components/Eventrequest'

const Router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: 'dashboard/new-requests',
        element: <EventRequests />,
      },
    ],
  },
])

export default Router
