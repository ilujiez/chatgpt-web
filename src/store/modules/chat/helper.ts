import { ss } from '@/utils/storage'

const LOCAL_NAME = 'chatStorage'

export function defaultState(): Chat.ChatState {
<<<<<<< HEAD
  const uuid = 1
  return { active: uuid, history: [{ uuid, title: 'New Chat', isEdit: false }], chat: [{ uuid, data: [] }] }
=======
  const uuid = 1002
  return {
    active: uuid,
    usingContext: true,
    history: [{ uuid, title: 'New Chat', isEdit: false }],
    chat: [{ uuid, data: [] }],
  }
>>>>>>> upstream/main
}

export function getLocalState(): Chat.ChatState {
  const localState = ss.get(LOCAL_NAME)
  return { ...defaultState(), ...localState }
}

export function setLocalState(state: Chat.ChatState) {
  ss.set(LOCAL_NAME, state)
}
