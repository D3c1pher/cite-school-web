"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setTheme } from "@/store/slices/themeSlice";

const ThemeInitializer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initial = savedTheme || (prefersDark ? "dark" : "light");
    dispatch(setTheme(initial));
  }, [dispatch]);

  return null;
};

export default ThemeInitializer;
