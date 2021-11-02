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
                  src={article.url}
                  alt={article.title}
                  className="articleImage"
                />
              </Col>
              <Col md={8} xs={12}>
                <h4 className="articleTitle">{article.title}</h4>
                <p className="articleAuthorTime">
                  By {article.author} |{" "}
                  {new Date(article.timestamp).toDateString()}{" "}
                </p>
                <p className="articleDesc">{article.description}</p>
                <div className="articleBtnDiv">
                  <button className="articleBtn">
                    <i className="fa fa-star" />
                    &nbsp;Bookmark
                  </button>
                  <button className="articleBtn">
                    <a href={article.link} target="_bla">
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
