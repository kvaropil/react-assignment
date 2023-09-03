import { fetchingStatusAtom } from '../../state/atoms/fetchingStatus';
import { useAtom } from 'jotai';

export const useFetchingStatus = () => {
  const [fetchingStatus, setFetchingStatus] = useAtom(fetchingStatusAtom);

  const setLoading = () => {
    setFetchingStatus({ status: 'loading', error: null });
  };

  const setSuccess = () => {
    setFetchingStatus({ status: 'success', error: null });
  };

  const setError = (error: Error) => {
    setFetchingStatus({ status: 'error', error: error });
  };

  return {
    fetchingStatus,
    setLoading,
    setSuccess,
    setError,
  };
};
