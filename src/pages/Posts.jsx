import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { GET_POSTS } from '../constants/endpoints';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    fetch(GET_POSTS)
      .then(response => response.json())
      .then(data => {
        if (data?.data?.posts) setPosts(data?.data?.posts);
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle any errors that occurred during the request
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container>
      <Row xs={1} sm={2} lg={3}>
        {posts.map(post => (
          <Col key={post.id}>
            <Card className="mt-3">
              <Card.Img variant="top" src={post.avatar} alt="Author" />
              <Card.Body>
                <Card.Title>{`${post.firstName} ${post.lastName}`}</Card.Title>
                <Card.Text title={post.writeup} className="text-truncate">
                  {post.writeup}
                </Card.Text>
                <Card.Text>{`ID: ${post.id}`}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Posts;
