const asyncHandler = require("express-async-handler");
const { Demande, validateCreateDemande, validateUpdateDemande } = require("../models/Demande");

/**
 *  @desc    Create New Demande
 *  @route   /api/demandes
 *  @method  POST
 *  @access  private (logged in users)
 */
const createDemandeCtrl = asyncHandler(async (req, res) => {
  const { error } = validateCreateDemande(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const demande = await Demande.create({
    user: req.user.id,
    titre: req.body.titre,
    categorie: req.body.categorie,
    description: req.body.description,
    urgent: req.body.urgent || false,
    wilaya: req.body.wilaya || "",
    telephone: req.body.telephone || "",
    donAssocie: req.body.donAssocie || null,
  });

  res.status(201).json({ message: "Demande créée avec succès", demande });
});

/**
 *  @desc    Get All Demandes with filtering, pagination & search
 *  @route   /api/demandes
 *  @method  GET
 *  @access  public
 */
const getAllDemandesCtrl = asyncHandler(async (req, res) => {
  const DEMANDES_PER_PAGE = 10;
  const { pageNumber, categorie, statut, urgent, search, wilaya } = req.query;

  let query = {};

  if (categorie) query.categorie = categorie;
  if (statut) query.statut = statut;
  if (urgent === "true") query.urgent = true;
  if (wilaya) query.wilaya = { $regex: wilaya, $options: "i" };

  if (search) {
    query.$or = [
      { titre: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ];
  }

  let demandes;
  let count;

  if (pageNumber) {
    count = await Demande.countDocuments(query);
    demandes = await Demande.find(query)
      .skip((pageNumber - 1) * DEMANDES_PER_PAGE)
      .limit(DEMANDES_PER_PAGE)
      .populate("user", ["-password"])
      .populate("donAssocie")
      .sort({ createdAt: -1 });
  } else {
    count = await Demande.countDocuments(query);
    demandes = await Demande.find(query)
      .populate("user", ["-password"])
      .populate("donAssocie")
      .sort({ createdAt: -1 });
  }

  res.status(200).json({ demandes, count, pages: Math.ceil(count / DEMANDES_PER_PAGE) });
});

/**
 *  @desc    Get Demande By Id
 *  @route   /api/demandes/:id
 *  @method  GET
 *  @access  public
 */
const getDemandeByIdCtrl = asyncHandler(async (req, res) => {
  const demande = await Demande.findById(req.params.id)
    .populate("user", ["-password"])
    .populate("donAssocie");

  if (!demande) {
    return res.status(404).json({ message: "Demande non trouvée" });
  }

  res.status(200).json(demande);
});

/**
 *  @desc    Update Demande
 *  @route   /api/demandes/:id
 *  @method  PUT
 *  @access  private (owner or admin)
 */
const updateDemandeCtrl = asyncHandler(async (req, res) => {
  const { error } = validateUpdateDemande(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const demande = await Demande.findById(req.params.id);
  if (!demande) {
    return res.status(404).json({ message: "Demande non trouvée" });
  }

  if (req.user.id !== demande.user.toString() && !req.user.isAdmin) {
    return res.status(403).json({ message: "Accès refusé, action non autorisée" });
  }

  const updatedDemande = await Demande.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  ).populate("user", ["-password"]);

  res.status(200).json(updatedDemande);
});

/**
 *  @desc    Delete Demande
 *  @route   /api/demandes/:id
 *  @method  DELETE
 *  @access  private (owner or admin)
 */
const deleteDemandeCtrl = asyncHandler(async (req, res) => {
  const demande = await Demande.findById(req.params.id);
  if (!demande) {
    return res.status(404).json({ message: "Demande non trouvée" });
  }

  if (req.user.id !== demande.user.toString() && !req.user.isAdmin) {
    return res.status(403).json({ message: "Accès refusé, action non autorisée" });
  }

  await Demande.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Demande supprimée avec succès" });
});

module.exports = {
  createDemandeCtrl,
  getAllDemandesCtrl,
  getDemandeByIdCtrl,
  updateDemandeCtrl,
  deleteDemandeCtrl,
};
