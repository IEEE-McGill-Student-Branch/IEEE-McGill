# This section is for the `/editor` route

## Access
- Only the webmaster/director of web can access this route
- This route is used to edit the posts on the website

## Architecture
- The editor frontend has 3 major components:
    - Authentication to access the editor
    - The editor itself: a WYSIWYG editor
    - Post management tools
- The editor backend has 2 components:
    - Authentication Service
    - Controller to handle the database
- The editor database is located on Firebase

## Documentation
- Firebase CLI - https://firebase.google.com/docs/cli#mac-linux-auto-script
- 
