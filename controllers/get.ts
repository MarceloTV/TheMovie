import fetch from "node-fetch";
import { NextApiRequest, NextApiResponse } from "next";

import variables from "../utils/variables";
import {
  TrendingMovieResponse,
  TrendingSerieResponse,
} from "../interfaces/Response";
import { MediaType, Movie, Serie } from "../interfaces/Media";
import checkFilters from "../utils/checkFilters";

// GET MEDIA IN TRENDING
const getTrending = async (
  _req: NextApiRequest,
  res: NextApiResponse,
  media: MediaType
) => {
  let media_type = media == MediaType.Movie ? "movie" : "tv";

  const request = await fetch(
    `https://api.themoviedb.org/3/trending/${media_type}/day?api_key=${variables.api_key}`
  );

  if (media == MediaType.Movie) {
    const body = (await request.json()) as TrendingMovieResponse;
    let results: Movie[] = [];

    for (let i = 0; i < 3; i++) results.push(body.results[i]);

    res.status(200).json({ movies: results });
  }

  if (media == MediaType.Serie) {
    const body = (await request.json()) as TrendingSerieResponse;
    let results: Serie[] = [];

    for (let i = 0; i < 3; i++) results.push(body.results[i]);

    res.status(200).json({ series: results });
  }
};

// GET ALL
const getAll = async (
  req: NextApiRequest,
  res: NextApiResponse,
  media: MediaType
) => {
  let media_type = media == MediaType.Movie ? "movie" : "tv";

  // Filter check
  const query = req.query;

  console.log(
    "calling ->",
    `https://api.themoviedb.org/3/discover/${media_type}?api_key=${
      variables.api_key
    }${checkFilters(query)}`
  );

  const request = await fetch(
    `https://api.themoviedb.org/3/discover/${media_type}?api_key=${
      variables.api_key
    }${checkFilters(query)}`
  );

  if (media == MediaType.Movie) {
    const body = (await request.json()) as TrendingMovieResponse;

    res.status(200).json({ movies: body });
  }

  if (media == MediaType.Serie) {
    const body = (await request.json()) as TrendingSerieResponse;

    res.status(200).json({ series: body });
  }
};

const getCategory = async (
  _req: NextApiRequest,
  res: NextApiResponse,
  media: MediaType
) => {
  let media_type = media == MediaType.Movie ? "movie" : "tv";

  const request = await fetch(
    `https://api.themoviedb.org/3/genre/${media_type}/list?api_key=${variables.api_key}`
  );

  const body = (await request.json()) as { genres: [id: number, name: string] };

  res.status(200).json({ ...body });
};

export { getTrending, getAll, getCategory };
