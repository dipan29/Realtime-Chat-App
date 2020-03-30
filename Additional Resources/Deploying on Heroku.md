# Steps to Deploy your Express Backend on Heroku
  
1. Make an account on [Heroku](https://www.heroku.com/).  
2. Create a new app. Give it an App Name and choose any region you want. Make sure you stay on the hobby or free tier.
3. Download and install [Heroku Cli](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).
4. Commit all the changes locally and change directory to the working directory.  
5. Enter ``heroku login`` in terminal and enter your heroku's username and password.  
6. a. Create a Heroku App using ``heroku create`` and copy the app name that is the remote branch of heroku.
6. b. Add Heroku Remote - ``heroku git:remote -a [remote-branch-of-heroku]``.  
7. Create a **Procfile** with the following content - ``web: node index.js`` or the specific file that is the entry point of the api endpoint.  
8. Save the file in the index directory, this makes allows heoroku to understand the deployment main route and makes it easier as all the deoployment is handled by heroku itself.  
9. ``git add .`` - Add all files.
10. ``git commit -m "Deployment First Commit"``
11. ``git push heroku master`` - Push to the heroku repository. And wait for it to finish deployment.
12. Enter ``heroku open`` to open the app.