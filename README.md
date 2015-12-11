
Podcast web client that allows you to connect to a podcast service just writing the service rss url  and reproduce the podcast feeds.

# Quickstart

Install Node.js and then:

$ git clone https://github.com/rtrujillor/podcast-client.git

$ cd podcast-client

$ sudo npm -g install grunt-cli karma bower http-server

$ npm install

$ bower install

$ grunt watch &

$ http-server -p80 ./build

Open your browser and point to http://localhost:80
That's all!

# Description
The webapp is based on AngularJS, Bootstrap, UI Bootstrap and Font Awesome. Lastly, it contains a sophisticated Grunt-based build system to ensure maximum productivity. 

The goal of this  sample is to create a web app which lets you browse and watch a subset of the CNN Video Podcast catalog, but just changing the url of the rss service allows you to browse and watch any video podcast service.

The application reads the RSS file for one of the video podcasts available on http://www.cnn.com/services/podcasting/.

 · When first loads, the url pointing to is http://rss.cnn.com/services/podcasting/ac360/rss.xml
 · The application displays a list of available episodes for the feed.   
 · The list shows all the  episodes, and allow the user to scroll up and down in the list in case more than four episodes are available.  
 · When the user selects one episode, that episode starts playing in the video playback area and the episode's description appears beneath the video playback area.  
 
Using the information in the RSS XML feed, the app displays:  

 · The podcast name  
 · The podcast description  
 · A list of episodes with their title and pub date  
 · A video window showing episodes
 · A description of the current video 
 
Please note that the app is expected to work even if the RSS feed from CNN is changed to another CNN video podcast RSS feed with the same structure. For example, if the app is working with the feed for ”Fareed Zakaria GPS”, the app must also work when the feed URL is switched to ”State of the Union (Video)” (or any other equivalent video podcast feed).  

The requirements for the webapp are:

· The app works in Firefox 5.+ and/or in Chrome.  
· The app is developed using (X)HTML, JavaScript and CSS.  
· The app is usable by using only the arrow keys (UP/DOWN/LEFT/RIGHT) for navigation, and the return key (ENTER) for selection. 
· The app fits entirely inside an area of 1280x720 pixels. 
· The app is runnable using a normal web server, in the development I have used npm module http-server. 

Guidance : 

· A  proxy has been used to be able to read XML feeds from CNN.com using http. Specifically, module node-parserproxy has been used, with some changes to manage and allow CORS. 
· This proxy receives a podcast request from the app, send this request to the rss service, gets the XML returned and translate it to json format, returning this to the webapp.
 · CSS3-features such as rounded corners and gradients are used  to make a clear and nice UI. 

# Interface
This is the webapp interface:
![alt tag](https://github.com/rtrujillor/podcast-client/blob/master/podcast_interface.png)
