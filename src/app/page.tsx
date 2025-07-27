
export default function Home() {
  return (
    <main className="flex flex-col gap-4 pt-12">
      <h1 className="font-bold font-cantarell uppercase text-sm text-vacchio-black/70">Recent Projects</h1>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3 mb-12">
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
      </div>
      <h2 className="font-bold font-cantarell uppercase text-sm text-vacchio-black/70">About Me</h2>
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </main>
  )
}
