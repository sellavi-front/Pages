const Container = styled.div`
  width: 300px;
  height: 300px;
`;

export default class StylesTest {
  constructor(params) {
    this.params = params;
  }

  render() {
    return `
      <Container>

      </Container>
      `;
  }
}

const ren = new StylesTest(Container);
ren.render();