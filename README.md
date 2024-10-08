# MathQuizApp

MathQuizApp is a simple interactive web application that tests users with various math questions. It is designed to be a fun and educational tool, perfect for practicing basic arithmetic. The application presents questions to the user, who can input their answers to receive immediate feedback.

## Features

- **Interactive Quiz**: Users can answer math questions directly in the web app.
- **Score Tracking**: The app keeps track of the user's score as they progress through the questions.
- **Local Storage**: The user's score and progress are saved using local storage, allowing them to resume their quiz even after refreshing the page or closing the browser.
- **Customizable Questions**: You can easily modify or add new questions to the quiz.
- **Mobile-Responsive UI**: The user interface is designed to be responsive, ensuring a seamless experience on both mobile devices and desktop browsers.

## Technologies Used

- **HTML**: For the structure of the web pages.
- **CSS**: For styling the user interface and ensuring mobile responsiveness.
- **JavaScript**: For handling the logic of the quiz, including score calculation, feedback, and local storage.

## Getting Started

### Prerequisites

To run the project locally, you need a web browser and a code editor like Visual Studio Code.

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/SlmanO7/MathQuizApp.git
    ```

2. Open the project in your code editor.

3. Open the `index.html` file in your web browser to start the quiz.

### Usage

- Enter your answer for each question in the provided input box.
- Click the "Submit" button to check your answer and see the next question.
- Your score will be displayed at the top of the quiz.
- Your progress and score are saved automatically using local storage, so you can continue where you left off even if you close the browser.

## Local Storage Implementation

The MathQuizApp uses local storage to save the user's score and current question index. This ensures that users can continue their quiz session even after closing the browser or refreshing the page.

To clear the saved data and start a new quiz session:

1. Open the browser's developer console.
2. Enter the following command:

    ```javascript
    localStorage.clear();
    ```

3. Refresh the page to start a new session.

## Mobile-Responsive Design

The user interface of MathQuizApp is built with a mobile-first approach. The layout and elements adapt to different screen sizes, ensuring that the app is easy to use on both smartphones and desktops. 

To test the responsiveness:

1. Open the app in your web browser.
2. Resize the browser window or open the app on different devices to see the responsive design in action.

## Contributing

Contributions are welcome! If you have ideas for new features or improvements, feel free to fork the repository and submit a pull request.
