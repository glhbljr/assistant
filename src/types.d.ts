import { config } from "./config";

interface IOptions {
  toneStyle: (typeof config.VALID_TONES)[number];
  systemMessage?: string;
  jailbreakConversationId?: string;
  parentMessageId?: string;
  context?: string;
  onProgress?: (token: string) => void;
}

// these interfaces were generated by GPT-3.5 based on an example response
interface AdaptiveCard {
  type: string;
  version: string;
  body: Array<{
    type: string;
    text: string;
    wrap?: boolean;
    size?: string;
  }>;
}

interface SourceAttribution {
  providerDisplayName: string;
  seeMoreUrl: string;
  imageLink: string;
  imageWidth: string;
  imageHeight: string;
  imageFavicon: string;
  searchQuery: string;
}

interface Feedback {
  tag: null;
  updatedOn: null;
  type: string;
}

interface SuggestedResponse {
  text: string;
  author: string;
  createdAt: string;
  timestamp: string;
  messageId: string;
  messageType: string;
  offense: string;
  feedback: Feedback;
  contentOrigin: string;
  privacy: null;
}

interface Details {
  text: string;
  author: string;
  createdAt: string;
  timestamp: string;
  messageId: string;
  requestId: string;
  offense: string;
  adaptiveCards: AdaptiveCard[];
  sourceAttributions: SourceAttribution[];
  feedback: Feedback;
  contentOrigin: string;
  privacy: null;
  suggestedResponses: SuggestedResponse[];
}

interface SydneyResponse {
  conversationId: string;
  conversationSignature: string;
  clientId: string;
  invocationId: number;
  conversationExpiryTime: string;
  response: string;
  details: Details;
  jailbreakConversationId: string;
  parentMessageId: string;
  messageId: string;
}
