type PostedLists = {
  lists: List[];
};

export default function Lists({ lists }: PostedLists) {
  return (
    <ul>
      {lists.map((list) => {
        return <li key={list.id}>{list.title}</li>;
      })}
    </ul>
  );
}
