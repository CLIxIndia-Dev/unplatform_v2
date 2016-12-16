// Copyright (c) 2016 Walter Bender
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the The GNU Affero General Public
// License as published by the Free Software Foundation; either
// version 3 of the License, or (at your option) any later version.
//
// You should have received a copy of the GNU Affero General Public
// License along with this library; if not, write to the Free Software
// Foundation, 51 Franklin Street, Suite 500 Boston, MA 02110-1335 USA

// The trashcan is an area at the bottom of the screen where stacks of
// blocks can be dragged. Once in the trash area, they are marked as
// trash and hidden. There is a menu button that can be used to
// restore trash.
require(['activity/utils']);

var BOUNDARYWIDTH = 1200;
var BOUNDARYHEIGHT = 900;

function Boundary (canvas, stage, refreshCanvas) {
    this.canvas = canvas;
    this.stage = stage;
    this.refreshCanvas = refreshCanvas;

    this.container = new createjs.Container();


    this.resizeEvent = function(scale) {
    };

    this.stage.addChild(this.container);
    this.stage.setChildIndex(this.container, 0);

    this.setScale = function(w, h, scale) {
        this.destroy();
        this.create(w, h, scale);
    };

    this.destroy = function() {
        if (this.container.children.length > 0) {
            this.container.removeChild(this.container.children[0]);
        }
    };

    this.offScreen = function(x, y) {
        return (x < this.x || x > this.x + this.dx || y < this.y || y > this.y + this.dy);
    };

    this.create = function(w, h, scale) {
        this.w = w / scale;
        this.x = 55 + 13;
        this.dx = this.w - (110 + 26);

        this.h = h / scale;
        this.y = 55 + 13;
	this.dy = this.h - (55 + 26);

        function makeBoundary(me) {
            var img = new Image();
            img.onload = function () {
                bitmap = new createjs.Bitmap(img);
                me.container.addChild(bitmap);
            };

            img.src = 'data:image/svg+xml;base64,' + window.btoa(
                unescape(encodeURIComponent(BOUNDARY.replace('HEIGHT', me.h).replace('WIDTH', me.w).replace('Y', me.y).replace('X', me.x).replace('DY', me.dy).replace('DX', me.dx).replace('stroke_color', '#e08080'))));
        };

        makeBoundary(this);
    };

    this.hide = function() {
        this.container.visible = false;
    };

    this.show = function() {
        this.container.visible = true;
    };
};
