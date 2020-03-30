# Steps for Deploying your Application on a VPS - AWS, DigitalOcean, etc.

## Creating a Droplet or Instance
Create a DigitalOcean or AWS Account, complete the verification and once done, create a droplet or instance.  
A Droplet is a virtualized block of processing power, memory and storage that is dedicated to you. Instance is the same for AWS.  
Create a droplet (ubuntu 18.04) on basis of your requirement and the password and IP address will be mailed to you.  
Use [PuttySSH](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) to SSH to the same VPS from your computer and login to the root Account.  

## Setting up the VPS for Serving Node Applications
1. ``sudo apt-get update && sudo ap-get upgrade`` and then enter 'Y' to upgrade the VPS.  
2. Move to Root Directory usign ``cd ~`` and then enter ``curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -``.  
3. ``apt-get install -y nodejs`` to start installing nodejs.  
4. Verify that nodejs and npm (package manager for node) is successfully installed by typing in ``nodejs -v`` and ``npm -v``.  
5. Enter ``sudo apt install build-essential`` to install the build-essential package that is required by npm to work properly.

### Uploading the API Files.
1. Make a directory named apps under var and open the same directory ``cd /var/apps/``.  
2. Upload all your server files under a sub directory.
3. Run and verify by entering ``nodejs index.js`` or whatever the entry point is.
4. By default you won't be able to access the port from outside, so you will have to allow the port using ``ufw allow 5000`` and then reload using ``sudo ufw reload``.
5. Once testing is done, you should remove the allow rule by entering ``ufw delete allow 5000`` and then reload the firewall.

## Setting up the NGINX Web Server
1. Install NGINX using ``apt-get install nginx``.  
2. ``sudo systemctl start nginx`` - Start NGINX service, and hit the IP of your VPS from Browser and if its working you can see the NGINX Home Page.  
3. Enter ``sudo ufw allow 'Nginx Full'`` and then ``sudo ufw reload`` to stop Firewall from blocking the ports used by NGINX.  

### Mapping a Static Web Page
1. Move to the home directory and use ``mkdir /var/www``. And then change directory to www - ``cd /var/www/``.
2. Make a Folder under the domain name (just convention, you can use random directories) - ``mkdir example.com/public_html`` && ``cd example.com/public_html/``.
3. Upload all files (static files) for your website over here. You can use FileZilla for the same.  
4. ``chmod 0755  /var/www`` enables NGINX to access the contents of the folder.  

### Creating the NGINX Configuration File
1. Enter ``sudo nano /etc/nginx/sites-available/example.com`` and write the following to the file.   
    server {
        listen 80;
        server_name example.com www.example.com;
        root /var/www/example.com/public_html;
        index index.html;
    }  
2. Save the file and then enter ``sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/`` to create a symbolic link.
3. Restart the NGINX Server using ``sudo systemctl restart nginx``.
4. Verify by entering the domain name, if pointed already*.

#### Additional Commands 
1. ``sudo systemctl stop nginx`` - To stop NGINX.  
2. ``sudo systemctl restart nginx`` - To restart NGINX.  
3. ``sudo systemctl reload nginx`` - To reload NGINX with new configurations.  

## Setting Up PM2 - A Process Manager for Node
1. Install PM2, by entering this command ``npm install pm2@latest -g``.  
2. To start any app, browse to its directory and enter ``pm2 start index.js``, that is the entry point of your application.  
3. Enter ``pm2 save`` to save the process list/environment so that every time PM2 starts, it will auto start the application.  
4. Now, let's make PM2 autostart with ubuntu by creating the startup script - ``pm2 startup systemd``.
5. This will generate an output from which run the last command which looks like - ``sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u root --hp /root``
6. Now enter ``sudo systemctl start pm2-root`` to start the same as a service.  
  
#### Additional Commands
1. ``pm2 list`` - Lists the applications currently managed by PM2.
2. ``pm2 monit`` - Starts the PM2 process monitor with all the details.
3. ``pm2 stop app_name_or_id`` - To stop a process.
4. ``pm2 restart app_name_or_id`` - To restart a process.
5. ``pm2 info app_name`` - Only show the details of the specific application/process.  
  
## Setting Up the API Subdomain for easy access
1.  Enter ``sudo nano /etc/nginx/sites-available/api.example.com`` and write the following to the file.
    server {
    listen 80;
    server_name api.example.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
2. Save the file and then enter ``sudo ln -s /etc/nginx/sites-available/api.example.com /etc/nginx/sites-enabled/`` to create a symbolic link.
3. Test the NGINX Configuration by entering ``sudo nginx -t`` and if it resolves to OK, then go on to the next, else fix the errors.
4. Restart NGINX ``sudo systemctl restart nginx``.
5. If everything went fine then api.example.com should point to your API endpoint. You can verify by entering the url in your browser.