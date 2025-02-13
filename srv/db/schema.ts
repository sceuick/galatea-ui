export namespace AppSchema {
  export interface Settings {
    kind: 'settings'
    koboldUrl: string
    novelApiKey: string
    chaiUrl: string
  }

  export interface Chat {
    _id: string
    kind: 'chat'
    name: string
    characterId: string
    messageCount: number
    adapter?: ChatAdapter

    greeting: string
    scenario: string
    sampleChat: string
    overrides: CharacterPersona

    createdAt: string
    updatedAt: string
  }

  export interface ChatMessage {
    _id: string
    kind: 'chat-message'
    chatId: string
    msg: string
    characterId?: string

    createdAt: string
    updatedAt: string
  }

  export type ChatAdapter = 'kobold' | 'chai' | 'novel' | 'default'

  /** Description of the character */
  export type CharacterPersona =
    | { kind: 'text'; text: string }
    | {
        kind: 'json' | 'wpp' | 'sbf' | 'boostyle'
        type: string
        attributes: { [key: string]: string[] }
      }

  export interface Character {
    _id: string
    kind: 'character'

    name: string
    persona: CharacterPersona
    greeting: string
    scenario: string
    sampleChat: string

    avatar?: string
    adapter: ChatAdapter

    createdAt: string
    updatedAt: string
  }

  export interface GenSettings {
    temperature: number
    maxTokens: number
    repetitionPenalty: number
    typicalP: number
  }
}

export type Doc<T extends AllDoc['kind'] = AllDoc['kind']> = Extract<AllDoc, { kind: T }>

export type AllDoc =
  | AppSchema.Chat
  | AppSchema.Settings
  | AppSchema.ChatMessage
  | AppSchema.Character
