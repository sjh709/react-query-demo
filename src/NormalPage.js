import React, { useEffect, useState } from 'react';

const NormalPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchPost = async () => {
    setIsLoading(true);
    const url = 'http://localhost:4000/posts';
    const response = await fetch(url);
    const data = await response.json();
    setIsLoading(false);
    setData(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {data?.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))}
    </div>
  );
};

export default NormalPage;
