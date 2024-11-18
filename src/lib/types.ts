/* eslint-disable */
type ToDo = {
  id: string;
  title: string | null;
  userId: string | null;
};

type Task = {
  id: string;
  text: string;
  listId: string;
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

type MenuPosition = {
  x: number;
  y: number;
}
/* eslint-disable */
