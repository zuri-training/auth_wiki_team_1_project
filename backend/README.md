

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

 1. Clone this repository to your machine.
 2. Create a new branch.
 3. Switch to the branch and make all changes on that branch.
 4. Commit changes to the branch and push to the repository.
 5. Come back to to the repository and open a pull request on the main branch.
 6. Link the pull request with your issue.
 7. Do not merge your pull request yourself. Wait for review and merging.

**Notes**:  [Check here for further guides on how to contribute](https://docs.github.com/en/get-started/quickstart/contributing-to-projects)
