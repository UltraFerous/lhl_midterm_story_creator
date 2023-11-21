-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS stories CASCADE;

CREATE TABLE stories (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  body VARCHAR(255) NOT NULL,
  author_id INTEGER,
  Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status BOOLEAN DEFAULT true,
  FOREIGN KEY(author_id) REFERENCES users(id)
);
