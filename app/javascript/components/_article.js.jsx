class Article extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        articles: []
      };
    }
    componentDidMount(){
      fetch('/api/v1/fruits.json')
        .then((response) => {return response.json()})
        .then((data) => {this.setState({ articles: data }) });
    }
    render(){
        let articles = this.state.articles.map(
            (article) => {
                return (
                    <div key={article.id}>
                        <h1>{article.title}</h1>
                        <p>{article.text}</p>
                    </div>
                )
            }
        )
      return(
        <div>
          {articles}
        </div>
       )
     }
  }