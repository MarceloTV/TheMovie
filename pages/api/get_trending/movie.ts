import { NextApiRequest, NextApiResponse } from "next";

import { getTrending } from "../../../controllers/get";
import { MediaType } from "../../../interfaces/Media";

export default async (req: NextApiRequest, res: NextApiResponse) =>
  await getTrending(req, res, MediaType.Movie);
