import { NextApiRequest, NextApiResponse } from "next";

import { getCategory } from "../../../controllers/get";
import { MediaType } from "../../../interfaces/Media";

export default async (req: NextApiRequest, res: NextApiResponse) =>
  await getCategory(req, res, MediaType.Serie);
