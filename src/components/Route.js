import { useEffect, useState } from 'react'


const Route = ({ path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)


    useEffect(() => {
        const onLocalChange = () => {
            setCurrentPath(window.location.pathname)
        }

        window.addEventListener('popstate', onLocalChange)
        return () => {
            window.removeEventListener('popstate', onLocalChange)
        }
    }, [])


    return currentPath === path
        ? children
        : null;
};

export default Route;
