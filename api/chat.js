// Vercel Serverless Function for OpenAI Chat
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  // Get API key from environment variable
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'OpenAI API key not configured' });
  }

  try {
    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are the Womb-inary assistant, helping users find the right words for their reproductive, emotional, and identity experiences. You create inclusive, gender-neutral portmanteau words (like "mansplain", "loopspiraling", "carewashing") that combine multiple concepts into one meaningful term.

When a user describes their feelings or situation:
1. Create 2-3 relevant portmanteau words that capture their experience
2. Provide clear, empathetic definitions for each word
3. Use warm, supportive language that validates their experience
4. Keep responses concise and focused on the words themselves

Example format:
"Based on what you're describing, here are some words that might help:

**[Word]** - [Definition that captures their experience]

**[Word]** - [Definition]

I hope these words help you express what you're feeling."

Remember: You're creating NEW words (portmanteaus), not just suggesting existing terms. Be creative, empathetic, and inclusive.`
          },
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.8,
        max_tokens: 300
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'OpenAI API error');
    }

    const aiMessage = data.choices[0].message.content;

    res.status(200).json({ message: aiMessage });

  } catch (error) {
    console.error('OpenAI API Error:', error);
    res.status(500).json({
      error: 'Failed to generate response',
      details: error.message
    });
  }
}
