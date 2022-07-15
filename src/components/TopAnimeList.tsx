/** @format */

import React from "react";
import { Button, Image, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppSelector } from "../store";

const TopAnimeList: React.FC = () => {
  const { list } = useAppSelector((state) => state.anime);
  console.log(list, "list");

  return (
    <>
      {list !== null ? list.map((content) => (
        <tr key={content.mal_id}>
          <td className="align-middle text-center">
            <h1>{content.rank}</h1>
          </td>
          <td>
            <Stack direction="horizontal" gap={2}>
              <div>
                <Image
                  src={content.images.jpg.small_image_url}
                  style={{ width: "50px" }}
                />
              </div>
              <div>
                <Stack>
                  <Link to={`/anime/${content.mal_id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <h5 style={{ marginBottom: "0.4rem" }}>{content.title}</h5>
                  </Link>
                  <div style={{ fontSize: "11px" }}>
                    {content.type} ({content.episodes} eps)
                    <br />
                    {content.aired.string}
                    <br />
                    {content.members} members
                  </div>
                </Stack>
              </div>
            </Stack>
          </td>
          <td className="align-middle text-center">
            <span>&#9733; {content.score}</span>
          </td>
          <td className="align-middle text-center">
            <Button size="sm" variant="dark">
              Add to list
            </Button>
          </td>
        </tr>
      )) : null}
    </>
  );
};

export default TopAnimeList;
