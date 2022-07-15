/** @format */

import React from "react";
import { Image, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AnimeData } from "../types";

interface listType {
  animeList?: AnimeData;
  key: number;
}

const CardItem: React.FC<listType> = ({ animeList }) => {
  return (
    <>
      {animeList ? (
        <Stack direction="horizontal" gap={2}>
          <div>
            <Image
              src={animeList.images.jpg.small_image_url}
              style={{ width: "50px" }}
            />
          </div>
          <div>
            <Stack>
              <Link
                to={`/anime/${animeList.mal_id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                {animeList.title}
              </Link>
              <div style={{ fontSize: "11px" }}>
                {animeList.type} ({animeList.episodes} eps)
                <br />
                {animeList.aired.string}
                <br />
                {animeList.members} members
              </div>
            </Stack>
          </div>
        </Stack>
      ) : null}
    </>
  );
};

export default CardItem;
