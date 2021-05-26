import { useEffect, useState } from 'react';
import config from '../config';
import req from '../utils/request';
import { IPokemon } from '../models/IPokemon';

const useData = <T>(endpoint: string, query: object, deps: any[] = []) => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {

        const getData = async (): Promise<void> => {
            setIsLoading(true);
            try {
                const result = await req<T>(endpoint, query);
                console.log(result);
                setData(result);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        getData();
    }, []);

    return {
        data,
        isLoading,
        isError
    }
};

export default useData;
