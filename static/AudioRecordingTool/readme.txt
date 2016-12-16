The AudioRecordingTool folder goes in the curriculum / templates folder, and the AudioRecording Module folder goes in the modules folder.

The module folder contains an "audio" folder, which contains all of the audio files for that module's questions. The module folder also contains a "questions.json" file, which defines the parameters for the tool to use. Here is a list of those parameters and their descriptions:

questionType: "discussion" or "roleplay"

text: The description of the question that will be displayed in the question selection element.

audio: The file name of the audio recording of the "text" property.

color: The background color to be displayed in the question selection element. Any valid css color value can be used.

instructions: Directions for the students that are specific to this question.

prompts: An array of the audio file names for the recordings of the roles/prompts/samples for this question.

maxRecordTime:  The maximum number of seconds for the students' recording. Setting this too high may cause issues on computers with less RAM.