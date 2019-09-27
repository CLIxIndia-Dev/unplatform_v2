export default {
  en: {
    name: 'English',
    dir: 'ltr',
    unplatformNav: {
      chooseTool: 'choose tool', // Choose a platform tool, like Open Story Tool
      chooseNewLesson: 'choose new lesson', // Switch lessons
      finishLesson: 'finish session', // Return to the survey screen,
      endSession: 'Do you want to end this session?' // User confirmation to end session
    },
    prompt: {
      yes: 'Yes',
      no: 'No'
    },
    breadcrumbs: {
      selectUser: 'Select User', // Return to survey screen
      selectSubject: 'Select Module', // Select the Module
      selectClass: 'Select Class', // Select the class
      selectUnit: 'Select Unit',
      selectLesson: 'Select Lesson',
      selectTool: 'Select Interactive Tool',
      selectSubtool: 'Select Subtool'
    },
    moduleNav: {
      selectYourClass: 'Select Your Class', // prompt for user to select class
      selectYourLesson: 'Select Your Lesson for', // prompt for user to select lesson
      selectYourSubject: 'Select Your Module', // prompt for user to select module
      tools: 'Interactive Tools', // The tools folder -- may be unnecessary
      selectYourTool: 'Select Your Interactive Tool', // prompt for user to select a tool
      selectYourUnit: 'Select Your Unit for', // prompt for user to select a unit
      selectYourSubtool: 'Select Your Subtool for' // prompt for user to select a subtool
    },
    splash: {
      title: 'CLIx Module', // welcome title
      ariaLabelTitle: 'Clix Module', // welcome title
      subtitle: 'Before you begin, please tell us about yourself', // prompt for survey
      teacher: 'Teacher', // demographic option
      student: 'Student', // demographic option
      visitor: 'Visitor/Other', // demographic option
      demonstration: 'Class Demonstration', // demographic option
      prompt: 'How many users are at this computer?', // prompt
      usernameLabel: 'Student IDs (optional).',  // label for the username input field
      usernamePlaceholder: 'Please type in your student IDs, like: 100, 120, and 97'  // placeholder for the username input field
    }
  }
}
