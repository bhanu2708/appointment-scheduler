const MongoClient = require('mongodb').MongoClient;

const Schema = MongoClient.Schema,
  model = MongoClient.model.bind(MongoClient),
  ObjectId = MongoClient.Schema.Types.ObjectId;


  const slotSchema = new Schema ({
    slot_time: String,
    slot_date: String,
    created_at: Date
  });

const Slot = model('Slot', slotSchema);

const appointmentSchema = new Schema({
  id: ObjectId,
  name: String,
  email: String,
  phone: Number,
  slots:{type: ObjectId, ref: 'Slot'},
  created_at: Date
});

const Appointment = model('Appointment', appointmentSchema);

module.exports = {
  Appointment, Slot
};
