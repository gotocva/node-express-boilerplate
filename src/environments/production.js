

import dotenv from 'dotenv';
const env = dotenv.config().parsed;

export const PORT = env.PORT || 3003;