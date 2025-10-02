const postgres = require('postgres');

// Check if the DATABASE_URL environment variable is set
if (!process.env.DATABASE_URL) {
    throw new Error('FATAL ERROR: DATABASE_URL is not defined in the .env file.');
}

const sql = postgres(process.env.DATABASE_URL, {
  ssl: 'require', // Supabase requires an SSL connection
  onnotice: () => {}, // Suppress notices
});

// The 'postgres' library manages the connection pool automatically.
// We can export the 'sql' template literal tag directly.
module.exports = sql;
console.log('Supabase database connected successfully.');
