Custom template using elements of HTML5 boilerplate + Joel Longie Gulp.js Build system https://www.youtube.com/watch?v=LmdT2zhFmn4


1. Clone this repo.
  ```
  git clone https://github.com/designodactyl/_template.git
  ```

2. Rename *_template* folder to your project name.

3. Create new git repo at https://github.com

4. Copy your new repo URL.

5. Set the cloned *_template* repo to push to your new repo.

  ```
  git remote set-url origin https://github.com/designodactyl/NEW PROJECT NAME.git
  ```

6. Now run

  ```
  Gulp
  ```

7. Check everything is working.

  ```
	atom index.html  [edit and page should auto update]
	ctrl + c [exit gulp]
  ```

8. Check Git is set up ok.

  ```
	atom readme.md [edit]
	git add .
	git commit -m “Git test“  
	git push
  ```

*Note: "atom" can be replaced in the above code with any editor name.*
