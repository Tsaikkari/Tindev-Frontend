export const messages = [
  {
    id: '1',
    content: 'Hi, we may have a job for you.',
    createdAt: new Date(Date.now() - 60 * 1000 * 1000),
  },
  {
    id: '2',
    content: 'Hi, I am interested.',
    createdAt: new Date(Date.now() - 2 * 60 * 1000 * 1000),
  },
]

export const chats = [
  {
    id: '1',
    name: 'Kirsi Company',
    image: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
    lastMessage: messages.find(m => m.id === '1'),
    messages: ['1'],
  },
  {
    id: '2',
    name: 'Dilip Poudel',
    image: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
    lastMessage: messages.find(m => m.id === '2'),
    messages: ['2'],
  },
]
