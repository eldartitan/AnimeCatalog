/** @format */

import React, { useEffect } from "react";
import { Button, Col, Row, Stack } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch } from "../store";
import { topAnime } from "../store/AnimeSlice";

interface myProps {
  linkTop: string;
}

const Pagination: React.FC<myProps> = ({ linkTop }) => {
  const { page } = useParams();
  const pageNumber = Number(page);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(topAnime(pageNumber ? pageNumber : null))
  }, [dispatch, linkTop, pageNumber]);

  return (
    <div style={{marginTop: "40px", marginBottom: "30px"}}>
      <Row>
        <Col></Col>
        <Col md="auto">
          <Stack direction="horizontal" gap={2}>
            {pageNumber !== 1 && !!pageNumber ? (
              <Link to={`/${linkTop}/page=${pageNumber - 1}`}>
                <Button type="button" size="sm" variant="outline-dark">
                  &#60; Prev 25
                </Button>
              </Link>
            ) : (
              <span></span>
            )}
            <Link to={`/${linkTop}/page=${pageNumber + 1 || 2}`}>
              <Button type="button" size="sm" variant="outline-dark">
                Next 25 &#62;
              </Button>
            </Link>
          </Stack>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default Pagination;
