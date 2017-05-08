[![Build Status](https://travis-ci.org/CLIxIndia-Dev/unplatform_v2.svg?branch=master)](https://travis-ci.org/CLIxIndia-Dev/unplatform_v2)

# Unplatform

This bundled app requires both `python 2.7` and `node.js`. One way to achieve both is to
install `nodeenv` in a python virtualenvironment.

```
pip install -r requirements.txt
nodeenv -p
cd ui
npm install
```

Once you have your environment set up, you need to build the UI elements
(see Compiling the UI section for more details).

For a first-time install, you also have to create the `sqlite` database that
will hold the web sessions.

```
python session_migration.py
```

Then you can run the local webserver:

```
python main.py
```

And in a browser, navigate to `https://localhost:8888` (note the `https` --
  `http` will *not* work!).

# Compiling the UI only (i.e. for development / testing)

Make sure the node packages are installed in the `ui` directory.

Then, from the project root directory (`unplatform_v2`):

```
npm run compile:ui
```

Will run `webpack` and dump the output in to the `static/ui` directory.



# Bundling the Python webserver

* You MUST do this on the target platform. I.e. to bundle for Windows, run this
  on Windows.

* The bundler assumes you have access to all the CLIx repositories on GitHub.com.
  For Windows, you may have to enter your SSH passphrase for each sub-repo,
  depending on how your machine is set up. (Use `ssh-agent` to eliminate this
  irritation.)

* The bundler assumes you have a `node` installation available, along with
  `git` and various `bash` commands. On Windows, this means `git` bash, plus
  the `zip` module. See the separate document on bundling for instructions
  on how to set up your environment.

```
cd scripts/build_scripts
./build_script_<platform>.sh
```

# Running tests

You can run tests locally from the command line.  Tests are also run through
the ``travis-ci`` continuous integration service each time a commit is pushed
to the repository.

The test suite includes unit tests, pylint analysis, pep8 compliance, and
test coverage.

Run the test suite with this command:

```bash
pytest
```

Test options are configured in ``pytest.ini``.  Some options specific to each
test harness plugin are configured in their dedicated files.

Code coverage is configured in ``.coveragerc``.  You can view the detailed
coverage report by opening ``htmlcov/index.html`` in your browser.

Pep8 is configured in ``pytest.ini``.

Pylint is configured in ``.pylintrc``.


# ACKNOWLEDGEMENTS
This software uses many third-party software packages, and the authors are grateful
for every one. The majority can be found listed in `ui/package.json` or `requirements.txt`.
All third-party software remains copyright by the respective author(s) and may have
different license requirements than this software.

In addition, the authors would like to acknowledge the use of the following packages:

## Front-end CSS / fonts
- Font Awesome
- Rich Clark / Eric Meyer (HTML5 reset CSS; CC BY-NC 2.0 UK)
- Graham Miller (Responsive Grid System; CC BY 3.0)
- Font Squirrel (OpenSans fonts; licensed Apache V2)
- Joe Prince, Adminx Designs (Varela; SIL OPEN FONT LICENSE Version 1.1)

## Python libraries:
- PyOpenSSL (Apache v2)
- Cryptography (Apache v2)
- Requests (Apache v2)
