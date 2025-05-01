import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";

export const agenticChatAgent = new Agent({
    name: "Agentic Chat Agent",
    instructions: `
      You are a helpful chat assistant that communicates with the user.
      In addition, you can change the background color of the chat window.
`,
    model: openai("gpt-4o"),
    memory: new Memory(),
});
