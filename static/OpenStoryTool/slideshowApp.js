///<reference path="libs/jquery.d.ts" />
///<reference path="libs/jqueryui.d.ts" />
window.onload = function () {
    var el = document.getElementById("content");
    var slideApp = new Slideshow.SlideshowApp(el);
};
var Slideshow;
(function (Slideshow) {
    var Audio = (function () {
        function Audio(audioElement) {
            this.isRecording = false;
            var ContextClass = window.AudioContext || window.webkitAudioContext;
            this.context = new ContextClass();
            this.navigator = window.navigator;
            this.audioElement = audioElement;
        }
        Audio.prototype.setStream = function (stream) {
            this.audioStream = stream;
            var streamSource = this.context.createMediaStreamSource(stream);
            this.recorder = new Recorder(streamSource, { workerPath: "libs/recorderWorker.js" });
            var event = new Event('audio_ready');
            document.dispatchEvent(event);
        };
        Audio.prototype.getTime = function () {
            return this.context.currentTime;
        };
        Audio.prototype.record = function () {
            this.recorder.clear();
            this.recorder.record();
            this.isRecording = true;
        };
        Audio.prototype.stopRecording = function () {
            var _this = this;
            this.recorder.stop();
            this.isRecording = false;
            this.recorder.exportWAV(function (blob) {
                _this.load(blob);
            });
        };
        Audio.prototype.load = function (blob) {
            if (blob) {
                this.audioBlob = blob;
                this.audioElement.src = URL.createObjectURL(blob);
            }
        };
        Audio.prototype.play = function () {
            this.audioElement.play();
        };
        Audio.prototype.pause = function () {
            this.audioElement.pause();
        };
        Audio.prototype.stop = function () {
            this.audioElement.pause();
            this.audioElement.currentTime = 0;
        };
        Audio.prototype.clear = function () {
            if (this.recorder) {
                this.recorder.clear();
            }
            this.audioBlob = null;
            this.audioElement.src = "";
        };
        return Audio;
    })();
    Slideshow.Audio = Audio;
})(Slideshow || (Slideshow = {}));
var Slideshow;
(function (Slideshow) {
    var Data = (function () {
        function Data() {
            this.session = "";
            this.remoteLocation = "";
            this.events = [];
        }
        Data.prototype.startSession = function () {
            try {
                this.session = Slideshow.Utils.getCookie("session_uuid");
            }
            catch (e) {
                console.log("Cannot get session id cookie");
            }
        };
        Data.prototype.logEvent = function (eventName, params) {
            if (params === void 0) { params = {}; }
            var event = new SlideshowEvent();
            event.event_type = eventName;
            event.session_id = this.session;
            if (params != null && params != {}) {
                event.params = JSON.stringify(params);
            }
            this.events.push(event);
            if (this.session != "" && this.remoteLocation != "") {
                var xhr = new XMLHttpRequest();
                xhr.open('POST', this.remoteLocation, true);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.send(JSON.stringify(event));
            }
        };
        return Data;
    })();
    Slideshow.Data = Data;
    var SlideshowEvent = (function () {
        function SlideshowEvent() {
            this.app_name = "OpenStory";
        }
        return SlideshowEvent;
    })();
    Slideshow.SlideshowEvent = SlideshowEvent;
    (function (SlideshowEventType) {
        // 15 character limit in database
        SlideshowEventType[SlideshowEventType["NEW_SESSION"] = "new_session"] = "NEW_SESSION";
        // params: filename, gallery
        SlideshowEventType[SlideshowEventType["FILE_CREATED"] = "file_created"] = "FILE_CREATED";
        SlideshowEventType[SlideshowEventType["FILE_OPENED"] = "file_opened"] = "FILE_OPENED";
        // params: filename, file_session_id
        SlideshowEventType[SlideshowEventType["FILE_SAVED"] = "file_saved"] = "FILE_SAVED";
        // params: filename
        SlideshowEventType[SlideshowEventType["TEMPLATE_SAVED"] = "template_saved"] = "TEMPLATE_SAVED";
        // params: filename
        SlideshowEventType[SlideshowEventType["SLIDESHOW_EXPORTED"] = "show_exported"] = "SLIDESHOW_EXPORTED";
        // params: filename
        // All events below also contain a "slide" param
        SlideshowEventType[SlideshowEventType["SLIDESHOW_PLAYED"] = "show_played"] = "SLIDESHOW_PLAYED";
        // params: index
        SlideshowEventType[SlideshowEventType["SLIDESHOW_PAUSED"] = "show_paused"] = "SLIDESHOW_PAUSED";
        // params: index
        SlideshowEventType[SlideshowEventType["SLIDE_ADDED"] = "slide_added"] = "SLIDE_ADDED";
        SlideshowEventType[SlideshowEventType["SLIDE_DELETED"] = "slide_deleted"] = "SLIDE_DELETED";
        SlideshowEventType[SlideshowEventType["SLIDE_LOCKED"] = "slide_locked"] = "SLIDE_LOCKED";
        SlideshowEventType[SlideshowEventType["SLIDE_UNLOCKED"] = "slide_unlocked"] = "SLIDE_UNLOCKED";
        SlideshowEventType[SlideshowEventType["SLIDE_DUPLICATED"] = "slide_duped"] = "SLIDE_DUPLICATED";
        SlideshowEventType[SlideshowEventType["SLIDE_EDITED"] = "slide_edited"] = "SLIDE_EDITED";
        SlideshowEventType[SlideshowEventType["SLIDE_MOVED"] = "slide_moved"] = "SLIDE_MOVED";
        // params: prevIndex, newIndex
        SlideshowEventType[SlideshowEventType["IMAGE_ADDED"] = "image_added"] = "IMAGE_ADDED";
        // params: source, filename
        SlideshowEventType[SlideshowEventType["AUDIO_ADDED"] = "audio_added"] = "AUDIO_ADDED";
        // params: source, length
        SlideshowEventType[SlideshowEventType["CAPTION_EDITED"] = "caption_edited"] = "CAPTION_EDITED";
        // params: value
        SlideshowEventType[SlideshowEventType["DURATION_EDITED"] = "duration_edited"] = "DURATION_EDITED";
        // params: value
        SlideshowEventType[SlideshowEventType["ELEMENT_LOCKED"] = "element_locked"] = "ELEMENT_LOCKED";
        // params: element(image|audio|caption|duration)
        SlideshowEventType[SlideshowEventType["ELEMENT_UNLOCKED"] = "element_unlocked"] = "ELEMENT_UNLOCKED";
        // params: element(image|audio|caption|duration)
        SlideshowEventType[SlideshowEventType["SLIDE_CLOSED"] = "slide_closed"] = "SLIDE_CLOSED";
    })(Slideshow.SlideshowEventType || (Slideshow.SlideshowEventType = {}));
    var SlideshowEventType = Slideshow.SlideshowEventType;
})(Slideshow || (Slideshow = {}));
var Slideshow;
(function (Slideshow) {
    var Gallery = (function () {
        function Gallery(element, filenames, fileLocation) {
            if (filenames === void 0) { filenames = []; }
            if (fileLocation === void 0) { fileLocation = ""; }
            this.container = $(element);
            this.filenames = filenames;
            this.location = fileLocation;
        }
        Gallery.prototype.createDom = function () {
            var _this = this;
            this.controlBar = $('<div/>').addClass('controlBar');
            this.container.append(this.controlBar);
            var closeBtn = $('<button><i class="fa fa-times-circle"></i></button>').addClass('closeBtn').attr('id', 'galleryCloseBtn').click(function () {
                if (_this.closeHandler) {
                    _this.closeHandler();
                }
            });
            this.controlBar.append(closeBtn);
            this.content = $('<div/>').addClass('content');
            this.container.append(this.content);
            if (this.filenames.length > 0) {
                this.populate();
            }
        };
        Gallery.prototype.populate = function () {
            var _this = this;
            for (var i = 0; i < this.filenames.length; i++) {
                var file = this.filenames[i];
                var imgDiv = $('<div/>');
                imgDiv.addClass('imgBlock');
                var img = $('<img>');
                img.attr('src', this.location + file);
                imgDiv.append(img);
                var lbl = $('<div/>');
                lbl.text(file);
                imgDiv.append(lbl);
                this.content.append(imgDiv);
                img.click({ img: img[0] }, function (event) {
                    if (_this.selectHandler) {
                        _this.selectHandler.call(null, event.data.img.src);
                    }
                });
            }
        };
        return Gallery;
    })();
    Slideshow.Gallery = Gallery;
})(Slideshow || (Slideshow = {}));
var Slideshow;
(function (Slideshow) {
    var PlaybackEvent = (function () {
        function PlaybackEvent() {
        }
        PlaybackEvent.START = "playback_start";
        PlaybackEvent.NEXT = "playback_next";
        PlaybackEvent.PAUSE = "playback_pause";
        PlaybackEvent.FINISH = "playback_finish";
        return PlaybackEvent;
    })();
    Slideshow.PlaybackEvent = PlaybackEvent;
    var Playback = (function () {
        function Playback(show, startIndex) {
            if (startIndex === void 0) { startIndex = 0; }
            this.playing = false;
            this.show = show;
            this.curSlide = startIndex - 1;
        }
        Playback.prototype.start = function () {
            this.nextSlide();
            this.playing = true;
            var event = new Event(PlaybackEvent.START);
            document.dispatchEvent(event);
        };
        Playback.prototype.pause = function () {
            clearTimeout(this.timerID);
            this.curSlide--;
            this.playing = false;
            var event = new Event(PlaybackEvent.PAUSE);
            document.dispatchEvent(event);
        };
        Playback.prototype.stop = function () {
            clearTimeout(this.timerID);
            this.curSlide = -1;
            this.playing = false;
            var event = new Event(PlaybackEvent.FINISH);
            document.dispatchEvent(event);
        };
        Playback.prototype.nextSlide = function () {
            var _this = this;
            if (this.curSlide >= this.show.getLength() - 1) {
                this.stop();
                return;
            }
            this.curSlide++;
            var slide = this.show.getSlideAt(this.curSlide);
            this.timerID = window.setTimeout(function () {
                _this.nextSlide();
            }, slide.duration * 1000);
            // trigger img/text/audio update, selected slide indicator
            var event = new Event(PlaybackEvent.NEXT);
            document.dispatchEvent(event);
        };
        return Playback;
    })();
    Slideshow.Playback = Playback;
})(Slideshow || (Slideshow = {}));
var Slideshow;
(function (Slideshow) {
    var SlideControl = (function () {
        function SlideControl() {
            this.createDom();
        }
        SlideControl.prototype.createDom = function () {
            this.element = $("<div/>").addClass("slideControl");
            this.order = $("<div/>").addClass("orderCol");
            this.element.append(this.order);
            this.editBtn = $("<button></button>").addClass("iconBtn slideControl-editBtn").append($("<img src='icons/pencil.icon.png'/>"));
            this.element.append(this.editBtn);
            this.lockBtn = $("<button></button>").addClass("iconBtn slideControl-lockBtn").addClass("lockToggleBtn").append('<i class="fa fa-unlock-alt" > </i>');
            this.element.append(this.lockBtn);
            this.image = $("<img/>").addClass("slideControl-img");
            var imgHolder = $("<div></div>").addClass("ctrlImgHolder");
            imgHolder.append(this.image);
            this.element.append(imgHolder);
            this.dragHandle = $("<div/>").addClass("slide-drag-handle").append($("<img src='icons/move.icon.png'/>"));
            this.duplicateBtn = $("<button></button>").addClass("iconBtn slideControl-dupBtn").append($("<img src='icons/duplicate.icon.png'/>"));
            this.deleteBtn = $("<button></button>").addClass("iconBtn slideControl-delBtn").append($("<img src='icons/trash.icon.png'/>"));
            this.element.append(this.duplicateBtn);
            this.element.append(this.deleteBtn);
            this.element.append(this.dragHandle);
            this.deleteModal = $("<div title='Delete this slide?'></div>").addClass("deleteModal").append("<h3>Delete this slide?</h3>");
            this.deleteConfirmBtn = $("<button>Delete</button>").addClass("textBtn");
            this.deleteCancelBtn = $("<button>Cancel</button>").addClass("textBtn");
            this.deleteModal.append(this.deleteConfirmBtn);
            this.deleteModal.append(this.deleteCancelBtn);
            this.element.append(this.deleteModal);
            this.deleteModal.addClass("hidden");
        };
        SlideControl.prototype.setImageSrc = function (src) {
            if (src && src != "undefined" && src != "") {
                this.image.attr("src", src);
            }
            else {
                this.image.removeAttr("src");
            }
            return src;
        };
        SlideControl.prototype.setOrder = function (order) {
            this.order.text(order.toString());
        };
        SlideControl.prototype.getImageSrc = function () {
            return this.image.attr("src");
        };
        SlideControl.prototype.getElement = function () {
            return this.element[0];
        };
        SlideControl.prototype.select = function () {
            this.element.addClass("selected");
        };
        SlideControl.prototype.deselect = function () {
            this.element.removeClass("selected");
        };
        return SlideControl;
    })();
    Slideshow.SlideControl = SlideControl;
})(Slideshow || (Slideshow = {}));
var Slideshow;
(function (Slideshow) {
    var SlideEditor = (function () {
        function SlideEditor() {
            this.createDom();
        }
        SlideEditor.prototype.createDom = function () {
            this.element = $("<div/>").addClass("slideEditor");
            this.titleInput = $("<input type='text'/>").val("# characters limit");
            var titleDiv = $("<div></div>").text("Title: ").append(this.titleInput);
            this.element.append(titleDiv);
            var imgUploadBtn = $("<button><i class='fa fa-upload'/></button>");
            var imgDiv = $("<div/>");
            this.saveBtn = $("<button>Save Slide</button>").addClass("slideEditor-saveBtn");
            this.element.append(this.saveBtn);
            this.closeBtn = $("<button>Close</button>").addClass("slideEditor-closeBtn");
            this.element.append(this.closeBtn);
        };
        return SlideEditor;
    })();
    Slideshow.SlideEditor = SlideEditor;
})(Slideshow || (Slideshow = {}));
var Slideshow;
(function (Slideshow) {
    var Show = (function () {
        function Show() {
            this.slideIds = [];
            this.slides = {};
            this.slideInc = 1;
        }
        Show.prototype.nextId = function () {
            var id = 'slide' + this.slideInc.toString();
            this.slideInc += 1;
            return id;
        };
        Show.prototype.addSlide = function (slide) {
            this.slideIds.push(slide.id);
            this.slides[slide.id] = slide;
        };
        Show.prototype.addSlideAt = function (slide, index) {
            this.slideIds.splice(index, 0, slide.id);
            this.slides[slide.id] = slide;
        };
        Show.prototype.removeSlide = function (id) {
            this.slideIds.splice(this.slideIds.indexOf(id), 1);
            delete this.slides[id];
        };
        Show.prototype.getSlide = function (id) {
            for (var slideId in this.slides) {
                var slide = this.slides[slideId];
                if (slide.id == id) {
                    return slide;
                }
            }
            return null;
        };
        Show.prototype.getSlideAt = function (index) {
            return this.slides[this.slideIds[index]];
        };
        Show.prototype.getSlideIndex = function (slide) {
            return this.slideIds.indexOf(slide.id);
        };
        Show.prototype.getLength = function () {
            return this.slideIds.length;
        };
        Show.prototype.prepForSave = function () {
            var _this = this;
            this.totalAudioClips = 0;
            this.processedAudioClips = 0;
            for (var id in this.slides) {
                var slide = this.slides[id];
                if (slide.audio) {
                    this.totalAudioClips++;
                    var audioReader = new FileReader();
                    (function (reader, j) {
                        reader.addEventListener('loadend', function () {
                            _this.slides[j].audioData = reader.result;
                            _this.processedAudioClips++;
                            if (_this.processedAudioClips === _this.totalAudioClips) {
                                var event = new Event('audio_processed');
                                document.dispatchEvent(event);
                            }
                        });
                    })(audioReader, id);
                    audioReader.readAsArrayBuffer(slide.audio);
                }
            }
            if (this.totalAudioClips == 0) {
                var event = new Event('audio_processed');
                document.dispatchEvent(event);
            }
        };
        return Show;
    })();
    Slideshow.Show = Show;
    (function (SlideField) {
        SlideField[SlideField["Image"] = 0] = "Image";
        SlideField[SlideField["Audio"] = 1] = "Audio";
        SlideField[SlideField["Caption"] = 2] = "Caption";
        SlideField[SlideField["Duration"] = 3] = "Duration";
    })(Slideshow.SlideField || (Slideshow.SlideField = {}));
    var SlideField = Slideshow.SlideField;
    var Slide = (function () {
        function Slide() {
            this.image = "";
            this.imageName = "";
            this.text = "";
            this.lockedFields = [];
            this.duration = 6;
            this.lockedFields[0 /* Image */] = false;
            this.lockedFields[1 /* Audio */] = false;
            this.lockedFields[2 /* Caption */] = false;
            this.lockedFields[3 /* Duration */] = false;
        }
        Slide.prototype.hasLockedFields = function () {
            var val = this.lockedFields[0 /* Image */] || this.lockedFields[1 /* Audio */] || this.lockedFields[2 /* Caption */] || this.lockedFields[3 /* Duration */];
            return val;
        };
        Slide.prototype.clone = function () {
            var clone = new Slide();
            clone.image = this.image;
            clone.text = this.text;
            clone.audio = this.audio;
            clone.audioData = this.audioData;
            clone.locked = this.locked;
            clone.lockedFields = this.lockedFields.slice();
            clone.duration = this.duration;
            return clone;
        };
        return Slide;
    })();
    Slideshow.Slide = Slide;
})(Slideshow || (Slideshow = {}));
/// <reference path='libs/jquery.d.ts'/>
/// <reference path='libs/jquery.i18n.d.ts'/>
var Slideshow;
(function (Slideshow) {
    var Localization = (function () {
        function Localization() {
        }
        Localization.prototype.init = function () {
            var i18n = $.i18n();
            var language; //, person, kittens, message, gender;
            // Enable debug
            i18n.debug = true;
            /*
            message = '$1 has $2 {{plural:$2|kitten|kittens}}. '
                + '{{gender:$3|He|She}} loves to play with {{plural:$2|it|them}}.';
            language = $('.language option:selected').val();
            person = $('.person option:selected').text();
            gender = $('.person option:selected').val();
            kittens = $('.kittens').val();
            */
            //i18n.locale = "es";
            //console.log("locale: " + i18n.locale);
            i18n.load('i18n/' + i18n.locale + '.json', i18n.locale).done(function () {
                //console.log("i18n locale file loaded");
                $("span[data-i18n]").each(function (index, elem) {
                    var id = $(elem).attr("data-i18n");
                    //console.log(id + ":" + $.i18n(id));
                    $(elem).text($.i18n(id));
                });
                //var personName = $.i18n(person), localizedMessage = $.i18n(message, personName,
                //    kittens, gender);
                //$('.result').text(localizedMessage).prop('title', message.toLocaleString());
            });
        };
        return Localization;
    })();
    Slideshow.Localization = Localization;
})(Slideshow || (Slideshow = {}));
/// <reference path='localization.ts'/>
var Slideshow;
(function (Slideshow) {
    var State;
    (function (State) {
        State[State["Init"] = 0] = "Init";
        State[State["Ready"] = 1] = "Ready";
        State[State["Loading"] = 2] = "Loading";
        State[State["Show"] = 3] = "Show";
        State[State["Slide"] = 4] = "Slide";
        State[State["SlideCam"] = 5] = "SlideCam";
        State[State["SlideAudio"] = 6] = "SlideAudio";
        State[State["Play"] = 7] = "Play";
    })(State || (State = {}));
    ;
    var FileMode;
    (function (FileMode) {
        FileMode[FileMode["W"] = 0] = "W";
        FileMode[FileMode["T"] = 1] = "T";
        FileMode[FileMode["V"] = 2] = "V";
    })(FileMode || (FileMode = {}));
    ;
    var SlideshowApp = (function () {
        function SlideshowApp(element) {
            var _this = this;
            this.workMode = 0 /* W */;
            this.exportMode = 0 /* W */;
            this.isLoadingShow = true;
            this.slideThumbs = {};
            this.maxSlides = 20;
            this.maxAudioTime = 40;
            this.state = 0 /* Init */;
            this.show = new Slideshow.Show();
            this.ui = new Slideshow.UI(element);
            this.data = new Slideshow.Data();
            this.data.remoteLocation = "/api/appdata/";
            this.data.startSession();
            var startParams = {};
            var startingFile = Slideshow.Utils.getUrlVars()["file"];
            if (startingFile != null && startingFile != "") {
                this.loadShowURL(Slideshow.Utils.getParentURL() + startingFile);
                startParams["filename"] = startingFile;
            }
            this.imgFolder = Slideshow.Utils.getUrlVars()["gallery"];
            if (this.imgFolder == undefined) {
                this.imgFolder = "";
            }
            else {
                startParams["gallery"] = this.imgFolder;
                this.imgFolder = this.imgFolder + "/";
            }
            var jqXHR = $.getJSON("images/" + this.imgFolder, function (json) {
                _this.loadGallery(json);
            }).fail(function () {
                $.getJSON("images/files.json", function (json) {
                    _this.loadGallery(json);
                });
            });
            this.data.logEvent(Slideshow.SlideshowEventType.NEW_SESSION, startParams);
            this.audio = new Slideshow.Audio(this.ui.recordedAudio);
            $(this.ui.loadPictureBtn).on('click', function () {
                _this.setState(4 /* Slide */);
                // trigger open file dialog
                _this.ui.imgFileInput.click();
            });
            $(this.ui.useWebcamBtn).on('click', function () {
                if (!_this.webcam || !_this.webcam.streaming) {
                    _this.initMedia(function () {
                        _this.useWebcam();
                        _this.setState(5 /* SlideCam */);
                    });
                }
                else {
                    _this.useWebcam();
                    _this.setState(5 /* SlideCam */);
                }
            });
            $("#takePictureBtn").on('click', function () {
                _this.takePicture();
                _this.setState(4 /* Slide */);
            });
            $("#cancelPictureBtn").on('click', function () {
                _this.setState(4 /* Slide */);
            });
            $("#imgFileInput").on("change", function () {
                _this.loadUserImageFile(_this.ui.imgFileInput.files[0]);
            });
            $("#galleryBtn").on("click", function () {
                _this.ui.showGallery();
            });
            $("#loadAudioBtn").on('click', function () {
                $("#audioFileInput")[0].click();
                _this.setState(6 /* SlideAudio */);
            });
            $("#audioFileInput").on("change", function () {
                _this.loadUserAudioFile($("#audioFileInput")[0].files[0]);
            });
            $("#recordAudioBtn").on('click', function () {
                if (!_this.webcam || !_this.webcam.streaming) {
                    _this.initMedia(function () {
                        _this.setState(6 /* SlideAudio */);
                    });
                }
                else {
                    _this.setState(6 /* SlideAudio */);
                }
            });
            $("#toggleRecordBtn").on('click', function () {
                if (!_this.audio.isRecording) {
                    _this.startRecording();
                }
                else {
                    _this.stopRecording();
                }
            });
            $(this.ui.deleteAudioBtn).on('click', function () {
                _this.audio.clear();
                _this.workingSlide.audio = null;
                _this.workingSlide.audioData = null;
                $("#audioFilename").addClass("hidden");
            });
            $(this.ui.captionInput).on('change', function () {
                $(_this.ui.captionHolder).html(Slideshow.Utils.toHTML(_this.ui.captionInput.value));
                _this.data.logEvent(Slideshow.SlideshowEventType.CAPTION_EDITED, { 'value': _this.ui.captionInput.value });
            });
            $(this.ui.durationInput).on('change', function () {
                _this.data.logEvent(Slideshow.SlideshowEventType.DURATION_EDITED, { 'value': _this.ui.durationInput.value });
            });
            $(this.ui.newShowBtn).on('click', function () {
                _this.checkForSave(function () {
                    _this.newShow();
                });
            });
            $(this.ui.loadShowBtn).on('click', function () {
                _this.checkForSave(function () {
                    // trigger file open dialog
                    _this.ui.slideFileInput.click();
                });
            });
            $(this.ui.saveShowBtn).on('click', function () {
                _this.exportMode = 0 /* W */;
                _this.saveSlides();
            });
            $("#saveTemplateBtn").on("click", function () {
                _this.exportMode = 1 /* T */;
                _this.saveSlides();
            });
            $(this.ui.exportShowBtn).on('click', function () {
                _this.exportMode = 2 /* V */;
                _this.saveSlides();
            });
            this.ui.slideFileInput.onchange = function () {
                var file = _this.ui.slideFileInput.files[0];
                _this.loadShowFile(file);
            };
            $(this.ui.addSlideBtn).on('click', function () {
                if (_this.show.getLength() < _this.maxSlides) {
                    _this.addSlide();
                    _this.setSlide(_this.curSlide.id);
                }
            });
            $(this.ui.playShowBtn).on('click', function () {
                if (!_this.playback) {
                    _this.playShow();
                }
                else if (!_this.playback.playing) {
                    _this.resumeShow();
                }
                else {
                    _this.pauseShow();
                }
            });
            $("#saveSlideBtn").on("click", function () {
                _this.updateSlide();
                _this.setState(3 /* Show */);
                _this.data.logEvent(Slideshow.SlideshowEventType.SLIDE_CLOSED, { 'saved': 'true' });
            });
            $("#cancelSlideBtn").on("click", function () {
                _this.workingSlide = null;
                _this.ui.slideImg.src = _this.curSlide.image;
                _this.setState(3 /* Show */);
                _this.ui.setEditLocks(_this.curSlide.lockedFields, _this.workMode == 1 /* T */);
                _this.data.logEvent(Slideshow.SlideshowEventType.SLIDE_CLOSED, { 'saved': 'false' });
            });
            $(this.ui.slideRoll).sortable({
                containment: this.ui.slideRoll.parentElement,
                stop: function (e, ui) {
                    var target = $(e.originalEvent.target).closest('div[id^="slide"');
                    var slideId = target.attr('id');
                    var slide = _this.show.getSlide(slideId);
                    var prevIndex = _this.show.getSlideIndex(slide);
                    _this.updateSlideOrder();
                    var newIndex = _this.show.getSlideIndex(slide);
                    _this.data.logEvent(Slideshow.SlideshowEventType.SLIDE_MOVED, { 'slide': slideId, 'prevIndex': prevIndex, 'newIndex': newIndex });
                }
            });
            $(this.ui.slideEditor).addClass("hidden");
            $('#lockImgBtn').on('click', function (e) {
                if (_this.workMode != 1 /* T */) {
                    var val = _this.workingSlide.lockedFields[0 /* Image */] = !_this.workingSlide.lockedFields[0 /* Image */];
                    _this.ui.toggleLock($(e.currentTarget));
                    var eventType = val ? Slideshow.SlideshowEventType.ELEMENT_LOCKED : Slideshow.SlideshowEventType.ELEMENT_UNLOCKED;
                    _this.data.logEvent(eventType, { 'element': 'image' });
                }
            });
            $('#lockAudioBtn').on('click', function (e) {
                if (_this.workMode != 1 /* T */) {
                    var val = _this.workingSlide.lockedFields[1 /* Audio */] = !_this.workingSlide.lockedFields[1 /* Audio */];
                    _this.ui.toggleLock($(e.currentTarget));
                    var eventType = val ? Slideshow.SlideshowEventType.ELEMENT_LOCKED : Slideshow.SlideshowEventType.ELEMENT_UNLOCKED;
                    _this.data.logEvent(eventType, { 'element': 'audio' });
                }
            });
            $('#lockCaptionBtn').on('click', function (e) {
                if (_this.workMode != 1 /* T */) {
                    var val = _this.workingSlide.lockedFields[2 /* Caption */] = !_this.workingSlide.lockedFields[2 /* Caption */];
                    _this.ui.toggleLock($(e.currentTarget));
                    var eventType = val ? Slideshow.SlideshowEventType.ELEMENT_LOCKED : Slideshow.SlideshowEventType.ELEMENT_UNLOCKED;
                    _this.data.logEvent(eventType, { 'element': 'caption' });
                }
            });
            $('#lockDurationBtn').on('click', function (e) {
                if (_this.workMode != 1 /* T */) {
                    var val = _this.workingSlide.lockedFields[3 /* Duration */] = !_this.workingSlide.lockedFields[3 /* Duration */];
                    _this.ui.toggleLock($(e.currentTarget));
                    var eventType = val ? Slideshow.SlideshowEventType.ELEMENT_LOCKED : Slideshow.SlideshowEventType.ELEMENT_UNLOCKED;
                    _this.data.logEvent(eventType, { 'element': 'duration' });
                }
            });
            $('#deleteImgBtn').on('click', function (e) {
                _this.workingSlide.image = _this.ui.slideImg.src = "";
                $('#imgFilename').addClass('hidden');
            });
            this.localization = new Slideshow.Localization();
            this.localization.init();
            this.addSlide();
            this.isLoadingShow = false;
        }
        SlideshowApp.prototype.loadGallery = function (json) {
            var _this = this;
            var files = json["files"];
            this.gallery = new Slideshow.Gallery($("#gallery")[0], files, "images/" + this.imgFolder);
            this.gallery.createDom();
            this.gallery.selectHandler = function (param) {
                _this.onGallerySelect(param);
            };
            this.gallery.closeHandler = function () {
                _this.ui.hideGallery();
            };
        };
        SlideshowApp.prototype.initMedia = function (callback) {
            var _this = this;
            navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
            navigator.getMedia({
                video: true,
                audio: true
            }, function (stream) {
                _this.webcam = new Slideshow.Webcam(stream, _this.ui.camVideo, _this.ui.camCanvas);
                _this.audio.setStream(stream);
                document.addEventListener('audio_ready', function () {
                    console.log('audio_ready');
                });
                _this.setState(1 /* Ready */);
                callback();
            }, function (error) {
                console.log("Webcam not accessible: " + error.message);
            });
        };
        SlideshowApp.prototype.clearAll = function () {
            $(this.ui.slideRoll).empty();
            this.ui.slideImg.src = "";
            this.show = new Slideshow.Show();
            this.slideThumbs = {};
            $("#nameTxtInput").val("");
            this.ui.setEditLocks([false, false, false, false], false);
            this.setState(3 /* Show */);
            this.addSlide();
        };
        SlideshowApp.prototype.checkForSave = function (callback) {
            var _this = this;
            if (this.workMode == 2 /* V */) {
                callback();
                return;
            }
            this.ui.showDialog("Hey, you're about to open a new slideshow.<br> Save this slideshow first?", [
                {
                    text: "OK",
                    fn: function () {
                        _this.exportMode = 0 /* W */;
                        _this.saveSlides(function () {
                            callback();
                        });
                    }
                },
                {
                    text: "Don't Save",
                    fn: function () {
                        callback();
                    }
                },
                {
                    text: "Cancel",
                    fn: function () {
                    }
                }
            ]);
        };
        SlideshowApp.prototype.newShow = function () {
            this.workMode = 0 /* W */;
            this.setWorkMode(0 /* W */);
            // prevent slide_added event from firing
            this.isLoadingShow = true;
            this.clearAll();
            this.isLoadingShow = false;
            this.data.logEvent(Slideshow.SlideshowEventType.FILE_CREATED);
        };
        SlideshowApp.prototype.setWorkMode = function (mode) {
            switch (mode) {
                case 0 /* W */:
                    $("#saveShowBtn").removeClass("hidden");
                    $("#saveTemplateBtn").removeClass("hidden");
                    $("#exportShowBtn").removeClass("hidden");
                    break;
                case 1 /* T */:
                    $("#saveShowBtn").removeClass("hidden");
                    $("#saveTemplateBtn").removeClass("hidden");
                    $("#exportShowBtn").removeClass("hidden");
                    break;
                case 2 /* V */:
                    $("#slideRollHolder").addClass("hidden");
                    $("#saveShowBtn").addClass("hidden");
                    $("#saveTemplateBtn").addClass("hidden");
                    $("#exportShowBtn").addClass("hidden");
                    break;
            }
        };
        SlideshowApp.prototype.setState = function (newState) {
            if (this.state != newState) {
                switch (this.state) {
                    case 6 /* SlideAudio */:
                        if (this.curSlide.audio == null) {
                            $("#recordedAudio").addClass("hidden");
                        }
                        $("#recordAudioControls").addClass("hidden");
                        break;
                    case 5 /* SlideCam */:
                        $("#takePictureBtn").addClass("hidden");
                        $("#cancelPictureBtn").addClass("hidden");
                        this.ui.useWebcamBtn.disabled = false;
                        $("#camVideo").addClass("hidden");
                        if (this.webcam && this.webcam.streaming) {
                            this.webcam.stop();
                        }
                        break;
                    default:
                        break;
                }
            }
            switch (newState) {
                case 1 /* Ready */:
                    break;
                case 4 /* Slide */:
                    $("#playShowBtn").addClass("hidden");
                    $("#slideRollHolder").addClass("hidden");
                    $("#slideEditor").removeClass("hidden");
                    $("#takePictureBtn").addClass("hidden");
                    if (this.curSlide.audio != null) {
                        $("#recordedAudio").removeClass("hidden");
                    }
                    $("#recordAudioBtn").removeClass("disabled");
                    break;
                case 6 /* SlideAudio */:
                    $("#recordAudioBtn").addClass("disabled");
                    $("#takePictureBtn").addClass("hidden");
                    $("#recordedAudio").removeClass("hidden");
                    $("#recordAudioControls").removeClass("hidden");
                    break;
                case 5 /* SlideCam */:
                    $("#takePictureBtn").removeClass("hidden");
                    $("#cancelPictureBtn").removeClass("hidden");
                    break;
                case 3 /* Show */:
                    $("#slideEditor").addClass("hidden");
                    $("#recordAudioControls").addClass("hidden");
                    $("#takePictureBtn").addClass("hidden");
                    $("#recordedAudio").addClass("hidden");
                    $("#slideRollHolder").removeClass("hidden");
                    $("#playShowBtn").removeClass("hidden");
                    if (this.webcam) {
                        this.webcam.stop();
                    }
                    break;
            }
            this.state = newState;
        };
        SlideshowApp.prototype.updateSlideOrder = function () {
            var children = $(this.ui.slideRoll).children();
            for (var i = 0; i < children.length; i++) {
                var child = children[i];
                var slide = this.show.getSlide(child.id);
                this.show.removeSlide(child.id);
                this.show.addSlideAt(slide, i);
                var thumb = this.slideThumbs[slide.id];
                thumb.setOrder(i + 1);
            }
        };
        SlideshowApp.prototype.loadUserAudioFile = function (file) {
            var _this = this;
            if (file.type.substring(0, 5) != 'audio') {
                // TODO: show error msg
                console.log('invalid audio file');
                return;
            }
            var reader = new FileReader();
            reader.onload = function (e) {
                var file = e.target.result;
                var dataview = new DataView(file);
                _this.workingSlide.audio = new Blob([dataview], { type: 'audio/wav' });
                _this.audio.load(_this.workingSlide.audio);
            };
            reader.readAsArrayBuffer(file);
            this.ui.setFilename($("#audioFilename"), this.curSlide.id + "audio.wav");
            this.data.logEvent(Slideshow.SlideshowEventType.AUDIO_ADDED, { 'source': 'computer' });
        };
        SlideshowApp.prototype.loadUserImageFile = function (file) {
            var _this = this;
            if (file.type.substring(0, 5) != 'image') {
                // TODO: show error msg
                console.log('invalid image type');
                return;
            }
            var reader = new FileReader();
            reader.onload = function (e) {
                _this.workingSlide.image = _this.ui.slideImg.src = e.target.result;
                _this.ui.imgFileInput.value = null;
            };
            reader.readAsDataURL(file);
            this.ui.setFilename($("#imgFilename"), this.curSlide.id + "img.png");
            this.data.logEvent(Slideshow.SlideshowEventType.IMAGE_ADDED, { 'source': 'computer' });
        };
        SlideshowApp.prototype.onGallerySelect = function (imgURL) {
            var _this = this;
            // convert the image into a base64 string
            // modified from http://stackoverflow.com/questions/6150289/how-to-convert-image-into-base64-string-using-javascript#answer-20285053
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            var filename = imgURL.substr(imgURL.lastIndexOf("/") + 1);
            xhr.onload = function () {
                var reader = new FileReader();
                reader.onloadend = function () {
                    callback(reader.result);
                };
                reader.readAsDataURL(xhr.response);
            };
            xhr.open('GET', imgURL);
            xhr.send();
            var callback = function (url64) {
                _this.workingSlide.image = _this.ui.slideImg.src = url64;
                _this.ui.setFilename($("#imgFilename"), filename);
                _this.ui.hideGallery();
            };
            this.data.logEvent(Slideshow.SlideshowEventType.IMAGE_ADDED, { 'source': 'gallery', 'filename': filename });
        };
        SlideshowApp.prototype.useWebcam = function () {
            var _this = this;
            var onCamReady = function () {
                _this.ui.useWebcamBtn.disabled = true;
                _this.ui.camVideo.classList.remove("hidden");
                _this.ui.slideImg.classList.remove("hidden");
                _this.webcam.showVideo();
            };
            onCamReady();
        };
        SlideshowApp.prototype.takePicture = function () {
            this.workingSlide.image = this.ui.slideImg.src = this.webcam.takePicture();
            this.ui.camVideo.classList.add("hidden");
            var imgName = this.curSlide.id + "img.png";
            this.ui.setFilename($("#imgFilename"), imgName);
            this.setState(4 /* Slide */);
            this.data.logEvent(Slideshow.SlideshowEventType.IMAGE_ADDED, { 'source': 'camera' });
        };
        SlideshowApp.prototype.startRecording = function () {
            var _this = this;
            this.audio.clear();
            this.audio.record();
            this.ui.toggleRecordBtn.classList.add("active");
            var time = 0;
            this.audioTimer = setInterval(function () {
                time += 1;
                $("#audioTimer").text(time.toString());
                if (time >= _this.maxAudioTime) {
                    _this.stopRecording();
                }
            }, 1000);
        };
        SlideshowApp.prototype.stopRecording = function () {
            var _this = this;
            clearInterval(this.audioTimer);
            $(this.ui.recordedAudio).one('durationchange', function (e) {
                _this.workingSlide.duration = Math.floor(_this.ui.recordedAudio.duration) + 1;
                _this.ui.durationInput.value = _this.workingSlide.duration.toString();
                var filename = _this.curSlide.id + "audio.wav";
                _this.ui.setFilename($("#audioFilename"), filename);
                _this.workingSlide.audio = _this.audio.audioBlob;
                _this.data.logEvent(Slideshow.SlideshowEventType.AUDIO_ADDED, { 'source': 'recorded', 'length': _this.workingSlide.duration.toString() });
            });
            this.ui.toggleRecordBtn.classList.remove("active");
            this.audio.stopRecording();
        };
        SlideshowApp.prototype.addSlide = function () {
            var slide = new Slideshow.Slide();
            slide.id = this.show.nextId();
            this.show.addSlide(slide);
            if (this.audio) {
                this.audio.clear();
            }
            this.ui.captionHolder.textContent = this.ui.captionInput.value = "";
            $("#imgFilename").addClass("hidden");
            $("#audioFilename").addClass("hidden");
            this.ui.slideImg.src = "";
            this.ui.durationInput.value = slide.duration.toString();
            var thumb = this.createSlideThumb(slide);
            this.setSlide(slide.id);
            if (!this.isLoadingShow) {
                this.data.logEvent(Slideshow.SlideshowEventType.SLIDE_ADDED, { 'slide': this.curSlide.id });
            }
        };
        SlideshowApp.prototype.createSlideThumb = function (slide) {
            var _this = this;
            var slideThumb = new Slideshow.SlideControl();
            var thumbEl = slideThumb.getElement();
            slideThumb.id = thumbEl.id = slide.id;
            if (slide.image != undefined) {
                slideThumb.setImageSrc(slide.image);
            }
            this.ui.slideRoll.appendChild(thumbEl);
            this.slideThumbs[slide.id] = slideThumb;
            var slideIndex = 0;
            if (this.curSlide) {
                slideIndex = this.show.getSlideIndex(this.curSlide);
            }
            slideIndex = Math.max(slideIndex, 0);
            slideThumb.setOrder(slideIndex + 1);
            if (this.show.getLength() > slideIndex + 1) {
                this.updateSlideOrder();
            }
            $(this.ui.slideRoll).sortable({ handle: ".slide-drag-handle" });
            $(this.ui.slideRoll).sortable("refresh");
            // jump to new slide thumb
            this.ui.slideRoll.scrollTop = this.ui.slideRoll.scrollHeight;
            $(slideThumb.getElement()).on("mouseup", function (e) {
                if (_this.playback) {
                    if (_this.playback.playing) {
                        _this.playback.stop();
                    }
                    _this.playback = null;
                }
                _this.setSlide(slideThumb.id);
            });
            if (this.workMode == 0 /* W */) {
                slideThumb.lockBtn.on("click", function (e) {
                    var id = $(e.currentTarget).parent()[0].id;
                    var slide = _this.show.getSlide(id);
                    _this.ui.toggleLock($(e.currentTarget));
                    slide.locked = !slide.locked;
                    if (slide.locked) {
                        _this.data.logEvent(Slideshow.SlideshowEventType.SLIDE_LOCKED, { 'slide': id });
                    }
                    else {
                        _this.data.logEvent(Slideshow.SlideshowEventType.SLIDE_UNLOCKED, { 'slide': id });
                    }
                });
            }
            else {
                slideThumb.lockBtn.addClass("hidden");
            }
            slideThumb.deleteBtn.on("click", function (e) {
                if (_this.workMode == 1 /* T */) {
                }
                var id = $(e.currentTarget).parent()[0].id;
                slideThumb.deleteModal.removeClass("hidden");
                var onConfirm = function () {
                    _this.deleteSlide(id);
                };
                slideThumb.deleteConfirmBtn.on("click", onConfirm);
                slideThumb.deleteCancelBtn.on("click", function () {
                    slideThumb.deleteModal.addClass("hidden");
                });
            });
            slideThumb.editBtn.on("click", function (e) {
                _this.workingSlide = _this.curSlide.clone();
                _this.setState(4 /* Slide */);
                _this.data.logEvent(Slideshow.SlideshowEventType.SLIDE_EDITED, { 'slide': _this.curSlide.id });
            });
            slideThumb.duplicateBtn.on("click", function (e) {
                var id = $(e.currentTarget).parent()[0].id;
                _this.duplicateSlide(id);
            });
            return slideThumb;
        };
        SlideshowApp.prototype.duplicateSlide = function (id) {
            if (this.show.getLength() >= this.maxSlides) {
                return null;
            }
            var slide = this.show.getSlide(id);
            var dupe = slide.clone();
            dupe.id = this.show.nextId();
            var index = this.show.getSlideIndex(slide) + 1;
            this.show.addSlideAt(dupe, index);
            this.createSlideThumb(dupe);
            this.data.logEvent(Slideshow.SlideshowEventType.SLIDE_DUPLICATED, { 'slide': id });
            return dupe;
        };
        SlideshowApp.prototype.deleteSlide = function (id) {
            if (this.curSlide.id == id) {
                var curIndex = this.show.getSlideIndex(this.curSlide);
                if (this.show.getLength() == 1) {
                    this.curSlide = null;
                }
                else {
                    var prevIndex = curIndex - 1;
                    prevIndex = Math.max(prevIndex, 0);
                    this.curSlide = this.show.getSlideAt(prevIndex);
                    this.setSlide(this.curSlide.id);
                }
            }
            this.show.removeSlide(id);
            var slideThumb = this.slideThumbs[id];
            this.ui.slideRoll.removeChild(slideThumb.getElement());
            delete this.slideThumbs[id];
            this.updateSlideOrder();
            this.data.logEvent(Slideshow.SlideshowEventType.SLIDE_DELETED, { 'slide': id });
        };
        SlideshowApp.prototype.setSlide = function (id) {
            if (this.curThumb) {
                this.curThumb.deselect();
            }
            this.curSlide = this.show.slides[id];
            this.curThumb = this.slideThumbs[id];
            this.curThumb.select();
            // update lock buttons for current slide
            this.ui.setEditLocks(this.curSlide.lockedFields, (this.workMode == 1 /* T */));
            this.ui.captionInput.value = this.curSlide.text ? this.curSlide.text : "";
            $(this.ui.captionHolder).html(Slideshow.Utils.toHTML(this.ui.captionInput.value));
            this.ui.slideImg.src = this.curSlide.image;
            if (this.curSlide.image != "") {
                this.ui.setFilename($("#imgFilename"), this.curSlide.id + "img.png");
                $("#imgFilename").removeClass("hidden");
            }
            else {
                $("#imgFilename").addClass("hidden");
            }
            this.audio.stop();
            if (this.curSlide.audio) {
                this.ui.setFilename($("#audioFilename"), this.curSlide.id + "audio.wav");
                $("#audioFilename").removeClass("hidden");
                this.audio.load(this.curSlide.audio);
                if (this.playback && this.playback.playing) {
                    this.audio.play();
                }
            }
            else {
                $("#audioFilename").addClass("hidden");
                $("#audioTimer").text("0");
            }
            this.ui.durationInput.value = this.curSlide.duration.toString();
        };
        SlideshowApp.prototype.updateSlide = function () {
            if (this.ui.captionInput.value && this.ui.captionInput.value != this.workingSlide.text) {
                this.workingSlide.text = this.ui.captionInput.value;
            }
            var newDuration = parseInt(this.ui.durationInput.value);
            if (this.ui.durationInput.value && newDuration != this.workingSlide.duration) {
                this.workingSlide.duration = newDuration;
            }
            // replace original version of slide with working slide
            var index = this.show.getSlideIndex(this.curSlide);
            this.workingSlide.id = this.curSlide.id;
            this.show.removeSlide(this.curSlide.id);
            this.show.addSlideAt(this.workingSlide, index);
            this.curSlide = this.workingSlide;
            var slideThumb = this.slideThumbs[this.curSlide.id];
            slideThumb.setImageSrc(this.curSlide.image);
            slideThumb.order.text(index + 1);
        };
        SlideshowApp.prototype.saveSlides = function (callback) {
            var _this = this;
            var onAudioProcessed = function () {
                document.removeEventListener('audio_processed', onAudioProcessed);
                _this.finishSave();
            };
            document.addEventListener('audio_processed', onAudioProcessed);
            if (callback) {
                document.addEventListener('slideshow_saved', function () {
                    callback();
                });
            }
            this.show.prepForSave();
        };
        SlideshowApp.prototype.finishSave = function () {
            var name = this.ui.nameTxtInput.value ? this.ui.nameTxtInput.value : "slideshow";
            var slidesJSON = '{"name":"' + name + '",\n "session_id":"' + this.data.session + '",\n "slides": [';
            var zip = new JSZip();
            for (var i = 0; i < this.show.slideIds.length; i++) {
                var id = this.show.slideIds[i];
                var slide = this.show.slides[id];
                var imgFileName = "";
                if (slide.imageName != undefined && slide.imageName != "" && slide.imageName != "undefined") {
                }
                else {
                    imgFileName = id + 'img.png';
                }
                var audioFileName = id + 'audio.wav';
                var slideText = slide.text ? slide.text : "";
                var slideJSON = '\n{"text": ' + JSON.stringify(slideText);
                slideJSON += ', "duration": "' + slide.duration + '"';
                if (slide.image) {
                    slideJSON += ', "image": "' + imgFileName + '"';
                }
                if (slide.audio) {
                    slideJSON += ', "audio": "' + audioFileName + '"';
                }
                if (slide.locked) {
                    slideJSON += ', "locked": "' + slide.locked + '"';
                }
                if (slide.hasLockedFields()) {
                    slideJSON += ', "lockedFields": [' + slide.lockedFields.toString() + ']';
                }
                slideJSON += '}';
                slidesJSON += slideJSON;
                if (i < this.show.getLength() - 1) {
                    slidesJSON += ',';
                }
                var imgData = this.slideThumbs[id].getImageSrc();
                if (imgData) {
                    // remove metadata from dataURL
                    imgData = imgData.substr(imgData.indexOf(',') + 1);
                    zip.file(imgFileName, imgData, { base64: true });
                }
                if (slide.audio) {
                    zip.file(audioFileName, slide.audioData, { binary: true });
                }
            }
            slidesJSON += ']}';
            zip.file("slides.json", slidesJSON);
            var content = zip.generate({ type: "blob" });
            var ext, eventType;
            switch (this.exportMode) {
                case 0 /* W */:
                    ext = "cssw";
                    eventType = Slideshow.SlideshowEventType.FILE_SAVED;
                    break;
                case 1 /* T */:
                    ext = "csst";
                    eventType = Slideshow.SlideshowEventType.TEMPLATE_SAVED;
                    break;
                case 2 /* V */:
                    ext = "cssv";
                    eventType = Slideshow.SlideshowEventType.SLIDESHOW_EXPORTED;
                    break;
            }
            //FileSaver.js
            var filename = name + "." + ext;
            saveAs(content, filename);
            var event = new Event("slideshow_saved");
            document.dispatchEvent(event);
            this.data.logEvent(eventType, { 'filename': filename });
        };
        SlideshowApp.prototype.loadShowFile = function (file) {
            var _this = this;
            this.isLoadingShow = true;
            this.show = new Slideshow.Show();
            this.setState(3 /* Show */);
            var ext = file.name.substr(file.name.lastIndexOf('.'));
            switch (ext) {
                case ".cssw":
                    this.workMode = 0 /* W */;
                    break;
                case ".csst":
                    this.workMode = 1 /* T */;
                    break;
                case ".cssv":
                    this.workMode = 2 /* V */;
                    break;
            }
            this.setWorkMode(this.workMode);
            var reader = new FileReader();
            reader.onload = function (e) {
                _this.slideThumbs = {};
                _this.ui.slideRoll.innerHTML = '';
                var zip = new JSZip(e.target.result);
                var dataFile = zip.files['slides.json'];
                var slidesObj = JSON.parse(dataFile.asText());
                _this.ui.nameTxtInput.value = slidesObj["name"];
                var slides = slidesObj["slides"];
                for (var i = 0; i < slides.length; i++) {
                    var slideObj = slides[i];
                    _this.addSlide();
                    _this.curSlide.text = slideObj["text"] ? slideObj["text"] : "";
                    _this.curSlide.duration = slideObj["duration"];
                    if (slideObj.hasOwnProperty("image") && slideObj["image"] != "undefined" && slideObj["image"] != "") {
                        var imgName = slideObj["image"];
                        var imgFile = zip.files[imgName];
                        _this.curSlide.image = _this.curThumb.setImageSrc("data:image/png;base64," + JSZip.base64.encode(imgFile.asBinary()));
                    }
                    if (slideObj.hasOwnProperty("audio") && slideObj["audio"] != "undefined") {
                        var audioFileName = slideObj["audio"];
                        var audioFile = zip.files[audioFileName];
                        var dataview = new DataView(audioFile.asArrayBuffer()); // convert from binary to ArrayBuffer?
                        _this.curSlide.audio = new Blob([dataview], { type: 'audio/wav' });
                    }
                    if (slideObj.hasOwnProperty("locked") && slideObj["locked"] == "true") {
                        _this.curSlide.locked = true;
                        _this.ui.toggleLock(_this.curThumb.lockBtn);
                        if (_this.workMode == 1 /* T */) {
                            _this.curThumb.deleteBtn.addClass("disabled");
                            _this.curThumb.deleteBtn.off();
                            _this.curThumb.lockBtn.removeClass("hidden");
                            _this.curThumb.lockBtn.addClass("disabled");
                            _this.curThumb.editBtn.addClass("hidden");
                        }
                    }
                    else if (_this.workMode == 1 /* T */) {
                        _this.curThumb.lockBtn.addClass("hidden");
                    }
                    if (slideObj.hasOwnProperty("lockedFields")) {
                        _this.curSlide.lockedFields = slideObj["lockedFields"];
                    }
                }
                _this.data.logEvent(Slideshow.SlideshowEventType.FILE_OPENED, { 'filename': slidesObj["name"], 'file_session_id': slidesObj["session_id"] });
                _this.setSlide(_this.show.getSlideAt(0).id);
                _this.ui.slideFileInput.value = null;
                _this.isLoadingShow = false;
            };
            reader.readAsArrayBuffer(file);
        };
        SlideshowApp.prototype.loadShowURL = function (url) {
            var _this = this;
            var request = new XMLHttpRequest();
            request.open('GET', url, true);
            request.responseType = 'blob';
            request.onload = function (e) {
                if (request.status == 200) {
                    var blob = new Blob([request.response]);
                    var filename = url.substring(url.lastIndexOf("/") + 1);
                    var file = Slideshow.Utils.blobToFile(blob, filename);
                    _this.loadShowFile(file);
                }
                else {
                    console.log("file load error: " + e);
                }
            };
            request.send();
        };
        SlideshowApp.prototype.playShow = function () {
            var _this = this;
            var index = this.show.getSlideIndex(this.curSlide);
            this.playback = new Slideshow.Playback(this.show, index);
            this.ui.setPauseBtn(true);
            $(document).on(Slideshow.PlaybackEvent.NEXT, function () {
                _this.onPlaybackNext();
            });
            $(document).one(Slideshow.PlaybackEvent.FINISH, function () {
                _this.onPlaybackFinished();
            });
            this.playback.start();
            this.setSlide(this.curSlide.id);
            this.data.logEvent(Slideshow.SlideshowEventType.SLIDESHOW_PLAYED, { 'slide': this.show.getSlideAt(this.playback.curSlide).id, 'index': index + 1 });
        };
        SlideshowApp.prototype.pauseShow = function () {
            var index = this.playback.curSlide;
            var slideId = this.show.getSlideAt(index).id;
            this.ui.setPauseBtn(false);
            this.playback.pause();
            if (this.audio) {
                this.audio.stop();
            }
            this.data.logEvent(Slideshow.SlideshowEventType.SLIDESHOW_PAUSED, { 'slide': slideId, 'index': index + 1 });
        };
        SlideshowApp.prototype.resumeShow = function () {
            this.ui.setPauseBtn(true);
            this.playback.start();
            if (this.audio && this.curSlide.audio) {
                this.audio.play();
            }
            var index = this.playback.curSlide;
            var slideId = this.show.getSlideAt(index).id;
            this.data.logEvent(Slideshow.SlideshowEventType.SLIDESHOW_PLAYED, { 'slide': slideId, 'index': index + 1 });
        };
        SlideshowApp.prototype.onPlaybackNext = function () {
            this.setSlide(this.show.getSlideAt(this.playback.curSlide).id);
        };
        SlideshowApp.prototype.onPlaybackFinished = function () {
            this.ui.setPauseBtn(false);
            $(document).off(Slideshow.PlaybackEvent.NEXT);
            this.playback = null;
        };
        return SlideshowApp;
    })();
    Slideshow.SlideshowApp = SlideshowApp;
})(Slideshow || (Slideshow = {}));
var Slideshow;
(function (Slideshow) {
    var UI = (function () {
        function UI(content) {
            this.content = content;
            this.slideRoll = $('#slideRoll')[0];
            this.slideEditor = $('#slideEditor')[0];
            this.nameTxtInput = document.getElementById('nameTxtInput');
            this.slideImg = document.getElementById('slideImg');
            this.captionHolder = document.getElementById('captionHolder');
            this.captionInput = document.getElementById('captionInput');
            this.durationInput = document.getElementById('durationInput');
            this.loadPictureBtn = document.getElementById('loadPictureBtn');
            this.useWebcamBtn = document.getElementById('useWebcamBtn');
            this.takePictureBtn = document.getElementById('takePictureBtn');
            this.deleteImgBtn = document.getElementById('deleteImgBtn');
            this.recordAudioBtn = document.getElementById('recordAudioBtn');
            this.toggleRecordBtn = document.getElementById('toggleRecordBtn');
            this.deleteAudioBtn = document.getElementById('deleteAudioBtn');
            this.recordedAudio = document.getElementById('recordedAudio');
            this.saveShowBtn = document.getElementById('saveShowBtn');
            this.exportShowBtn = document.getElementById('exportShowBtn');
            this.loadShowBtn = document.getElementById('loadShowBtn');
            this.addSlideBtn = document.getElementById('addSlideBtn');
            this.deleteSlideBtn = document.getElementById('deleteSlideBtn');
            this.newShowBtn = document.getElementById('newShowBtn');
            this.playShowBtn = document.getElementById('playShowBtn');
            this.imgFileInput = document.getElementById('imgFileInput');
            this.slideFileInput = document.getElementById('slideFileInput');
            this.camVideo = document.getElementById('camVideo');
            this.camCanvas = document.getElementById('camCanvas');
            this.controlElements = document.getElementsByClassName('controls');
            this.hideDialog();
        }
        UI.prototype.hideEditControls = function () {
            for (var i = 0; i < this.controlElements.length; i++) {
                var el = this.controlElements[i];
                el.classList.add('hidden');
            }
        };
        UI.prototype.showEditControls = function () {
            for (var i = 0; i < this.controlElements.length; i++) {
                var el = this.controlElements[i];
                el.classList.remove('hidden');
            }
        };
        UI.prototype.clearAll = function () {
            this.nameTxtInput.value = "";
        };
        UI.prototype.showDialog = function (message, buttons) {
            var _this = this;
            $("#dialogWrapper").removeClass("hidden");
            $("#dialogMsg").html(message);
            $("#dialogBtns").empty();
            buttons.forEach(function (btnDef) {
                var btn = $("<button>").text(btnDef.text).addClass("textBtn");
                $("#dialogBtns").append(btn);
                (function (callback) {
                    btn.on("click", function () {
                        callback();
                        _this.hideDialog();
                    });
                })(btnDef.fn);
            });
        };
        UI.prototype.hideDialog = function () {
            $("#dialogWrapper").addClass("hidden");
        };
        UI.prototype.setEditLocks = function (locks, templateMode) {
            this.setLock($("#lockImgBtn"), locks[0 /* Image */], templateMode);
            if (locks[0 /* Image */] && templateMode) {
                $("#loadPictureBtn").addClass("hidden");
                $("#useWebcamBtn").addClass("hidden");
                $("#deleteImgBtn").addClass("hidden");
            }
            else {
                $("#loadPictureBtn").removeClass("hidden");
                $("#useWebcamBtn").removeClass("hidden");
                $("#deleteImgBtn").removeClass("hidden");
            }
            this.setLock($("#lockAudioBtn"), locks[1 /* Audio */], templateMode);
            if (locks[1 /* Audio */] && templateMode) {
                $("#recordAudioBtn").addClass("hidden");
                $("#loadAudioBtn").addClass("hidden");
                $("#deleteAudioBtn").addClass("hidden");
            }
            else {
                $("#recordAudioBtn").removeClass("hidden");
                $("#loadAudioBtn").removeClass("hidden");
                $("#deleteAudioBtn").removeClass("hidden");
            }
            this.setLock($("#lockCaptionBtn"), locks[2 /* Caption */], templateMode);
            if (locks[2 /* Caption */] && templateMode) {
                $("#captionInput").addClass("disabled");
                $("#captionInput").attr("readonly", "readonly");
            }
            else {
                $("#captionInput").removeClass("disabled");
                $("#captionInput").removeAttr("readonly");
            }
            this.setLock($("#lockDurationBtn"), locks[3 /* Duration */], templateMode);
            if (locks[3 /* Duration */] && templateMode) {
                $("#durationInput").addClass("disabled");
                $("#durationInput").attr("readonly", "readonly");
            }
            else {
                $("#durationInput").removeClass("disabled");
                $("#durationInput").removeAttr("readonly");
            }
        };
        UI.prototype.setLock = function (button, val, templateMode) {
            if (templateMode) {
                button.addClass("disabled");
            }
            else {
                button.removeClass("disabled");
            }
            if (val) {
                button.children("i").addClass("fa-lock").removeClass("fa-unlock-alt");
            }
            else {
                button.children("i").addClass("fa-unlock-alt").removeClass("fa-lock");
            }
        };
        UI.prototype.toggleLock = function (button) {
            button.children("i").toggleClass("fa-unlock-alt").toggleClass("fa-lock");
        };
        UI.prototype.togglePlayBtn = function () {
            $("#playShowBtn").children("i").toggleClass("fa-play").toggleClass("fa-pause");
        };
        UI.prototype.setPauseBtn = function (showPause) {
            if (showPause) {
                $("#playShowBtn").children("i").removeClass("fa-play").addClass("fa-pause");
            }
            else {
                $("#playShowBtn").children("i").removeClass("fa-pause").addClass("fa-play");
            }
        };
        UI.prototype.showGallery = function () {
            $("#gallery").removeClass("hidden");
        };
        UI.prototype.hideGallery = function () {
            $("#gallery").addClass("hidden");
        };
        UI.prototype.setFilename = function (selection, name) {
            selection.removeClass("hidden").children("span").text(name);
        };
        return UI;
    })();
    Slideshow.UI = UI;
})(Slideshow || (Slideshow = {}));
var Slideshow;
(function (Slideshow) {
    var Utils = (function () {
        function Utils() {
        }
        // from http://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-url-parameter
        Utils.getUrlVars = function () {
            var vars = {};
            var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
                vars[key] = value;
                return m;
            });
            return vars;
        };
        Utils.getParentURL = function () {
            var url = document.referrer;
            url = url.substring(0, url.lastIndexOf("/") + 1);
            return url;
        };
        // from unplatform reporter.js
        Utils.getCookie = function (cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ')
                    c = c.substring(1);
                if (c.indexOf(name) == 0)
                    return c.substring(name.length, c.length);
            }
            return "";
        };
        Utils.toHTML = function (val) {
            return val.replace(/(?:\r\n|\r|\n)/g, '<br>');
        };
        Utils.fromHTML = function (val) {
            return val.replace(/<br\s*[\/]?>/gi, '\r\n');
        };
        // from http://stackoverflow.com/questions/27159179/how-to-convert-blob-to-file-in-javascript
        Utils.blobToFile = function (theBlob, fileName) {
            var b = theBlob;
            //A Blob() is almost a File() - it's just missing the two properties below which we will add
            b.lastModifiedDate = new Date();
            b.name = fileName;
            //Cast to a File() type
            return theBlob;
        };
        return Utils;
    })();
    Slideshow.Utils = Utils;
})(Slideshow || (Slideshow = {}));
var Slideshow;
(function (Slideshow) {
    var Webcam = (function () {
        function Webcam(stream, video, canvas) {
            var _this = this;
            this.camWidth = 384;
            this.camHeight = 288;
            console.log('new Webcam');
            this.video = video;
            this.canvas = canvas;
            this.stream = stream;
            video.muted = true;
            var browserURL = window.URL || window.webkitURL || window.mozURL || window.msURL;
            video.src = browserURL.createObjectURL(stream);
            video.addEventListener('canplay', function (e) {
                if (!_this.streaming) {
                    _this.checkSizes();
                }
            }, false);
        }
        Webcam.prototype.stop = function () {
            console.log("webcam.stop");
            //this.stream.stop();
            this.stream.active = false;
            this.streaming = false;
        };
        Webcam.prototype.start = function () {
            if (!this.streaming) {
                this.stream.active = true;
                this.streaming = true;
            }
        };
        Webcam.prototype.checkSizes = function () {
            var onTimeUpdate = function (e) {
                this.checkSizes();
            };
            if (this.video.videoHeight != 0 && this.video.videoWidth != 0) {
                this.fixSizes();
                this.video.removeEventListener('timeupdate', function (e) { return onTimeUpdate; });
            }
            else {
                // account for FireFox bug (https://bugzilla.mozilla.org/show_bug.cgi?id=926753)
                this.video.addEventListener('timeupdate', function (e) { return onTimeUpdate; }, false);
            }
        };
        Webcam.prototype.showVideo = function () {
            this.video.hidden = false;
            this.video.play();
        };
        Webcam.prototype.hideVideo = function () {
            this.video.hidden = true;
            this.video.pause();
        };
        Webcam.prototype.fixSizes = function () {
            this.camHeight = this.video.videoHeight / (this.video.videoWidth / this.camWidth);
            this.video.setAttribute('width', this.camWidth.toString());
            this.video.setAttribute('height', this.camHeight.toString());
            this.canvas.setAttribute('width', this.camWidth.toString());
            this.canvas.setAttribute('height', this.camHeight.toString());
            this.streaming = true;
        };
        Webcam.prototype.takePicture = function () {
            this.canvas.width = this.camWidth;
            this.canvas.height = this.camHeight;
            var ctx = this.canvas.getContext('2d');
            ctx.save();
            ctx.scale(-1, 1);
            ctx.drawImage(this.video, this.camWidth * -1, 0, this.camWidth, this.camHeight);
            ctx.restore();
            var data = this.canvas.toDataURL('image/png');
            return data;
        };
        return Webcam;
    })();
    Slideshow.Webcam = Webcam;
})(Slideshow || (Slideshow = {}));
//# sourceMappingURL=slideshowApp.js.map
