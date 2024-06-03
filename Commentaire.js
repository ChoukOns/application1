const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentaireSchema = new Schema({
    id_cours: {
        type: String,
        required: true
    },
    commentaire: {
        type: String,
        required: true
    },
    apprenant: {
        type: Schema.Types.ObjectId,
        ref: 'Apprenant' // Référence au modèle Apprenant
    }
});

const Commentaire = mongoose.model('Commentaire', CommentaireSchema);
module.exports = Commentaire;