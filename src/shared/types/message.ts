export interface Reply {
  id: string;
  author: string;
  text: string;
  createdAt: string;
}

export interface Message {
  id: string;
  author: string;
  text: string;
  createdAt: string;
  replies: Reply[];
}
