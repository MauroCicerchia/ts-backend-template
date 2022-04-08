import * as dotenv from "dotenv";

dotenv.config();

export default {
    port: process.env.PORT || 3000,
    mongo: {
        uri: process.env.MONGO_URI || "mongodb://localhost:27017/test",
    },
};
