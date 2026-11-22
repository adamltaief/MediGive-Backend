const swaggerUi = require("swagger-ui-express");

const specs = {
  openapi: "3.0.0",
  info: {
    title: "MediGive API Documentation",
    version: "1.0.0",
    description: "Documentation interactive de l'API MediGive",
  },
  servers: [
    {
      url: "http://localhost:8000",
    },
  ],
  paths: {
    "/api/demandes": {
      get: {
        summary: "Récupérer toutes les demandes d'aide",
        parameters: [
          {
            name: "categorie",
            in: "query",
            schema: { type: "string", enum: ["appareil", "medicament", "virement", "autre"] },
          },
          {
            name: "wilaya",
            in: "query",
            schema: { type: "string" },
          },
          {
            name: "urgent",
            in: "query",
            schema: { type: "string", enum: ["true", "false"] },
          },
        ],
        responses: {
          "200": { description: "Liste des demandes récupérée avec succès" },
        },
      },
      post: {
        summary: "Créer une nouvelle demande d'aide",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  titre: { type: "string", example: "Besoin de fauteuil roulant" },
                  categorie: { type: "string", example: "appareil" },
                  description: { type: "string", example: "Patient âgé à mobilité réduite..." },
                  urgent: { type: "boolean", example: true },
                  wilaya: { type: "string", example: "Alger" },
                  telephone: { type: "string", example: "0550000000" },
                },
                required: ["titre", "categorie", "description"],
              },
            },
          },
        },
        responses: {
          "201": { description: "Demande créée avec succès" },
        },
      },
    },
    "/api/auth/login": {
      post: {
        summary: "Connexion utilisateur",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  email: { type: "string", example: "admin@medigive.com" },
                  password: { type: "string", example: "password123" },
                },
                required: ["email", "password"],
              },
            },
          },
        },
        responses: {
          "200": { description: "Connexion réussie" },
        },
      },
    },
  },
};

module.exports = {
  swaggerUi,
  specs,
};
