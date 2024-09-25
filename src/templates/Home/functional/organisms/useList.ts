import { useState } from 'react';

const useList = () => {
  const [data, setData] = useState<string[]>(['Item 1', 'Item 2', 'Item 3']);

//   const fetchData = async () => {
//     // Simulate API call
//     setData(['Item 1', 'Item 2', 'Item 3']);
//   };

  return {
    data,
  };
};

export default useList;
