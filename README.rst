Basic structure
===============

The directory structure is laid out as follows::

    .
    ├── index.html
    ├── assets
    │   ├── css
    │   │   └── styles.css
    │   └── images
    ├── lib
    │   └── jquery-1.6.4.js
    ├── src
    │   ├── modules
    │   │   └── mymodule.js
    │   └── projectname.js
    ├── test
    |   └── mymodule_test.js
    ├── autotest.py
    ├── buster.js
    └── jshintconfig.json

The three last files are utility and configuration files, the rest should be
self-explanatory.

The tests are based on the `Buster.JS`_ JavaScript test framework, and the
linter presented is `JSHint`_.

.. _Buster.JS: http://busterjs.org/
.. _JSHint: http://www.jshint.com/

Setup and configuration
=======================

To get everything up and running, you need to do a little work:

1. Install JSHint and Buster.JS with `npm`_::
   
   npm install -g jshint buster

2. Edit the ``MYNAMESPACE`` variable to something sensible in
   ``jshintconfig.json`` and in files found in the ``src/`` and ``test/``
   folders.

.. _npm: http://npmjs.org/

Running the tests
=================

**Buster.JS** is a versatile test framework. To create and serve a static HTML
page that runs the tests like QUnit, issue the following command::

    buster static

This is however quite cumbersome. Buster.JS can also do what JSTestDriver does.
To get output in a terminal (or for you CI), but at the same time actually run
the tests in a browser, you need to first run ::

    buster server

and direct the browser you would like to test in at http://localhost:1111/
followed by a click on the big button. Repeat this process in as many browsers
as you like. When you are ready to run the tests, do a ::

    buster test -e browser

If you like getting feedback from your tests at a fast pace, use the included
Python script that automagically runs the tests whenever a ``.js`` file is
changed::

    python autotest.py

Doing the linting
=================

**JSHint** is invoked with the following command::

    jshint my_file.js --config jshintconfig.json

A good tip is to try to integrate it with your editor. An example of a Vim
configuration to accomplish this::
    
    let mapleader = ","
    nnoremap <leader>l :!jshint % --config ~/.jshintconfig.json<cr>

This way, you can press **,** (comma) followed by an **l** to quickly run
JSHint on your current file.
