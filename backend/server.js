const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/nutrischedule', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  age: Number,
  weight: Number,
  height: Number,
  healthCondition: String,
  dietaryPreferences: [String]
});

const User = mongoose.model('User', userSchema);

const foodIntakeSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  date: Date,
  foods: [String],
  calories: Number
});

const FoodIntake = mongoose.model('FoodIntake', foodIntakeSchema);

app.get('/', (req, res) => {
  res.send('NutriSchedule API');
});

app.post('/register', (req, res) => {
  const newUser = new User(req.body);
  newUser.save((err) => {
    if (err) {
      res.status(500).send('Error al registrar usuario');
    } else {
      res.status(200).send('Usuario registrado correctamente');
    }
  });
});

app.post('/food-intake', async (req, res) => {
  try {
    const foodIntake = new FoodIntake(req.body);
    await foodIntake.save();
    res.status(200).send('Registro de consumo alimenticio exitoso');
  } catch (error) {
    res.status(500).send('Error al registrar el consumo alimenticio');
  }
});

app.get('/food-intake/:userId', async (req, res) => {
  try {
    const foodIntakes = await FoodIntake.find({ userId: req.params.userId });
    res.json(foodIntakes);
  } catch (error) {
    res.status(500).send('Error al obtener registros de consumo');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
