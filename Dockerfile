# start from base
FROM ubuntu:14.04
MAINTAINER Peter Wilkins <pwilkins@mit.edu>

# This env setting removes docker warnings
ENV DEBIAN_FRONTEND=noninteractive

# install system-wide deps for python and node
RUN apt-get -yqq update
RUN apt-get -yqq install python-pip python-dev
RUN apt-get -yqq install git
RUN apt-get -yqq install lib32z1-dev
RUN apt-get -yqq install libxslt1-dev
RUN apt-get -yqq install libffi-dev
RUN apt-get -yqq install libssl-dev

# Add Nodejs PPA
RUN apt-get -yqq install curl
RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
# Install nodejs and npm.  build-essential is for node native addons.
RUN apt-get -yqq install nodejs build-essential
# RUN apt-get -yqq install nodejs-legacy
# RUN ln -s /usr/bin/nodejs /usr/bin/node

# copy our application code
COPY unplatform /opt/unplatform/unplatform
COPY package.json /opt/unplatform
COPY ui/ /opt/unplatform/ui/
COPY docker-requirements.txt /opt/unplatform

# fetch app specific deps
WORKDIR /opt/unplatform
RUN pip install -r docker-requirements.txt

# generate the UI
RUN mkdir -p static/ui
WORKDIR ui
RUN npm install
RUN npm rebuild node-sass

WORKDIR ../.
RUN npm run compile:ui
# cp -r static/ bundle/static/

# find and copy the latest qbank executable that should be included with this release
RUN git clone -b release --single-branch git@github.com:CLIxIndia-Dev/qbank-lite-bundles.git
# cp qbank-lite-bundles/release/qbank-lite*ubuntu* ../bundle/

# generate the latest releases of each tool, from the release branch
RUN mkdir tool-repos
WORKDIR tool-repos

# Content player
RUN git clone -b release --single-branch git@github.com:CLIxIndia-Dev/content_player.git
WORKDIR content_player
RUN cp .env.example .env
RUN npm install
RUN npm run build
# mkdir ../../bundle/static/content_player
# cp -r build/prod/* ../../bundle/static/content_player/

# OEA Open Embedded Assessments
cd ..
RUN git clone -b release --single-branch git@github.com:CLIxIndia-Dev/OpenAssessmentsClient.git
WORKDIR OpenAssessmentsClient
RUN cp .env.example .env
RUN npm install
RUN npm run build
# mkdir ../../bundle/static/oea
# cp -r build/prod/* ../../bundle/static/oea/

# biomechanics grame
# cd ..
# git clone -b release --single-branch git@github.com:CLIxIndia-Dev/biomechanic.git
# rm -rf biomechanic/.git/
# mv biomechanic/ ../bundle/static/

# Physics Video player
# git clone -b release --single-branch git@github.com:CLIxIndia-Dev/physics-video-player.git
# rm -rf physics-video-player/.git/
# mv physics-video-player/ ../bundle/static/

# Audio record tool
# git clone -b release --single-branch git@github.com:CLIxIndia-Dev/audio-record-tool.git
# rm -rf audio-record-tool/.git/
# mv audio-record-tool/ ../bundle/static/

# Police Quad
# git clone -b release --single-branch git@github.com:CLIxIndia-Dev/police-quad.git
# rm -rf police-quad/.git/
# mv police-quad/ ../bundle/static/

# Open Story tool
# git clone -b release --single-branch git@github.com:CLIxIndia-Dev/open-story-tool.git
# rm -rf open-story-tool/.git/
# mv open-story-tool/ ../bundle/static/


# expose port
EXPOSE 8888

