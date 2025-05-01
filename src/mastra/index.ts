import { Mastra } from "@mastra/core/mastra";
import { agenticChatAgent } from "./agents";

export const mastra = new Mastra({
    agents: {
        agenticChatAgent,
    }
});
