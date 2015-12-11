# podcast-client
Podcast web client that allows you to connect to a podcast service just writing the service rss url  and reproduce the podcast feeds.

The webapp is based on AngularJS, Bootstrap, UI Bootstrap and Font Awesome.

The goal of this  sample is to create a web app which lets you browse and watch a subset of the CNN Video Podcast catalog.  

 · The application must read the RSS file for one of the video podcasts available on http://www.cnn.com/services/podcasting/ (scroll to the ”Video Podcasts” section).   · The application must display a list of available episodes for the feed.   · The list must show four episodes, and allow the user to scroll up and down in the list in case more than four episodes are available.  · When the user selects one episode, that episode shall start playing in the video playback area and the episode's description must appear beneath the video playback area.  
 
Using the information in the RSS XML feed, the app must display:  

 · The podcast name  · The podcast description  · A list of episodes with their title and pub date  · A video window showing episodes
 
 · A description of the current video  
Please note that the app is expected to work even if the RSS feed from CNN is changed to another CNN video podcast RSS feed with the same structure. For example, if the app is working with the feed for ”Fareed Zakaria GPS”, the app must also work when the feed URL is switched to ”State of the Union (Video)” (or any other equivalent video podcast feed).  Requirements   · The app must work in Firefox 5.+ and/or in Chrome.  · The app must be developed using (X)HTML, JavaScript and CSS.  · The app must be usable by using only the arrow keys (UP/DOWN/LEFT/RIGHT) for navigation, and the return key (ENTER) for selection. We don’t accept any dependencies on mouse navigation!  · The app should fit entirely inside an area of 1280x720 pixels. 

 · The app should be runnable using a normal Apache server. If additional plugins are required, please include instructions on how to install them.   Guidance   · You will need to create some sort of proxy to be able to read XML feeds from CNN.com using AJAX. Please include this proxy and instructions on how to run it in your submission.  · Firebug is a useful tool for developing this kind of application.  · You have to figure out all design/graphics elements yourself. It does not have to look great, but try to be creative.
 
 · CSS3-features such as rounded corners and gradients are used  to make a clear and nice UI. 
