# Getting Started with GitHub & This Repository

## Contents
- [Downloadind and Installing latest version of Git](https://git-scm.com/downloads)
- [Setting your username in Git](https://help.github.com/en/github/using-git/setting-your-username-in-git)
- [Setting your commit email address](https://bit.ly/39CUyem)
- [Creating a repository](https://help.github.com/en/github/getting-started-with-github/create-a-repo)
- [Forking and Cloning this Repository](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
- [Important Git Commands](https://dev.to/dhruv/essential-git-commands-every-developer-should-know-2fl)
- [Some Additional Terms](https://dzone.com/articles/top-20-git-commands-with-examples)

## Installing Git and Linking your GitHub Account
1. You can download [Git](https://git-scm.com/downloads) or use [GitHub Desktop](https://desktop.github.com/). The later has a simple interface to get started with for beginners.  
2. Make sure you have any Code Editor Installed. I preffer VS Code. You might try that out.
3. Login to your GitHub Account either on Git or GitHub Desktop.  

## Cloning this Repository
The first thing you should know to keep a local copy of a GitHub repository to work on and transfer changes to the git repository.  
To clone any repository, open a terminal in the desired folder where you want to clone it and Enter -  
``git clone https://github.com/dipan29/Realtime-Chat-App.git``.  
Make sure you enter .git at the end of the URL to clone it to a generated folder.  

## Important Git Commands
1. ``git pull`` - This allows you to fetch all the changes that are there in the GitHub Repository but not on your local machine.  
2. ``git status`` - Shows the status of the repository. The number of commits that you are behind/ahead of the global repository. The list of files that are changes, staged or commited.  
3. ``git add [parameters]`` - This allows you to get the files that are changed ready for being commited. You can add specific files using the files names in parameters or use ``git add .`` to add all files.  
4. ``git commit -m "Your Message Here"`` - This allows you to commit the changes that you have made and off course added with git add command. Please do specify a message to keep track of the commits.  
5. ``git push`` - This pushes the commits made locally and makes you even with the branch master on your remote repository.
6. ``git log`` - This enlists the commits made on the repository in decending order of date.  

These command are for basic introduction to Git and doesn't specify any documentation to use GitHub.

## Some Additional Terms
**Branch** - A branch is essentially is a unique set of code changes with a unique name. Each repository can have one or more branches.  
**Remote** - A remote in Git is a common repository that all team members use to exchange their changes. In most cases, such a remote repository is stored on a code hosting service like GitHub or on an internal server.
**Origin** - In Git, "origin" is a shorthand name for the remote repository that a project was originally cloned from.  
**Master** - This is the default branch of any github repository.  
**gh-pages** - You can create a branch named ``gh-pages`` which can help you act as a mini deployment server for your Web Apps. This makes a URL under your repository that enlists all the files under the branch gh-pages like a simple web server.  


