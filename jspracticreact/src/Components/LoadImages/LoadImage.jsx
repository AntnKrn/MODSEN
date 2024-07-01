import React, { useEffect, useState } from "react";

export const LoadImage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [url, setUrl] = useState("");
  const fetchImg = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const result = await response.json();
    setUrl(result.message);
    setIsLoaded(true);
  };
  useEffect(() => {
    fetchImg();
  }, []);
  return (
    <div>
      {isLoaded ? (
        <img width={400} height={400} src={url} />
      ) : (
        <p>Waiting for request...</p>
      )}
    </div>
  );
};
