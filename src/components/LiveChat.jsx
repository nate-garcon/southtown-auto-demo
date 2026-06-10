import { useState, useEffect, useRef } from 'react';

const MESSAGES = [
  { id: 1, text: "Hi there! 👋 Welcome to Southtown Auto Repair. How can we help you today?" },
  { id: 2, text: "We're currently open Mon–Fri 8am–5pm. Walk-ins welcome, but appointments get priority!" },
  { id: 3, text: "Send us a message and we'll get right back to you!" },
];

export default function LiveChat() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState([]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState('');
  const [sent, setSent] = useState(false);
  const msgRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (open && !started.current) {
      started.current = true;
      let i = 0;
      const next = () => {
        if (i >= MESSAGES.length) { setTyping(false); return; }
        setTyping(true);
        setTimeout(() => {
          setTyping(false);
          setShown(prev => [...prev, MESSAGES[i]]);
          i++;
          if (i < MESSAGES.length) setTimeout(next, 600);
        }, 900 + i * 200);
      };
      setTimeout(next, 400);
    }
  }, [open]);

  useEffect(() => {
    if (msgRef.current) msgRef.current.scrollTop = msgRef.current.scrollHeight;
  }, [shown, typing]);

  const handleSend = () => {
    if (!input.trim()) return;
    setSent(true);
    setInput('');
  };

  return (
    <>
      {open && (
        <div className="chat-panel">
          <div className="chat-header">
            <div className="chat-header-dot" />
            <div>
              <div className="chat-header-name">Southtown Support</div>
              <div className="chat-header-status">Online — replies in minutes</div>
            </div>
          </div>
          <div className="chat-messages" ref={msgRef}>
            {shown.map(m => (
              <div key={m.id} className="chat-msg">{m.text}</div>
            ))}
            {typing && (
              <div className="chat-typing">
                <div className="chat-dot" />
                <div className="chat-dot" />
                <div className="chat-dot" />
              </div>
            )}
            {sent && (
              <div className="chat-msg" style={{ alignSelf: 'flex-end', background: 'var(--color-accent-dim)', borderRadius: '12px 12px 2px 12px', color: 'var(--color-text)' }}>
                Got it — we'll be in touch shortly!
              </div>
            )}
          </div>
          <div className="chat-input-row">
            <input
              className="chat-input"
              placeholder="Type a message…"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              disabled={sent}
            />
            <button className="chat-send" onClick={handleSend} disabled={sent}>Send</button>
          </div>
        </div>
      )}
      <button
        className="chat-launcher"
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chat' : 'Open live chat'}
      >
        {open ? '✕' : '💬'}
      </button>
    </>
  );
}
