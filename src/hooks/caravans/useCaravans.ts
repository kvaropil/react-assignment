import { caravansListAtom } from '../../state/atoms/caravans';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

export const useCaravans = () => {
  const [caravans, setCaravans] = useAtom(caravansListAtom);

  useEffect(() => {
    fetch('/api/data')
      .then((response: Response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(`Data from API: ${data.items}`);
        setCaravans(data.items);
      })
      .catch((error) => console.error(`Error during fetching data: ${error}`));
  }, [setCaravans]);

  return caravans;
};
