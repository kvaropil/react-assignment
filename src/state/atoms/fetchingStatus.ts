import { atom } from 'jotai';

type FetchingStatus = 'idle' | 'loading' | 'success' | 'error';

export const fetchingStatusAtom = atom<{
  status: FetchingStatus;
  error: Error | null;
}>({ status: 'idle', error: null });
