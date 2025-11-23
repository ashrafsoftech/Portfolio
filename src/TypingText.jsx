import { useState, useEffect } from "react";

function TypingText() {
  const words = ["Frontend Developer", "React Developer", "Web Developer"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    // ✅ Set speed based on typing or deleting
    const speed = deleting ? 30 : 100;

    // ✅ Finished typing → wait → start deleting
    if (!deleting && subIndex === words[index].length) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    // ✅ Finished deleting → move to next word
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    // ✅ Typing or deleting step
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting]);

  return (
    <h2 className="typing-text mb-3">
      {words[index].substring(0, subIndex)}
      <span className="cursor">|</span>
    </h2>
  );
}

export default TypingText;
