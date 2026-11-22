const mongoose = require("mongoose");
const Joi = require("joi");

const DemandeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    titre: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },
    categorie: {
      type: String,
      required: true,
      enum: ["appareil", "medicament", "virement", "autre"],
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
    },
    urgent: {
      type: Boolean,
      default: false,
    },
    statut: {
      type: String,
      enum: ["En attente", "En cours", "Satisfaite", "Annulée"],
      default: "En attente",
    },
    wilaya: {
      type: String,
      default: "",
    },
    telephone: {
      type: String,
      default: "",
    },
    donAssocie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Don",
      default: null,
    },
  },
  { timestamps: true }
);

const Demande = mongoose.model("Demande", DemandeSchema);

function validateCreateDemande(obj) {
  const schema = Joi.object({
    titre: Joi.string().trim().min(3).max(100).required(),
    categorie: Joi.string().valid("appareil", "medicament", "virement", "autre").required(),
    description: Joi.string().trim().min(10).required(),
    urgent: Joi.boolean(),
    wilaya: Joi.string().allow(""),
    telephone: Joi.string().allow(""),
    donAssocie: Joi.string().hex().length(24),
  });
  return schema.validate(obj);
}

function validateUpdateDemande(obj) {
  const schema = Joi.object({
    titre: Joi.string().trim().min(3).max(100),
    categorie: Joi.string().valid("appareil", "medicament", "virement", "autre"),
    description: Joi.string().trim().min(10),
    urgent: Joi.boolean(),
    statut: Joi.string().valid("En attente", "En cours", "Satisfaite", "Annulée"),
    wilaya: Joi.string().allow(""),
    telephone: Joi.string().allow(""),
  });
  return schema.validate(obj);
}

module.exports = {
  Demande,
  validateCreateDemande,
  validateUpdateDemande,
};
