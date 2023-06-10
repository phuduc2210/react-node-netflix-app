import { useEffect, useState } from "react";
import Feartured from "../../components/featured/Feartured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import axiosInstance from "../../config";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axiosInstance.get(
          `/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODIwZjQxYzlhYzI3MjdmNGJkNTAxZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjI1Njk1NSwiZXhwIjoxNjg2Njg4OTU1fQ.svIK8LcSS3jFrwDBEf04j4VJfqPb-GzDfOtNqx8LxpY",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [genre, type]);
  return (
    <div className="home">
      <Navbar />
      <img width="100%" src="./banner2.jpg" alt="" />
      <Feartured type={type} />
      {lists?.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;

// rafce
