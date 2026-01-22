function GridSection({ children }: { children: React.ReactNode }) {
  return (
    <section className='relative min-h-[70vh] flex items-center justify-center bg-linear-to-br from-slate-50 via-white to-slate-50 overflow-hidden'>
      <div
        className='absolute inset-0 opacity-[0.03] pointer-events-none'
        style={{
          backgroundImage: `
        linear-gradient(#1a1a2e 1px, transparent 1px),
        linear-gradient(90deg, #1a1a2e 1px, transparent 1px)
      `,
          backgroundSize: '80px 80px',
        }}
      />
      {children}
    </section>
  )
}

export { GridSection }
