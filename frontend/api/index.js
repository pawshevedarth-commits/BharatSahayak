require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const schemesRoutes = require('./routes/schemes');
const whatsappRoutes = require('./routes/whatsapp');

// Mount routes on both /api/* and root /* so Vercel rewrites resolve reliably
app.use('/api/whatsapp', whatsappRoutes);
app.use('/whatsapp', whatsappRoutes);

app.use('/api', schemesRoutes);
app.use('/', schemesRoutes);

// Health check endpoints
const healthHandler = (req, res) => {
  res.json({
    status: 'BharatSahayak Serverless API running ✅',
    timestamp: new Date().toISOString()
  });
};

app.get('/api/health', healthHandler);
app.get('/health', healthHandler);
app.get('/api', healthHandler);
app.get('/', healthHandler);

// If executed directly with node (e.g. for standalone local testing)
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 BharatSahayak API running at http://localhost:${PORT}`);
  });
}

module.exports = app;
