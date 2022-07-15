/** @format */

import React from "react";
import { useAppSelector } from "../store";
import { Form, ListGroup } from "react-bootstrap";
import CardItem from "./CardItem";

const SearchAnimeList: React.FC = () => {
  const animeList = useAppSelector((state) => state.anime.searchList);

  // const clickHandler = (event: any) => {
  //   event.preventDefault();
  //   if (text.length) {
  //     dispatch(searchAnime(text));
  //   }
  // };

  return (
    <>
      {/* <Form className="d-flex" onSubmit={clickHandler}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={inputHandler}
          size="lg"
        />
      </Form> */}
    </>
  );
};

export default SearchAnimeList;
