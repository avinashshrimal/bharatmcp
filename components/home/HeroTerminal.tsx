'use client'

import { useState, useEffect, useRef } from 'react'

interface TerminalLine {
  type: 'comment' | 'command' | 'output' | 'success' | 'result'
  text: string
  delay: number // ms before this line appears
  typeSpeed?: number // ms per character (0 = instant)
}

const TERMINAL_LINES: TerminalLine[] = [
  { type: 'comment', text: '# Install the BharatMCP CLI', delay: 500, typeSpeed: 0 },
  { type: 'command', text: 'npm install -g bharatmcp', delay: 800, typeSpeed: 35 },
  { type: 'output', text: '', delay: 500, typeSpeed: 0 },
  { type: 'success', text: '✓ installed bharatmcp@1.0.0', delay: 400, typeSpeed: 0 },
  { type: 'output', text: '', delay: 600, typeSpeed: 0 },
  { type: 'comment', text: '# Search for payment MCPs', delay: 300, typeSpeed: 0 },
  { type: 'command', text: 'bharatmcp search "razorpay"', delay: 600, typeSpeed: 35 },
  { type: 'output', text: '', delay: 500, typeSpeed: 0 },
  { type: 'success', text: 'Found 3 results:', delay: 300, typeSpeed: 0 },
  { type: 'result', text: '  razorpay-mcp        mcp   ★ 189  ✓ verified', delay: 200, typeSpeed: 0 },
  { type: 'result', text: '  upi-payment-mcp     mcp   ★ 64   ◆ community', delay: 150, typeSpeed: 0 },
  { type: 'result', text: '  stripe-india-mcp    mcp   ★ 42   ○ listed', delay: 150, typeSpeed: 0 },
  { type: 'output', text: '', delay: 600, typeSpeed: 0 },
  { type: 'comment', text: '# Get install instructions', delay: 300, typeSpeed: 0 },
  { type: 'command', text: 'bharatmcp install razorpay-mcp', delay: 500, typeSpeed: 35 },
  { type: 'output', text: '', delay: 400, typeSpeed: 0 },
  { type: 'success', text: '  npx @razorpay/mcp-server', delay: 300, typeSpeed: 0 },
  { type: 'success', text: '  ✓ Tools: create_payment, refund, check_status', delay: 300, typeSpeed: 0 },
]

function useTerminalAnimation(lines: TerminalLine[]) {
  const [visibleLines, setVisibleLines] = useState<{ type: string; text: string; typing: boolean }[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [done, setDone] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (done) return
    if (currentLineIndex >= lines.length) {
      setDone(true)
      // Restart after 4 seconds
      timeoutRef.current = setTimeout(() => {
        setVisibleLines([])
        setCurrentLineIndex(0)
        setCurrentCharIndex(0)
        setIsTyping(false)
        setDone(false)
      }, 4000)
      return
    }

    const line = lines[currentLineIndex]

    if (!isTyping) {
      // Wait for delay before showing this line
      timeoutRef.current = setTimeout(() => {
        if (line.typeSpeed && line.typeSpeed > 0 && line.type === 'command') {
          // Start typing animation
          setIsTyping(true)
          setCurrentCharIndex(0)
          setVisibleLines(prev => [...prev, { type: line.type, text: '', typing: true }])
        } else {
          // Show instantly
          if (line.text === '') {
            // Skip blank lines (just a pause)
            setCurrentLineIndex(prev => prev + 1)
          } else {
            setVisibleLines(prev => [...prev, { type: line.type, text: line.text, typing: false }])
            setCurrentLineIndex(prev => prev + 1)
          }
        }
      }, line.delay)
    } else {
      // Typing character by character
      const line = lines[currentLineIndex]
      if (currentCharIndex < line.text.length) {
        timeoutRef.current = setTimeout(() => {
          setVisibleLines(prev => {
            const updated = [...prev]
            updated[updated.length - 1] = {
              ...updated[updated.length - 1],
              text: line.text.slice(0, currentCharIndex + 1),
            }
            return updated
          })
          setCurrentCharIndex(prev => prev + 1)
        }, line.typeSpeed || 40)
      } else {
        // Done typing this line
        setVisibleLines(prev => {
          const updated = [...prev]
          updated[updated.length - 1] = { ...updated[updated.length - 1], typing: false }
          return updated
        })
        setIsTyping(false)
        setCurrentLineIndex(prev => prev + 1)
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [currentLineIndex, currentCharIndex, isTyping, done, lines])

  return visibleLines
}

export default function HeroTerminal() {
  const visibleLines = useTerminalAnimation(TERMINAL_LINES)

  return (
    <div className="flex flex-col rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] shadow-2xl shadow-black/30 overflow-hidden">
      {/* Terminal header */}
      <div className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-2.5 bg-[var(--color-surface)]">
        <div className="flex items-center gap-2 text-xs font-medium text-[var(--color-text-muted)]">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m7 11 2-2-2-2" />
            <path d="M11 13h4" />
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          </svg>
          bharatmcp
        </div>
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="size-2.5 rounded-full bg-[#28ca41]" />
        </div>
      </div>

      {/* Terminal body */}
      <div className="p-4 font-mono text-[12.5px] leading-[1.8] min-h-[320px] overflow-hidden">
        {visibleLines.map((line, i) => (
          <div key={i} className="flex items-start">
            {line.type === 'command' && (
              <span className="select-none">
                <span className="text-[#FF6B00]">❯ </span>
                <span className="text-white">{line.text}</span>
                {line.typing && <span className="inline-block w-[7px] h-[14px] bg-[#FF6B00] ml-[1px] animate-blink" />}
              </span>
            )}
            {line.type === 'comment' && (
              <span className="text-[var(--color-text-muted)]/70">{line.text}</span>
            )}
            {line.type === 'output' && (
              <span className="text-[var(--color-text-secondary)]">{line.text}</span>
            )}
            {line.type === 'success' && (
              <span className="text-[#4ade80]">{line.text}</span>
            )}
            {line.type === 'result' && (
              <span className="text-[var(--color-text-secondary)]">{line.text}</span>
            )}
          </div>
        ))}
        {/* Blinking cursor at the end when done */}
        {visibleLines.length > 0 && !visibleLines[visibleLines.length - 1]?.typing && (
          <div className="flex items-center mt-1">
            <span className="text-[#FF6B00]">❯ </span>
            <span className="inline-block w-[7px] h-[14px] bg-[#FF6B00]/80 animate-blink" />
          </div>
        )}
      </div>
    </div>
  )
}
