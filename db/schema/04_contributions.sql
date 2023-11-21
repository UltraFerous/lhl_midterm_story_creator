-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS contributions CASCADE;

CREATE TABLE contributions (
  id SERIAL PRIMARY KEY NOT NULL,
  body VARCHAR(255) NOT NULL,
  author_id INTEGER,
  story_id INTEGER,
  Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  accepted BOOLEAN DEFAULT false,
  FOREIGN KEY(author_id) REFERENCES users(id),
  FOREIGN KEY(story_id) REFERENCES stories(id)
);
