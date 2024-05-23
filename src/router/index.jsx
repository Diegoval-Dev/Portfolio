import useNavigate from '@hooks/useNavigate'
import { useEffect } from 'react'

import Abour from '@views/about'
import Projects from '@views/projectsPage'
import Studies from '@views/studiesPage'

const routes = {
    '/': Abour,
    '/proyects': Projects,
    '/studies': Studies,
}

function Router() {
    const { page, navigate } = useNavigate()


    let CurrentPage = () => <h1>404</h1>


    if (routes[page]) {
        CurrentPage = routes[page]
        return <CurrentPage />
    }
    
    return <CurrentPage />
}

export default Router