-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS stories CASCADE;

CREATE TABLE stories (
  id SERIAL PRIMARY KEY NOT NULL,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  author_id INTEGER,
  Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status BOOLEAN DEFAULT true,
  FOREIGN KEY(author_id) REFERENCES users(id)
);
