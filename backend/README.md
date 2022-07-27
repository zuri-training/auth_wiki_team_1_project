

#  Auth Wiki Team 1 Backend Project

  

##  How to install

  

1.  Download and install `virtualenv`

	`pip install virtualenv`

2.  Inside the project folder, run

	`virtualvenv venv && source venv/bin/activate`

3.  Inside the repository folder run

	`python3 -m pip install -r requirements.txt`

4.  Create ENV file

	`cp .env.example .env`

5.  Generate a new secret key [from here](https://djecrety.ir) and put in the env file

6.  Run migration

	`python3 manage.py migrate`

7.  Run the server

	`python3 manage.py runserver`



# Contributors Guide

> Follow the contribution guide [here](https://github.com/zuri-training/auth_wiki_team_1_project/edit/main/README.md)
