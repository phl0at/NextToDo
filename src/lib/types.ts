/* eslint-disable */
type ToDo = {
  id: number;
  title: string;
  userId: string;
};

type Task = {
  id: number;
  text: string;
  listId: number;
};

type User = {
  id: string | null;
  email: string | null;
  family_name: string | null;
  given_name: string | null;
  picture: string | null;
  username?: string | null;
  phone_number?: string | null;
} | null;
/* eslint-disable */
