import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import EventRequests from '../Components/Eventrequest'
import EventName from '../Components/EventName'

const Router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: 'dashboard/new-requests',
        element: <EventRequests />,
      },
      {
        path: 'dashboard/new-requests/EventName',
        element: <EventName />,
      },
    ],
  },
])

export default Router
