import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";

export default async function NotesPage() {
  const data = await fetchNotes({ page: 1, perPage: 12 });

  return <NotesClient initialNotes={data.notes} totalPages={data.totalPages} />;
}
