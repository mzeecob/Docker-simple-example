# Docker-simple-example
This example small library app(with bad UI). it is composed by two container one conatiner for MYSQL DATABASE and other container for NODE APP, those two conatiner are in the same network that enables them to connect to each other.

# Start-app
in order to run this app, you will need to download docker on your machine or on your remote server, from officeal docker website (choose one that fit with your machine system).
to start this app for first time to you will need to run ``` docker-compose up -d --build ```, for other time just run ``` docker-compose up -d ```. ``` -d ``` is for running the app in the back-ground if you dont want that please leave it out.
