-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS stories CASCADE;
DROP TABLE IF EXISTS contributions CASCADE;
DROP TABLE IF EXISTS votes CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  UNIQUE (email)
);

CREATE TABLE stories (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  body VARCHAR(255) NOT NULL,
  author_id INTEGER,
  Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status BOOLEAN DEFAULT true,
  FOREIGN KEY(author_id) REFERENCES users(id)
);

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

CREATE TABLE votes (
  id SERIAL PRIMARY KEY NOT NULL,
  author_id INTEGER,
  contribution_id INTEGER,
  Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status BOOLEAN DEFAULT true,
  FOREIGN KEY(author_id) REFERENCES users(id),
  FOREIGN KEY(contribution_id) REFERENCES contributions(id),
  UNIQUE (author_id, contribution_id)
);


