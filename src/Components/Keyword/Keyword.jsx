const Keyword = ({ keywords = [] }) => {
  return keywords.map((keyword, index) => (
    <div key={index} className="keyword">
      <span className="keyword-index">
        {index < 9 ? `0${++index}` : ++index}
      </span>
      {" -- "}
      <button className="keyword-btn">{keyword}</button>
    </div>
  ));
};

export default Keyword;
