# Getting Started with GitHub & This Repository

## Contents
- [Installing Git and Linking your GitHub Account](#Installing-Git-and-Linking-your-GitHub-Account)
- [Cloning this Repository](#Cloning-this-Repository)
- [Important Git Commands](#Important-Git-Commands)
- [Some Additional Terms](#Some-Additional-Terms)

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
7. ``git init`` - This initializes a local Git repository.
8. ``git checkout -b [branchname]`` - This creates a new branch in local and switches to it.
9. ``git checkout [branchname]`` - This simply switches to the branch specified.
10. ``git merge [sourcebranch] [targetbranch]`` - This merges a specified branch into the target branch.
11. ``git remote -v`` - This lists your existing remotes.
12. ``git remote set-url origin https://github.com/...(link to new repository)`` - This changes your remote's existing URL to a new URL.
13. ``git rm -r [file-name.txt] `` - This removes a file (or folder) 

These command are for basic introduction to Git and doesn't specify any documentation to use GitHub.

## Some Additional Terms and a detailed description

**Remote** - A remote in Git is a common repository that all team members use to exchange their changes. In most cases, such a remote repository is stored on a code hosting service like GitHub or on an internal server.

**Origin** - In Git, "origin" is a shorthand name for the remote repository that a project was originally cloned from.  

**pull request** - This is one of the first steps you need to learn for Open Source Contribution. It is basically informing the owner of the repository on whose project you are working upon(the forked repository), the changes you made to his/her code. A pull request is done by the button named pull request. The owner can see your changes via the pull request created to his/her repository by you and can review the changes. If the owner accept your changes, it is termed as a "merged pull request". The pull requests are often made to the master branch of the main repository from a different branch (except master) of your repository.(The forked one in your profile).

**Master** - This is the default branch of any github repository.

**Branch** - A branch is essentially a unique set of code changes with a unique name. Each repository can have one or more branches. Branches are very inportant specially when it comes to making pull requests in forked repositories. In case of forked repository, its master branch remains in sync with the master branch of the original, while you make your changes by creating another branch, which is later used to send the pull request.

**Merge** - It is merging the changes made by other branches or pull requests with the master branch(or the original code).

**Merge Conflict** - A merge conflict arises when two separate branches have made edits to the same line in a file, or when a file has been deleted in one branch but edited in the other. Conflicts will most likely happen when working in a team environment or Open Source Projects and competitions(like Hacktoberfest, GSSOC, etc). (Suppose two working guys made different changes in the same line). You can see the error messages as "pull request failed". The best way to solve merge conflict is to pull the current master branch of the main author's repository into a separate branch(one can name as "conflict" branch) using git pull. Then use VSCode text editor(works best in this case) and make the changes locally accordingly as you want. After resolving, commit them, push and make a pull request again from the branch created to merge the conflict(In this case the conflict branch).

**gh-pages** - You can create a branch named ``gh-pages`` which can help you act as a mini deployment server for your Web Apps. This makes a URL under your repository that enlists all the files under the branch gh-pages like a simple web server.  

