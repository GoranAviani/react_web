import {useState, useEffect} from 'react';

const getWindowDimensions = () => {
    let windowSizes = {
        mobile: false,
        desktop: false
    }
    const {innerWidth: width, innerHeight: height} = window;
    if (width > 600) {
        windowSizes.desktop = true
    } else {
        windowSizes.mobile = true
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

    return windowDimensions;
}

export default useWindowDimensions