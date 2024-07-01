"use client";
import { NextResponse } from "next/server";
import React, { useEffect, useState } from "react";
import Image from "next/image";
type Photos = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const HomeSection = () => {
  const [photos, setPhotos] = useState<Photos[]>([]);
  const getPhotos = async () => {
    await fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        return setPhotos(data.data);
      })
      .catch((error: Error) => console.error("Error fetching photos:", error));
  };
  useEffect(() => {
    getPhotos();
  }, []);
  return (
    <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-4 max-md:gap-10 m-20">
      {photos.map((item, i) => (
        <div
          key={item.id}
          className="max-md:w-32 w-40 md:text-center font-semibold"
        >
          <img src={item.url} alt={item.title} className="w-[8rem]" />
          <p className="text-sm">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default HomeSection;
