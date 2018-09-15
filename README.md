HOW TO USE
==========

DOCKERIZED TEST
---------------
1. install docker and docker-compose
Please google how to install docker in your host 

2. start the whole architecture

    ```docker-compose up```

3. run test. feel free to check package.json

    ```docker-compose exec dev-node env NODE_ENV=local TEST_CLIENT=chrome grunt test```

4. if you need to stop everything.

    ```docker-compose stop```


DEV. REMARK
-----------

## app
1. App is a class handling the whole framework. Some key phases' implementation are also inside.
2. Any other component setup can be implemented there and call in the prepare phase 
3. the instance of App (app) is exported to global, so it is accessible any where like other frameworks.

## models
1. they are the page objects.
2. Page should be the superclass of every page
3. every common features of page objects should be implemented in superclass.
4. Other page objects should be implemented like a config file.

## config
1. files under config directory and file matched the NODE_ENV in /env will be merged deeply.
2. the merged object can be accessed by app.config 

## features 
1. mainly follow the cucumber folder structure. 

CHANGE LOG
==========

21/9
1. add Gruntfile. will use grunt for starting test

20/8
1. Alpha phase. basic framework structure. 


