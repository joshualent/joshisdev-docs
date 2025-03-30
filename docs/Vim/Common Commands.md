## Move commands
To move the cursor, press the h,j,k,l keys as indicated. **
~~~
	     ^              The k key moves up
	     k		 Hint:  The h key is at the left and moves left.
    < h	    l >		    The l key is at the right and moves right.
	     j			    The j key looks like a down arrow.
	     v 
~~~

## Writing text
- `i` - insert text
- `a` - append text, insert after the cursor
- `A` - append text to the end of the linex

## Editing files
- `:w`- save
- `:q' - quit (without saving)
- `:wq` - save and quite
- `:wq` - save and quit, force action

## Motions
Motions can be used to move around or paired with operators to perform actions
- `w` - until the start of the next word, excluding its first character
- `e` - until the end of the current word
- `$` - to the end of the line

## Copy Paste
Vim has it's own visual mode to select text, where you can copy it and then paste it in your program
- `v` - Enter visual mode where you can select text starting at your cursor
- `y` - yank, or copy text that is selected in visual mode
- `p` - paste text that has been yanked
