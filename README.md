# Week 6

## Setting Up 

- Merge the MR with the assignment from the previous week
- Continue from your repository `main` branch (take care you have the latest changes before you start to work `git fetch`, `git pull` on the `main` branch)

## Assignment

- Get up to date with week 6 materials
  - Have the previous week functionality (authentication, etc) 
  - Have the one-to-many relation between question and answers
  - Have the one-to-many relation between question and user
  - Have the one-to-many relation between answer and question
  - Have the services and controller functionality implemented
  - Call me if you have any problems (send me a message on discord and we will sync)
  - Open a Pull-Request with all your functionality and let me review it

## Bonus Assignment (Optional)

This is a bonus assignment for those who have a little time. 

The idea behind is to add authorization to our application such that only `Admin` users can remove question and answers. 
We will implement a RBAC (Role-based access control) to define who can access what route.

### Reading
- [NestJS Authorization](https://docs.nestjs.com/security/authorization)

### Assignment
- Follow the reading material for the Basic RBAC implementation
- Create a role decorator named `Roles`
- Create a `RolesGuard` which checks the user roles for the decorator role
- Add `RolesGuard` to the `UseGuards` annotation in the `QuestionManagementController`
- Add your created decorator `Roles` to the `Delete` requests in the `QuestionManagementController`
