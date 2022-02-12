require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    creactedAt: 'created_at',
    upadatedAt: 'upadated_at',
  },
  dialectOptions: {
    timezone: 'America/Sao_paulo',
  },
  timezone: 'America/Sao_paulo',
};
