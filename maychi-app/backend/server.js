const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const OpenAI = require('openai');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: 'proj_8y92wPMZ00CExEcIMZVnmqFt',
});

// /api/recommend - fashion assistant
app.post('/api/recommend', async (req, res) => {
  try {
    const userPreferences = req.body.userPreferences || {};
    const prompt = `Eres un asistente de moda futurista. Basado en estas preferencias del usuario: ${JSON.stringify(userPreferences)}, recomienda un outfit adecuado.`;

    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 150,
    });

    res.json({ outfit: completion.data.choices[0].text.trim() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error generating recommendation' });
  }
});

// /api/search-suggest - search suggestions
app.get('/api/search-suggest', async (req, res) => {
  try {
    const query = req.query.q || '';
    const prompt = `Genera una lista corta de sugerencias de búsqueda para productos relacionados con: "${query}". Devuelve un array JSON con objetos {id, name}.`;

    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 100,
    });

    // Parse the response text as JSON
    let suggestions = [];
    try {
      suggestions = JSON.parse(completion.data.choices[0].text.trim());
    } catch {
      // fallback: return empty array
      suggestions = [];
    }

    res.json(suggestions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error generating search suggestions' });
  }
});

// /api/personalized - personalized product recommendations
app.get('/api/personalized', async (req, res) => {
  try {
    const prompt = `Genera una lista de productos personalizados para un usuario de moda futurista. Devuelve un array JSON con objetos {id, name}.`;

    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 150,
    });

    let products = [];
    try {
      products = JSON.parse(completion.data.choices[0].text.trim());
    } catch {
      products = [];
    }

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error generating personalized products' });
  }
});

// /api/chatbot - customer chatbot
app.post('/api/chatbot', async (req, res) => {
  try {
    const messages = req.body.messages || [];
    // Convert messages to a prompt for completion
    const prompt = messages.map(m => `${m.user === 1 ? 'User' : 'Bot'}: ${m.text}`).join('\n') + '\nBot:';

    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 150,
      stop: ['User:', 'Bot:'],
    });

    res.json({ text: completion.data.choices[0].text.trim() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error generating chatbot response' });
  }
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
