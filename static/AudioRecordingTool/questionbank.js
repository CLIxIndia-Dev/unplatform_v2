var QuestionBank;
(function (QuestionBank) {
    var Audio = (function () {
        function Audio(audioElement) {
            this.isRecording = false;
            var ContextClass = window.AudioContext || window.webkitAudioContext;
            this.context = new ContextClass();
            this.navigator = window.navigator;
            this.audioElement = audioElement;
        }
        Audio.prototype.setStream = function (stream) {
            console.log('audio.onStream');
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
            console.log("audio.record");
            this.recorder.clear();
            this.recorder.record();
            this.isRecording = true;
        };
        Audio.prototype.stopRecording = function () {
            var _this = this;
            console.log('audio.stopRecording');
            this.recorder.stop();
            this.isRecording = false;
            this.recorder.exportWAV(function (blob) {
                _this.load(blob);
            });
        };
        Audio.prototype.load = function (blob) {
            this.audioBlob = blob;
            this.audioElement.src = URL.createObjectURL(blob);
        };
        Audio.prototype.play = function () {
            console.log('audio.play');
            this.audioElement.play();
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
    QuestionBank.Audio = Audio;
})(QuestionBank || (QuestionBank = {}));
var QuestionBank;
(function (QuestionBank) {
    var QBApp = (function () {
        function QBApp(element) {
            this.element = element;
            this.questions = [];
        }
        QBApp.prototype.init = function () {
            var _this = this;
            this.parentURL = document.referrer;
            this.parentURL = this.parentURL.substring(0, this.parentURL.lastIndexOf("/") + 1);
            this.audioFolder = this.parentURL + "audio/";
            this.responses = [];
            this.maxRecordTime = QBApp.defaultRecordTime;
            this.audio = new QuestionBank.Audio($("#recordedAudio")[0]);
            this.initMedia(function () {
            });
            this.textAudio = $('#textAudio')[0];
            console.log('init');
            $('#cPrevBtn').on('click', function () {
                console.log('cPrevBtn click');
                _this.prevQ();
            });
            $('#cNextBtn').on('click', function () {
                _this.nextQ();
            });
            $('#answerBtn').on('click', function () {
                _this.answerQ();
            });
            $('#questionSoundBtn').on('click', function () {
                _this.textAudio.src = _this.audioFolder + _this.curQ.audio;
                _this.textAudio.play();
            });
            $('#toggleRecordBtn').on('click', function () {
                if (!_this.audio.isRecording) {
                    _this.startRecording();
                }
                else {
                    _this.stopRecording();
                }
            });
            $('#stopRecordBtn').on('click', function () {
                _this.stopRecording();
            });
            $('#submitResponseBtn').on('click', function () {
                _this.submitResponse();
            });
            this.loadQuestions();
        };
        QBApp.prototype.loadQuestions = function () {
            var _this = this;
            $.getJSON(this.parentURL + "questions.json", function (json) {
                _this.questions = json["questions"];
                console.log(_this.questions);
                _this.curQ = _this.questions[0];
                _this.displayQ(_this.curQ);
            });
        };
        QBApp.prototype.initMedia = function (callback) {
            var _this = this;
            console.log("initMedia");
            navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
            navigator.getMedia({
                audio: true
            }, function (stream) {
                _this.audio.setStream(stream);
                document.addEventListener('audio_ready', function () {
                    console.log('audio_ready');
                });
                callback();
            }, function (error) {
                console.log("Microphone not accessible: " + error.message);
            });
        };
        QBApp.prototype.startRecording = function () {
            var _this = this;
            this.audio.clear();
            this.audio.record();
            $('#toggleRecordBtn').addClass("active");
            var time = 0;
            this.audioTimer = setInterval(function () {
                time += 1;
                $("#audioTimer").text(time.toString());
                if (time >= _this.maxRecordTime) {
                    _this.stopRecording();
                }
            }, 1000);
        };
        QBApp.prototype.stopRecording = function () {
            var _this = this;
            clearInterval(this.audioTimer);
            $('#recordedAudio').one('durationchange', function (e) {
                $('#recordedAudio').removeClass("hidden");
                var qIndex = _this.questions.indexOf(_this.curQ);
                var filename = "response_" + qIndex + ".wav";
                _this.responses[qIndex] = _this.audio.audioBlob;
            });
            $('#toggleRecordBtn').removeClass("active");
            this.audio.stopRecording();
        };
        QBApp.prototype.nextQ = function () {
            console.log('nextQ');
            var curIndex = this.questions.indexOf(this.curQ);
            this.curQ = this.questions[(curIndex + 1) % this.questions.length];
            this.displayQ(this.curQ);
        };
        QBApp.prototype.prevQ = function () {
            var curIndex = this.questions.indexOf(this.curQ);
            this.curQ = this.questions[(curIndex - 1 + this.questions.length) % this.questions.length];
            this.displayQ(this.curQ);
        };
        QBApp.prototype.displayQ = function (q) {
            $('#recordedAudio').addClass("hidden");
            $('#instructions3').addClass('hidden');
            $('#answerBtn').removeClass('hidden');
            $('#instructions2').removeClass('hidden');
            if (q.color) {
                $('#questionContent').css('background-color', q.color);
            }
            /*switch (q.questionType) {
                case "discussion":
                    console.log("discussion");
                    $('#roles').addClass('hidden');
                    $('#sampleResponses').removeClass('hidden');
                    break;
                case "roleplay":
                    console.log("roleplay");
                    $('#sampleResponses').addClass('hidden');
                    $('#roles').removeClass('hidden');
                    break;
            }*/
            $('#roles').empty();
            $('#roles').removeClass('hidden');
            $('#questionText').text(q.text);
            $('#instructions2').text(q.instructions);
            $('#textAudio').attr('src', this.audioFolder + this.curQ.audio);
        };
        QBApp.prototype.answerQ = function () {
            this.maxRecordTime = this.curQ.maxRecordTime ? this.curQ.maxRecordTime : QBApp.defaultRecordTime;
            this.hideNav();
            $('#answerBtn').addClass('hidden');
            $('#responses').removeClass('hidden');
            $('#response').removeClass('hidden');
            $('#maxRecordTime').text(this.maxRecordTime);
            for (var i = 0; i < this.curQ.prompts.length; i++) {
                var response = this.curQ.prompts[i];
                var sampleAudio = $('<audio id="sampleResponse' + i + '" controls/>');
                sampleAudio.attr('src', this.audioFolder + this.curQ.promptAudio[i]);
                /*var soundBtn = $('<button id="playResponse' + i + '" class="icon"><i class="fa fa-volume-up"></i></button>');
                var responseAudio = this.curQ.promptAudio[i];
                soundBtn.attr('data', responseAudio);
                soundBtn.on('click',(e) => {
                    var filename = $(e.target.parentNode).attr('data');
                    this.textAudio.src = 'audio/' + filename;
                    this.textAudio.play();
                });
               
                switch (this.curQ.questionType) {
                    case "discussion":
                        var responseEl = $("<tr/>").append(
                            $("<td/>")
                                .html(response)
                                .append($('<p/>')
                                    .append(sampleAudio)));

                        $('#sampleResponses').append(responseEl);
                        break;

                    case "roleplay":*/
                var roleEl = $("<div/>").html(response).append($('<p/>').append(sampleAudio));
                $('#roles').append(roleEl);
            }
        };
        QBApp.prototype.submitResponse = function () {
            $('#instructions2').addClass('hidden');
            $('#responses').addClass('hidden');
            $('#instructions3').removeClass('hidden');
            this.showNav();
        };
        QBApp.prototype.hideNav = function () {
            $('#cPrevBtn').addClass('hidden');
            $('#cNextBtn').addClass('hidden');
        };
        QBApp.prototype.showNav = function () {
            $('#cPrevBtn').removeClass('hidden');
            $('#cNextBtn').removeClass('hidden');
        };
        QBApp.defaultRecordTime = 20;
        return QBApp;
    })();
    window.onload = function () {
        console.log('onload');
        var el = $('#content')[0];
        var app = new QBApp(el);
        app.init();
    };
})(QuestionBank || (QuestionBank = {}));
var QuestionBank;
(function (QuestionBank) {
    (function (QuestionType) {
        QuestionType[QuestionType["Discussion"] = 0] = "Discussion";
        QuestionType[QuestionType["RolePlay"] = 1] = "RolePlay";
    })(QuestionBank.QuestionType || (QuestionBank.QuestionType = {}));
    var QuestionType = QuestionBank.QuestionType;
    ;
    var Question = (function () {
        function Question(type, text, audio, prompts, promptAudio) {
            if (text === void 0) { text = ""; }
            if (audio === void 0) { audio = ""; }
            if (prompts === void 0) { prompts = []; }
            if (promptAudio === void 0) { promptAudio = []; }
            this.questionType = type;
            this.text = text;
            this.prompts = prompts;
            this.audio = audio;
            this.promptAudio = promptAudio;
        }
        return Question;
    })();
    QuestionBank.Question = Question;
})(QuestionBank || (QuestionBank = {}));
//# sourceMappingURL=questionbank.js.map