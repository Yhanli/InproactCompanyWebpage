# Inproact-Vol-Project
This is a volunteer/self learning project; create a website for inproact

While picking up and refining my skills and understanding in python, django, react, redux, javascript, html, css, nodeJs and hosting, I decided to pickup this volunteer project. 

Structure:
  frontend: react frame work, and redux for state management. Every content is determine by the contents return by the backend (API like wise). 
  backend: python Django (django rest-framework) to return contents and using the Admin page for managing the contents displayed in the frontend. 
  
 Idea:
  - the idea was to combine what I have learn from Django and React, trying to make a webpage where everything( most ) can be change by the website owner(admin) without any need to change in code. 
  - ideally, unless structural changes needed, there wont be any need for developer involve at later stage of the website.
  
  
Hosting using
  - nginx
  - supervisor
  - gunicorn
  (will include these config at later stage) 
  - pipenv (python virtual environment, for isolate the environment to avoid conflict between projects)
  
  
 Database
  - sqlite3 (default db for django, which can switch to mysql very quickly. Due to the size and capacity of EC, sqlite3 is the most affordable db ATM) 
  
 
 Setup Commands
  - npm run build
  - pipenv sync
  - pipenv run python manage.py makemigrations
  - pipenv run python manage.py migrate
  - pipenv run python manage.py collectstatic
  restart gunicorn and supervisor
  (check the push.sh, pull.sh and restart.sh to comfirm commands needed, setting up nginx, supervisor, gunicorn step will include at later stage)
 
 Demo Site (temporary for development use)
  https://yhanl.tech/
    - /admin/ , demo:123456Demo ; for accessing the admin site with a demo account. (will change to allow view only account at later stage of development) 
    
