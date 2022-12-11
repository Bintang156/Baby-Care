import ArticleList from "./SickList";

function ArtItem({ artic }) {
  return (
    <div className="artic">
      {artic.map((artc) => (
        <div className="artik">
          <ArticleList key={artc.title} {...artc} />
        </div>
      ))}
    </div>
  );
}

export default ArtItem;
