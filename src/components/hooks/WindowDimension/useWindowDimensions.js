import {useState, useEffect} from 'react';

const getWindowDimensions = () => {
    const [windowSizes, setWindowSizes] = useState({
        mobile: false,
        desktop: false
    })
    const {innerWidth: width, innerHeight: height} = window;
    if (width > 600) {
        setWindowSizes(windowSizes['desktop'] = true)
    } else {
        setWindowSizes(windowSizes['mobile'] = true)
    }
    return windowSizes
}

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    console.log({windowDimensions})
    return windowDimensions;
}

export default useWindowDimensions