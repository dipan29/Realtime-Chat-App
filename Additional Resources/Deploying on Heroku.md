# Steps to Deploy your App on Heroku
  
1. Make an account on [Heroku](https://www.heroku.com/).  
2. Create a new app. Give it an App Name and choose any region you want. Make sure you stay on the hobby or free tier.
3. Download and install [Heroku Cli](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).
4. Commit all the changes locally and change directory to the working directory.  
5. Enter ``heroku login`` in terminal and enter your heroku's username and password.  
6. Set Heroku Remote - ``heroku git:remote -a [remote-branch-of-heroku]``.  
7. ``git add .`` - Add all files.
8. ``git commit -m "Deployment First Commit"``
9. ``git push heroku master`` - Push to the heroku repository. And wait for it to finish deployment.