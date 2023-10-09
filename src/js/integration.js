```javascript
// Importing required modules
import axios from 'axios';

// Constants for external AI services
const WOLFRAM_ALPHA_API = 'https://api.wolframalpha.com/v2/query';
const GRAMMARLY_API = 'https://api.grammarly.com/v2/analyse';

// Function to integrate with Wolfram Alpha for math problems
async function integrateWolframAlpha(problem) {
    try {
        const response = await axios.get(WOLFRAM_ALPHA_API, {
            params: {
                input: problem,
                format: 'plaintext',
                output: 'JSON',
            },
        });
        return response.data;
    } catch (error) {
        console.error(`Error in integrating with Wolfram Alpha: ${error}`);
    }
}

// Function to integrate with Grammarly for writing
async function integrateGrammarly(text) {
    try {
        const response = await axios.post(GRAMMARLY_API, {
            text: text,
        });
        return response.data;
    } catch (error) {
        console.error(`Error in integrating with Grammarly: ${error}`);
    }
}

// Exporting the integration functions
export { integrateWolframAlpha, integrateGrammarly };
```