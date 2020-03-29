# Steps to Run your Front-End on Netlify
  
1. Create an account on [Netlify](https://www.netlify.com/).  
2. Open your Development Folder, here in case the 'client' folder.  
3. Run ``npm install netlify-cli -g`` to install Netlify CLI.  
4. If you are using React, run ``npm run build`` to generate the static serving files. For Angular, use ``ng run build --prod``. This will create a folder with the static files.  
5. Once done, run ``netlify deploy``. This will guide you through the CLI and ask you to authorize your local machine, if this is your first deployment.  
6. This will ask for the deployment folder. For react use ``./Build`` and for Angular use ``./dist``.  
7. You will be provided with a deployment URL by Netlify (usually a long url). Use the same to inspect to see if the routing and all is okay or not.  
8. If everything seems fine, then run ``netlify deploy --prod``. And Voila! You are having a custom sub-domain of netlify to run your app.

### Additional Troubleshooting

If the login panel doesn't appear or you want to change account, then enter ``netlify login``.  
If the routing isn't working as expected as per React Router (for example), then you need to add a Redirects File as follows -  
  
##### _redirects
/*    /index.html   200  
  
This file should be place inside the deployment directory of the generated static folder.