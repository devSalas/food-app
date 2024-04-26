import cors from "cors";
import express from "express";
import { routes } from "./routes";
import { errorHandler } from "./utils/errorHandler";
import { PaymentController } from "./controllers/PaymentController";
const app = express();


app.post("/api/web-hook-payment",express.raw({type: 'application/json'}),PaymentController.webHookPayment)

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use("/api", routes);
app.use(errorHandler);




app.listen(PORT, () => console.log("server up port 5000"));
