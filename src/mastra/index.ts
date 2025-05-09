import { Mastra } from "@mastra/core/mastra";
import { agenticChatAgent } from "./agents";
import { createLogger } from "@mastra/core/logger";

export const mastra = new Mastra({
    agents: {
        agenticChatAgent,
    },
    logger: createLogger({ name: "mastra", level: "debug" })
});
