This bundled app requires both `python 2.7` and `node.js`. One way to achieve both is to
install `nodeenv` in a python virtualenvironment.

```
pip install -r requirements.txt
nodeenv -p
cd ui
npm install
```


===========================
Compiling the UI only (i.e. for testing)
===========================
Make sure the node packages are installed in the `ui` directory.

Then, from the project root directory (`unplatform_v2`):

```
npm run compile:ui
```

Will run `webpack` and dump the output in to the `static/ui` directory.



=============================
Bundling the Python webserver
=============================

* You MUST do this on the target platform. I.e. to bundle for Windows, run this
  on Windows.

* The bundler assumes you have access to all the CLIx repositories on GitHub.com.
  For Windows, you may have to enter your SSH passphrase for each sub-repo,
  depending on how your machine is set up.

* The bundler assumes you have a `node` installation available, along with
  `git` and various `bash` commands. On Windows, this means `git` bash, plus
  the `zip` module. See the separate document on bundling for instructions
  on how to set up your environment.

```
cd scripts/build_scripts
./build_script_<platform>.sh
```
