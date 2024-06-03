const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApprenantSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    nom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mdp: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    langue: {
        type: String,
        required: true
    },
    statut: {
        type: String,
        required: true,
    },
    niveau: {
        type: String,
        required: true,
    },
    ville: {
        type: String,
        required: true,
    },
    dateNaiss: {
        type: Date,
        default: Date.now,
        required: true,
    },
    etat: {
        type: String,
        required: true,
    },
    coursAchete: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Cours'
        }
    ],
    quizzesEssayes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Quiz'
        }
    ],
    achats: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Achat'
        }
    ]
});

const Apprenant = mongoose.model('Apprenant', ApprenantSchema);
module.exports = Apprenant;