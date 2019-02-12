export function addNote(note) {
  return {
    type: "ADD_NOTE",
    payload: note
  };
}
export function deleteNote(note) {
  return {
    type: "DELETE_NOTE",
    payload: note
  };
}
