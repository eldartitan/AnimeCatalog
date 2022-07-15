/** @format */

import React from "react";
import { Table } from "react-bootstrap";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import TopAnimeList from "../components/TopAnimeList";
import { useAppSelector } from "../store";


export default function TopAnimePage(): ReturnType<React.FC> {
  const { loading, error } = useAppSelector(state => state.anime);

  return (
    <div>
      <Table striped hover>
        <thead>
          <tr className="text-center">
            <th>Rank</th>
            <th>Title</th>
            <th>Score</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <TopAnimeList />
        </tbody>
      </Table>
      {error ? <h1>{error}</h1> : null}
      {loading === true ? <Loading /> : null}
      <Pagination linkTop="animetop" />
    </div>
  );
}
