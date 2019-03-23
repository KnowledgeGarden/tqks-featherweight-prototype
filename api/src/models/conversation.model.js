// conversation-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
// See https://mongoosejs.com/docs/schematypes.html#maps
// for using maps for label and details where we would use
// language codes, e.g. "en": "some string"
// label: { type: Map, of: String, required: true }
// details: { type: Map, of: String }
// use:
//    label: { en: 'Dog',
//             fr: 'Chien' }
module.exports = function(app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const conversation = new Schema(
    {
      label: { type: String, required: true },
      nodeId: { type: Map, required: true }, //issue #94
      details: { type: Map }, //issue #94
      url: { type: String },
      creator: { type: String },
      handle: { type: String },
      date: { type: String },
      type: { type: String },
      img: { type: String },
      imgsm: { type: String },
      parentLabel: { type: Map }, //issue #94
      parentId: { type: String },
      sourceNode: { type: String },
      sourceLabel: { type: Map }, //issue #94
      targetNode: { type: String},
      targetLabel: { type: Map }, //issue #94
      questions: { type: Array },
      answers: { type: Array },
      pros: { type: Array },
      cons: { type: Array },
      tags: { type: Array },
      skippop: { type: Boolean }
    },
    {
      timestamps: true
    }
  );

  //TODO this is going to break
  conversation.index({ label: "text", details: "text" });

  return mongooseClient.model("conversation", conversation);
};
