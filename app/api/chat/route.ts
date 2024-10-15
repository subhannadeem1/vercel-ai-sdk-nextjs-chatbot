import { openai } from '@ai-sdk/openai';
import { streamText, convertToCoreMessages, tool } from 'ai';
import { z } from 'zod';

export const maxDuration = 30;


export async function POST(req: Request) {
  const { messages } = await req.json();

  const systemMessage = {
    role: 'system',
    content: `You are DigitalUXBot, an assistant specialized in providing information about DigitalUX. You should only answer questions related to DigitalUX. For any other questions, politely respond with "I'm sorry, but I can only provide information about DigitalUX. Please contact us here for more information `
  };  

  const result = await streamText({
    model: openai('gpt-4-turbo'),
    messages: [systemMessage, ...convertToCoreMessages(messages)],
    tools: { /* your tools */ },
  });

  return result.toDataStreamResponse();
}
