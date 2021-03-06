import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../feature/movies/movieSlice";
import { selectUserName } from "../feature/user/userSlice";
import { useNavigate } from "react-router";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const navigation = useNavigate();
  

  useEffect(() => {
    let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];
    if (!userName) {
      console.log("No user found, redirecting to SignIn page");
      navigation("/");
      return; /*this prevents the further lines from execution else it will throw error,
      as we don't have permission to retrieve data from firebase in case of no users*/
    }

    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        // console.log(...recommends);
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [
              ...newDisneys,
              { id: doc.id, ...doc.data() }
            ];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          default:
            break;
        }
      });
      console.log(newDisneys);

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  },
    [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;