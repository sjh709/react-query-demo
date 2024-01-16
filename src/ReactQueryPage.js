import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const ReactQueryPage = () => {
  const fetchPost = (queryData) => {
    const id = queryData.queryKey[1];
    return axios.get(`http://localhost:4000/posts/${id}`);
  };
  const { isLoading, data, isError, error, refetch } = useQuery({
    queryKey: ['posts', 1],
    queryFn: fetchPost,
    retry: 1,
    // staleTime: 60000, // 1분간 api호출 금지 (자주 호출할 필요가 없는 api) - 기본값 0
    // gcTime: 10000, // 10초간 캐시가 유지 -> stale < gctime - 기본값 5분
    select: (data) => {
      return data.data;
    },
    enabled: false,
    // refetchInterval: 3000, // 3초마다 api 호출
    // refetchOnMount: false, // 컴포넌트에 다시 들어갈때 api 호출할지 안할지
    // refetchOnWindowFocus: true,
  });
  // console.log('data', data, isLoading);
  // console.log('error', isError, error);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      {/* {data?.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))} */}
      <button onClick={refetch}>post리스트 다시 들고오기</button>
    </div>
  );
};

export default ReactQueryPage;
