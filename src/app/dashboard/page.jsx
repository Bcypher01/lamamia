"use client";
import React from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        // next: { revalidate: 10 },
        cache: "no-store",
      });

      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();

      setData(data);
      setIsLoading(false);
    };

    getData();
  }, []);
  console.log(data);
  return <div>Dashboard</div>;
};

export default Dashboard;
