a-or-b
======

What is this?
-------------

__"Is nothing sacred to you?!"__ you frantically ask, wondering why on earth I made this.

__a-or-b__ is meant to be a sort of what-the-hell-are-you-rating agnostic implementation which lets users rate images by choosing one or the other.  
Images are then "rated" using the [elo rating system](http://en.wikipedia.org/wiki/Elo_rating_system). Then uh.. you've got some images. _Yay?_

Installation and running
------------------------

```
npm install
node server
```

If you're running behind nginx, haproxy or whatever, run it as `TRUST_PROXY=1 node server`  
You'll have to be running __redis__ on your server (note: `hiredis` is installed so that its faster)
