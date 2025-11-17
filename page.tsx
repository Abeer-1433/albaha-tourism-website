"use client";

import { useState, useEffect } from "react";
import { StickyNote } from "lucide-react";
import { NotesList } from "@/components/notes/notes-list";

interface Note {
  id: string;
  content: string;
  type: string;
  tags: string[];
  isPinned: boolean;
  createdAt: Date;
  updatedAt: Date;
  project?: {
    id: string;
    name: string;
  } | null;
  task?: {
    id: string;
    title: string;
  } | null;
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchNotes = async () => {
    try {
      const response = await fetch("/api/notes");
      if (!response.ok) throw new Error("Failed to fetch notes");
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="container mx-auto py-6">
      <PageHeader
        title="'DED'-8'*"
        description=",EJ9 ED'-8'*C AJ EC'F H'-/"
        icon={<StickyNote className="h-8 w-8" />}
      />

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : (
        <NotesList
          notes={notes}
          onNoteUpdate={fetchNotes}
          showQuickAdd
          className="mt-6"
        />
      )}
    </div>
  );
}