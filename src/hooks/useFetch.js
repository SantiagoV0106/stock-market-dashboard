import { useState, useEffect } from 'react'

export const useFetch = (URL) => {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const constroller = new AbortController;
        const signal = constroller.signal;

        const fetchData = async () => {
            try {
                const response = await fetch(URL, { signal });
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`)
                }
                
                const data = await response.json();
                console.log(data);
                setData(data);
            } catch (error) {
                if (error.name === 'AbortError') {
                    console.error('Service cancelled');
                } else {
                    console.error(error.message);
                    setError(true)
                }
            } finally {
                setLoading(false)
            }
        };

        fetchData()

        return () => {
            constroller.abort()
        }

    }, [URL])
    return { data, error, loading }
}