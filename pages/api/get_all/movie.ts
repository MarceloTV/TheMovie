import { NextApiRequest, NextApiResponse } from "next";

import { getAll } from "../../../controllers/get";
import { MediaType } from "../../../interfaces/Media";

export default async (req: NextApiRequest, res: NextApiResponse) =>
  await getAll(req, res, MediaType.Movie);
