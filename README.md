# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

<!-- Here I am talking about of the project -->

1.  I have designed of this project using React+Vite.
2.  I used shadcn-ui for create best UI.
3.  Used Tailwind CSS for styling of the webpages.
4.  I used this API (https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100) for fetch all data from API and display CityName, Country Name, Time Zone in the table.
5.  I have make features in display information table such as Search functionality, Filter (City, Country, Timezone) functionality And make every column field sortable functionality.
6.  Add Infinite scrolling feature in table.
7.  Add new feature when We will click on any particular City Name column then that of particular Country related data will be displayed in new Details page.
8.  In the Details page I used of this link (https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}) for fetch current weather data according to provided particular country data.
9.  In display require data in Details page such as. (Country Name, Country Flag, Weather Details, Weather Status icon, Weather Temperature, WINDSPEED, HUMIDITY, CLOUDS, PRESSURE).
10. After Display that of Information I make a Go Back Button for go back on the weather table page.
11. I pushed full code on GitHub. I have shared my GitHub repository.
12. Also I have deployed this project on Netlify and which I have shared with you.

    <!-- Your project sounds impressive! Let's break down the steps to extract or clone your project from GitHub: -->

13. Visit GitHub Repository: Open your web browser and navigate to the GitHub repository where your project is hosted.

14. Find the Code Button: Look for the "Code" button on the top right corner of your repository page.

15. Copy Repository URL: Click on the "Code" button. It will reveal a dropdown with a URL. Click on the clipboard icon to copy the URL.

16. Create a Folder: On your local system, create a new folder where you want to store the project files.

17. Open the Folder in VSCode: Open your preferred code editor, such as Visual Studio Code (VSCode), and navigate to the newly created folder.

18. Open Terminal: In VSCode, open the integrated terminal. You can do this by clicking on "Terminal" in the top menu and selecting "New Terminal".

19. Clone the Repository: In the terminal, use the git clone command followed by the copied GitHub repository URL. It should look like this:
    git clone <paste_github_repository_url>
    This command will download all the files from the GitHub repository to your local folder.

20. Navigate to Project Folder: After cloning, change your directory to the newly created folder that contains the project files. You can do this using the cd command:
    cd <project_folder_name>
21. Install Dependencies: Once inside the project folder, you need to install the dependencies required for the project. Use the following command to install Node.js dependencies:
    npm install

22. Run the Project: After installing dependencies, you can run the project using:
    npm run dev
    This command will start the development server.

23. Access the Project: Open your web browser and go to the URL shown in the terminal after running the development server. This URL typically starts with http://localhost.

24. Congratulations!: You have successfully accessed the project on your local machine. You can now explore its features and functionalities.

                        Remember to follow these steps carefully, and feel free to reach out if you encounter any issues!
