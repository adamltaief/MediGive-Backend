const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();

const { User } = require("./models/User");

const createAdminUser = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/medigiveDB";
    console.log(`Connecting to MongoDB at: ${mongoUri}...`);
    await mongoose.connect(mongoUri);

    const adminEmail = "admin@medigive.com";
    const existingAdmin = await User.findOne({ email: adminEmail });

    if (existingAdmin) {
      console.log(`Admin user with email '${adminEmail}' already exists.`);
      process.exit(0);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("Admin123456!", salt);

    const adminUser = new User({
      nom: "Admin",
      prenom: "MediGive",
      email: adminEmail,
      mot_de_passe: hashedPassword,
      sexe: "Homme",
      date_de_naissance: new Date("1990-01-01"),
      adresse: "MediGive HQ Tunis",
      code_postal: "1000",
      telephone: "12345678",
      type: "Admin",
      isAdmin: true,
      approved: true,
      isAccountVerified: true
    });

    await adminUser.save();
    console.log("==========================================");
    console.log("Successfully created Admin User!");
    console.log("Email:    admin@medigive.com");
    console.log("Password: Admin123456!");
    console.log("==========================================");

    process.exit(0);
  } catch (error) {
    console.error("Error creating admin user:", error.message);
    process.exit(1);
  }
};

createAdminUser();
