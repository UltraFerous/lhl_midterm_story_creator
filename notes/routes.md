## Endpoints

### '/' - Index/home page

**GET '/' - Render nav bar, create story button, and list of existing stories**

- Render: 
  - index.ejs
- Query:
  - session
    - user cookie
  - SELECT
    - stories
      - all properties
    - users
      - id
      - username

### '/stories'

**GET '/' - Redirect to root '/'**

**GET '/new' - Render create new story page**

- Render:
  - stories/create_story.ejs
- Query:
  - session
    - user cookie

**GET '/:id' - Render story page for story with matching id**

- Render:
  - stories/display_story.ejs
- Query:
  - session
    - user cookie
  - SELECT
    - stories
      - all properties
    - contributions
      - all properties
    - users
      - id
      - username
    - votes
      - count(*)

### '/api/stories'

**POST '/' - Create new database entry for new story, and redirect to '/stories/:id'**

- Query:
  - INSERT
    - stories
      - all properties

**PATCH '/:id/complete' - Mark story with matching id complete in database**

- Query:
  - UPDATE
    - stories
      - status
      - timestamp

### '/contributions'

**GET '/new' - Render contribution input page**

- Render:
  - contributions/new_contribution.ejs
- Query:
  - session
    - user cookie
  - SELECT
    - stories
      - all properties
    - users
      - id
      - username
    - contributions
      - count(*)

### '/api/contributions'

**POST '/' - Create new database entry for new contribution, then redirect to story page**

- Query:
  - session
    - user cookie
  - INSERT
    - contributions
      - all properties

**PATCH '/:id/accept' - Accept contribution with matching id and incorporate it into the main story, then redirect to '/stories/:id'**

- Query:
  - session
    - user cookie
  - UPDATE
    - stories
      - body
      - timestamp
    - contributions
      - accepted
      - timestamp

**PATCH '/:id/like' - Adjust vote count in database for contribution with matching id**

- Query:
  - session
    - user cookie
  - INSERT
    - votes
      - all properties

### '/users'

**GET '/register' - Render registration page**

- Render:
  users/login.ejs
- Query:
  - session
    - user cookie

**GET '/login' - Render login page**

- Render:
  - users/register.ejs
- Query:
  - session
    - user cookie

### '/api/users'

**POST '/register' - Register new user in database and redirect to home page**

- Query:
  - INSERT
    - users
      - all properties

**POST '/login' - Authenticate user login and redirect to home page; use a session**

- Query:
  - SELECT
    - users
      - username
      - password

**DELETE '/login' - Log out; delete existing session**

- Query:
  - session
    - delete user cookie
