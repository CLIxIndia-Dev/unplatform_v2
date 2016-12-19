This bundled app requires both `python 2.7` and `node.js`. One way to achieve both is to
install `nodeenv` in a python virtualenvironment.

```
pip install -r requirements.txt
nodeenv -p
cd ui
npm install
```


===========================
Compiling the UI
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
