
export default function Home() {
  if(typeof window!=='undefined'){

    (async()=>{
      const confetti = await import('https://cdn.skypack.dev/canvas-confetti?dts')
       confetti.default()
    })()
  }

  return <h1>Home</h1>
}