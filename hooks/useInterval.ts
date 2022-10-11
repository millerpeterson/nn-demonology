import React, { useState, useEffect, useRef } from "react";

type TickCallback = () => void;

export function useInterval(callback, delay) {
  const savedCallback = useRef<TickCallback>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
