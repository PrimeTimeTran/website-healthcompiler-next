'use client'

const BookADemo = () => {
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen bg-background">
        <iframe
          src="https://meetings.hubspot.com/mehulagarwal/demo-meeting"
          className="w-full max-w-4xl h-full"
          style={{ border: 'none' }}
          title="Book a Demo"
        />
      </div>
    </>
  )
}

export default BookADemo
