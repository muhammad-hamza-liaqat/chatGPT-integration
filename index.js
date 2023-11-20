const axios = require('axios');
// require('dotenv').config();
const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';
const promptText = "WHY IT IS NOT WORKING.";
async function queryChatGPT(prompt) {
    try {
        const response = await axios.post(apiUrl, {
            prompt: prompt,
            max_tokens: 100,
            temperature: 0.7,
            stop: '\n'
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            }
        });
        if (response.status === 200) {
            return response.data.choices[0].text;
        } else {
            console.error(`Error: ${response.status} - ${response.data.error.message}`);
            return null;
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}
queryChatGPT(promptText)
    .then(completion => {
        if (completion) {
            console.log('Completion:', completion);
        } else {
            console.log('Failed to get completion.');
        }
    })
    .catch(err => console.error('Error:', err));