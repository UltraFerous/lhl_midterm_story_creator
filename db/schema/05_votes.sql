-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS votes CASCADE;

CREATE TABLE votes (
  id SERIAL PRIMARY KEY NOT NULL,
  author_id INTEGER,
  contribution_id INTEGER,
  Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status BOOLEAN DEFAULT true,
  FOREIGN KEY(author_id) REFERENCES users(id),
  FOREIGN KEY(contribution_id) REFERENCES contributions(id),
  CONSTRAINT uq_author_contributions UNIQUE(author_id, contribution_id)
);
