import { Container, Row, Col } from "react-bootstrap";

const Article = ({ article }) => {
  return (
    <>
      <div className="articleDiv">
        <div className="article">
          <Container>
            <Row>
              <Col md={4} xs={12}>
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="articleImage"
                />
              </Col>
              <Col md={8} xs={12}>
                <h4 className="articleTitle">{article.title}</h4>
                <p className="articleAuthorTime">
                  By {article.author} |{" "}
                  {article.date}{" "}
                </p>
                <p className="articleDesc">{article.content}</p>
                <div className="articleBtnDiv">
                  <button className="articleBtn">
                    <i className="fa fa-star" />
                    &nbsp;Bookmark
                  </button>
                  <button className="articleBtn">
                    <a href={article.readMoreUrl} target="_bla">
                      <i className="fa fa-book" />
                      &nbsp;Read More
                    </a>
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Article;
