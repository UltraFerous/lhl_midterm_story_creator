## Endpoints

### '/' - Index/home page

**GET '/' - Render nav bar, create story button, and list of existing stories**

  - Render: index.ejs
  - Query: 
    - session
      - login status
    - stories
      - all properties
    - users
      - id
      - username

### '/stories'

GET '/' - Redirect to root '/'

GET '/new' - Render create new story page

GET '/:id' - Render story page for story with matching id

### '/api/stories'

POST '/' - Create new database entry for new story, and redirect to '/stories/:id'

PATCH '/:id/complete' - Mark story with matching id complete in database

### '/contributions'

GET '/new' - Render contribution input page

### '/api/contributions'

POST '/' - Create new database entry for new contribution, then redirect to story page

PATCH '/:id/accept' - Accept contribution with matching id and incorporate it into the main story, then redirect to '/stories/:id'

PATCH '/:id/like' - Adjust vote count in database for contribution with matching id

### '/users'

GET '/register' - Render registration page

GET '/login' - Render login page

### '/api/users'

POST '/register' - Register new user in database and redirect to home page

POST '/login' - Authenticate user login and redirect to home page; use a session

DELETE '/login' - Log out; delete existing session
