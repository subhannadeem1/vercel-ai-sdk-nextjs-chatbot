'use client';

import { useChat } from 'ai/react';
import ReactMarkdown from 'react-markdown'; // For Markdown support

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col border border-gray-300 rounded-lg shadow-lg bg-white w-full max-w-lg h-full max-h-[80vh] p-4 overflow-y-auto">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`mb-4 ${
              m.role === 'user'
                ? 'self-end bg-blue-500 text-white'
                : 'self-start bg-gray-200 text-gray-900'
            } rounded-lg p-3 max-w-[80%]`}
          >
            {m.role === 'user' ? (
              <div className="text-right">
                <p>{m.content}</p>
              </div>
            ) : (
              <div>
                <ReactMarkdown>{m.content}</ReactMarkdown>
              </div>
            )}
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 w-full max-w-lg p-2 bg-white shadow-lg border-t border-gray-200 flex items-center"
      >
        <input
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
