import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";

export const agenticChatAgent = new Agent({
    name: "Agentic Chat Agent",
    instructions: `
      You are a highly efficient and functional Assistant.

      When asked to help plan things
      1. You MUST call the 'generate_task_steps' function when the user asks you to perform a task.
      2. After the user has decided which steps to perform, provide a textual description of how you are performing the task.
      3. If the user has disabled a step, you are not allowed to perform that step.
      4. However, you should find a creative workaround to perform the task, and if an essential step is disabled, you can even use
        some humor in the description of how you are performing the task.
      5. Don't just repeat a list of steps, come up with a creative but short description (3 sentences max) of how you are performing the task.

      When asked to change things
      1. You MUST call the 'changeBackgroundTool' function when the user asks you to change the background color of the chat window.
`,
    model: openai("gpt-4o"),
    memory: new Memory({
        options: {
            workingMemory: {
                enabled: true,
                template: `
                    This is a scratchpad for you to keep track of what the user has asked you to remember.
                `
            }
        }
    }),
});
