import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";

interface NotesPageProps {
  params: { slug?: string[] };
}

export default async function NotesPage({ params }: NotesPageProps) {
  const tag = params.slug?.[0];

  const data = await fetchNotes({
    page: 1,
    perPage: 6,
    ...(tag && tag !== "All" ? { tag } : {}),
  });

  return (
    <NotesClient
      initialNotes={data.notes}
      totalPages={data.totalPages}
      currentTag={tag ?? "All"}
    />
  );
}
