import { caravansListAtom } from '../../state/atoms/caravans';
import { fetchingStatusAtom } from '../../state/atoms/fetchingStatus';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { useFetchingStatus } from '../common/useFetchingState';

export const useCaravans = () => {
  const [caravans, setCaravans] = useAtom(caravansListAtom);
  const { setSuccess, setLoading, setError } = useFetchingStatus();

  useEffect(() => {
    // Set loading state
    if (!caravans.length) {
      setLoading();

      fetch('/api/data')
        .then((response: Response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setCaravans(data.items);
          // Set success state
          setSuccess();
        })
        .catch((error) => {
          console.error(`Error during fetching data: ${error}`);
          // Set error state
          setError(error);
        });
    }
  }, [setCaravans, caravans.length, setSuccess, setError, setLoading]);

  return caravans;
};
