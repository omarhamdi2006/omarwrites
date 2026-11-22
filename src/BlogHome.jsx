export default function BlogHome() {
  return (
    <>
      <div className="main flex flex-col items-start  w-full h-screen  bg-background">
        <div className="bg-text w-full h-max flex pt-20 pl-2 justify-start items-end">
          <h1 className="mainFont text-background text-6xl font-bold">
            Articles
          </h1>
        </div>
        <div className="articles flex flex-col w-full h-max justify-start items-start ">
          <ArticleCard title="The Art of Letting Go" mood="Reflective" />
          <ArticleCard title="Embracing Change" mood="Motivational" />
        </div>
      </div>
    </>
  );
}

function ArticleCard({ title, mood }) {
  return (
    <div
      className="article-card flex flex-row justify-between items-start w-full h-max bg-background text-text p-5 mb-2
    border-b border-b-text mt-5"
    >
      <h2 className="text-3xl monoFont">{title}</h2>
      <p className="text-lg text-text/70 monoFont">mood: {mood}</p>
    </div>
  );
}
