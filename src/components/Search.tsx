/** @format */

import React, { useEffect, useState } from "react";
import { Form, ListGroup } from "react-bootstrap";
import { useDebounce } from "../hooks/debounce";
import { useAppDispatch, useAppSelector } from "../store";
import { searchAnime, cleanSearchList } from "../store/AnimeSlice";
import CardItem from "./CardItem";

const Search = () => {
  const animeList = useAppSelector((state) => state.anime.searchList);
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setText(event.target.value);
  };

  const clickHandler = (event: any) => {
    event.preventDefault();
    if (text.length) {
      dispatch(searchAnime(text));
    }
  };

  const debounced = useDebounce<string>(text, 250);

  useEffect(() => {
    dispatch(cleanSearchList())
  }, [])

  useEffect(() => {
    if (debounced.length > 0) {
      dispatch(searchAnime(debounced));
    }
  }, [dispatch, debounced])

  return (
    <>
      <Form className="d-flex" onSubmit={clickHandler}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={inputHandler}
          size="lg"
        />
        {/* <Button variant="outline-success" type="submit">
          Search
        </Button> */}
      </Form>
      <div style={{ marginTop: "20px" }}>
        {animeList?.length ? (
          <ListGroup>
            <h6>Anime</h6>
            {animeList.map((anime) => (
              <ListGroup.Item>
                <CardItem key={anime.mal_id} animeList={anime} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : animeList ? (
          <h1>No results found</h1>
        ) : null}
      </div>
    </>
  );
};

export default Search;
