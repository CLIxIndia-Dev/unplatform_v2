#!/bin/bash
# Builds a simple debian package, per the instructions below
#   https://web.archive.org/web/20141210051522/http://developer.ubuntu.com/2012/02/how-to-prepare-a-compiled-application-for-ubuntu-software-center/

# Run this from the ``bundle/`` directory, after bundling
#   or unzipping an ``unplatform`` bundle. It assumes that
#   all the modules and webapps data are in the bundle/ directory.

echo Getting ready to create a Debian binary of CLIx modules
echo Please make sure that all the modules and webapps data are
echo in the bundle/ directory.

BUILD_ROOT=`pwd`/../

export DEBEMAIL="contact@clix.tiss.edu"
export DEBFULLNAME="CLIx"

echo Building from $BUILD_ROOT
cd $BUILD_ROOT
rm -rf $BUILD_ROOT/clix/

echo Installing build dependencies
sudo apt-get install devscripts build-essential lintian dh-make

# Get one level above bundle/ so we can copy it in later

VERSION=$(python -c "import json; print json.load(open('package.json', 'rb'))['version']")
mkdir -p $BUILD_ROOT/clix/clix-$VERSION/source

cp $BUILD_ROOT/bundle/clix.desktop $BUILD_ROOT/clix/clix-$VERSION/
cd $BUILD_ROOT/clix/clix-$VERSION

# Create a starter debian/ directory
echo Creating Debian directory structure
dh_make -n --single -p clix-$VERSION

# Remove unnecessary templated files
rm -rf $BUILD_ROOT/clix/clix-$VERSION/debian/*.ex
rm -rf $BUILD_ROOT/clix/clix-$VERSION/debian/*.EX
rm -rf $BUILD_ROOT/clix/clix-$VERSION/debian/README.*

# Copy over our install and rules files
cp $BUILD_ROOT/bundle/install $BUILD_ROOT/clix/clix-$VERSION/debian/
cp $BUILD_ROOT/bundle/rules $BUILD_ROOT/clix/clix-$VERSION/debian/

# Modify the rules file with the current version's path
WEBAPPS="chmod 777 debian\/clix-$VERSION\/opt\/clix\/webapps"
sed -i "s/WEBAPPS_PLACEHOLDER/$WEBAPPS/g" $BUILD_ROOT/clix/clix-$VERSION/debian/rules
SQLITE3="chmod 666 debian\/clix-$VERSION\/opt\/clix\/unplatform.sqlite3*"
sed -i "s/SQLITE3_PLACEHOLDER/$SQLITE3/g" $BUILD_ROOT/clix/clix-$VERSION/debian/rules
CLIX_DIR="chmod 777 debian\/clix-$VERSION\/opt\/clix\/"
sed -i "s/CLIX_DIR_PLACEHOLDER/$CLIX_DIR/g" $BUILD_ROOT/clix/clix-$VERSION/debian/rules


# Modify the control file with website and descriptions
WEBSITE="https:\/\/clix.tiss.edu"
SHORT_DESC="Connected Learning Initiative"
LONG_DESC="Learning modules for Maths, English, and Sciences."
sed -i "s/<insert the upstream URL, if relevant>/$WEBSITE/g" $BUILD_ROOT/clix/clix-$VERSION/debian/control
sed -i "s/<insert up to 60 chars description>/$SHORT_DESC/g" $BUILD_ROOT/clix/clix-$VERSION/debian/control
sed -i "s/<insert long description, indented with spaces>/$LONG_DESC/g" $BUILD_ROOT/clix/clix-$VERSION/debian/control

# Copy all the unplatform files into the debian source directory
echo Copying the source files over
cp -rf $BUILD_ROOT/bundle/* $BUILD_ROOT/clix/clix-$VERSION/source/

# Make webapps/ directory if needed
if [ ! -d $BUILD_ROOT/clix/clix-$VERSION/source/webapps ]
then
  mkdir $BUILD_ROOT/clix/clix-$VERSION/source/webapps
fi

# Remove the huge unplatform.zip file...
rm -f $BUILD_ROOT/clix/clix-$VERSION/source/unplatform_*.zip

# Create the .deb binary
cd $BUILD_ROOT/clix/clix-$VERSION

echo Building the Debian binary. Please wait.
debuild -b

# The output should be something like ``clix/clix-$VERSION_1ubuntu1.deb``
echo Done building the Debian binary!
