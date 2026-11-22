const express = require("express");
const connectToDb = require("./config/connectToDb");
const { errorHandler, notFound } = require("./middlewares/error");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const { swaggerUi, specs } = require("./config/swagger");
const path = require("path");
require("dotenv").config();

// connection to Db
connectToDb();

// Init App
const app = express();

// Security Middlewares
app.use(helmet({
  contentSecurityPolicy: false, // needed for Swagger UI scripts/styles to load cleanly
}));
app.use(cors({
  origin: "*",
}));

// Rate Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, // limit each IP to 200 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Request body parser
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.send(`
    <div style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
      <h1>🌟 Bienvenue sur l'API MediGive 🌟</h1>
      <p>Plateforme solidaire de gestion des dons d'appareils médicaux et médicaments.</p>
      <br/>
      <a href="/api-docs" style="background: #0284c7; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
        📖 Accéder à la Documentation Swagger
      </a>
    </div>
  `);
});

// Swagger Docs Route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Static Folder for Images
app.use("/images", express.static(path.join(__dirname, "images")));

// Routes
app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/users", require("./routes/usersRoute"));
app.use("/api/dons", require("./routes/donsRoute"));
app.use("/api/dons-appareil", require("./routes/donsAppareilRoute"));
app.use("/api/dons-medicament", require("./routes/donsMedicamRoute"));
app.use("/api/dons-virement", require("./routes/donsVirementRoute"));
app.use("/api/demandes", require("./routes/demandeRoute"));

// Error Handler Middleware
app.use(notFound);
app.use(errorHandler);

// Running The Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Server is running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}. Swagger docs at http://localhost:${PORT}/api-docs`)
);
