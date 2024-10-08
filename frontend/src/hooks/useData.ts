// import { useEffect, useState } from 'react';
// import apiClient from '../services/api-client';
// import { CanceledError } from 'axios';

// const useData = <T>(endpoint: string) => {
//   const [data, setData] = useState<T[]>([]);
//   const [error, setError] = useState('');
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();

//     setLoading(true);
//     apiClient
//       .get<T[]>(endpoint, { signal: controller.signal })
//       .then((response) => {
//         setData(response.data);
//         setLoading(false); // this is the way around strict mode
//       })
//       .catch((error) => {
//         if (error instanceof CanceledError) return;
//         setError(error.message);
//         setLoading(false); // this is the way around strict mode
//       });
//     // .finally(() => setLoading(false)); this is how it should be but it's not working because of strict mode

//     return () => controller.abort();
//   }, []);

//   return { data, error, isLoading };
// };

// export default useData;

// the old ways of doing things before react query has been commented out but i still wanna show it here
