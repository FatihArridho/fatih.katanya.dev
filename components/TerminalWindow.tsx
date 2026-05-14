import React from 'react'

interface TerminalWindowProps {
  title?: string
  children: React.ReactNode
}

/**
 * Renders a faux terminal window with the familiar traffic light buttons on
 * macOS. Accepts arbitrary children which can be used to display code,
 * markdown or JSON. The window respects the site's neon palette.
 */
export default function TerminalWindow({ title, children }: TerminalWindowProps) {
  return (
    <div className="bg-black border border-gray-700 rounded-lg shadow-lg overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center px-3 py-2 bg-gray-900 border-b border-gray-700">
        <div className="flex space-x-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
        {title && <span className="ml-4 text-sm text-gray-400 font-mono">{title}</span>}
      </div>
      <div className="p-4 font-mono text-sm text-gray-300 whitespace-pre-wrap">
        {children}
      </div>
    </div>
  )
}