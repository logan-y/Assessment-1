/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = "Git is a version control software program that is primarily utilized through a command-line interface. It's used for tracking and implementing changes between files, including previous versions and/or files with shared access."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = "Github is an web-based user interface that connects to Git and is primarily used for hosting Git repositories, project management/version control, and allowing real-time collaboration between users. "

//////////////////PROBLEMS 3 - 8////////////////////
//let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

const init = {
    description:'The init command initializes a new repository in Git, that may then be used to add files and changes to a project.',
    code:'git init'
}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

const clone = {
    description: 'git clone is used to clone an existing repository in a new directory.',
    code: 'git clone <url>'
}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

const status = {
    description: 'the status command displays the state of the repository and staging area. It is most useful for identifying the state between git add and git commit commands',
    code: 'git status'
};

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

const add = {
    description: 'the git add command adds files to the staging area before they are committed to git and pushed to the repository.',
    code: 'git add <fileNames>'
};

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

const commit = {
    description: 'the git commit command records changes to the Git repository before they are pushed by the developer to the main repository.',
    code: 'git commit -m "commit message">'
};

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

const push = {
    description: 'The git push command is used to update the main repository with changes that have previously been added and committed to git.',
    code: 'git push <url> or git push <remote> <branch>'
};