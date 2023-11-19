## Endpoints

### '/' - Index/home page

GET '/' - Render nav bar, create story button, and list of existing stories

### '/stories'

GET '/' - Redirect to root '/'

GET '/:id' - Render story page for story with matching id

GET '/new' - Render create new story page

### '/api/stories'

POST '/new' - Create new database entry for new story, and redirect to '/stories/:id'

POST '/:id/complete' - Mark story with matching id complete in database

### '/contributions'

GET '/new' - Render contribution input page

### '/api/contributions'

POST '/new' - Create new database entry for new contribution, then redirect to story page

POST '/:id/like' - Adjust vote count in database for contribution with matching id

POST '/:id/accept' - Accept contribution with matching id and incorporate it into the main story, then redirect to '/stories/:id'

### '/users'

GET '/register' - Render registration page

GET '/login' - Render login page

### '/api/users'

POST '/register' - Register new user in database and redirect to home page

POST '/login' - Authenticate user login and redirect to home page
