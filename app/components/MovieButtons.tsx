"use client";

import { Button } from "@/components/ui/button";
import { InfoIcon, PlayCircle } from "lucide-react";
import { useState } from "react";
import PlayVideoModal from "./PlayVideoModal";

interface iAppProps {
  overview: string;
  youtubeUrl: string;
  id: number;
  age: number;
  title: string;
  releaseDate: number;
  duration: number;
}

export default function MovieButtons({
  overview,
  youtubeUrl,
  id,
  age,
  title,
  releaseDate,
  duration,
}: iAppProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button className="text-lg font-medium" onClick={() => setOpen(true)}>
        <PlayCircle className="mr-2 w-6 h-6" />
        Play
      </Button>
      <Button
        className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white"
        onClick={() => setOpen(true)}
      >
        <InfoIcon className="mr-2 w-6 h-6" />
        Learn More
      </Button>
      <PlayVideoModal
        state={open}
        changeState={setOpen}
        age={age}
        duration={duration}
        key={id}
        overview={overview}
        release={releaseDate}
        title={title}
        youtubeUrl={youtubeUrl}
      />
    </>
  );
}
