const Developer = () => {
  return (
    <>
      <div className='p-24'>
        <div>
          <h1>Strapi Url Public</h1>
          {process.env.NEXT_PUBLIC_STRAPI_URL}
          <h1>Strapi Url Short</h1>
          {process.env.STRAPI_URL}
        </div>

        <div>
          <h1>Strapi API Token(First 25 chars)</h1>
          {process.env.STRAPI_TOKEN?.slice(0, 25)}
        </div>
      </div>
    </>
  )
}

export default Developer
