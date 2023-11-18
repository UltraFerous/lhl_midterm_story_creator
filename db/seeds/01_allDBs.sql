INSERT INTO users (name, email, password) VALUES ('AuthorOne', 'authorone@ymail.com', 'password');
INSERT INTO users (name, email, password) VALUES ('AuthorTwo', 'authortwo@ymail.com', 'password');
INSERT INTO users (name, email, password) VALUES ('AuthorThree', 'authorthree@ymail.com', 'password');


INSERT INTO stories (title, body, author_id) VALUES ('Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 1);
INSERT INTO stories (title, body, author_id) VALUES ('Ut enim ad minim veniam', 'quis nostrud exercitation ullamco', 2);

INSERT INTO contributions (body, author_id, story_id) VALUES ('laboris nisi ut aliquip ex ea commodo consequat', 1, 2);
INSERT INTO contributions (body, author_id, story_id) VALUES ('in voluptate velit esse cillum', 2, 1);

INSERT INTO votes (author_id, contribution_id) VALUES (3, 2);
