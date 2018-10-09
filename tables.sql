CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  password TEXT
);

CREATE TABLE IF NOT EXISTS profiles(
  user_id INTEGER,
  forehand INTEGER,
  backhand INTEGER,
  endurance INTEGER,
  speed INTEGER,
  serve INTEGER,
  volley INTEGER
);