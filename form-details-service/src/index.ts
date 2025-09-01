import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";
import formRoutes from "./routes/formRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Redirect root to /form
app.get("/", (req, res) => res.redirect("/form"));

// Register form routes with swagger documentation
app.use("/form", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/form", formRoutes);

app.listen(PORT, () => {
  console.log(`Form Details Service running on port http://localhost:${PORT}`);
});
