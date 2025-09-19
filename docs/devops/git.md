# Git

Git is a distributed VCS which means that when you pull from a remote repository, you are pulling the whole git history and there is less worry about the single server going down. Multiple people can work at once because Git is distributed. No central all knowing server

- Git uses snapshots instead of just saving a list of file changes between history states
- Git has three main states that your files can reside in: modified,  staged, and committed
- To see what you’ve changed but not yet staged, type git diff
- Skip adding then committing with `git commit -am ‘“commit message”`
- Use `git rm--cached <file>` to remove a file from staging. useful after forgetting to add a file to .gitignore

Git log shows git history in reverse chronological order. You can specify the number of commits to show in a flag like -2. Adding -p or —patch will show a diff for each commit. Or use —stat for a breifer summary of changes
`git commit--amend` ammends changes to a commit before you push

To add a new remote Git  repository as a shortname you can reference easily, run `git remote add remote_name https://myremoterepository-probablygithub.git`

`git tag-a v1.4-m "my version 1.4"` - Creates an annotated tag with a message. An annotated tag is the main form of tag in git because it stores more information (message, user, etc). Tags can be applied to commits.To tag a different commit than your current one, specify the checksum after the tag name. Tags don’t get transferred to remote servers by default. You’ll have to push your tag explicitly

`git config--global alias.co checkout` - create a git alias, this command aliases `checkout` to `co`
