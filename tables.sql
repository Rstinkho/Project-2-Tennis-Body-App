CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  password TEXT
);

CREATE TABLE IF NOT EXISTS profiles(
  name TEXT,
  forehand INTEGER,
  backhand INTEGER,
  endurance INTEGER,
  speed INTEGER,
  serve INTEGER,
  volley INTEGER,
  skillLevel TEXT
);

CREATE TABLE IF NOT EXISTS messages(
sender_id INTEGER,
receiver TEXT,
message TEXT
);

