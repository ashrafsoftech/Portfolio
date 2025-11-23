import { useState, useEffect } from "react";

function TypingText() {
  const words = ["Frontend Developer", "React Developer", "Web Developer"];
  const [index, setIndex] = useState(0); // which word
  const [subIndex, setSubIndex] = useState(0); // typing position
  const [deleting, setDeleting] = useState(false);
  const [speed, setSpeed] = useState(100); // typing speed

  useEffect(() => {
    // ✅ When finished typing the word, pause before deleting
    if (!deleting && subIndex === words[index].length) {
      setTimeout(() => setDeleting(true),1000);
      return;
    }

    // ✅ When finished deleting, move to next word
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    // ✅ Typing or deleting behavior
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
