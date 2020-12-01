const Container = styled.div`
  width: 300px;
  height: 300px;
`;

export default class StylesTest {
  constructor(params) {
    this.params = params;
    this.cont = document.querySelector('.custom_section')
  }

  render() {
    this.cont.insertAdjacentHTML('beforeend', `
      <Container>
      </Container>
      `);
  }
}

const ren = new StylesTest(Container);
ren.render();