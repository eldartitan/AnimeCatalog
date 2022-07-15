import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading';
import { useAppDispatch, useAppSelector } from '../store';
import { getAnime } from '../store/AnimeSlice';

export default function AnimePage() {
  const params = useParams();
  const id = Number(params.id);
  const { loading, animeData } = useAppSelector(state => state.anime);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAnime(id))
  }, [dispatch, id]);

  return (
    <div>
      {loading && <Loading />}
      <h1>{animeData?.title}</h1>
      <p>{animeData?.synopsis}</p>
    </div>
  )
}
